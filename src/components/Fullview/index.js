import { useParams } from "react-router-dom";
import Rating from "../UI/Rating";
import "./index.css";
import { useEffect, useState } from "react";
import SkeletonLayout from "./SkeletonLayout";

export default function Fullview() {
  const params = useParams();
  const [breedPhotos, setBreedPhotos] = useState([]);
  const [breedDetails, setBreedDetails] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    Promise.allSettled([
      fetch(
        `https://api.thecatapi.com/v1/breeds/${params.breed}?api_key=${process.env.REACT_APP_CAT_API_KEY}&breed_ids=${params.breed}&limit=10&page=1`,
        options
      ),
      fetch(
        `https://api.thecatapi.com/v1/images/search?api_key=${process.env.REACT_APP_CAT_API_KEY}&breed_ids=${params.breed}&limit=10&page=1`,
        options
      ),
    ])
      .then(async (res) => {
        if (res[0].status === "fulfilled") {
          const breed = await res[0].value.json();
          setBreedDetails({
            id: breed.id,
            name: breed.name,
            description: breed.description,
            lifeSpan: breed.life_span,
            origin: breed.origin,
            temperament: breed.temperament,
            adaptability: breed.adaptability,
            affectionLevel: breed.affection_level,
            childFriendly: breed.child_friendly,
            grooming: breed.grooming,
            intelligence: breed.intelligence,
            healthIssues: breed.health_issues,
            socialNeeds: breed.social_needs,
            strangerFriendly: breed.stranger_friendly,
          });
        }
        if (res[1].status === "fulfilled") {
          const photos = await res[1].value.json();
          setBreedPhotos(
            photos.slice(1, 10).map((value) => ({
              id: value.id,
              url: value.url,
            }))
          );
            setBreedDetails((prevBreedDetails)=>({
                ...prevBreedDetails,
                imageUrl: photos[0].url
            }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.breed]);
  return (
      Object.keys(breedDetails).length > 0 ? 
      <div className="fullview">
      <div className="col">
        <div className="breedImage">
          {/* <span className="highlight"></span> */}
          <img
            src={breedDetails.imageUrl}
            alt="breedimage"
          />
        </div>
        <div className="breedDetails">
          <h2>{breedDetails.name}</h2>
          <p>{breedDetails.description}</p>
          <div className="text-container">
            <b>Temperament:</b>
            <span>{breedDetails.temperament}</span>
          </div>
          <div className="text-container">
            <b>Origin:</b>
            <span>{breedDetails.origin}</span>
          </div>
          <div className="text-container">
            <b>Life Span:</b>
            <span>{breedDetails.lifeSpan}</span>
          </div>
          <div className="rate-container">
            <b>Adaptability:</b>
            <Rating rate={breedDetails.adaptability || 0} />
          </div>
          <div className="rate-container">
            <b>Affection level:</b>
            <Rating rate={breedDetails.affectionLevel || 0} />
          </div>
          <div className="rate-container">
            <b>Child Friendly:</b>
            <Rating rate={breedDetails.childFriendly || 0} />
          </div>
          <div className="rate-container">
            <b>Grooming:</b>
            <Rating rate={breedDetails.grooming || 0} />
          </div>
          <div className="rate-container">
            <b>Intelligence:</b>
            <Rating rate={breedDetails.intelligence || 0} />
          </div>
          <div className="rate-container">
            <b>Health issues:</b>
            <Rating rate={breedDetails.healthIssues || 0} />
          </div>
          <div className="rate-container">
            <b>Social needs:</b>
            <Rating rate={breedDetails.socialNeeds || 0} />
          </div>
          <div className="rate-container">
            <b>Stranger friendly:</b>
            <Rating rate={breedDetails.strangerFriendly || 0} />
          </div>
        </div>
      </div>
      <div className="col">
        <h2>Other photos</h2>
        <div className="photo-gallery">
          {breedPhotos.map((images) => (
            <img src={images.url} alt={images.id} key={images.id} />
          ))}
        </div>
      </div>
    </div> : <SkeletonLayout />
  );
}
