import React from 'react';
import firebase from 'firebase';
import firebaseConfig from './helpers/apiKeys';
import './App.scss';
import AuthorForm from '../authorForm';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <AuthorForm></AuthorForm>
    </div>
  );
}

export default App;
