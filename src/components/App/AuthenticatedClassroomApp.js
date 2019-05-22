import React from 'react';


const AuthenticatedClassroomApp = (props) => {
  return (
    <div>
      <h2>Welcome {props.user.displayName} </h2>

      <button className="btn btn-primary" onClick={() => props.signOut()}>
        Logout
      </button>
    </div>
  );
}

export default AuthenticatedClassroomApp;