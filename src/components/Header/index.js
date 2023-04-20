import { Link } from 'react-router-dom';
import './index.css';
import SearchBox from './SearchBox';
export default function Header(props){
    return <>
        <div className='hero-section'>
            <div className='hero-details'>
                <figure>
                    <img src='./images/CatwikiLogo.svg' alt='logo' />
                    <figcaption>Get to know more about your cat breed</figcaption>
                </figure>
                <SearchBox />
            </div>
            <img src='./images/HeroImagesm.png' alt="cat images" srcSet='./images/HeroImagemd.png 2x, ./images/HeroImagelg.png 3x, ./images/HeroImagesm.png 1x'/>
        </div>
        <div className='most-searched'>
            <h4>Most Searched Breeds <hr/></h4>
                <div className='most-searched__details-container'>
                <h1>66+ Breeds For you to discover</h1>
                <a href='/'>SEE MORE <span className="material-icons right-arrow">
                    trending_flat
                </span></a>
            </div>
            <ul className='most-searched__breeds'>
                <li>
                        <Link to='/view/breed'>
                            <figure>
                                <img src='https://cdn2.thecatapi.com/images/anb.jpg' alt='firstimage'/>
                                <figcaption>Bangal</figcaption>
                            </figure>
                        </Link>
                </li>
                <li>
                        <a href='/'>
                            <figure>
                                <img src='https://cdn2.thecatapi.com/images/anb.jpg' alt='firstimage' />
                                <figcaption>Bangal</figcaption>
                            </figure>
                        </a> 
                </li>
                <li>
                        <a href='/'>
                            <figure>
                                <img src='https://cdn2.thecatapi.com/images/anb.jpg' alt='firstimage' />
                                <figcaption>Bangal</figcaption>
                            </figure>
                        </a>
                </li>
                <li>
                        <a href='/'>
                            <figure>
                                <img src='https://cdn2.thecatapi.com/images/anb.jpg' alt='firstimage' />
                                <figcaption>Bangal</figcaption>
                            </figure>
                        </a>
                </li>
            </ul>
        </div>
    </>;
}