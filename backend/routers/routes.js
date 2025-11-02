import { Router } from "express";
import { Cart, Login, Register } from "../controllers/user.js";
import { authMiddleware } from "../middleware/auth.js";

const userRouter = Router()

userRouter.post('/register',Register)

userRouter.post('/login',Login)

userRouter.post('/cart',Cart)
userRouter.post('/token',authMiddleware)

export default userRouter;