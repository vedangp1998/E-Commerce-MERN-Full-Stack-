import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Listening at port: ${PORT}`);
});
