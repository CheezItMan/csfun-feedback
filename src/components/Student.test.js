import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library'

import Student from './Student';


describe('Student', () => {
  const studentData = {
    name: 'Bob Hope',
    classroom: 'Jangles',
    email: 'bob@hope.com',
    gitName: 'bobHope'
  }

  it('Will have the student name, className, cohort, etc', () => {

    const { queryByText } = render(<table><tbody><Student {...studentData} /></tbody></table>);

    Object.keys(studentData).forEach((key) => {
      const node = queryByText(studentData[key].toString());
      expect(node.innerHTML).toBe(studentData[key].toString());
    })
  });

  it('Will trigger the delete callback when the button is clicked', () => {
    const { queryBy } = render(<table><tbody><Student {...studentData} /></tbody></table>);

  });
});