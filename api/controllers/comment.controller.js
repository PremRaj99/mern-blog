import Comment from "../models/comment.model.js";
import { errorHandler } from "../utils/error.js";

export const createComment = async (req, res, next) => {
  try {
    const { content, userId, postId } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(403, "You are not allowed to create this comment")
      );
    }
    if (content.length > 200) {
      return next(
        errorHandler(403, "Comment should not be greater then 200 words")
      );
    }

    const newComment = new Comment({ content, postId, userId });

    await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    return next(error);
  }
};
