import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';

class StudentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    }
  }

  renderStudents = () => {
    const { students } = this.state;
    return students.map((student) => {
      return <Student key={student.id} {...student} handleDelete={this.props.onDelete} handleEdit={this.props.onEdit} />
    });
  }

  render(props) {
    return (
      <table className="Student-list">
        <thead>
          <tr>
            <th>
              Name
        </th>
            <th>
              Cohort
        </th>
            <th>
              Class
        </th>
            <th>
              Github Name
        </th>
            <th>
              Email
        </th>
            <th>
              &nbsp;
        </th>
          </tr>
        </thead>
        <tbody>
          {this.renderStudents()}
        </tbody>
      </table>
    );
  }
};

StudentList.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default StudentList;