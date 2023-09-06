import { IBaseProps } from '../interfaces/types'
import SearchBar from '../components/SearchBar/SearchBar'
import './Base.scss'

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