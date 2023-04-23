import { useLocation, useParams } from "react-router-dom";
import Rating from "../UI/Rating";
import "./index.css";
import { useEffect, useState } from "react";
import SkeletonLayout from "./SkeletonLayout";
import GallerySkeletonLayout from "./GallerySkeletonLayout";
import { ImageCard } from "../UI/ImageCard";

export default function Fullview() {
  const params = useParams();
  const location = useLocation();
  const [breedPhotos, setBreedPhotos] = useState([]);
  const [breedDetails, setBreedDetails] = useState({});
  useEffect(() => {
    if (params.breedId && params.imageId) {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const convertToJson = async (res) => await res.json();
      const errorHandler = (error) => {
        console.error(error);
      };
      fetch(
        `https://api.thecatapi.com/v1/images/${params.imageId}?api_key=${process.env.REACT_APP_CAT_API_KEY}`,
        options
      )
        .then(convertToJson)
        .then(async (response) => {
          if (Array.isArray(response.breeds) && response.breeds.length > 0) {
            const breedDetails = {
              imageUrl: response.url,
              name: response.breeds[0].name,
              description: response.breeds[0].description,
              lifeSpan: response.breeds[0].life_span,
              origin: response.breeds[0].origin,
              temperament: response.breeds[0].temperament,
              adaptability: response.breeds[0].adaptability,
              affectionLevel: response.breeds[0].affection_level,
              childFriendly: response.breeds[0].child_friendly,
              grooming: response.breeds[0].grooming,
              intelligence: response.breeds[0].intelligence,
              healthIssues: response.breeds[0].health_issues,
              socialNeeds: response.breeds[0].social_needs,
              strangerFriendly: response.breeds[0].stranger_friendly,
            };
            setBreedDetails(breedDetails);
            try {
              await fetch('/.netlify/functions/updateSearchedBreedView', {
                method: 'POST',
                body: JSON.stringify({
                  imageUrl: response.url,
                  imageId: response.breeds[0].reference_image_id,
                  id: response.breeds[0].id,
                  name: response.breeds[0].name,
                  description: response.breeds[0].description,
                })
              });
            } catch (error) {
              console.log(error);
            }
          } else {
            console.error("got empty response");
          }
        })
        .catch(errorHandler);
      fetch(
        `https://api.thecatapi.com/v1/images/search?api_key=${process.env.REACT_APP_CAT_API_KEY}&breed_ids=${params.breedId}&limit=10&page=1`,
        options
      )
        .then(convertToJson)
        .then((photos) => {
          if (Array.isArray(photos) && photos.length > 0) {
            setBreedPhotos(
              photos.map((value) => ({
                id: value.id,
                url: value.url,
              }))
            );
          } else {
            console.error("got empty response");
          }
        })
        .catch(errorHandler);
    } else {
      console.log('show empty page');
    }
  }, [params.breedId, params.imageId]);
  return (
    <div className="fullview">
      {Object.keys(breedDetails).length > 0 ? (
        <div className="col">
          <div className="breedImage">
            {location.state?.mostSearched && <span className="highlight"></span>}
            <ImageCard src={breedDetails.imageUrl} alt="breedimage" />
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
      ) : (
        <SkeletonLayout />
      )}
      {Array.isArray(breedPhotos) && breedPhotos.length > 0 ? (
        <div className="col">
          <h2>Other photos</h2>
          <div className="photo-gallery">
            {breedPhotos.map((images) => (
              <ImageCard src={images.url} alt={images.id} key={images.id} />
            ))}
          </div>
        </div>
      ) : (
        <GallerySkeletonLayout />
      )}
    </div>
  );
}
