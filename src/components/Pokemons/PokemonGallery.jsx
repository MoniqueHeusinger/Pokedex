import { useContext } from "react";
import { FetchData, LoadingDone, ReadyToRender } from "../../context/Context";
import { v4 as uuidv4 } from "uuid";
import PokemonCard from "../pokemonCard/PokemonCard";
import "./Gallery.scss";

const PokemonGallery = () => {
	const myData = useContext(FetchData);
	const loading = useContext(LoadingDone);
	const render = useContext(ReadyToRender);
	console.log(render);
	const renderGallery = () => {
		myData.data.map((pokemon) => (
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
		));
	};
	return (
		<section className='gallery'>
			{loading
				? myData.data.map((pokemon) => (
						<PokemonCard
							key={uuidv4()}
							name={pokemon.species.name}
							image={
								pokemon.sprites.other["official-artwork"]
									.front_shiny
									? pokemon.sprites.other["official-artwork"]
											.front_shiny
									: pokemon.sprites.front_default
							}
							id={pokemon.id}
						/>
				  ))
				: console.log("loading")}
		</section>
	);
};

export default PokemonGallery;
