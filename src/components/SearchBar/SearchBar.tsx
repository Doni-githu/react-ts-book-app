import { useState } from 'react'
import axios from "axios"

import { useDispatch, useSelector } from 'react-redux'
import { setBook, setTerm } from '../../reducers/book'
import { RootState } from '../../store'
function SearchBar() {
  const term = useSelector((state: RootState) => state.book.term)
  const [_, setError] = useState<string>('')
  const dispatch = useDispatch()
  const submitData = async () => {
    try {
      const apiKey: string = 'AIzaSyAkpJ1ssndcueZp0dmwhvjmMuOGstIC2Po';
      const orderBy: string = 'relevance'
      const category: string = "computers"
      const url: string = `https://www.googleapis.com/books/v1/volumes?`
      const response = await axios.get(url, {
        params: {
          q: category === "all" ? `${term}+subject:${category}` : term,
          key: apiKey,
          maxResults: 30,
          orderBy: orderBy
        }
      });
      return response.data
    } catch (error) {
      console.log(error);
    }
  }

  async function onSearch() {
    if (!term) {
      setError('The book name is required to search book')
      return
    }
    const data = await submitData()
    dispatch(setBook(data))
  }

  return (
    <div className='search'>
      <h1>Search for book</h1>
      <div className="search-main">
        <label>
          <span>Type book name</span>
          <input type="text" onKeyDown={async (e) => {
            if (e.key === "Enter") {
              await onSearch()
            }
          }} value={term} onChange={(e) => dispatch(setTerm(e.target.value))} />
        </label>
        <div className="btn">
          <button onClick={onSearch}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar