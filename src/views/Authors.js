import React from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../Components/authorCard';

function Authors({ authors, setAuthors }) {
  return (
    <>
      <div className="card-container">
        {authors.map((authorInfo) => (
          <AuthorCard
          email={authorInfo.email}
          first_name={authorInfo.first_name}
          last_name={authorInfo.last_name}
          favorite={authorInfo.favorite}
          key={authorInfo.firebaseKey}
          firebaseKey={authorInfo.firebaseKey}
          setAuthors={setAuthors}
          />
        ))}
      </div>
    </>
  );
}

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Authors;
