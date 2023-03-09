import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks, removeBook } from '../redux/books/booksSlice';
import './styles/displayBook.css';

const DisplayBook = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeBook(id));
    dispatch(deleteBooks(id));
  };
  return (
    <div className="displayBook">
      <div className="book-details">
        <span className="category-name">Action</span>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <div className="actions">
          <p className="comments">Comments</p>
          <button
            className="remove-btn"
            type="button"
            data-id={id}
            onClick={deleteHandler}
          >
            Remove
          </button>
          <p className="edit-btn">Edit</p>
        </div>
      </div>
      <div className="progress">
        <div className="progress-oval">
          <div className="oval" />
          <div className="progress-percent">
            <span className="percentage">64%</span>
            <p className="completed">Completed</p>
          </div>
        </div>

        <div className="chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-name">Chapter 17</p>
          <button className="chapter-btn" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

DisplayBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default DisplayBook;
