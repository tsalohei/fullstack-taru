import axios from 'axios'
const myUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(myUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(myUrl, newObject)
    return request.then(response => response.data)
}
export default { getAll, create }
