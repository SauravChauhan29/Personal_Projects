
import { Outlet } from 'react-router-dom';

import './App.css';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/footer/Footer';
import { Suspense } from 'react';
// import Homes from './pages/home/Homes';




function App({cart}) {
  return (

    <div className="App">
      <Navbar cart={cart}/>
      <div className="wrappermain">

      <Suspense fallback = {<h1>kindly please wait</h1>}>

      <Outlet/>
      </Suspense>

      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
