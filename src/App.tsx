import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SpotifySyncPage from "./pages/spotify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/spotify" element={<SpotifySyncPage />} />
    </Routes>
  );
}

export default App;
