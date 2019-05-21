import React from 'react';
import StudentList from './components/StudentList'
import logo from './logo.svg';
import './App.css';

const studentList = [
  {
    id: 1,
    name: 'Leroy Jinkins',
    cohort: 111,
    classroom: 'Crafters',
    githubName: 'leroyjink',
    email: 'leyroy@jinkins.com',
  },
  {
    id: 2,
    name: 'Devin Helmgren',
    cohort: 100,
    classroom: 'GMs',
    githubName: 'dhelmgren',
    email: 'dhelmgren@adadev.org',
  },
  {
    id: 14,
    name: 'Dan Roberts',
    cohort: 111,
    classroom: 'Crafties',
    githubName: 'droberts',
    email: 'dan@adadev.org',
  },

];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      students: studentList,
    }
  }

  editStudent = (id) => {
    console.log(`Editing ${id}`);

  }

  deleteStudent = (id) => {
    console.log(`Deleting ${id}`);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <main className="App-body">
          <StudentList students={this.state.students}
            onDelete={this.deleteStudent}
            onEdit={this.editStudent}
          />
        </main>
      </div>
    );
  }

}

export default App;
