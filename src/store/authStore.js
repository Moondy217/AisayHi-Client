import create from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  token: null,
  login_id: '', // login_id 상태 추가
  userpwd: '', // userpwd 상태 추가
  signupError: '',
  loginError: '',
  isLoading: false,

  // login_id와 userpwd를 업데이트하는 함수 추가
  setLoginId: (login_id) => set({ login_id }),
  setUserpwd: (userpwd) => set({ userpwd }),

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

  // 로그인 액션 (레이블 오류 수정)
  login: async (navigate) => {
    set({ isLoading: true, loginError: '' });
    try {
      const { login_id, userpwd } = useAuthStore.getState();
      const response = await axios.post('http://localhost:8000/api/login/', {
        login_id,
        userpwd,
      });
      
      const { access, refresh } = response.data; // 로그인 성공 시 받은 JWT 토큰
      set({ token: access, isLoading: false, loginError: '' });

      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // 로그인 성공 후 페이지 이동
      navigate('/'); // 로그인 성공 시 메인 페이지로 이동
      
      return true; // 로그인 성공 시 true 리턴
    } catch (error) {
      console.error('Login failed:', error);
      set({ loginError: '로그인에 실패했습니다. 다시 시도해주세요.', isLoading: false });
      return false; // 로그인 실패 시 false 리턴
    }
  },

  // 로그아웃 액션
  logout: () => {
    set({ token: null });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
}));

export default useAuthStore;
