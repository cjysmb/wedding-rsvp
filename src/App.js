import './App.css';
import { Home } from './screens/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Home />
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
