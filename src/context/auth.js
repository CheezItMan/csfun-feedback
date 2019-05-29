import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseProvider = new firebase.auth.GithubAuthProvider();
firebaseProvider.addScope('read:user');
firebaseProvider.addScope('repo');


export const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  firebaseProvider,
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
});
