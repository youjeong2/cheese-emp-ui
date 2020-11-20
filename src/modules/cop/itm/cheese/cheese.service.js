import axios from 'axios'
import { context as c } from '../../../context'


export const cheeseService = {
    getCheese
};

async function getCheese() {
    const req = {
        method: c.get,
        url: 'http://localhost:8080/api/cheeses',
        // data: cheeses
    }
    const resp = await axios(req)

    const data = resp.data[0]
    console.log(req)

    // alert(' connection is successful !')
    return data
}
