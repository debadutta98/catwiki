import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Routes, Route, NavLink } from 'react-router-dom';
import Catalog from './components/Catalog';
import Fullview from './components/Fullview';

function App() {
  return (
    <>
    <nav style={{ margin: '1rem 3rem' }}>
      <NavLink to='/'>
        <img src={'./images/CatwikiLogo.svg'} alt='brand name' />
      </NavLink>
    </nav>
      <Routes>
          <Route path='/' element={
            <>
              <Main /> 
            </>
          }>
            <Route index element={
              <> 
                <Header /> 
                <Catalog />
              </>
            }/>
            <Route path='view/:breed' element={<Fullview/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
