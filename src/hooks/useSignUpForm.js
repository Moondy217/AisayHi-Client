import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      if (formData.userpwd !== formData.userpwdConfirm) {
        alert('비밀번호가 맞지 않습니다');
        return;
      }

      // 회원가입 API (주소 확인!!)
      try {
        const response = await axios.post('http://localhost:8000/pm/signup/', {
          username: formData.username,
          login_id: formData.login_id,
          userpwd: formData.userpwd,
        });

        if (response.status === 200) {
          alert('회원가입 성공');
          navigate('/login'); // 회원가입 성공 시 로그인 페이지로 이동
        } else {
          alert('회원가입 실패');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
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
