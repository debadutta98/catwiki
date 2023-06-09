import { ImageCard } from '../ImageCard';
import './index.css';
export default function BreedType({url,name,descr}) {
    return <li className="breedtype">
        <div className="img-container">
            <ImageCard src={url} alt={name}/>
        </div>
        <div className="breed_details">
            <h2>{name}</h2>
            <p>{descr}</p>
        </div>
    </li>;
}