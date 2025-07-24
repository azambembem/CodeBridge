export type TUser = {
  id: string;
  name: string;
  surname: string;
  attempt_count: 1;
  email: string;
  password: string;
  role: "USER" | "ADMIN" | "DEV";
  is_active: boolean;
  deleted_at: string | null;
  is_verified: boolean;
  agreed_to_marketing_terms: boolean;
};
