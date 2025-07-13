import { Outlet } from 'react-router-dom';
import Navbar from './components/module/navbar/Navbar';
 
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;