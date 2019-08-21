import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-project-7b52d.firebaseio.com/'
});

export default instance;