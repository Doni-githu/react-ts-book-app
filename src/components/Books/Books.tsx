import { SectionWrapper } from "../../hoc"
import BookCard from '../BookCard/BookCard'
import Base from '../../layouts/Base'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { RootState } from "../../store"
import './Books.scss'
import search from "../../utils/search"
import { startSearchBooks, successGotBooks, failurGetBooks, setBook } from "../../reducers/book"
import { ISearchUtilProps } from "../../interfaces/types"
import { Loader } from "../../uiComponents"

function Books() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const book = useSelector((state: RootState) => state.book)
    const dispatch = useDispatch()
    return (
        <Base>
            <h1 className="text-center">Books found {book.books.totalItems}</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {!book.isLoading ? book.books.items.map((item, index) => (
                    <BookCard key={index} book={item} />
                )) :
                    <div style={{ textAlign: 'center', marginTop: '2rem', width: '100%' }}>
                        <Loader />
                    </div>}
            </div>
            {book.books.totalItems !== 0 ? <>
                <div className="w-100 d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={async () => {
                        setIsLoading(true)
                        const payload: ISearchUtilProps = {
                            term: book.term,
                            category: book.category,
                            orderBy: book.orderBy,
                            length: book.books.items.length,
                        }
                        const data = await search(payload)
                        dispatch(successGotBooks(data.items))
                        setIsLoading(false)
                    }}>{isLoading ? 'Loading...' : 'Load more'}</button>
                </div>
            </> : null}
        </Base>
    )
}

export default SectionWrapper(Books)