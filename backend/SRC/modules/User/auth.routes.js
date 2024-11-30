import { Router } from "express";
import * as authController from "./auth.controller.js"

const router =Router();

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.post('/verifyemail',authController.verifyEmail)
router.post('/forgetpassword',authController.forgetPassword)
router.put('/resetpassword/:token',authController.resetPassword)


export default router;