/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  email,
  favorite,
  first_name,
  // eslint-disable-next-line camelcase
  last_name,
  setAuthors,
  firebaseKey
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey).then((response) => setAuthors(response));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
    }
  };

  function viewAuthor() {
    history.push(`/author/${firebaseKey}`);
  }
  return (
        <div className="card-container">
          <Card>
            <CardTitle tag='h5'>{first_name} {last_name}</CardTitle>
            <CardText>Email: {email}</CardText>
            <CardText>{favorite ? 'Favorite' : ''}</CardText>
            <Button color="warning" onClick={viewAuthor}>
              View Author
            </Button>
            <Button color='danger' onClick={() => handleClick('delete')}>DELETE</Button>
            <Button color="info" onClick={() => handleClick('edit')}>
              {editing ? 'Close Form' : 'Edit Author'}
            </Button>
              {editing && <AuthorForm
              formTitle='Edit Author'
              email={email}
              first_name={first_name}
              last_name={last_name}
              favorite={favorite}
              firebaseKey={firebaseKey}
              setAuthors={setAuthors}
            />}
          </Card>
        </div>
  );
};

AuthorCard.propTypes = {
  email: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  setAuthors: PropTypes.func.isRequired,
  firebaseKey: PropTypes.string
};

export default AuthorCard;
