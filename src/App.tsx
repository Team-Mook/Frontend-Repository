import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SpotifySyncPage from "./pages/spotify";
import CompleteScreen from "./pages/complete";

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
