import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, postBooks } from '../redux/books/booksSlice';
import './styles/Form.css';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, category: 'General' }));
    dispatch(postBooks({ title, author, category: 'General' }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <span className="book-header">ADD NEW BOOK</span>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title.."
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Book author.."
          required
        />
        <button className="submit-button" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
