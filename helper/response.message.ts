import { Response } from 'express';

export function sendResponse(
	res: Response,
	status: number,
	data?: any,
	message?: string
) {

	if (message) {
		return res.status(status).json({ message, data: data ? data : null });
	}

	switch (status) {
		case 200:
			return res.status(status).json({ message: 'Success', data: data ? data : null });
		case 404:
			return res.status(status).json({ message: 'Data or Content Not Found', data: data ? data : null });
		case 400:
			return res.status(status).json({ message: 'Invalid data', data: data ? data : null });
		case 500:
			return res.status(status).json({ message: 'Internal Server Error', data: data ? data : null });
	}

	return res.status(status).json({ data: data ? data : null });
}
