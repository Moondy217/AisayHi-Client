import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainNavBar from '../../../pages/Main/components/MainNavBar';


export default function RootLayoutProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <MainNavBar/>
      <div className="container mx-auto">
        {children}
      </div>
    </QueryClientProvider>
  );
}
