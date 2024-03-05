import { Request, Response } from 'express';
import Twilio from 'twilio';

// const accountSid = process.env.TWILIO_ACCOUNT_SID || '';
// const authToken = process.env.TWILIO_AUTH_TOKEN || '';

const accountSid = '';
const authToken = '';
const serviceId = ''; 

const client = Twilio(accountSid, authToken);

export const sendVerification = async (req: Request, res: Response) => {
    try {
        const { phoneNumber, channel } = req.body;

        if (!phoneNumber || !channel) {
            return res.status(400).json({ error: 'Both phoneNumber and channel are required in the request body.' });
        }

        const verification = await client.verify
            .services(serviceId)
            .verifications.create({
                to: `+${phoneNumber}`,
                channel: channel.toLowerCase() === 'call' ? 'call' : 'sms',
            });

        res.status(200).json({
            message: 'Verification request sent successfully!',
            verificationStatus: verification.status,
        });
    } catch (error) {
        console.error('Error sending verification:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const checkVerification = async (req: Request, res: Response) => {
    try {
        const { phoneNumber, verificationCode } = req.body;

        if (!phoneNumber || !verificationCode) {
            return res.status(400).json({ error: 'Both phoneNumber and verificationCode are required in the request body.' });
        }

        const verificationCheck = await client.verify
            .services(serviceId)
            .verificationChecks.create({
                to: `+${phoneNumber}`,
                code: verificationCode,
            });

        res.status(200).json({
            message: 'Verification check completed successfully!',
            verificationStatus: verificationCheck.status,
        });
    } catch (error) {
        console.error('Error checking verification:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
