import React from 'react'
import './BookCard.scss'
import { IBookCardProps } from './BookCard.props'

function BookCard({ book }: IBookCardProps) {

  return (
    <div className="card">
      <div className="img">
        {book.volumeInfo.imageLinks.thumbnail ? <img src={book.volumeInfo.imageLinks.thumbnail} alt="" /> : null}
      </div>
      <div className="card-body">
        <div className='category-card'>{book.volumeInfo.categories ? book.volumeInfo.categories.map((item) => <p key={item}>{item}</p>) : null}</div>
        <br />
        <p className='title'>{book.volumeInfo.title}</p>
        <br />
        <div className='author'>
          {book.volumeInfo.authors ? book.volumeInfo.authors.map((item) => <p key={item}>{item}</p>) : null}
        </div>
      </div>
    </div>
  )
}

export default BookCard