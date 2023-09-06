import { useState } from 'react'
import axios from "axios"
function SearchBar() {
  const [term, setTerm] = useState<string>('')
  const [error, setError] = useState<string>('')
  const submitData = async () => {
    try {
      const apiKey = 'AIzaSyAkpJ1ssndcueZp0dmwhvjmMuOGstIC2Po';
      const orderBy = 'relavence'
      const url = `https://www.googleapis.com/books/v1/volumes?q=${term}+subject:computers&key=${apiKey}`
      // const url = `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${apiKey}num=50`;
      const response = await axios.get(url);
      console.log(response);

    } catch (error) {
      console.error(error);
    }
  }

  async function onSearch() {
    if (!term) {
      setError('The book name is required to search book')
      return
    }
    await submitData()
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
          }} value={term} onChange={(e) => setTerm(e.target.value)} />
        </label>
        <div className="btn">
          <button onClick={onSearch}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar