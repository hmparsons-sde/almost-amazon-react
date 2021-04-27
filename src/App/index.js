import React, { useEffect, useState } from 'react';
import AuthorForm from '../Components/authorForm';
import AuthorCard from '../Components/authorCard';
import { getAuthors } from './helpers/data/authorData';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((resp) => setAuthors(resp));
  }, []);

  return (
    <>
      <AuthorForm
      formTitle='Author Form'
      setAuthors={setAuthors}
      />
      <hr/>
      <div className="card-container">
        {authors.map((authorInfo) => (
          <AuthorCard
            key={authorInfo.firebaseKey}
            firstname={authorInfo.firstname}
            lastname={authorInfo.lastname}
            email={authorInfo.email}
            setAuthors={setAuthors}
          />
        ))}
      </div>
    </>
  );
}

export default App;
