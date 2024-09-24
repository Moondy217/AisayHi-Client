import { Routes, Route } from 'react-router-dom';
import MainPage from '../../../pages/Main';
import LoginPage from '../../../pages/Login/index';
import LoginPage2 from '../../../pages/Login/index2';

import SignUpPage from '../../../pages/SignUp';
import useSession from '../../../hooks/useSession';

export default function RouterLayout() {
  useSession(); // 세션 훅 사용

  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/LoginPage2" element={<LoginPage2 />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
  );
}