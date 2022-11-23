import axios from "axios"
import { Item } from '../types/item'
const BASE = 'http://localhost:3000'

export const api = {
    getItems: async () => {
        let response = await axios.get(`${BASE}/getItems`)
        return response.data;
    },

    postItems: async ({ date: date, title: title, category: category, value: value }: any) => {
        let response = await axios.post(`${BASE}/createItem`, {
            date: date,
            title: title,
            category: category,
            value: value,
        })
    },
}