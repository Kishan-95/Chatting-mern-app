import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js"

const router = express.Router()

router.get("/users",protectRoute,getUsersForSidebar)
router.get("/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessage)

router.stack.forEach((layer) => {
  if (layer.route) {
    console.log(`Message Route registered: ${Object.keys(layer.route.methods)[0].toUpperCase()} ${layer.route.path}`);
  }
});

export default router;