import { useRef, useState, useEffect } from "react";
import style from "./searchbox.module.css";
import { useNavigate } from "react-router-dom";
export default function SearchBox() {
  const [suggestions, setSuggestions] = useState([]);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef();
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/breeds/?api_key=${process.env.REACT_APP_CAT_API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (res) => await res.json())
      .then((breeds) =>
        setBreeds(
          breeds.map((breed) => ({
            id: breed.id,
            name: breed.name,
            imageId: breed.reference_image_id
          }))
        )
      )
      .catch((err) => {
        console.log(err);
      }); 
  }, []);
  const onChangeSearchHandler = (event) => {
    const value = event.target.value.trim().toLowerCase();
    if (value) {
      setSuggestions(
        breeds.filter((breed) => breed.name.toLowerCase().includes(value))
      );
    } else {
      setSuggestions([]);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setDisable(true);
    fetch(
      `https://api.thecatapi.com/v1/breeds/search/?name=${searchRef.current.value}`
    )
      .then(async (res) => await res.json())
      .then((breeds) => {
        if (breeds.length > 0) {
          navigate('breed', {
            state: {
              imageId: breeds[0].reference_image_id,
              breedId: breeds[0].id
            }})
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        searchRef.current.value = "";
        setDisable(false);
      });
  };
  
  return (
    <div className={style["searchbox-container"]}>
      <form
        className={style.searchbox}
        onSubmit={onSubmitHandler}
      >
        <input
          type="text"
          placeholder="Enter your breed"
          className={style.searchinput}
          onChange={onChangeSearchHandler}
          ref={searchRef}
          disabled={disable}
        />
        <button
          className={`material-icons ${style.searchicon}`}
          disabled={disable}
        >
          search
        </button>
      </form>
      {suggestions.length > 0 && (
        <div className={style["suggestions-container"]}>
          <ul className={style.suggestions}>
            {suggestions.map((suggestionBreed, index) => (
              <li
                key={index}
                onClick={() => navigate('breed',{
                  state:{
                    imageId: suggestionBreed.imageId,
                    breedId: suggestionBreed.id
                  }
                })}
              >
                {suggestionBreed.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
