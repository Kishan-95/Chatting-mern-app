import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.put("/update-profile",protectRoute,updateProfile)

router.get("/check",protectRoute,checkAuth)

router.stack.forEach((layer) => {
  if (layer.route) {
    console.log(`Auth Route registered: ${Object.keys(layer.route.methods)[0].toUpperCase()} ${layer.route.path}`);
  }
});

export default router;
