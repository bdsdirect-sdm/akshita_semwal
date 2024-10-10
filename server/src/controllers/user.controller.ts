import Address from "../models/address.model";
import User from "../models/user.model";
import { Request, Response } from "express";
import sendMail from "../utils/mailSender";

export const addUser = async (req: Request, res: any) => {
    try {
        const { lname, fname, email } = req.body;
        const filesData: any = req.files;
        // const { profile_photo } = filesData.profile_photo[0].path;

        // console.log(req.body)

        console.log("FILES::::::::::::::", filesData)
        console.log("BODY:::::", req.body)
        const user: any = await User.create({
            fname: fname, 
            lname: lname, 
            email: email, 
            profile_photo: filesData.profile_photo[0].path
        })

        // console.log("USER::::::::::", user);filesData
        const userId = user.id;

        const { comp_add, comp_city, comp_state, comp_zip, home_add, home_city, home_state, home_zip } = req.body;
        // const { appt_letter } = filesData.appt_letter[0].path;
        const address = await Address.create({
            user_id: userId,
            comp_add: comp_add, 
            comp_city: comp_city, 
            comp_state: comp_state, 
            comp_zip: comp_zip, 
            home_add: home_add, 
            home_city: home_city, 
            home_state: home_state, 
            home_zip: home_zip, 
            appt_letter: filesData.appt_letter[0].path
        })
        // console.log("ADDRESS::::::::::::", address)
        
        sendMail(user.email, user.fname, comp_city);
        return res.status(201).json({ user, address });
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "An error occurred while creating the user and address",
            error
        });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const user: any = await User.findByPk(id).then((user) => {
            res.json(user);
        });
        if (user) {
            const address = await Address.findOne({
                where: { id: user.id},
                include: [{ model: Address}]
            }).then((address) => {
                res.json(address);
            });
        }
    } catch (error) {
        res.status(500).json({message: "Internal server error", error});
    }
}