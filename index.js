import express from 'express';
import mongoose from 'mongoose';
import router from './config/router.js';
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config()
const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://andsailor1997:dbforpets@cluster0.vuuhmsk.mongodb.net/todo-list?retryWrites=true&w=majority';

const app = express();
app.use(cors())

app.use(express.json());
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

startApp();

export default app;

