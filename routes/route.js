import express from 'express';
import { createBlog } from '../controllers/createBlog.controller.js';
import { validateCreateBlog } from '../validation/createBlog.validation.js';
import { getBlogsController } from '../controllers/getBlogs.controller.js';
import { getBlogController } from '../controllers/getBlog.controller.js';
import { deleteBlogController } from '../controllers/deleteBlog.controller.js';
import { validateUpdateBlog } from '../validation/updateBlog.validation.js';
import { updateBlogController } from '../controllers/updateBlog.controller.js';
import { incrementLikeController } from '../controllers/incrementLike.controller.js';

const route = express.Router();
// create the blog
route.post("/create-blog", validateCreateBlog, createBlog);
// Get Blog Posts Route with Pagination
route.get("/blogs", getBlogsController);
// get Blog Post by _id
route.get("/blogs/:id", getBlogController);
// Delete Blog Post by _id
route.delete("/blogs/:id", deleteBlogController);
// update Blog Post by _id
route.put("/blogs/:id", validateUpdateBlog, updateBlogController);
// Increment Likes 
route.post("/blogs/:id/like", incrementLikeController);
export default route;