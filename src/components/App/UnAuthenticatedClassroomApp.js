import React from 'react';


const UnAuthenticatedClassroomApp = (props) => {
  return (
    <div>
      <h2>UnAuthenticated</h2>
      <button onClick={props.signInWithGoogle}>Sign in with Google</button>
      <button onClick={props.signInWithGithub}>Sign in with Github</button>

    </div>
  );
}

export default UnAuthenticatedClassroomApp;