import axios from 'axios'
import { context as c } from '../../../context'


export const reviewService = {
    getReviews
};

async function getReviews() {
    const req = {
        method: c.get,
        url: `http://localhost:8080/api/reviews/`,
        // data: {cheese}
        auth: c.auth

    }
    const resp = await axios(req)

    const data = resp.data

    alert(' connection is successful !')
    return data
}
