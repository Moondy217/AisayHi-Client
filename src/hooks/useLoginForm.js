import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/store'; // Zustand store에서 상태 가져오기
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const setAccessToken = useStore((state) => state.setAccessToken); // Zustand의 상태 업데이트 함수
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate
  
  // 로그인 기능
  const login = async (login_id, userpwd) => {
    setLoading(true);
    setError(null);

    // 서버로 보내는 데이터를 콘솔에 출력
    console.log("전송되는 데이터:", {
      login_id,
      userpwd,
    });
    
    try {
      const response = await axios.post('/api/login/', {
        login_id,
        userpwd,
      });

      const { access, refresh } = response.data;
      
      // JWT 토큰을 Zustand 또는 localStorage에 저장
      setAccessToken(access);
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // 로그인 성공 시 Toast 메시지 띄우기
      toast.success('로그인 성공!');

      // 메인 페이지로 이동
      navigate('/');

      setLoading(false);
      return response.data; // 필요에 따라 리턴 값 사용
    } catch (err) {
      setError(err.response?.data?.message || '로그인에 실패했습니다.');
      setLoading(false);
    }
  };

  // 리프레시 토큰을 사용해 액세스 토큰 갱신 기능
  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      setError('리프레시 토큰이 없습니다. 다시 로그인하세요.');
      return false;
    }

    try {
      const response = await axios.post('/api/token/refresh/', { refresh: refreshToken });
      const { access } = response.data;

      // 새로운 액세스 토큰을 저장
      setAccessToken(access);
      localStorage.setItem('accessToken', access);
      return true;
    } catch {
      setError('로그인에 실패했습니다.');
      setLoading(false);
    }
  };

  // 자동 로그인: 토큰이 있으면 자동으로 상태 설정
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [setAccessToken]);

  // 로그아웃 기능
  const logout = () => {
    // 저장된 토큰 제거
    setAccessToken(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // 로그아웃 후 페이지 이동
    navigate('/login');
  };

  return { login, refreshAccessToken, logout, loading, error };
};