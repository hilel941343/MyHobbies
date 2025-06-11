import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import hobbies from './data/hobbies';
import HobbyCard from './components/HobbyCard';
import HobbyDetail from './pages/HobbyDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll', height: '100vh' }}>
              {hobbies.map(hobby => (
                <div key={hobby.id} style={{ scrollSnapAlign: 'start' }}>
                  <HobbyCard hobby={hobby} />
                </div>
              ))}
            </div>
          }
        />
        <Route path="/hobby/:id" element={<HobbyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
