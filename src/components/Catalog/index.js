import { Link } from 'react-router-dom';
import './index.css';
export default function Catalog() {
    return <div className="catalog">
        <div className="catalog__col">
            <h1><hr />Why should you have a cat?</h1>
            <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
            <Link to='/'>SEE MORE <span className="material-icons right-arrow">
                trending_flat
            </span></Link>
        </div>
        <div className="catalog__col">
            <div>
                <img src="./images/image 2.png" alt="catalog-2" />
                <img src="./images/image 1.png" alt="catalog-1" />
            </div>
            <div>
                <img src="./images/image 3.png" alt="catalog-3" />
            </div>
        </div>
    </div>
}