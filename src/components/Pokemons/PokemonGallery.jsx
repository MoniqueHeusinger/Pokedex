import { useContext, useState } from "react";
import { FetchData, LoadingDone, ReadyToRender } from "../../context/Context";
import { v4 as uuidv4 } from "uuid";
import PokemonCard from "../pokemonCard/PokemonCard";
import "./Gallery.scss";

import LeftArrow from "../../assets/svg/LeftArrow";
import RightArrow from "../../assets/svg/RightArrow";

const PokemonGallery = () => {
	const render = useContext(ReadyToRender);
	const myData = useContext(FetchData);
	const loading = useContext(LoadingDone);
	const [startIndex, setStartIndex] = useState(0);
	const itemsPerPage = 12;

	const handleNextClick = () => {
		setStartIndex((prevIndex) => prevIndex + itemsPerPage);
	};

	const handlePrevClick = () => {
		setStartIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
	};

	return (
		<section className='galleryWrapper'>
			{myData.data.length === render.render ? (
				<>
					<button onClick={handlePrevClick}>
						<RightArrow />
					</button>
					<section className='gallery'>
						{myData.data
							.slice(startIndex, startIndex + itemsPerPage)
							.map((pokemon) => (
								<PokemonCard
									key={uuidv4()}
									name={pokemon.species.name}
									image={
										pokemon.sprites.other[
											"official-artwork"
										].front_shiny
											? pokemon.sprites.other[
													"official-artwork"
											  ].front_shiny
											: pokemon.sprites.other.home
													.front_default
									}
									id={pokemon.id}
									abilities
								/>
							))}
					</section>
					<button onClick={handleNextClick}>
						<LeftArrow />
					</button>
				</>
			) : (
				<div className='loadingImg'></div>
			)}
		</section>
	);
};

export default PokemonGallery;
