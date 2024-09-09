import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuthStore from '../store/useAuthStore';

const useLoginForm = () => {
  const [login_id, setLoginId] = useState('');
  const [userpwd, setUserpwd] = useState('');
  const { login } = useAuthStore(); // 로그인 함수 가져오기
  const [loginError, setLoginError] = useState(''); // 오류 상태 관리 추가
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/pm/login/', {
        login_id,
        userpwd,
      });

      if (response.status === 200) {
        if (response.data.user && response.data.user.username) {
          const expiry = new Date().getTime() + 60 * 60 * 1000; // 1시간 후 만료
          localStorage.setItem('user', JSON.stringify({ username: response.data.user.username, expiry }));
          login(response.data.user.username); // 서버에서 받은 username으로 상태 업데이트
          alert(`${response.data.user.username}님, 환영합니다!`); // 로그인 성공 메시지
          navigate('/');
        } else {
          alert('로그인 실패: 서버에서 사용자 정보를 받을 수 없습니다.');
        }
      } else if (response.status === 400) {
        // 클라이언트 요청 오류
        if (response.data.error === 'INVALID_CREDENTIALS') {
          alert('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.');
        } else if (response.data.error === 'USER_NOT_FOUND') {
          alert('로그인 실패: 아이디가 존재하지 않습니다.');
        } else {
          alert('로그인 실패: 잘못된 요청입니다.');
        }
      } else if (response.status === 401) {
        // 인증 오류
        alert('로그인 실패: 인증 정보가 올바르지 않습니다.');
      } else if (response.status === 500) {
        // 서버 오류
        alert('서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.');
      } else {
        alert('로그인 실패: 알 수 없는 오류가 발생했습니다.');
      }
    } catch (error) {
      if (error.response) {
        // 서버가 응답했으나 상태 코드가 범위 밖의 값일 때
        alert(`로그인 중 오류 발생: ${error.response.data.message || '알 수 없는 오류'}`);
      } else if (error.request) {
        // 요청이 만들어졌으나 응답이 없을 때
        alert('로그인 중 네트워크 오류가 발생했습니다.');
      } else {
        // 오류가 발생한 요청을 설정할 때
        alert('로그인 중 오류가 발생했습니다.');
      }
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
