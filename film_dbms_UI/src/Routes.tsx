
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="users/:id" element={<Users />} /> */}
    </Routes>
  </BrowserRouter>
);

export default Routes;
