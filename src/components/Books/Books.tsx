import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { SectionWrapper } from "../../hoc"
import BookCard from '../BookCard/BookCard'
import Base from '../../layouts/Base'
function Books() {
    return (
        <Base>
            <BookCard />
            <BookCard />
            <BookCard />
        </Base>
    )
}

export default SectionWrapper(Books)