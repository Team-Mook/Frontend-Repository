import { useNavigate } from "react-router-dom";

import Spotify from "@assets/spotify/spotify.gif";

const SpotifySyncPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col justify-between px-6">
      <div className="mb-[58px] pt-11">
        <p className="text-2xl font-bold text-[#E3E3E8]">Spotify를</p>
        <p className="text-2xl font-bold text-[#E3E3E8]">연동할까요?</p>
      </div>

      <img src={Spotify} className="mb-[128px]" />

      <div className="mb-[34px] flex flex-col space-y-2">
        <button
          onClick={() => navigate("/complete")}
          className="h-[59px] rounded-full bg-[#3E3F44] text-white"
        >
          연동하러 가기
        </button>
        <button
          onClick={() => navigate("/complete")}
          className="h-[59px] text-[#737373] underline"
        >
          다음에 할래요
        </button>
      </div>
    </div>
  );
};

export default SpotifySyncPage;
