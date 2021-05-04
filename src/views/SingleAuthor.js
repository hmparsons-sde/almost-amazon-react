import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleAuthor } from '../App/helpers/data/authorData';

export default function SingleAuthor() {
  const [Author, setAuthor] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleAuthor(id).then(setAuthor);
  }, []);
  return <div>{Author.name}</div>;
}

SingleAuthor.propTypes = {
  id: PropTypes.string,
};
