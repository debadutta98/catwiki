import Rating from '../UI/Rating';
import './index.css';
const dummyJson = [
    {
        "id": "J2PmlIizw",
        "url": "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg",
        "width": 1080,
        "height": 1350
    },
    {
        "id": "IFXsxmXLm",
        "url": "https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg",
        "width": 973,
        "height": 973
    },
    {
        "id": "8ciqdpaO5",
        "url": "https://cdn2.thecatapi.com/images/8ciqdpaO5.jpg",
        "width": 1080,
        "height": 809
    },
    {
        "id": "aaxNf4D0H",
        "url": "https://cdn2.thecatapi.com/images/aaxNf4D0H.jpg",
        "width": 1080,
        "height": 1350
    },
    {
        "id": "8RsP7Xt3h",
        "url": "https://cdn2.thecatapi.com/images/8RsP7Xt3h.jpg",
        "width": 1024,
        "height": 817
    },
    {
        "id": "byQhFO7iV",
        "url": "https://cdn2.thecatapi.com/images/byQhFO7iV.jpg",
        "width": 1795,
        "height": 2397
    },
    {
        "id": "UhqCZ7tC4",
        "url": "https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg",
        "width": 1600,
        "height": 1200
    },
    {
        "id": "NwMUoJYmT",
        "url": "https://cdn2.thecatapi.com/images/NwMUoJYmT.jpg",
        "width": 2160,
        "height": 1440
    },
    {
        "id": "udZiLDG_E",
        "url": "https://cdn2.thecatapi.com/images/udZiLDG_E.jpg",
        "width": 880,
        "height": 1100
    },
    {
        "id": "4-5SzDNIL",
        "url": "https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg",
        "width": 880,
        "height": 1100
    }
];
export default function Fullview() {
    return <div className='fullview'>
        <div className='col'>
            <div className='breedImage'>
                <span></span>
                <img src='https://cdn2.thecatapi.com/images/anb.jpg' alt='breedimage'/>
            </div>
            <div className='breedDetails'>
                <h2>Bengal</h2>
                <p>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</p>
                <div className='text-container'>
                    <b>Temperament:</b>
                    <span>Alert, Agile, Energetic, Demanding, Intelligent</span>
                </div>
                <div className='text-container'>
                    <b>Origin:</b>
                    <span>United States</span>
                </div>
                <div className='text-container'>
                    <b>Life Span:</b>
                    <span>12 - 15 years</span>
                </div>
                <div className='rate-container'>
                    <b>Adaptability:</b>
                    <Rating rate={5}/>
                </div>
                <div className='rate-container'>
                    <b>Affection level:</b>
                    <Rating rate={5} />
                </div>
                <div className='rate-container'>
                    <b>Child Friendly:</b>
                    <Rating rate={5} />
                </div>
                <div className='rate-container'>
                    <b>Grooming:</b>
                    <Rating rate={5} />
                </div>
                <div className='rate-container'>
                    <b>Intelligence:</b>
                    <Rating rate={5} />
                </div>
                <div className='rate-container'>
                    <b>Health issues:</b>
                    <Rating rate={5} />
                </div>
                <div className='rate-container'>
                    <b>Social needs:</b>
                    <Rating rate={5} />
                </div>
                <div className='rate-container'>
                    <b>Stranger friendly:</b>
                    <Rating rate={5} />
                </div>
            </div>
        </div>
        <div className='col'>
            <h2>Other photos</h2> 
            <div className='photo-gallery'>
                {
                    dummyJson.map((images)=><img src={images.url} alt={images.id} key={images.id} />)
                }
            </div>
        </div>
    </div>
}