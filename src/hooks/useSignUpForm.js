import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // CSRF 토큰을 가져오기 위해 js-cookie 사용

// Axios 요청에 CSRF 토큰을 추가
axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');

export default function useSignUpForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    login_id: '',
    userpwd: '',
    userpwdConfirm: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log('Form is not valid');
      event.stopPropagation();
      setValidated(true);
      return;
    }

    if (formData.userpwd !== formData.userpwdConfirm) {
      alert('비밀번호가 맞지 않습니다');
      return;
    }

    try {
      console.log('Sending data to server:', formData);
      const response = await axios.post('http://localhost:8000/pm/signup/', {
        username: formData.username,
        login_id: formData.login_id,
        userpwd: formData.userpwd,
      });

      console.log('Response received:', response);

      if (response.status === 201) {
        alert('회원가입 성공');
        navigate('/login'); // 회원가입 성공 시 로그인 페이지로 이동
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      console.error('Error occurred during signup:', error);
      // 상세한 오류 정보 출력
      if (error.response) {
        // 서버에서 응답을 받았지만 상태 코드가 2xx가 아닌 경우
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        alert(`Error: ${error.response.data.error || '회원가입 실패. 다시 시도해 주세요.'}`);
      } else if (error.request) {
        // 요청이 전송되었지만 응답을 받지 못한 경우
        console.error('Request was made but no response was received:', error.request);
        alert('No response from server. Please try again later.');
      } else {
        // 요청을 설정하는 동안 오류가 발생한 경우
        console.error('Error setting up the request:', error.message);
        alert('An unexpected error occurred. Please try again later.');
      }
      console.error('Error config:', error.config); // 요청 설정 관련 정보 출력
    }

    setValidated(true);
  };

  return {
    formData,
    validated,
    handleChange,
    handleSubmit,
  };
}
