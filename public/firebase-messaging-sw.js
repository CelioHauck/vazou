// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: 'AIzaSyDqLQsKcpm_J6NvnUdh7cG5Jce4gx3g23g',
  authDomain: 'vazou-2d0bd.firebaseapp.com',
  databaseURL: 'https://vazou-2d0bd-default-rtdb.firebaseio.com',
  projectId: 'vazou-2d0bd',
  storageBucket: 'vazou-2d0bd.appspot.com',
  messagingSenderId: '92810790222',
  appId: '1:92810790222:web:4ef870a8e1d66cd9248a1f',
  measurementId: 'G-P170LLZNCB',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
