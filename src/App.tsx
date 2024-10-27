import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/signIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
