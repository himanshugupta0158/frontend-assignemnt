import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Route1 from './pages/Route1';
import Route2 from './pages/Route2';
import Route3 from './pages/Route3';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Route1 />} />
          <Route path="/route2" element={<Route2 />} />
          <Route path="/route3" element={<Route3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;