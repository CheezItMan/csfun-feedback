import './App.css';

import React, { Suspense } from 'react';
import firebaseWrapper from './context/auth'
// Only load the components being used
const AuthenticatedClassroomApp = React.lazy(() => import('./components/App/AuthenticatedClassroomApp'));
const UnAuthenticatedClassroomApp = React.lazy(() => import('./components/App/UnAuthenticatedClassroomApp'));

const App = ({ user, signOut, signInWithGoogle, signInWithGithub }) => {

  if (user) {
    return (
      <Suspense fallback={<div>Loading</div>} >
        <AuthenticatedClassroomApp user={user} signOut={signOut} fallback={<div>Loading</div>} />
      </Suspense>
    );
  }
  return (
    <main>
      <h1>Please Log in</h1>
      <Suspense fallback={<div>Loading</div>} >
        <UnAuthenticatedClassroomApp signInWithGoogle={signInWithGoogle} signInWithGithub={signInWithGithub} fallback={<div>Loading</div>} />
      </Suspense>
    </main>
  )
};

export default firebaseWrapper(App);
