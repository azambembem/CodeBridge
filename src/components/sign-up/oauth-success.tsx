import { useEffect } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function OAuthSuccess() {
  const signIn = useSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      signIn({
        auth: {
          token,
          type: "Bearer"
        },
        userState: {} // agar backend user yuborsa, uni ham qabul qilasiz
      });
      toast.success("Google orqali tizimga muvaffaqiyatli kirdingiz!");
    }

    navigate("/");
  }, [signIn, navigate]);

  return <div>Redirecting...</div>;
}
