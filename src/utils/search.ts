import axios from "axios";
import { ISearchUtilProps } from "../interfaces/types";

export default async function ({ term, length, orderBy, category }: ISearchUtilProps) {
    try {        
        const apiKey: string = 'AIzaSyAkpJ1ssndcueZp0dmwhvjmMuOGstIC2Po';
        const url: string = `https://www.googleapis.com/books/v1/volumes`
        const response = await axios.get(url, {
            params: {
                q: category !== "all" ? `${term}+subject:${category}` : term,
                key: apiKey,
                maxResults: 30,
                orderBy: orderBy,
                startIndex: length
            }
        });
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error);
    }
}