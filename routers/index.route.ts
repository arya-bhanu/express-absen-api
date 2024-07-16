import express from 'express';
import { AdminRouter } from './admin.route';
import { AuthRoute } from './auth.route';

const router = express.Router();

router.use('/admin', AdminRouter);
router.use('/auth', AuthRoute);

export { router as IndexRoute };
