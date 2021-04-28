/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from '../App/helpers/data/authorData';

const AuthorForm = ({
  formTitle,
  setAuthors,
  email,
  favorite,
  first_name,
  last_name,
  firebaseKey
}) => {
  const [author, setAuthor] = useState({
    email: email || '',
    favorite: favorite || false,
    first_name: first_name || '',
    last_name: last_name || '',
    firebaseKey: firebaseKey || null,
    uid: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateAuthor(author.firebaseKey, author).then((response) => setAuthors(response));
    } else {
      addAuthor(author).then((response) => setAuthors(response));
    }
  };
  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'favorite' ? e.target.checked : e.target.value
    }));
  };
  return (
    <div className='form-container'>
      <form
          id="addAuthorForm"
          autoComplete="off"
          onSubmit={handleSubmit}
          className='add-author-form'
          >
          <h2>{formTitle}</h2>
          <label>Email: </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={author.email}
            onChange={handleInputChange}
          ></input>
          <label>First Name: </label>
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            value={author.first_name}
            onChange={handleInputChange}
          ></input>
          <label>Last Name: </label>
          <input
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={author.last_name}
            onChange={handleInputChange}
          ></input>
          <label>
          <input
            name="favorite"
            type="checkbox"
            checked={author.favorite}
            onChange={handleInputChange}
          ></input> Favorite</label>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func.isRequired,
  email: PropTypes.string,
  favorite: PropTypes.bool,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  firebaseKey: PropTypes.string,
};

export default AuthorForm;
