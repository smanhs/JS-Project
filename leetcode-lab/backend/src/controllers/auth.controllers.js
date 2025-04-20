import bcrypt from "bcryptjs";
import db from "../libs/db.js"
import {login,logout,register} from "../controllers/aut.controller.js"

export const register  = async(req,res) => {
    const {email , password , name} = req.body;
    try {
        const existingUser = await db.user.findUnique({
            where:{
                email
            }
        })
if(existingUser){
    return res.status(400).json({
        error:"User already exists"
    })
}
const hashedPassword = await bcrypt.hash(password , 10);

    } catch (error) {
        
    }
}

export const login = async(req,res) => {}

export const logout = async(req,res) => {}

export const check = async(req,res) => {}

