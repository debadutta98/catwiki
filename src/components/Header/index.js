import './index.css';
import SearchBox from './SearchBox';
export default function Header(props){
    return <header>
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
                <a href='/'>SEE MORE <span class="material-icons right-arrow">
                    trending_flat
                </span></a>
            </div>
            <ul className='most-searched__breeds'>
                <li>
                        <a href='/'>
                            <figure>
                                <img src='https://cdn2.thecatapi.com/images/anb.jpg' alt='firstimage'/>
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
    </header>;
}