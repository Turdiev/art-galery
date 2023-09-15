import axios from "axios";

const API_UNSPLASH = 'https://api.unsplash.com'
const ACCESS_KEY = 'zKOgRDLiBPIc5f7bPRArUr9dqb-qeMn3qqvj45Kd9Tk'
export default async function useApiResponse({method, url, params = {}}) {
    try {
        let response = null

        await axios({
            method: method,
            url: `${API_UNSPLASH}${url}`,
            params: params,
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`
            }
        })
            .then((res) => {
                response = res.data
            })
        console.log('RES', response)
        return response
    } catch (error) {
        console.error('Ошибка при получении изображений:', error)
    }
}