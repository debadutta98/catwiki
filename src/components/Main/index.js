import './index.css';
export default function Main(props){
    return <main>
        <div className="catalog">
        <div className="catalog__col">
            <h1><hr/>Why should you have a cat?</h1>
            <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
            <a href='/'>SEE MORE <span class="material-icons right-arrow">
                trending_flat
            </span></a>
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
    </main>
}