import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';

const renderStudents = (props) => {
  return props.students.map((student) => {
    return <Student key={student.id} {...student} handleDelete={props.onDelete} handleEdit={props.onEdit} />
  });
}

const StudentList = (props) => {
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
        {renderStudents(props)}
      </tbody>
    </table>
  )
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    cohort: PropTypes.number,
    class: PropTypes.string,
    githubName: PropTypes.string,
    email: PropTypes.string,
    onDelete: PropTypes.func,
    onEdit: PropTypes.funct,
  })),
}

export default StudentList;