import axios from "axios"

const BASE = 'http://localhost:3000'

export const api = {
    getItems: async () => {
        let response = await axios.get(`${BASE}/getItems`)
        return response.data; 
    }
}