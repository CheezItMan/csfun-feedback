import React from 'react';
import { render, fireEvent } from 'react-testing-library'
import App from './App';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const signInWithGithub = jest.fn();
  const signOut = jest.fn();
  const user = {};


  const div = document.createElement('div');
  const container = render(<App
    signInWithGithub={signInWithGithub}
    user={user}
    signOut={signOut}
  />, div);

  expect(container.firstChild).toMatchSnapshot();

});
