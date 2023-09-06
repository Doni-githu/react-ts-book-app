import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBook, IBookResponse } from '../interfaces/types';

interface BookState {
    books: IBookResponse;
    term: string
}

const initialState: BookState = {
    books: {
        totalItems: 0,
        kind: "",
        items: []
    },
    term: ''
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBook: (state: BookState, action: PayloadAction<IBookResponse>) => {
            state.books = action.payload
        },
        setTerm: (state: BookState, action: PayloadAction<string>) => {
            state.term = action.payload
        },
        addBooks: (state: BookState, action: PayloadAction<IBook[]>) => {
            state.books.items = [...state.books.items, ...action.payload]
        }
    },
});

export const { setBook, setTerm, addBooks } = bookSlice.actions;
export default bookSlice.reducer;