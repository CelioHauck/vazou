import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { saveToken } from '../services/token';

const firebaseConfig = {
  apiKey: 'AIzaSyDqLQsKcpm_J6NvnUdh7cG5Jce4gx3g23g',
  authDomain: 'vazou-2d0bd.firebaseapp.com',
  databaseURL: 'https://vazou-2d0bd-default-rtdb.firebaseio.com',
  projectId: 'vazou-2d0bd',
  storageBucket: 'vazou-2d0bd.appspot.com',
  messagingSenderId: '92810790222',
  appId: '1:92810790222:web:4ef870a8e1d66cd9248a1f',
  measurementId: 'G-P170LLZNCB',
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export const hasValidToken = (setTokenFound: (hasToken: boolean) => void) => {
  return getToken(messaging, {
    vapidKey:
      'BE21czqxSjYH-Eubl7KHwEc1vDg4wLZp0t0rP79ObKlMe1V0XRbEZpQUBAfXwvgNZqtDJ10Qv_cpMZXV8tFvD2s',
  })
    .then((currentToken) => {
      if (currentToken) {
        saveToken(currentToken);
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      debugger;
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
