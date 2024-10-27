import { useNavigate } from "react-router-dom";

import Spotify from "../assets/spotify.gif";

const SpotifySyncPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen justify-between px-6">
      <div className="pt-11 mb-[58px]">
        <p className="text-[#E3E3E8] font-bold text-2xl">Spotify를</p>
        <p className="text-[#E3E3E8] font-bold text-2xl">연동할까요?</p>
      </div>

      <img src={Spotify} className="mb-[128px]" />

      <div className="flex flex-col space-y-2 mb-[34px]">
        <button
          onClick={() => navigate("/complete")}
          className="text-white bg-[#3E3F44] rounded-full h-[59px]"
        >
          연동하러 가기
        </button>
        <button
          onClick={() => navigate("/complete")}
          className="text-[#737373] underline h-[59px]"
        >
          다음에 할래요
        </button>
      </div>
    </div>
  );
};

export default SpotifySyncPage;
