import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    // 1. Check if the user exists
    const { auth0id } = req.body;
    if (!auth0id) {
      return res.status(400).json({ message: "auth0id is required" });
    }

    let existingUser = await User.findOne({ auth0id });

    if (existingUser) {
      // Send existing user details
      return res.status(200).json(existingUser);
    }

    // 2. Create the user if they don't exist
    const newUser = await User.create(req.body);

    // 3. Return the newly created user object
    res.status(201).json(newUser);
  } catch (error) {
    // Log error to console
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, city, country } = req.body;
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = name;
    user.addressLine1=addressLine1;
    user.city = city;
    user.country = country;
    await user.save();
    
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export default { createCurrentUser, updateCurrentUser };
