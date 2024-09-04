import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainNavbar from '../../../pages/Main/components/MainNavbar';

export default function RootLayoutProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <MainNavbar />
      <div className="w-full h-full">
        {children}
      </div>
    </QueryClientProvider>
  );
}
