import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuthStore from '../store/useAuthStore'; // 로그인 상태 스토어 import

const useLoginForm = () => {
  const [login_id, setLoginId] = useState('');
  const [userpwd, setUserpwd] = useState('');
  const { login } = useAuthStore(); // 로그인 함수 가져오기
  const [loginError, setLoginError] = useState(''); // 오류 상태 관리 추가
  const navigate = useNavigate(); // Zustand에서 로그인 함수 가져오기

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/pm/login/', {
        login_id,
        userpwd,
      });

      if (response.status === 200) {
        if (response.data.user && response.data.user.username) {
          login(response.data.user.username); // 서버에서 받은 username으로 상태 업데이트
          alert(`${response.data.user.username}님, 환영합니다!`); // 로그인 성공 메시지
          navigate('/');
        } else {
          alert('로그인 실패: 서버에서 사용자 이름을 받지 못했습니다.');
        }
      } else {
        alert('로그인 실패: ' + response.data.error);
      }
    } catch (error) {
      setLoginError('로그인 중 오류가 발생했습니다.'); // 오류 상태 업데이트
    }
  };
  
  return {
    login_id,
    setLoginId,
    userpwd,
    setUserpwd,
    handleLogin,
    loginError, // 오류 상태를 반환
  };
};

export default useLoginForm;
