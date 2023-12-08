import { useContext , useState } from "react";
import { FetchData } from "../../context/Context";
import { useParams } from "react-router-dom";
import PokemonCard from "../pokemonCard/PokemonCard";
import { v4 as uuidv4 } from "uuid";
import "../Pokemons/Gallery.scss";
import "./FilterResult.scss";
import LeftArrow from "../../assets/svg/LeftArrow";
import RightArrow from "../../assets/svg/RightArrow";

const FilterResults = () => {
  const filterParams = useParams();
  console.log(filterParams);
  const myDate = useContext(FetchData);
  const [startIndex, setStartIndex] = useState(0);
  console.log(myDate);
  const itemsPerPage = 12;

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };

  const filterPokes = myDate.data.filter((poke) =>
    poke.types.some((typeItem) => typeItem.type.name === filterParams.id)
  );
  console.log(filterPokes);

  return (
    <section className="galleryWrapper">
      <fieldset>
      <legend>
          {/* Pokemon Logo */}
          <img src="./../public/img/pokemon_logo.gif" alt="Pokemon Logo" />
        </legend>
      {filterPokes ? (
        <>
          <button onClick={handlePrevClick}>
            <RightArrow />
          </button>
          <section className="gallery">
            {filterPokes.slice(startIndex, startIndex + itemsPerPage)
              .map((pokemon) => (
                <PokemonCard
                  key={uuidv4()}
                  name={pokemon.species.name}
                  image={
                    pokemon.sprites.other["official-artwork"].front_shiny
                      ? pokemon.sprites.other["official-artwork"].front_shiny
                      : pokemon.sprites.other.home.front_default
                  }
                id={pokemon.id}
              />
            ))}
          </section>
          <button onClick={handleNextClick}>
            <LeftArrow />
          </button>
        </>
      ) : (
        <img
          className="loadingImg"
          src="../../../public/img/loadingDragon.gif"
          alt="Loading..."
        />
      )}
      </fieldset>
    </section>
  );
};

export default FilterResults;
