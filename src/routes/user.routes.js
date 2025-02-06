import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name : "avatar",
            maxCount : 1
        },
        {
            name : "coverImage",
            maxCount : 1
        }
    ]),
    registerUser
);

router.route("/login").post(loginUser)


//secured routes

// the (req,res,next) next is for this point where after middleware we have to execute next method from here so inside middleware we tell to execute next()
//int this case after verifyJWT,logoutUser will execute on call of next() inside the verifyJWT method
router.route("/logout").post(verifyJWT, logoutUser) 

export default router;