
import { data } from "./constants/data.js";
import news from "./model/news-Schema.js";

const DefaultData = async() => {
    try {
       // await news.deleteMany({});
        await news.insertMany(data);
        console.log("Data imported successfully");
    } catch (error) {
        console.log('Erroe', error.message);
    }
}

export default DefaultData;