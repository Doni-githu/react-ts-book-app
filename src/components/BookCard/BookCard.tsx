import React from 'react'

function BookCard() {
  return (
    <div className="card">
      <div className="img">
        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000" />
      </div>
      <div className="card-body">
        <p className='title'>Title</p>
        <p className='body'>Body</p>
        <p className='author'>Author</p>
      </div>
    </div>
  )
}

export default BookCard