import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
export default function Main(){
    return <div style={{ margin: '0rem 3rem 2rem' }}>
        <Outlet/>
        <Footer />
    </div>;
}