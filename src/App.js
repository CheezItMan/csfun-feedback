import './App.css';

import React, { Suspense } from 'react';
import firebaseWrapper from './context/auth'
// Only load the components being used
const AuthenticatedClassroomApp = React.lazy(() => import('./components/App/AuthenticatedClassroomApp'));
const UnAuthenticatedClassroomApp = React.lazy(() => import('./components/App/UnAuthenticatedClassroomApp'));


const studentList = [
  {
    id: 1,
    name: 'Leroy Jinkins',
    cohort: 111,
    classroom: 'Crafters',
    githubName: 'leroyjink',
    email: 'leyroy@jinkins.com',
  },
  {
    id: 2,
    name: 'Devin Helmgren',
    cohort: 100,
    classroom: 'GMs',
    githubName: 'dhelmgren',
    email: 'dhelmgren@adadev.org',
  },
  {
    id: 14,
    name: 'Dan Roberts',
    cohort: 111,
    classroom: 'Crafties',
    githubName: 'droberts',
    email: 'dan@adadev.org',
  },

];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      students: studentList,
    };
  }

  editStudent = (id) => {
    console.log(`Editing ${id}`);

  }

  deleteStudent = (id) => {
    console.log(`Deleting ${id}`);

  }

  render() {
    const { user, signOut, signInWithGoogle } = this.props;

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
          <UnAuthenticatedClassroomApp signIn={signInWithGoogle} fallback={<div>Loading</div>} />
        </Suspense>
      </main>
    )
  }

}

export default firebaseWrapper(App);
