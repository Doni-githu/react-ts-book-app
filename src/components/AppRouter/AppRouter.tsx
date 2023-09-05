import { Route, Routes } from "react-router-dom"

const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<h1>Books</h1>} />
        <Route path="/:id" element={<h1>Book</h1>} />
    </Routes>
}

export default AppRouter