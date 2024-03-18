import './App.css';
import { Home } from './screens/Home';

import { Routes, Route, HashRouter } from 'react-router-dom';

const App = () => {
  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={
          <Home />
        } />
      </Routes>
    </HashRouter>
  );
};

export default App;
