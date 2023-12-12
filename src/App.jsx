import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/place/new' element={<NewPlace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
