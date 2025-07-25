import type { TUser } from "../user";

export type SignUpForm = {
	username: string;
	email: string;
	password: string;
	role: "DEV" | "ADMIN" | "USER";
};

export type AuthSuccessResponse = {
	token: string;
	user: TUser;
};

export type AuthErrorResponse = {
	error: string;
	message: string;
	statusCode: number;
	status: "USER_ALREADY_EXISTS";
};
