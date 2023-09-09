import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBook, IBookResponse } from '../interfaces/types';

export interface BookState {
    books: IBookResponse;
    term: string;
    category: string;
    orderBy: string;
    isLoading: boolean;
    book: IBook | null;
}

const initialState: BookState = {
    books: {
        totalItems: 0,
        kind: "",
        items: []
    },
    book: null,
    term: '',
    category: 'all',
    orderBy: 'relevance',
    isLoading: false
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBook: (state: BookState, action: PayloadAction<IBookResponse>) => {
            state.books = action.payload
            state.isLoading = false
        },
        setOneBook: (state: BookState, action: PayloadAction<IBook>) => {
            state.book = action.payload
        },
        setTerm: (state: BookState, action: PayloadAction<string>) => {
            state.term = action.payload
        },
        setCategory: (state: BookState, action: PayloadAction<string>) => {
            state.category = action.payload
        },
        setOrder: (state: BookState, action: PayloadAction<string>) => {
            state.orderBy = action.payload
        },
        startSearchBooks: (state: BookState) => {
            state.isLoading = true
            state.books = {
                totalItems: 0,
                kind: "",
                items: []
            }
        },
        successGotBooks: (state: BookState, action: PayloadAction<IBook[]>) => {
            state.isLoading = false
            state.books.items = [...state.books.items, ...action.payload]
        },
        failurGetBooks: (state: BookState) => {
            state.isLoading = false
        },
        successGetOneBook: (state: BookState, action: PayloadAction<IBook>) => {
            state.book = action.payload
        },
        failurGetBook: (state: BookState) => {
            state.isLoading = false
        }
    },
});

export const {
    setBook,
    setTerm,
    successGotBooks,
    failurGetBooks,
    startSearchBooks,
    setCategory,
    setOrder,
    successGetOneBook,
    failurGetBook,
    setOneBook
} = bookSlice.actions;
export default bookSlice.reducer;