import React from 'react';
import { render, wait, fireEvent, waitForElement, cleanup } from 'react-testing-library'
import App from './App';
import 'jest-dom/extend-expect';
// import { exportAllDeclaration } from '@babel/types';

afterEach(() => cleanup());

describe('App', () => {

  it('renders without crashing', async () => {
    const signInWithGithub = jest.fn();
    const signOut = jest.fn();
    const user = {};


    const div = document.createElement('div');
    const { container, debug } = render(<App
      signInWithGithub={signInWithGithub}
      user={user}
      signOut={signOut}
    />, div);


    await wait();

    expect(container.firstChild).toMatchSnapshot();

  });

  it('will redirect the user to show AuthenticatedApp when logged in', async () => {
    const user = {
      displayName: 'Alice Cooper',
      email: 'alice@cooper.com',
      emailVerified: true,
    };
    const signOut = jest.fn();
    const div = document.createElement('div');

    const { container, getByText } = render(<App user={user} signOut={signOut} />, div);

    await wait();

    expect(container.firstChild).toMatchSnapshot();

    expect(getByText(/Welcome Alice Cooper/i)).toBeInTheDocument();
  });

  it('will redirect the user to login screen when logged out', async () => {

    const signOut = jest.fn();
    const div = document.createElement('div');

    const { container, getByText } = render(<App signOut={signOut} />, div);

    await wait();

    const authedApp = await waitForElement(() => getByText(/Sign in with Github/i));

    expect(authedApp).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();

  });
});