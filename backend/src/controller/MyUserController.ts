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

export default { createCurrentUser };
