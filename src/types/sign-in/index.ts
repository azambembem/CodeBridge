export type SignInForm = {
  email: string;
  password: string;
};

export type AuthSuccessResponse = {
  access_token: string;
};

export type AuthErrorResponse = {
  error: string;
  message: string;
  statusCode: number;
  status: "INVALID_PASSWORD" | "TOO_MANY_ATTEMPTS";
  attempt_count: number;
  reset_token: string;
};
