import create from 'zustand';

const useMenuStore = create((set) => ({
  isSubCateMenu: false, // 초기 상태
  toggleMenu: () => set((state) => ({ isSubCateMenu: !state.isSubCateMenu })), // 상태 전환 함수
}));

export default useMenuStore;