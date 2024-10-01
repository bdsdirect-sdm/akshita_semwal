import User from "../models/userModel"
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import * as JWT from 'jsonwebtoken';

const secret = "apple";
const saltRounds = 10;

export const createUser = async (req: Request, res: Response) => {
    const { fname, lname, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    try{
        const user = await User.create({ fname, lname, email, password: encryptedPassword })
        .then((user) => {
        res.json(user);
        })
    } catch(e) {
        console.log("Error: ", e);
    }
}

export const getProfile = async (req: Request, res: any) => {
    const token = req.headers.authorization?.split(" ")[1]; 
    // console.log(token)
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }

    try {
        const decoded: any = JWT.verify(token, secret);
        // console.log("DECODED:",decoded);
        const userId = decoded.user.id;

        const user = await User.findByPk(userId);
        if (user) {
            res.json(user); 
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

export const userLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({where: {email: email}})
        if(user) {
            const pass = await bcrypt.compare(password, user.dataValues.password);
            if(pass){
                const token = JWT.sign({user}, secret);
                res.json(({"users": user, "token": token}));
                const check = JWT.verify(token, secret);
                console.log("User logged in!", check);
                const decoded: any = JWT.verify(token, secret);
        // console.log("DECODED:",decoded);
            }
        } else {
            res.status(404).json({ error: 'User not found' });
            console.log("No user")
          }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

export const updateUser = async (req: any, res: any) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; 
      console.log(token)
      if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }
    const decoded: any = JWT.verify(token, secret);
    const userId = decoded.user.id;

    const user = await User.findByPk(userId);
    const { fname, lname, email, gender, phone, age } = req.body;
    console.log(phone, "PHONEEEEEEEEEEEEE");
    if (user) {
      if (fname) user.dataValues.fname = fname;
      if (lname) user.dataValues.lname = lname;
      if (email) user.dataValues.email = email;
      if (gender) user.dataValues.gender = gender;
      if (phone) user.dataValues.phone = phone;
      if (age) user.dataValues.age = age;

      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

