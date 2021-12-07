import express from 'express'
import Post from '../models/post'
import moment from 'moment'

const router = express.Router()

// TODO 2-(1): create the 1st API (/api/allPosts)
router.get('/allPosts', async (req, res) => {
    try {
        const posts = await Post.find({})
        posts.sort((a, b) => b.timestamp - a.timestamp)
        res.status(200).send({ message: "success", data: posts });
    } catch {
        res.status(403).send({ message: 'error', data: null })
    }
})

// TODO 3-(1): create the 2nd API (/api/postDetail)
router.get('/postDetail', async(req, res) => {
    try {
        const postId = req.query.pid;
        console.log(postId);
        const post = await Post.findOne({ postId: postId });
        console.log(post);
        res.status(200).send({ message: "success", post: post })
    } catch {
        res.status(403).send({ message: "error", post: null })
    }
})

// TODO 4-(1): create the 3rd API (/api/newPost)
router.post('/newPost', async (req, res) => {
    const postId = req.body.postId;
    const title = req.body.title;
    const content = req.body.content;
    const timestamp = req.body.timestamp;
    try {
        const newPost = new Post({ postId: postId, title: title, content: content, timestamp: timestamp  })
        newPost.save();
        console.log("Create new post", newPost);
        res.status(200).send({ message: 'success' });
    } catch {
        res.status(403).send({ message: 'error' });
    }
});

// TODO 5-(1): create the 4th API (/api/post)
router.delete('/post', async (req, res) => {
    try {
        const pid = req.query.pid;
        await Post.deleteOne({ postId: pid })
        res.status(200).send({ message: 'success' })
    } catch {
        res.status(403).send({ message: 'error' })
    }
})

export default router