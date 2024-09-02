import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../../../pages/Main';

export default function RouterLayout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}