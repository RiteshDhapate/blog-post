import { body } from "express-validator";

export const validateUpdateBlog = [
  body("title")
    .optional()
    .notEmpty()
    .withMessage("Title is required.")
    .trim()
    .isLength({ max: 100 }),
  body("content")
    .optional()
    .notEmpty()
    .withMessage("Content is required.")
    .isLength({ min: 10 }),
  body("author").optional().notEmpty().withMessage("Author is required."),
  body("categories")
    .optional()
    .isArray()
    .withMessage("Categories must be an array.")
    .isLength({ min: 1 })
    .withMessage("At least one category is required."),
  body("tags").optional().isArray().withMessage("Tags must be an array."),
  body("isPublished").optional().isBoolean(),
  body("publishedAt").optional().isISO8601().toDate(),
  body("isHaveMedia").optional().isBoolean(),
  body("mediaType")
    .optional()
    .isIn(["video", "audio", "image"])
    .withMessage("Media type must be video, audio, or image."),
  body("image").optional().isURL().withMessage("Image must be a valid URL."),
];