import { Route, Routes } from "react-router-dom";
import SignInPage from "@pages/onBoarding/signIn";
import SpotifySyncPage from "@pages/onBoarding/spotify";
import CompleteScreen from "@pages/onBoarding/complete";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/spotify" element={<SpotifySyncPage />} />
      <Route path="/complete" element={<CompleteScreen />} />
    </Routes>
  );
}

export default App;
