import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../commons/api/axiosInstance';
import useAuthStore from '../store/useAuthStore';

const useLoginForm = () => {
  const [login_id, setLoginId] = useState('');
  const [userpwd, setUserpwd] = useState('');
  const { login } = useAuthStore(); // 로그인 함수 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate

  const handleLogin = async () => {
    try {
      console.log('로그인 데이터:', { login_id, userpwd }); // 디버깅용 로그

      const response = await api.post('/pm/login/', {
        login_id,
        userpwd,
      });

      if (response.status === 200) {
        const { user } = response.data;

        if (user && user.username) {
          const expiry = new Date().getTime() + 60 * 60 * 1000; // 1시간 후 만료
          localStorage.setItem('user', JSON.stringify({ username: user.username, expiry }));
          login(user.username); // 상태 업데이트
          alert(`${user.username}님, 환영합니다!`);
          navigate('/');
        } else {
          alert('로그인 실패: 사용자 정보를 불러올 수 없습니다.');
        }
      } else {
        handleErrorResponse(response.status, response.data);
      }
    } catch (error) {
      handleCatchError(error);
    }
  };

  const handleErrorResponse = (status, data) => {
    if (status === 400) {
      if (data.error === 'INVALID_CREDENTIALS') {
        alert('아이디 또는 비밀번호가 잘못되었습니다.');
      } else if (data.error === 'USER_NOT_FOUND') {
        alert('아이디가 존재하지 않습니다.');
      } else {
        alert('잘못된 요청입니다.');
      }
    } else if (status === 401) {
      alert('인증 정보가 올바르지 않습니다.');
    } else if (status === 500) {
      alert('서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } else {
      alert('알 수 없는 오류가 발생했습니다.');
    }
  };

  const handleCatchError = (error) => {
    if (error.response) {
      alert(`로그인 오류: ${error.response.data.message || '알 수 없는 오류'}`);
    } else if (error.request) {
      alert('네트워크 오류가 발생했습니다.');
    } else {
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  return {
    login_id,
    setLoginId,
    userpwd,
    setUserpwd,
    handleLogin,
  };
};

export default useLoginForm;
