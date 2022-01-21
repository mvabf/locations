import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID zALvJcaqt3xYf5ja9aPAOO_Hi8oNO92iZr9xkTBEdag"
    }
});