import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import './index.css'

const rootId = document.getElementById('root') as HTMLDivElement
const root = ReactDOM.createRoot(rootId)


root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)