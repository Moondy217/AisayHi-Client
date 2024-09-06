import axios from './axiosConfig';

export const refreshToken = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/token/refresh/', {
      refresh: localStorage.getItem('refresh_token')
    });

    localStorage.setItem('access_token', response.data.access);
    return response.data.access;
  } catch (error) {
    console.error('Unable to refresh token:', error);
    // 필요 시 로그아웃 처리
  }
};