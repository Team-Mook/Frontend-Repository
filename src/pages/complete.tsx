const CompleteScreen = () => {
  return (
    <div className="flex flex-col h-screen justify-between px-6">
      <div className="pt-11 mb-[58px]">
        <p className="text-[#E3E3E8] font-bold text-2xl">회원가입이</p>
        <p className="text-[#E3E3E8] font-bold text-2xl">완료되었어요!</p>
      </div>

      <div className="mb-[101px] flex flex-col">
        <button className="text-white bg-[#3E3F44] rounded-full h-[59px]">
          Mook 시작하기
        </button>
      </div>
    </div>
  );
};

export default CompleteScreen;
