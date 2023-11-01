import news from "../model/news-Schema.js"


export const getnews = async (request, response) => {
    try {
        let data = await news.find({});
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({message: data.message});
    }

}