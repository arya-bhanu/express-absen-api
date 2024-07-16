import express from 'express';

const router = express.Router();

// assistant
router.post('/assistant/signup', async (req, res) => {
	const {} = req.body;
});

// student
router.post('/student/signup');

export { router as AuthRoute };
