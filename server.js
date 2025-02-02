const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 443, // Railway uses dynamic ports, so use process.env.PORT
  path: '/myapp',
  secure: true,
  proxied: true,  // Needed for hosting behind Railway
  debug: true
});

console.log("PeerJS signaling server is running...");
