
import express from "express";
import { register_user ,login_user,logout_user,get_current_user} from "../controllers/auth.controller.js";
const router =express.Router();
import { authMiddleware } from "../middleware/auth.middleware.js";

router.post("/register",register_user);
router.post("/login",login_user);
router.post("/logout",logout_user);
router.get("/me",authMiddleware,get_current_user)
export default router;