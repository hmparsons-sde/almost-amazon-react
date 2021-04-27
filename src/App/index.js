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
      formTitle='Author-form'
      setAuthors={setAuthors}
      />
      <hr/>
      <div className="card-container">
        {authors.map((authorInfo) => (
          <AuthorCard
            key={authorInfo.firebaseKey}
            firstname={authorInfo.first_name}
            lastname={authorInfo.last_name}
            email={authorInfo.email}
            setAuthors={setAuthors}
          />
        ))}
      </div>
    </>
  );
}

export default App;
