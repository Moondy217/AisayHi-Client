import RootLayoutProvider from './commons/components/layout/RootLayoutProvider.jsx';
import RouterLayout from './commons/components/layout/RouterLayout.jsx';

function App() {
  return (
    <RootLayoutProvider>
      <RouterLayout />
    </RootLayoutProvider>
  );
}

export default App;