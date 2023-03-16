import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import MarketPage from './Pages/MarketPage';
import ChartPage from './Pages/ChartPage';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/market/:id" element={<MarketPage />} />
          <Route path="/chart/:id" element={<ChartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
