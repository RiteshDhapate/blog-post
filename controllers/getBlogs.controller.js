import Blog from "../models/blog.model.js";

export const getBlogsController = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort: { createdAt: -1 } // Sort by most recent
    };

    try {
        const blogs = await Blog.find()
            .sort(options.sort)
            .skip((options.page - 1) * options.limit)
            .limit(options.limit)
            .exec();

        const totalBlogs = await Blog.countDocuments();


        res.status(200).json({
            totalBlogs,
            currentPage: options.page,
            totalPages: Math.ceil(totalBlogs / options.limit),
            blogs,
        });
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};