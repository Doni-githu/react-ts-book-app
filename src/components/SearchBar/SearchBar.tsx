import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setBook, setCategory, setOrder, setTerm, startSearchBooks } from '../../reducers/book'
import { RootState } from '../../store'
import search from '../../utils/search'
import { SectionWrapper } from '../../hoc'
import { CustomSelect } from '../../uiComponents'
import { filterData, sortByData } from '../../constants/data'
import { ISearchUtilProps } from "../../interfaces/types"
import { useNavigate } from 'react-router-dom'

function SearchBar() {
  const book = useSelector((state: RootState) => state.book)
  const [_, setError] = useState<string>('')
  const dispatch = useDispatch()
  const navigate = useNavigate()


  async function onSearch() {
    if (!book.term) {
      setError('The book name is required to search book')
      return
    }
    const payload: ISearchUtilProps = {
      term: book.term,
      category: book.category,
      orderBy: book.orderBy,
      length: book.books.items.length,
    }
    dispatch(startSearchBooks())
    const data = await search(payload)
    dispatch(setBook(data))
    navigate('/')
  }

  return (
    <div className='search'>
      <h1 className='text-center'>Search for book</h1>
      <div className="d-flex flex-column row-gap-3">
        <div className="form-floating">
          <input type="email" className="form-control" placeholder='Type a book' id="floatingInputValue" onKeyDown={async (e) => {
            if (e.key === "Enter") {
              await onSearch()
            }
          }} value={book.term} onChange={(e) => dispatch(setTerm(e.target.value))} />
          <label htmlFor="floatingInputValue">Book</label>
        </div>
        <CustomSelect label='Category' getSelected={(option: string) => {
          dispatch(setCategory(option))
        }} options={filterData} />
        <CustomSelect label='Sort By' getSelected={(option: string) => {
          dispatch(setOrder(option))
        }} options={sortByData} />
        <button className='btn btn-primary' onClick={onSearch}>Search</button>
      </div>
    </div>
  )
}

export default SectionWrapper(SearchBar)