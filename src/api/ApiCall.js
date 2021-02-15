import axios from 'axios'
import { API_METHOD } from '../utils/Common'

const fetchAPI = async (timeout = 2000, customHeader) => {
    const instance = axios.create({
        baseURL: 'test',
        timeout: timeout,
        headers: customHeader
    })
}