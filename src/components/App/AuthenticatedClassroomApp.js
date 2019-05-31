import React, { Component } from 'react';

import StudentList from '../StudentList';

const students = [
  {
    id: 1,
    name: 'Pete',
    github_name: 'p-master',
  },
  {
    id: 47,
    name: 'Sadie',
    github_name: 's-master',
  },
  {
    id: 100,
    name: 'Ada',
    github_name: 'ada',
  },
]


class AuthenticatedClassroomApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students,
      cohorts: [],
      repos: [],
      prs: [],
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome {this.props.user.displayName} </h2>
        <StudentList />

        <button className="btn btn-primary" onClick={() => this.props.signOut()}>
          Logout
      </button>
      </div>
    );
  }
}
export default AuthenticatedClassroomApp;