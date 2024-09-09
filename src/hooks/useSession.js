import { useEffect } from 'react';
import useAuthStore from '../store/useAuthStore';

const useSession = () => {
  const { login, logout } = useAuthStore();

  useEffect(() => {
    const checkSession = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const now = new Date().getTime();
        if (user.expiry > now) {
          login(user.username); // Zustand 상태 초기화
        } else {
          localStorage.removeItem('user'); // 세션 만료 시 사용자 정보 삭제
          logout(); // 로그아웃 처리
        }
      } else {
        logout(); // 사용자 정보가 없는 경우 로그아웃 처리
      }
    };

    checkSession();
  }, [login, logout]);

};

export default useSession;
