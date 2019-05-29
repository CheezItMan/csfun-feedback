import React from 'react';

import StudentList from '../StudentList';


const AuthenticatedClassroomApp = (props) => {
  return (
    <div>
      <h2>Welcome {props.user.displayName} </h2>
      <StudentList />

      <button className="btn btn-primary" onClick={() => props.signOut()}>
        Logout
      </button>
    </div>
  );
}

export default AuthenticatedClassroomApp;