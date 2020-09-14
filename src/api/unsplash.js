import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID I5RgTeR8ikZyU5XWtcG3vENqYdR3vk3BN5_Z0EbWGgM'
    }
});