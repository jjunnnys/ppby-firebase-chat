import firebase from 'firebase/app';
import 'firebase/auth';

// firebase 설정 (프로젝트 설정에 Firebase SDK snippet에 나옴)
const firebaseConfig = {
  apiKey: 'AIzaSyAAH3yObv6DkcR6WAQe4tkXOsbyrAM_2XM',
  authDomain: 'ppby-chat.firebaseapp.com',
  databaseURL: 'https://ppby-chat.firebaseio.com',
  projectId: 'ppby-chat',
  storageBucket: 'ppby-chat.appspot.com',
  messagingSenderId: '251164832636',
  appId: '1:251164832636:web:cfce95e38eb8ab173baaf9',
};
firebase.initializeApp(firebaseConfig);

export default firebase;
