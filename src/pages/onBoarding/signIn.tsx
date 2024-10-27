import { useNavigate } from "react-router-dom";

import Logo from "@assets/signIn/logo.png";

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col justify-between px-6">
      <div className="mt-48 flex justify-center">
        <img src={Logo} />
      </div>
      <div className="mb-[74px] flex flex-col space-y-3">
        <button
          onClick={() => navigate("/spotify")}
          className="h-[59px] rounded-full bg-white font-medium"
        >
          Google로 로그인하기
        </button>
        <button
          onClick={() => navigate("/spotify")}
          className="h-[59px] rounded-full bg-white font-medium text-black"
        >
          Apple로 로그인하기
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
