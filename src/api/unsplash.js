import axios from 'axios'

const UNPLASH_KEY = process.env.REACT_APP_UNPLASH_KEY;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: UNPLASH_KEY
      }
})
