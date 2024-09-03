import { Routes, Route } from 'react-router-dom';
import MainPage from '../../../pages/Main';
import LoginPage from '../../../pages/Login';
import SignUpPage from '../../../pages/SignUp';

export default function RouterLayout() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
  );
}