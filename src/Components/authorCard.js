import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import AuthorForm from './authorForm';
import { deleteAuthor } from '../App/helpers/data/authorData';

const AuthorCard = ({
  firebaseKey,
  firstname,
  lastname,
  email,
  setAuthors
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey)
          .then((authorArray) => setAuthors(authorArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
        <CardTitle tag="h5">{firstname} {lastname}</CardTitle>
        <CardText>Email: {email}</CardText>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Author</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
          {editing ? 'Close Form' : 'Edit Author'}
        </Button>
      {
        editing && <AuthorForm
          formTitle='Edit Author'
          setAuthors={setAuthors}
          firebaseKey={firebaseKey}
          firstname={firstname}
          lastname={lastname}
          email={email}
          />
      }
    </Card>
  );
};

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  setAuthors: PropTypes.func
};

export default AuthorCard;
