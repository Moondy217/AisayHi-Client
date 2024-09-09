import create from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false, // 로그인 여부
  username: '', // 사용자 이름

  // 로그인 함수: username 상태 업데이트
  login: (username) => {
    console.log('Before update:', username); // 상태 업데이트 전 확인
    set({ isAuthenticated: true, username });
    console.log('After update:', username); // 상태 업데이트 후 확인
  },
  
  // 로그아웃 함수: 상태 초기화
  logout: () => set({ isAuthenticated: false, username: '' }),
}));

export default useAuthStore;
