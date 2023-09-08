import React from 'react'
import './BookCard.scss'
import { IBookCardProps } from './BookCard.props'
import { useNavigate } from 'react-router-dom'

function BookCard({ book }: IBookCardProps) {
  const navigate = useNavigate()
  return (
    <div className="col">
      <div className="card shadow-sm">
        {book.volumeInfo.readingModes?.image ? <img style={{
          width: '100%',
          height: 200,
          objectFit: 'cover'
        }} src={book.volumeInfo.imageLinks.thumbnail} alt="" /> :
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Image is not have</text></svg>
        }
        <div className="card-body">
          <div>
            <ins>
              <small>{book.volumeInfo.categories ? book.volumeInfo.categories.map((item) => item) : null}</small>
            </ins>
          </div>
          <p className='card-title' style={{ cursor: 'pointer' }} onClick={() => {
            const id = book.id
            navigate(`/${id}`)
          }}>{book.volumeInfo.title}</p>
          {book.volumeInfo.authors ? <div>
            by {book.volumeInfo.authors.map((item) => {
              return item + ","
            })}</div> : null}
        </div>
      </div>
    </div>
  )
}

export default BookCard