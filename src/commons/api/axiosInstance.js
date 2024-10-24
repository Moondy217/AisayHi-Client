import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000, // 요청 제한 시간 5초 설정
  });
  
  export default api;