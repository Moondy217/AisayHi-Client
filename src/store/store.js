// Zustand 상태 관리

import create from 'zustand';

export const useStore = create((set) => ({
    accessToken: null,
    setAccessToken: (token) => set({ accessToken: token }),
  }));