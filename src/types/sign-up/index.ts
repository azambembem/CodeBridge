import type { TUser } from "../user";

export type SignUpForm = {
  name: string;
  email: string;
  password: string;
};

export type AuthSuccsessResponse = {
  token: string;
  user: TUser;
};
