import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0UD9wEkhYw6tYur2Oone';

// retrieve books from the API
export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios(`${BASE_URL}/books`);

  return response.data;
});

// add books to the API
export const postBooks = createAsyncThunk(
  'books/postBooks',
  async (payload, thunkApi) => {
    try {
      const response = await axios.post(`${BASE_URL}/books`, {
        ...payload,
        item_id: nanoid(),
      });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response.data.message || 'an error has occurred',
      );
    }
  },
);

// remove books from the API
export const deleteBooks = createAsyncThunk('books/deleteBooks', async (id) => {
  const response = await axios.delete(`${BASE_URL}/books/${id}`);
  return response.data;
});

const initialState = {
  books: [],
  bookSuccessfullyAdded: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const bookFormatted = Object.keys(action.payload).map((key) => {
        const itemObj = action.payload[key][0];
        itemObj.item_id = key;
        return itemObj;
      });
      // eslint-disable-next-line no-param-reassign
      state.books = bookFormatted;
    });
    builder
      .addCase(postBooks.fulfilled, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.bookSuccessfullyAdded = true;
      })
      .addCase(postBooks.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.bookSuccessfullyAdded = false;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
