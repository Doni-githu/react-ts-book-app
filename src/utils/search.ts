import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default async function (term: string, length: number = 0) {
    try {
        const apiKey: string = 'AIzaSyAkpJ1ssndcueZp0dmwhvjmMuOGstIC2Po';
        const orderBy: string = 'relevance'
        const category: string = "computers"
        const url: string = `https://www.googleapis.com/books/v1/volumes`
        const response = await axios.get(url, {
            params: {
                q: category === "all" ? `${term}+subject:${category}` : term,
                key: apiKey,
                maxResults: 30,
                orderBy: orderBy,
                startIndex: length
            }
        });
        return response.data.items
    } catch (error) {
        console.log(error);
    }
}