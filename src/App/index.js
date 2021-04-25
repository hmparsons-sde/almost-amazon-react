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
      <AuthorForm formTitle='Author-form'/>
      <hr/>
      <div className="card-container">
        {authors.map((authorInfo) => (
          <AuthorCard
            key={authorInfo.firebaseKey}
            firstname={authorInfo.firstname}
            lastname={authorInfo.lastname}
            email={authorInfo.email}
            handleClick={() => console.warn(`${authorInfo.firstname}'s email is ${authorInfo.email}`)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
