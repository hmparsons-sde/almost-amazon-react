import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const AuthorCard = ({
  firstname,
  lastname,
  email,
  handleClick
}) => (
  <Card body>
      <CardTitle tag="h5">{firstname} {lastname}</CardTitle>
      <CardText>Email: {email}</CardText>
      {handleClick ? <Button onClick={handleClick}>Print Author</Button> : ''}
  </Card>
);

AuthorCard.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  handleClick: PropTypes.func
};

export default AuthorCard;
