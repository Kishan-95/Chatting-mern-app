import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5001;

app.use(cors());  // Allow all origins since we're serving frontend from same origin
app.use(express.json({limit: "10mb"}));
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// Handle client-side routing for everything EXCEPT /api routes
// This avoids using "*" which causes issues with path-to-regexp
app.use((req, res, next) => {
  if (!req.path.startsWith('/api')) {
    return res.sendFile(path.join(__dirname, "../public/index.html"));
  }
  next();
});

server.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
  connectDB();
});
