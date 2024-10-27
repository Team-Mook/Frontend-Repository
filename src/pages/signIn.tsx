import Logo from "../assets/logo.png";

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-between h-screen px-5">
      <div className="mt-48 flex justify-center">
        <img src={Logo} />
      </div>
      <div className="flex flex-col mb-10 space-y-3">
        <button className="bg-white rounded-full h-[59px]">
          Google로 로그인하기
        </button>
        <button className="bg-white rounded-full h-[59px]">
          Apple로 로그인하기
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
