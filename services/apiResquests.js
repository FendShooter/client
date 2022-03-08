import axios from 'axios'

const URL = 'https://edekmoving.herokuapp.com/api/v1'
export const apiRequests = axios.create({ baseURL: URL })
