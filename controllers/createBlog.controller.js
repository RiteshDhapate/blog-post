import {  validationResult } from "express-validator";
import Blog from "../models/blog.model.js";
export const createBlog = async(req, res) => {
    try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const blogData = req.body;
         const newBlogPost = new Blog(blogData);
        const savedBlogPost = await newBlogPost.save();
        res.status(201).json(savedBlogPost);
    } catch (error) {
          console.error("Error creating blog post:", error);
        res.status(500).json({ message: "Internal Server Error" });
  }
};
