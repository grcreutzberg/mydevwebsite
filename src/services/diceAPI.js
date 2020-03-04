import axios from 'axios';

const diceAPI = axios.create({
    baseURL: 'http://roll.diceapi.com/'
});

export default diceAPI;