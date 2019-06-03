import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const githubProvider = new firebase.auth.GithubAuthProvider();
githubProvider.addScope('read:user');
githubProvider.addScope('repo');


export const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  githubProvider,
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
});
