import { useContext } from "react";
import { FetchData, LoadingDone } from "../../context/Context";
import { v4 as uuidv4 } from "uuid";
import PokemonCard from "../pokemonCard/PokemonCard";
import "./Gallery.scss"

const PokemonGallery = () => {
	const myData = useContext(FetchData);
	const loading = useContext(LoadingDone);
	console.log(loading);
	return (
		<section className='gallery'>
			{myData
				? myData.data.map((pokemon) => (
						<PokemonCard
							key={uuidv4()}
							name={pokemon.species.name}
							image={
								pokemon.sprites.other["official-artwork"]
									.front_shiny
							}
							weight={pokemon.weight}
						/>
				  ))
				: console.log("loading")}
		</section>
	);
};

export default PokemonGallery;
