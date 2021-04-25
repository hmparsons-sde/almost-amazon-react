import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { addAuthor } from '../App/helpers/data/authorData';

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
    // add a Author to firebase
    addAuthor(author);
  };

  return (
    <div className='Author-form'>
      <Form id='addAuthorForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>New Author</h2>
        <FormGroup>
          <Label for="firstname">First Name:</Label>
          <Input
            name='firstname'
            id='firstname'
            value={author.firstname}
            type='text'
            placeholder='Enter a First Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="lastname">Last Name:</Label>
          <Input
            name='lastname'
            id='lastname'
            value={author.lastname}
            type='text'
            placeholder='Enter a Last Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Email">Email:</Label>
          <Input
            name='email'
            id='email'
            value={author.email}
            type='text'
            placeholder='Author Email'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}
