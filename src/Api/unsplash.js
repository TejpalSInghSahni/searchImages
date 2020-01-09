import axios from 'axios';

export default axios.create({
    baseUrl: "https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID 79ebdf285839fdc2eeb7a765a35a95e7555f4835a0990f3d357e5820dae12846'
    }  
});