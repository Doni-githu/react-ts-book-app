import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getOne from '../../utils/getOne';
import { useDispatch, useSelector } from 'react-redux';
import { startGetOneBook, successGetOneBook } from '../../reducers/book';
import Base from '../../layouts/Base';
import { RootState } from '../../store';
import './BookDetail.scss'
import word from '../../utils/word';



function BookDetail() {
  const params = useParams()
  const dispatch = useDispatch()
  const book = useSelector((state: RootState) => state.book.book)
  useEffect(() => {
    dispatch(startGetOneBook())
    getOne(String(params.id))
      .then((res) => {
        dispatch(successGetOneBook(res!))
      })
  }, [])
  return (
    <Base>
      {book ?
        <div className='d-flex detail'>
          <div className="left">
            <div className='img'>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            </div>
          </div>
          <div className='right'>
            <p className='fs-1'>{book.volumeInfo.title}</p>
            <p>{book.volumeInfo.description}</p>
            <p>Author{book.volumeInfo.authors.length > 1 ? 's' : ''} {word(book.volumeInfo.authors)}</p>
            {book.volumeInfo.categories ? <>
              <p>Categor{book.volumeInfo.categories.length > 1 ? 'ies' : 'y'} <ins>{book.volumeInfo.categories.map(item => item)}</ins></p>
            </> : null}
          </div>
        </div> : null}
    </Base>
  )
}

export default BookDetail