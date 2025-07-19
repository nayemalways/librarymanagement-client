import { Outlet } from 'react-router-dom';
import Navbar from './components/module/navbar/Navbar';
import Footer from './components/module/app_component/Footer';
import{ Toaster } from 'react-hot-toast';
 
const App = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;