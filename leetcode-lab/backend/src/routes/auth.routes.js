import express from "express";

const authRoutes = express.Router(); // <-- CALL the function with ()

authRoutes.post("/register", (req, res) => {
  res.send("Register route hit!");
});

authRoutes.post("/login", (req, res) => {
  res.send("Login route hit!");
});

authRoutes.post("/logout", (req, res) => {
  res.send("Logout route hit!");
});

authRoutes.post("/check", (req, res) => {
  res.send("Check route hit!");
});

export default authRoutes;
