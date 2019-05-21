import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library'

import Student from './Student';


describe('Student', () => {
  it('Will have the student name, className, cohort, etc', () => {
    const studentData = {
      name: 'Bob Hope',
      cohort: 33,
      classroom: 'Jangles',
      email: 'bob@hope.com',
      githubName: 'bobHope'
    }
    const { queryByText } = render(<table><tbody><Student {...studentData} /></tbody></table>);

    Object.keys(studentData).forEach((key) => {
      console.log(key);
      const node = queryByText(studentData[key].toString());
      expect(node.innerHTML).toBe(studentData[key].toString());
    })
  });
});