import { Route, Routes } from "react-router-dom"
import Books from "../Books/Books"
import BookDetail from "../BookDetail/BookDetail"
const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/:id" element={<BookDetail />} />
    </Routes>
}

export default AppRouter