import React, { useState } from 'react';
import addAuthor from './App/helpers/data/authorData';

export default function AuthorForm() {
  const [author, setAuthor] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor(author);
  };

  return (
    <>
    <div className='author-form'>
    <form id="addAuthorForm"
    autoComplete='off'
    onSubmit={handleSubmit}
    >
    <h2>Author</h2>
    <label>First Name: </label>
    <input
    name='firstname'
    type='text'
    placeholder='First Name'
    value={author.firstname}
    onChange={handleInputChange}
    ></input>
    <label>Last Name: </label>
    <input
        name='lastname'
        type='text'
        placeholder='Last Name'
        value={author.lastname}
        onChange={handleInputChange}
    ></input>
    <label>Email: </label>
    <input
        name='email'
        type='text'
        placeholder='Email Address'
        value={author.email}
        onChange={handleInputChange}
    ></input>
    <button type="submit">Add Author</button>
    </form>
    </div>
    </>
  );
}
