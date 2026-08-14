importScripts('https://www.gstatic.com/firebasejs/12.2.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.2.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBwBsjSqCWLIa0psvJvcwQwGXUmIlQNFPM',
  appId: '1:320223495386:web:68c85794a00a0f03b451e3',
  messagingSenderId: '320223495386',
  projectId: 'mi-finanzas-fer-2026',
  authDomain: 'mi-finanzas-fer-2026.firebaseapp.com',
  storageBucket: 'mi-finanzas-fer-2026.firebasestorage.app'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje recibido:', payload);
});