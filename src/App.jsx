import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/home/HomePage";
import LoginPage from "./Components/login/LoginPage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home/:username" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
