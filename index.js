const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const admin = require('firebase-admin');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// ✅ Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // 🔑 download from Firebase > Project Settings > Service Accounts

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', async (msg) => {
    if (!msg || !msg.text || !msg.sender) return;

    const fullMsg = {
      text: msg.text,
      sender: msg.sender,
      timestamp: Date.now()
    };

    io.emit('chat message', fullMsg); // 🔁 Broadcast to all clients
    await db.collection("messages").add(fullMsg); // ✅ Save once (only from server)
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
