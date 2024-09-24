import mongoose from "mongoose";
import Blog from "../models/blog.model.js";

export const incrementLikeController = async (req, res) => {
  const { id } = req.params;

  // Validate the provided id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog post ID." });
  }

  try {
    // Increment the likes by 1
    const updatedBlogPost = await Blog.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } }, // Increment likes
      { new: true } // Return the updated document
    );

    if (!updatedBlogPost) {
      return res.status(404).json({ message: "Blog post not found." });
    }

    res.status(200).json(updatedBlogPost); // Return the updated blog post
  } catch (error) {
    console.error("Error incrementing likes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};