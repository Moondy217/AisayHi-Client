import { useState } from 'react';
import axios from 'axios';

export default function useLoginForm() {
  const [formData, setFormData] = useState({
    login_id: '',
    userpwd: '',
  });
  const [loginError, setLoginError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log('Sending login request with data:', formData);  // 여기서 폼 데이터 확인

    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        login_id: formData.login_id,
        password: formData.userpwd,
      });

      console.log('Response received:', response.data);  // 응답 데이터 확인

      // 로그인 성공 시 처리
    } catch (error) {
      console.error('Login failed:', error);  // 에러 확인
      setLoginError('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loginError,
  };
}
