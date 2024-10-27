const CompleteScreen = () => {
  return (
    <div className="flex h-screen flex-col justify-between px-6">
      <div className="mb-[58px] pt-11">
        <p className="text-2xl font-bold text-[#E3E3E8]">회원가입이</p>
        <p className="text-2xl font-bold text-[#E3E3E8]">완료되었어요!</p>
      </div>

      <div className="mb-[101px] flex flex-col">
        <button className="h-[59px] rounded-full bg-[#3E3F44] text-white">
          Mook 시작하기
        </button>
      </div>
    </div>
  );
};

export default CompleteScreen;
