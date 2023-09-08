import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getOne from '../../utils/getOne';
import { useDispatch, useSelector } from 'react-redux';
import { startGetOneBook, successGetOneBook } from '../../reducers/book';
import Base from '../../layouts/Base';
import { RootState } from '../../store';



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
        <div className='d-flex' style={{ gap: '20px' }}>
          <div className="left" style={{ width: '50%' }}>
            <div>
              <img style={{ width: '100%', objectFit: 'contain' }} src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            </div>
          </div>
          <div style={{ width: '50%' }}>
            <h1>{book.volumeInfo.title}</h1>
            {book.volumeInfo.description}
            <p>Author {book.volumeInfo.authors.map((item) => item)}</p>
            {book.volumeInfo.categories ? <>
              <p>Category <ins>{book.volumeInfo.categories.map(item => item)}</ins></p>
            </> : null}
          </div>
        </div> : null}
    </Base>
  )
}

export default BookDetail