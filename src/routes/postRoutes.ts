import express from 'express'
import * as PostController from '../controllers/postController'

const router = express.Router()

router.get('/', PostController.getAllPosts)
router.get('/:id', PostController.getPostById)
// New route to get posts by user ID
router.get('/user/:userId', PostController.getPostsByUserId);
router.post('/', PostController.createPost)
router.put('/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)

export default router;