import express from 'express';
import { createAccountController } from '../controller/auth.controller';

const router = express.Router();

// assistant
router.post('/assistant/signup', createAccountController);

// student
router.post('/student/signup', createAccountController);

export { router as AuthRoute };
