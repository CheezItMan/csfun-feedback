import React from 'react';
import { render, fireEvent, flushPromises, cleanup } from 'react-testing-library';

import UnauthenticatedClassroomApp from './UnAuthenticatedClassroomApp';


describe('UnauthenticatedClassroomApp', () => {
  afterEach(cleanup);

  test('it can render', () => {
    const signInWithGithub = jest.fn();

    const { asFragment } = render(<UnauthenticatedClassroomApp signInWithGitub={signInWithGithub} />);

    expect(asFragment).toMatchSnapshot();

  });

  test('it can trigger the callback function', async () => {
    const signInWithGithub = jest.fn();


    const { asFragment, getByText } = render(<UnauthenticatedClassroomApp signInWithGithub={signInWithGithub} />);

    const loginButton = getByText(/Sign in with Github/);

    fireEvent.click(loginButton);

    await getByText(/Sign in with Github/);

    expect(signInWithGithub).toHaveBeenCalledTimes(1);
  });
});


// const UnAuthenticatedClassroomApp = (props) => {
//   return (
//     <div>
//       <h2>UnAuthenticated</h2>
//       <button onClick={props.signInWithGithub}>Sign in with Github</button>

//     </div>
//   );
// }

// export default UnAuthenticatedClassroomApp;