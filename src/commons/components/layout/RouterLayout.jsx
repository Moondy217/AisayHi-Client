import { Routes, Route } from 'react-router-dom';
import MainPage from '../../../pages/Main';
import Detail from '../../../pages/Detail';
import LoginPage from '../../../pages/Login/index';
import SignUpPage from '../../../pages/SignUp';
import useSession from '../../../hooks/useSession';

export default function RouterLayout() {
  useSession(); // 세션 훅 사용

  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:goodsKey" element={<Detail />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
  );
}