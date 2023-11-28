const Post = require("../models/postModel");
const Like = require("../models/likeModel");

const likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const like = await Like.create({ post, user });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: like._id } },
      { new: true }
    )
      .populate("likes")
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      post: updatedPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "error while doing like",
      error: error.message,
    });
  }
};

const unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    const deletedLike = await Post.findByIdAndDelete({
      post: post,
      _id: like,
    });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );

    res.status(200).json({
      status: true,
      post: updatedPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error While unliking the post",
      error: error.message,
    });
  }
};

module.exports = { likePost, unlikePost };
