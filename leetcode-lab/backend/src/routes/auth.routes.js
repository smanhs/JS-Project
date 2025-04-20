import express from "express";


const authRoutes=express.Router;

authRoutes.post("/regsiter")

authRoutes.post("/login")

authRoutes.post("/logout")
authRoutes.post("/check")






export default authRoutes;

