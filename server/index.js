import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/connectDB.js'
import authRouter from './routes/auth.route.js'

import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/user.route.js'
import notesRouter from './routes/generate.route.js'
import pdfRouter from './routes/pdf.route.js'
import creditRouter from './routes/credits.route.js'
import { stripeWebhook } from "./controllers/credits.controller.js"
dotenv.config()



const app = express()
app.post(
  "/api/credits/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);


app.use(cors(
    {origin: "https://exmnotesaiclient.onrender.com",
        credentials:true,
        methods: ["GET", "POST", "PUT", 'DELETE', 'OPTIONS']
    }
));

app.use(express.json());
app.use(cookieParser());




const PORT = process.env.PORT || 7000





app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/notes", notesRouter)
app.use("/api/pdf", pdfRouter )
app.use("/api/credit", creditRouter )

app.listen(PORT, () => { 
    console.log(`server is running on port ${PORT}`)
    connectDB()
})