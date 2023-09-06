import { SectionWrapper } from "../../hoc"
import BookCard from '../BookCard/BookCard'
import Base from '../../layouts/Base'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { RootState } from "../../store"
import './Books.scss'
import search from "../../utils/search"
import { addBooks, setBook } from "../../reducers/book"

function Books() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const book = useSelector((state: RootState) => state.book)
    const dispatch = useDispatch()
    return (
        <Base>
            <h1>Books found {book.books.totalItems}</h1>
            <div className="books">
                {book.books.items.map((item, index) => (
                    <BookCard key={index} book={item} />
                ))}
            </div>
            {book.books.totalItems !== 0 ? <>
                <div className="load_more">
                    <button onClick={async () => {
                        setIsLoading(true)
                        const data = await search(book.term, book.books.items.length)
                        dispatch(addBooks(data))
                        setIsLoading(false)
                    }}>{isLoading ? 'Loading...' : 'Load more'}</button>
                </div>
            </> : null}
        </Base>
    )
}

export default SectionWrapper(Books)