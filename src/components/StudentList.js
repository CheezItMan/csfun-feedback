import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import { StudentsContext } from '../providers/StudentsProvider';

const renderStudents = (students, onEdit, onDelete) => {
  if (students === null || students === undefined) {
    return (
      <tr>
        <td></td><td></td><td></td><td></td><td></td>

      </tr>
    )
  }

  return students.map((student) => {
    return <Student key={student.id} {...student} handleDelete={onDelete} handleEdit={onEdit} />
  });
}


const StudentList = (props) => {
  const students = useContext(StudentsContext);
  const { onEdit, onDelete } = props;

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
        {renderStudents(students, onEdit, onDelete)}
      </tbody>
    </table>
  );
};

StudentList.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default StudentList;