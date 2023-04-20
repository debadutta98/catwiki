import BreedType from '../UI/BreedType';
import './index.css';
const dummyJson = [
    { 
      id: 1, 
      url:'https://cdn2.thecatapi.com/images/J2PmlIizw.jpg',
      name:'Bengal',
      descr:"Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it."
    },
    {
        id: 2,
        url: 'https://cdn2.thecatapi.com/images/J2PmlIizw.jpg',
        name: 'Bengal',
        descr: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it."
    },
    {
        id: 3,
        url: 'https://cdn2.thecatapi.com/images/J2PmlIizw.jpg',
        name: 'Bengal',
        descr: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it."
    },
    {
        id: 4,
        url: 'https://cdn2.thecatapi.com/images/J2PmlIizw.jpg',
        name: 'Bengal',
        descr: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it."
    },
]
export default function MostSearchedBreed(props){
    return <div className='most-searched-breed'>
        <h2>Top 10 most searched breeds</h2>
        <ul className="breedList">
            {dummyJson.map((breed)=><BreedType key={breed.id} url={breed.url} name={breed.name} descr={breed.descr}/>)}
        </ul>
    </div>
}