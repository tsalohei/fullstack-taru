import axios from 'axios'
const myUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(myUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(myUrl, newObject) 
    return request.then(response => response.data) 
}

const remove = id => {
    axios.delete(`${myUrl}/${id}`)
}

const replace = (id, updatedObject) => {
    const request = axios.put(`${myUrl}/${id}`, updatedObject)
    return request.then(response => response.data)
} 

export default { getAll, create, remove, replace }
