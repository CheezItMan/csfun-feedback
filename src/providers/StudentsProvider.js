import React, { Component, createContext } from 'react'
import { firestore } from '../context/auth';
import { collectIdsAndDocs } from '../utilities';

export const StudentsContext = createContext();

class StudentsProvider extends Component {
  state = {
    students: [],
  };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore.collection('students').onSnapshot(snapshot => {
      const students = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ students });
    });
  }

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  }

  render() {
    const { students } = this.state;
    const { children } = this.props;

    return (
      <StudentsContext.Provider value={students}>
        {children}
      </StudentsContext.Provider>
    );
  }
}

export default StudentsProvider;
