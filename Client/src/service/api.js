import axios from 'axios';

export const getNews = async() =>{
    const URL='http://localhost:9000';
    try {
        return await axios.get(`${URL}/news`);
    } catch (error) {
        console.log("Error while Calling api get News",error);
    }
}