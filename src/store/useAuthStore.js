import create from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false, // 로그인 여부
  username: '', // 사용자 이름

  // 로그인 함수: username 상태 업데이트
  login: (username) => {
    set({ isAuthenticated: true, username });
  },
  
  // 로그아웃 함수: 상태 초기화
  logout: () => set({ isAuthenticated: false, username: '' }),
}));

export default useAuthStore;
