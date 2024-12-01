import { Router } from "express";
import * as authController from "./auth.controller.js"
import { verifyToken } from "../../middlewares/verifyToken.js";

const router =Router();

router.get('/checkauth',verifyToken,authController.checkAuth)
router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.post('/verifyemail',authController.verifyEmail)
router.post('/forgetpassword',authController.forgetPassword)
router.put('/resetpassword/:token',authController.resetPassword)


export default router;