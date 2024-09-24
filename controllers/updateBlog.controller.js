import { validationResult } from "express-validator";
import mongoose from "mongoose";
import Blog from "../models/blog.model.js";

export const updateBlogController = async (req, res) => {
  const { id } = req.params;

  // Validate the provided id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog post ID." });
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedBlogPost = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBlogPost) {
      return res.status(404).json({ message: "Blog post not found." });
    }
    res.status(200).json(updatedBlogPost);
  } catch (error) {
    console.error("Error updating blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};