import './assets/css/App.css';
import Navigation from './components/common/Navigation';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  

  return (
    <div className="App">
      <Navigation />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
