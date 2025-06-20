import mongoose, { Schema } from "mongoose"

const userSchema = new mongoose.Schema({
    clerkId: { type: String, required: true, unique: true }, // Clerk user ID
    email: { type: String, required: true, unique: true },
    username: { type: String },
    imageUrl: { type: String }, // Clerk profile image URL
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

export default User;