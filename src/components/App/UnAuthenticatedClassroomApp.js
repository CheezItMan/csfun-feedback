import React from 'react';


const UnAuthenticatedClassroomApp = (props) => {
  return (
    <div>
      <h2>UnAuthenticated</h2>
      <button onClick={props.signIn}>Sign in with Google</button>
    </div>
  );
}

export default UnAuthenticatedClassroomApp;