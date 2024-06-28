import ReactDOM from "react-dom/client";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import LoginPage from './Components/LoginPage'
 import RegisterPage from "./Components/RegisterPage";
 import './index.css'
import NicknameLogin from "./Components/NicknameLogin";
import MainPage from "./Components/MainPage";


 export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<MainPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="quicklogin" element={<NicknameLogin />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="mainpage" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);