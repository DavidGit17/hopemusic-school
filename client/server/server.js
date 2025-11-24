import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';
import router from './routes/userRoute.js';
import connectToDb from './db.js';

connectToDb();

const app = express();
app.use(express.json())
// Allow Authorization header in CORS
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use("/api/users", router)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`);
});
