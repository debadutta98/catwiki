import { useEffect, useState } from 'react';
import BreedType from '../UI/BreedType';
import './index.css';
import BreedTypeSkeleton from '../UI/BreedType/BreedTypeSkeleton';

export default function MostSearchedBreed(props){
    const [mostSearchedBreed, setMostSearchedBreed] = useState([]);
    useEffect(()=>{
        fetch('/.netlify/functions/getMostSearchedBreeds?top=10')
        .then(async (res)=>await res.json())
        .then((result)=>{
            setMostSearchedBreed(result)
        }).catch(error=>{
            console.log(error);
        });
    }, []);
    return <div className='most-searched-breed'>
        <h2>Top 10 most searched breeds</h2>
        <ul className="breedList">
            {mostSearchedBreed.length > 0 ? mostSearchedBreed.map((breed) => <BreedType key={breed.id} url={breed.imageUrl} name={breed.name} descr={breed.description}/>): <BreedTypeSkeleton />}
        </ul>
    </div>
}