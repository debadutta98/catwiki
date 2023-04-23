import { ImageCard } from '../UI/ImageCard';
import './index.css';
export default function Footer(props){
    return <footer>
        <a href='/'>
            <ImageCard src={'/images/CatwikiLogo.svg'} alt='brand name' />
        </a>
        <p>© created by <a href='https://github.com/debadutta98'>debadutta98</a></p>
    </footer>
};