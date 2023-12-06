/* import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
 */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA56iOwNb0KYQU0qfyt7ymen0vg1VYnLn0',
  authDomain: 'reactnativefirebase-edd5e.firebaseapp.com',
  databaseURL: 'https://reactnativefirebase-edd5e-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'reactnativefirebase-edd5e',
  storageBucket: 'reactnativefirebase-edd5e.appspot.com',
  messagingSenderId: '529259108782',
  appId: '1:529259108782:web:00a4992cdca746d90d903f',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };