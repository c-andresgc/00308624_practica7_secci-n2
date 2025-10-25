import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Conectado a MongoDB"))
    .catch(err => console.error(err));

import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () =>
    console.log(`Servidor backend en http://localhost:${process.env.PORT}`)
);
