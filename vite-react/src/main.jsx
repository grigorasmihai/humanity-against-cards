import ReactDOM from "react-dom/client";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import LoginPage from './Components/LoginPage'
 import RegisterPage from "./Components/RegisterPage";
 import './index.css'


 export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);