import create from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  token: null,
  signupError: '',
  isLoading: false,

  // 회원가입 액션
  signUp: async (formData) => {
    set({ isLoading: true });
    try {
      const response = await axios.post('http://localhost:8000/api/signup/', formData);
      const { access, refresh } = response.data; // 서버가 JWT 토큰을 발급하는 응답
      set({ token: access, signupError: '', isLoading: false });

      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      
      return true; // 회원가입 성공 시 true 리턴
    } catch (error) {
      console.error('Signup failed:', error);
      set({ signupError: '회원가입에 실패했습니다. 다시 시도해주세요.', isLoading: false });
      return false; // 회원가입 실패 시 false 리턴
    }
  },
}));

export default useAuthStore;