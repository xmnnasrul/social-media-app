import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routers/AuthRoute.js';
import UserRoute from './Routers/UserRoute.js';
import PostRoute from './Routers/PostRoute.js';


const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

dotenv.config()


mongoose
    .connect(
        process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log('listening at port 5000'))).catch((error => console.log(error)));


// usage of router
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);