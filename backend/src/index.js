import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app,server } from "./lib/socket.js";
import path from "path";

dotenv.config();


const PORT = process.env.PORT;

// CORS should be applied first!
app.use(cors({
  origin: "https://fictional-space-train-r4wxrv9r46gvh599v-5173.app.github.dev",
  credentials: true
}));

app.use(express.json({limit: "10mb"}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Catch-all route to serve the React app for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
  connectDB();
});
