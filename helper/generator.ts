export function generateOTPNumber(x: number) {
	if (x <= 0) {
		throw new Error('Number of digits must be greater than zero.');
	}

	// Create a range from 10^(x-1) to 10^x - 1
	const min = Math.pow(10, x - 1);
	const max = Math.pow(10, x) - 1;

	// Generate a random number in the range
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
