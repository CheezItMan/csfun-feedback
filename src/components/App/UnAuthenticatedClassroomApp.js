import React from 'react';


const UnAuthenticatedClassroomApp = (props) => {
  const { signInWithGithub } = props;
  return (
    <div>
      <h2>UnAuthenticated</h2>
      <button onClick={signInWithGithub}>Sign in with Github</button>

    </div>
  );
}

export default UnAuthenticatedClassroomApp;