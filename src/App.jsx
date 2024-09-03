import RootLayoutProvider from './commons/components/layout/RootLayoutProvider.jsx';
import RouterLayout from './commons/components/layout/RouterLayout.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <RootLayoutProvider>
        <RouterLayout />
      </RootLayoutProvider>
    </Router>
  );
}

export default App;