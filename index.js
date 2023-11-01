
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import route from "./routes/route.js";

const app = express();

dotenv.config();

app.use(cors());
app.use('/', route);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static("client/build"));
// }

const PORT = process.env.PORT || 9000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`server is running successfully on PORT ${PORT}`));
DefaultData();