export function isStudentEmail(email: string) {
	const regex = /@student\.ub\.ac\.id$/;
	return regex.test(email);
}
