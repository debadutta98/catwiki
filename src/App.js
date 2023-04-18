import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div style={{ margin: '1rem 3rem' }}>
      <a href='/'>
        <img src={'./images/CatwikiLogo.svg'} alt='brand name' />
      </a>
    </div>
    <div style={{ margin: '0rem 3rem 2rem' }}>
      <Routes>
          <Route path='/' element={<><Header /> <Main /></>}>
        </Route>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
