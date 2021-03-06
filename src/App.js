import './App.css';

import React, { Suspense } from 'react';
import StudentsProvider from './providers/StudentsProvider';

// Only load the components being used
const AuthenticatedClassroomApp = React.lazy(() => import('./components/App/AuthenticatedClassroomApp'));
const UnAuthenticatedClassroomApp = React.lazy(() => import('./components/App/UnAuthenticatedClassroomApp'));

const App = (props) => {
  const { user, signOut, signInWithGoogle, signInWithGithub } = props;

  if (user) {
    return (
      <Suspense fallback={<div>Loading</div>} >
        <StudentsProvider>
          <AuthenticatedClassroomApp
            data-testid="authed-app"
            user={user} signOut={signOut}
            fallback={<div>Loading {user.displayName} info</div>}
          />
        </StudentsProvider>
      </Suspense>
    );
  }
  return (
    <main>
      <h1>Please Log in</h1>
      <Suspense fallback={<div>Loading</div>} >
        <UnAuthenticatedClassroomApp
          data-testid="unauthed-app"
          signInWithGoogle={signInWithGoogle}
          signInWithGithub={signInWithGithub}
          fallback={<div>Loading Login Screen</div>}
        />
      </Suspense>
    </main>
  )
};

export default App;
