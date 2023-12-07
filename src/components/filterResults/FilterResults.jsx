import { useContext } from "react";
import { FetchData } from "../../context/Context";
import { useParams } from "react-router-dom";
import PokemonCard from "../pokemonCard/PokemonCard";
import { v4 as uuidv4 } from "uuid";
import "./FilterResult.css";

const FilterResults = () => {
  const filterParams = useParams();
  // console.log(filterParams);
  const myDate = useContext(FetchData);
  console.log(myDate);
  const filterPokes = myDate.data.filter((poke) =>
    poke.types.some((typeItem) => typeItem.type.name === filterParams.id)
  );
  console.log(filterPokes);

  return (
    <section className="filterList">
      <p>The Result in Total :{filterPokes.length} Pokes</p>
      <div>
        {filterPokes.map((pokemon) => (
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
      </div>
    </section>
  );
};

export default FilterResults;
