import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../App/helpers/data/authorData';

const AuthorCard = ({
  key,
  firstname,
  lastname,
  email,
  setAuthors
}) => {
  const handleClick = () => {
    deleteAuthor(key)
      .then((authorArray) => setAuthors(authorArray));
  };
  return (
    <Card body>
        <CardTitle tag="h5">{firstname} {lastname}</CardTitle>
        <CardText>Email: {email}</CardText>
        <Button color="danger" onClick={handleClick}>Delete Author</Button>
    </Card>
  );
};

AuthorCard.propTypes = {
  key: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  setAuthors: PropTypes.func
};

export default AuthorCard;
