import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const DisplayBook = ({ id, title, author }) => {
  const dispatch = useDispatch();

  return (
    <div className="displayBook">
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>
        Delete
      </button>
    </div>
  );
};

DisplayBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default DisplayBook;
