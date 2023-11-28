const Post = require("../models/postModel.js");

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;

    // const post = new Post({
    //   title,
    //   body,
    // });
    //const savedPost = await post.save();

    const savedPost = await Post.create({ title, body });

    res.json({
      post: savedPost,
    });
  } catch (error) {
    return res.json({
      error: "Error whiile creating post",
      error: error.message,
    });
  }
};


const getAllPosts = async (req , res) => {
    try {
        const posts = await Post.find({})
          .populate("comments")
          .populate("likes")
          .exec();

        res.status(200).json({
            posts,
            success : true,
            message : "Feteched Data Succesfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error : "Error while getting Posts",
            error : error.message
        })
    }
}

module.exports = { createPost , getAllPosts} ;
