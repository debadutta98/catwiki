import { Link } from "react-router-dom";
import "./index.css";
import SearchBox from "./SearchBox";
import { useEffect, useState } from "react";
import { ImageCard } from "../UI/ImageCard";
import TopSearchedSkeleton from "./TopSearchedSkeleton";
export default function Header() {
  const [topSearchedbeed, setTopSearchedBreed] = useState([]);
  useEffect(() => {
    fetch("/.netlify/functions/getMostSearchedBreeds?top=4")
      .then(async (res) => await res.json())
      .then((result) => {
        setTopSearchedBreed(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="hero-section">
        <div className="hero-details">
          <figure>
            <img src="./images/CatwikiLogo.svg" alt="logo" />
            <figcaption>Get to know more about your cat breed</figcaption>
          </figure>
          <SearchBox />
        </div>
        <img
          src="./images/HeroImagesm.png"
          alt="cat images"
          srcSet="./images/HeroImagemd.png 2x, ./images/HeroImagelg.png 3x, ./images/HeroImagesm.png 1x"
        />
      </div>
      <div className="most-searched">
        <h4>
          Most Searched Breeds <hr />
        </h4>
        <div className="most-searched__details-container">
          <h1>66+ Breeds For you to discover</h1>
          <Link to="mostSearched">
            SEE MORE{" "}
            <span className="material-icons right-arrow">trending_flat</span>
          </Link>
        </div>
        <ul className="most-searched__breeds">
          {topSearchedbeed.length > 0 ? topSearchedbeed.map((value,index) => (
            <li key={value._id}>
              <Link to='breed' state={{ mostSearched: index === 0, imageId: value.imageId, breedId: value.id }}>
                <figure>
                  <ImageCard src={value.imageUrl} alt={value.name} />
                  <figcaption>{value.name}</figcaption>
                </figure>
              </Link>
            </li>
          )): <TopSearchedSkeleton/>}
        </ul>
      </div>
    </>
  );
}
