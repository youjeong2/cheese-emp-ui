import axios from 'axios'
import { context as c } from '../../../context'


export const reviewService = {
    getReivew
};

async function getReivew(reviews) {
    const req = {
        method: c.get,
        url: `http://localhost:8080/api/reviews/${reviews}`,
        // data: {cheese}
    }
    const resp = await axios(req)

    const data = resp.data

    alert(' connection is successful !')
    return data
}
