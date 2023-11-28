const express = require("express");
const router = express.Router();
const dummyRoute = require("../controllers/dummy.js");
const createComment = require("../controllers/commentController.js");
const {createPost , getAllPosts} = require("../controllers/postController.js");
const{unlikePost,likePost}  = require('../controllers/likeController.js')

router.get("/dummyRoute", dummyRoute);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.delete("/likes/unlike", unlikePost);
module.exports = router;
