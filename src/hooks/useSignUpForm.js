import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Axios 사용

export default function useSignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    loginId: '',
    userPwd: '',
    userPwdConfirm: '',
  });
  const [signupError, setSignupError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

    if (formData.userpwd !== formData.userpwdConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    setIsLoading(true); // 로딩 상태 설정

    try {
      const response = await axios.post('http://localhost:8000/pm/signup/', {
        username: formData.username,
        loginId: formData.loginId,
        userPwd: formData.userPwd,
      });

      if (response.status === 201) {
        alert('회원가입 성공!');
        navigate('/LoginPage'); // 회원가입 성공 시 로그인 페이지로 이동
      } else {
        setSignupError('회원가입 실패');
        alert('회원가입 실패');
      }
    } catch (error) {
      console.error('회원가입 중 오류:', error);
      setSignupError('회원가입 중 오류가 발생했습니다.');
      alert('회원가입 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false); // 로딩 상태 해제
    }
  };

  return {
    formData,
    signupError,
    isLoading,
    handleChange,
    handleSubmit,
  };
}
