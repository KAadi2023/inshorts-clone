
import mongoose from "mongoose";


const Connection = async(username, password) => {
    
    const URL= `mongodb://${username}:${password}@ac-sggmqkv-shard-00-00.fvihu6e.mongodb.net:27017,ac-sggmqkv-shard-00-01.fvihu6e.mongodb.net:27017,ac-sggmqkv-shard-00-02.fvihu6e.mongodb.net:27017/?ssl=true&replicaSet=atlas-tcn15d-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;