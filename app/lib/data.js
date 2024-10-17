import { User } from "./models"
import { connectToDB } from "./utils";

export const fetchUser = async (q) => {
    const regex = new RegExp(q, "i");
    try {
        connectToDB()
        const users = await User.find({username: { $regex: regex }});
        return users
    } catch (err) {
        console.error(err)
        throw new Error('Failed to fetch users!')
    }
}