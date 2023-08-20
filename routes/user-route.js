// import express from "express";
// import { userController } from "../controllers/user-controllers.js";

// const UserRoutes = express.Router();
// UserRoutes.get("/profile/:username", userController.profile);
// UserRoutes.post("/login", userController.login);
// UserRoutes.post("/register", userController.register);
// UserRoutes.put("/changepassword", userController.changePassword);
// export default UserRoutes;


import express from 'express';
import controllers from '../controllers/user-controllers.js';

const UserRoutes= express.Router();
UserRoutes.get("/register",controllers.register);
UserRoutes.get("/login",controllers.login);
UserRoutes.post("/images",controllers.images)
export default UserRoutes;
