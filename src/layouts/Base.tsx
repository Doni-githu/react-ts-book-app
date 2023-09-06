import { IBaseProps } from '../interfaces/types'
import SearchBar from '../components/SearchBar/SearchBar'
import './Base.scss'
import CustomSelect from '../uiComponents/customSelect/customSelect'
import { filterData, sortByData } from '../constants/data'

function Base({ children }: IBaseProps) {
    return (
        <div className='container'>
            <SearchBar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Base