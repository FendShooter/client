import axios from 'axios'

const URL = 'http://localhost:5000/api/v1'
// const URL = 'https://edekmoving.herokuapp.com/api/v1'
export const apiRequests = axios.create({ baseURL: URL })
