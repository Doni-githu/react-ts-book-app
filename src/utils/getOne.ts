import axios from "axios";
import { IBook } from "../interfaces/types";

export default async function (id: string) {
    try {
        const apiKey: string = 'AIzaSyAkpJ1ssndcueZp0dmwhvjmMuOGstIC2Po';
        const url: string = `https://www.googleapis.com/books/v1/volumes/${id}`

        const res = await axios.get<IBook>(url, {
            params: {
                key: apiKey,
            }
        })
        return res.data as IBook
    } catch (error) {
        console.log(error);
    }
}