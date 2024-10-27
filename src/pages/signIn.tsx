import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.png";

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between h-screen px-6">
      <div className="mt-48 flex justify-center">
        <img src={Logo} />
      </div>
      <div className="flex flex-col mb-[74px] space-y-3">
        <button
          onClick={() => navigate("/spotify")}
          className="bg-white rounded-full h-[59px]"
        >
          Google로 로그인하기
        </button>
        <button
          onClick={() => navigate("/spotify")}
          className="bg-white rounded-full h-[59px]"
        >
          Apple로 로그인하기
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
