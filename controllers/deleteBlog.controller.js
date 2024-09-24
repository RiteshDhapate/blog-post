import mongoose from "mongoose";
import Blog from "../models/blog.model.js";

export const deleteBlogController = async (req, res) => {
  const { id } = req.params;

  // Validate the provided id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog post ID." });
  }

  try {
    const deletedBlogPost = await Blog.findByIdAndDelete(id);
    if (!deletedBlogPost) {
      return res.status(404).json({ message: "Blog post not found." });
    }
    res.status(200).json({ message: "Blog post deleted successfully." });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};