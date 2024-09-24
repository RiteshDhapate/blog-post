import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
    },
    author: {
      type: String,
      required: true,
    },
    categories: {
      type: [String], // Array of categories for blog posts
      validate: {
        validator: (v) => v.length > 0, // Ensure at least one category is provided
        message: "At least one category is required.",
      },
    },
    tags: {
      type: [String], // Array of tags for better searchability
    },
    isPublished: {
      type: Boolean,
      default: false, // Track whether the post is published
    },
    publishedAt: {
      type: Date,
    },
    isHaveMedia: {
      type: Boolean,
      default: false,
    },
    mediaType: {
      type: String,
      enum: ["video", "audio", "image"], // Only allow 'video', 'audio', or 'image'
      required: function () {
        return this.isHaveMedia;
      }, // Required only if media is present
    },
    image: {
      type: String, // URL or path to the image associated with the blog post
      validate: {
        validator: (v) => {
          return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v); // Simple URL validation
        },
        message: "Please provide a valid URL for the image.",
      },
    },
    likes: {
      type: Number,
      default: 0, // Track the number of likes
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Create the Blog model
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
