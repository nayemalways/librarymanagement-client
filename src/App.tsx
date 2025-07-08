import { Outlet } from 'react-router-dom';
import Navbar from './components/module/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;