import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FirmPage from './pages/FirmPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />    
    <Route path="/firm" element={<FirmPage />} />
      
    </Routes>
  </BrowserRouter>
);
export default App;