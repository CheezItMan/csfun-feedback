import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import firebaseConfig from '../firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const githubProvider = new firebase.auth.GithubAuthProvider();
githubProvider.addScope('read:user');
githubProvider.addScope('repo');


export const auth = firebase.auth();
export const firebaseAppAuth = firebaseApp.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const signOut = () => auth.signOut();


const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  githubProvider,
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
});
