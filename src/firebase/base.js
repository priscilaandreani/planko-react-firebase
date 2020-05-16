import Firebase from '@firebase/app';
import '@firebase/auth';

const app = Firebase.initializeApp({
  apiKey: 'AIzaSyAEdumYcqmbYroj1ufnOhj1shmO1ok3Ync',
  authDomain: 'planko.firebaseapp.com',
  databaseURL: 'https://planko.firebaseio.com',
  projectId: 'planko',
  storageBucket: 'planko.appspot.com',
  messagingSenderId: '926271061827',
  appId: '1:926271061827:web:7f91ec87c9c98cbb0a39f6',
});

export default app;
