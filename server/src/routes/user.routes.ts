import { addUser, getUser } from "../controllers/user.controller";
import { Router } from 'express';
import upload from "../middleware/multer.middleware";
import { addNewUser } from "../validator/userForm.validator";

const router = Router();

router.post("/add",upload.fields([
    {name: "profile_photo", maxCount: 1}, 
    {name: "appt_letter", maxCount: 1}
]) , addNewUser, addUser);

router.get("/get/:id", getUser);

export default router;