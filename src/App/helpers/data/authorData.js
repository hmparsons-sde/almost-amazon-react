import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => {
      if (response.data) {
        const authorArray = Object.values(response.data);
        resolve(authorArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const addAuthor = (author) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, author)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors(author).then((authorsArray) => resolve(authorsArray));
        });
    }).catch((error) => reject(error));
});

const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => getAuthors().then((authorArray) => resolve(authorArray)))
    .catch((error) => reject(error));
});

const updateAuthor = (firebaseKey, author) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${firebaseKey}.json`, author)
    .then(() => getAuthors().then(resolve))
    .catch((error) => reject(error));
});

const getSingleAuthor = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${authorId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getAuthors, addAuthor, deleteAuthor, updateAuthor, getSingleAuthor
};
