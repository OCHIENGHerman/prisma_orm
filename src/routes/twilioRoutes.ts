import express from 'express';
import { sendVerification, checkVerification } from '../controllers/twilioController';

const router = express.Router();

router.post('/send-verification', sendVerification);
router.post('/check-verification', checkVerification);

export default router;