import express from "express";
import requireAuth from "../middleware/requireAuth.js";
import User from "../model/userModel.js";

const userRoute = express.Router();

// @route   GET /api/users
// @desc    Sync or fetch logged-in Clerk user
// @access  Protected
userRoute.get("/", requireAuth, async (req, res) => {
    try {
        const clerkId = req.user.id;
        const email = req.user.email;
        const username = req.user.username;
        if (!clerkId || !email || !username) {
            return res.status(400).json({ error: "Missing user data from Clerk." });
        }
        let user = await User.findOne({ clerkId });
        if (!user) {
            user = await User.create({
                clerkId,
                email,
                username,
                createdAt: new Date(),
            });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("❌ Failed to sync user:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// @route   POST /api/users
// @desc    Save user info from frontend
// @access  Protected
userRoute.post("/", requireAuth, async (req, res) => {
    try {
        const { clerkId, username, email, createdAt } = req.body;

        if (!clerkId || !username || !email || !createdAt) {
            return res.status(400).json({
                error: "Missing required fields",
                received: req.body,
            });
        }

        let user = await User.findOne({ clerkId });

        if (!user) {
            user = await User.create({
                clerkId,
                username,
                email,
                createdAt: new Date(createdAt),
            });
        }

        res.status(201).json(user);
    } catch (err) {
        console.error("❌ Error saving user:", err);
        res.status(500).json({ error: "Server error" });
    }
});

export default userRoute;