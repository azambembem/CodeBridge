import type { TUser } from "../user";

export type SignInForm = {
  email: string;
  password: string;
};

export type AuthSuccsessResponse = {
  token: string;
  user: TUser;
};
