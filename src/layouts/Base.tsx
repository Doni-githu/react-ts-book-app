import { IBaseProps } from '../interfaces/types'
import SearchBar from '../components/SearchBar/SearchBar'
import './Base.scss'
import { Link } from 'react-router-dom'

function Base({ children }: IBaseProps) {
    return (
        <div className='container'>
            <ul className='d-flex justify-content-center' style={{listStyle: 'none'}}>
                <li><Link to={'/'} className='text-decoration-none text-black fs-2'>To books list</Link></li>
            </ul>
            <SearchBar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Base