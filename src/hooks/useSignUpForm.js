import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

export default function useSignUpForm() {
  const { signUp, signupError, isLoading } = useAuthStore();
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

    if (formData.userpwd !== formData.userpwdConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const signupSuccess = await signUp({
        username: formData.username,
        login_id: formData.login_id,
        userpwd: formData.userpwd,
      });

      if (signupSuccess) {
        alert('회원가입 성공!');
        navigate('/LoginPage');
      } else {
        alert(`회원가입 실패: ${signupError || '알 수 없는 오류 발생'}`);
      }
    } catch (error) {
      console.error('회원가입 중 오류:', error);
      alert('회원가입 중 오류가 발생했습니다.');
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