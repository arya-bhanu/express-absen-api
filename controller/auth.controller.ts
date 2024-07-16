import bcrypt from 'bcrypt';
import { isStudentEmail } from '../helper/checker';
import { sendResponse } from '../helper/response.message';
import { PrismaClient } from '@prisma/client';
import { excludeKeys } from '../helper/helper';
import { Request, Response } from 'express';
import { generateOTPNumber } from '../helper/generator';
const prisma = new PrismaClient();
import sendEmail from '../helper/sendEmail';
export async function createAccountController(req: Request, res: Response) {
	const { name, email, nim, password } = req.body;
	if (isStudentEmail(email)) {
		try {
			const salt = bcrypt.genSaltSync(8);
			const passwordCrypt = bcrypt.hashSync(password, salt);
			const otp = generateOTPNumber(6);
			const response = await prisma.assistant.create({
				data: {
					name,
					email,
					nim,
					password: passwordCrypt,
					registrationCode: otp,
				},
			});
			if (response) {
				sendEmail(
					{
						from: 'FILKOM LAB UB',
						subject: 'OTP Registration account',
						text: `Terima kasih telah mendaftar\nBerikut kode OTP anda\n${otp}`,
						to: email,
					},
					(err) => {
						if (!err) {
							return sendResponse(
								res,
								200,
								excludeKeys(response, ['password']),
								'Silahkan cek email anda untuk mendapatkan kode OTP'
							);
						}
						console.error(err);
						throw err
					}
				);
			} else {
				throw new Error('Failed Create Data');
			}
		} catch (err) {
			console.log(err);
			return sendResponse(res, 400, undefined, 'Error duplikasi akun');
		}
	} else {
		return sendResponse(
			res,
			400,
			undefined,
			'Mohon gunakan email akademik Universitas Brawijaya'
		);
	}
}

export async function confirmCreateAccountController(
	req: Request,
	res: Response
) {
	
}
