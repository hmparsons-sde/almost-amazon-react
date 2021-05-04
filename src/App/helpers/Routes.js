import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddAuthor from '../../views/AddAuthors';
import Home from '../../views/Home';
import Authors from '../../views/Authors';
import SingleAuthor from '../../views/SingleAuthor';

export default function Routes({ authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/authors'
          component={() => <Authors authors={authors} setAuthors={setAuthors} />}
        />
        <Route path="/author/:id" component={SingleAuthor} />
        <Route
          path='/add-authors'
          component={() => <AddAuthor setAuthors={setAuthors} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};
