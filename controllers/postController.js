const Post = require('../models/Post');
const Comment = require('../models/Comment');
const io = require('../sockets/notificationSocket');

const createPost = async (req, res) => {
    try {
        const post = new Post({ ...req.body, author: req.user.id });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author');
        res.json(posts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        if (post.author.toString() !== req.user.id && req.user.role === 'User') {
            return res.status(403).json({ message: 'Access Denied' });
        }
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        if (post.author.toString() !== req.user.id && req.user.role === 'User') {
            return res.status(403).json({ message: 'Access Denied' });
        }
        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: 'Post deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const createComment = async (req, res) => {
    try {
        const { content, postId } = req.body;
        const comment = new Comment({
            content,
            post: postId,
            author: req.user.id,
        });
        await comment.save();

        // Send notification to the post's author
        const post = await Post.findById(postId).populate('author');
        if (post && post.author) {
            io.emit(`notify-${post.author._id}`, {
                postId,
                comment: comment.content,
                commenter: req.user.username,
                createdAt: comment.createdAt,
            });
        }

        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { createPost, getPosts, updatePost, deletePost, createComment };
