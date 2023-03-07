import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: (state) => ({
      ...state,
      categories: [
        ...state.categories,
        { id: '0', category: 'Under Construction' },
      ],
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
