import express from 'express'
import * as ChairController from '../controllers/chairController'

const router = express.Router()

router.get('/', ChairController.getAllChairs)
router.get('/:id', ChairController.getChairById)
router.post('/', ChairController.createChair)
router.put('/:id', ChairController.updateChair)
router.delete('/:id', ChairController.deleteChair)

export default router;