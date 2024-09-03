import { useState } from 'react';
import axios from 'axios';

function useLoginForm() {
  const [formData, setFormData] = useState({
    login_id: '',
    userpwd: ''
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.login_id && formData.userpwd) {
      setValidated(true);
      try {
        const response = await axios.post('/api/login', formData);
        console.log('Login successful:', response.data);
        // 로그인 성공 후 추가 로직 처리
      } catch (error) {
        console.error('Login failed:', error);
        // 에러 처리 로직 추가
      }
    } else {
      setValidated(false);
    }
  };

  return {
    formData,
    validated,
    handleChange,
    handleSubmit,
  };
}

export default useLoginForm;
