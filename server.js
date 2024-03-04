import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to shopping</h1>");
});

app.listen(PORT, () => {
  console.log(
    `Server is Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});
