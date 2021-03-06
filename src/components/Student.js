import React from 'react';
import PropTypes from 'prop-types';

const Student = ({ name, cohort, id, classroom, gitName, email, handleEdit, handleDelete }) => {
  return (
    <tr key={`student-${id}`}>
      <td>
        {name}
      </td>
      <td>
        {cohort}
      </td>
      <td>
        {classroom}
      </td>
      <td>
        {gitName}
      </td>
      <td>
        {email}
      </td>
      <td>
        <button id={`edit${id}`} className="btn btn-primary" onClick={() => handleEdit(id)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  )

}

Student.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  cohort: PropTypes.number,
  class: PropTypes.string,
  githubName: PropTypes.string,
  email: PropTypes.string,
}

export default Student;