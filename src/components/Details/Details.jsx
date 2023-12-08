import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FetchData } from "../../context/Context";
import "./Details.css";
import { Link } from "react-router-dom";

const Details = () => {
	const pokeParams = useParams();
	const [poke, setPoke] = useState({});

	const myData = useContext(FetchData);

	const singelData = myData.data.find(
		(dataItem) => dataItem.id.toString() === pokeParams.id.toString(),
	);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeParams.id}`)
			.then((res) => res.json())
			.then((data) => setPoke(data));
	}, [pokeParams]);

	return (
		<>
			{singelData ? (
				<section className='Details'>
					<div>
						<h3>{singelData.species.name} </h3>
						<h3>#00{singelData.id} </h3>
					</div>
					<img
						src={
							singelData.sprites.other["official-artwork"]
								.front_shiny
						}
						alt=''
					/>

					<div>
						<h4> Height: </h4>
						<p>{singelData.height} m</p>
					</div>
					<div>
						<h4> Weight: </h4>
						<p>{singelData.weight} kg</p>
					</div>
					<div>
						<h4> Color: </h4>
						<p>{poke?.color?.name}</p>
					</div>
					<div>
						<h4> Habitat: </h4>
						<p>{poke?.habitat?.name}</p>
					</div>
					<div>
						<h4>Type:</h4>
						<div>
							<p>{singelData.types[0]?.type.name}</p>
							<p>{singelData.types[1]?.type.name}</p>
							{singelData.types.length > 2 ? (
								<Link to={`/more-types/${pokeParams.id}`}>
									<p>more types</p>
								</Link>
							) : (
								<span></span>
							)}
						</div>
					</div>
					<div>
						<h4>Abilities:</h4>
						<div>
							<p>{singelData.abilities[0]?.ability.name}</p>
							<p>{singelData.abilities[1]?.ability.name}</p>
							{singelData.abilities.length > 2 ? (
								<Link to={`/more-abilities/${pokeParams.id}`}>
									<p>more abilities</p>
								</Link>
							) : (
								<span></span>
							)}
						</div>
					</div>

					<div>
						<h4>Moves:</h4>
						<div>
							<p>{singelData.moves[0]?.move.name}</p>
							<p>{singelData.moves[1]?.move.name}</p>
							{singelData.moves.length > 2 ? (
								<Link to={`/more-moves/${pokeParams.id}`}>
									<p>more moves</p>
								</Link>
							) : (
								<span></span>
							)}
						</div>
					</div>
					<div>
						<h4>Stats:</h4>
						<div>
							<p>HP:{singelData.stats[0].base_stat}</p>
							<p>Attack:{singelData.stats[1].base_stat}</p>
							<p>Defense:{singelData.stats[2].base_stat}</p>
							<p>
								Special-Attack:{singelData.stats[3].base_stat}
							</p>
							<p>
								Special-Defense:{singelData.stats[4].base_stat}
							</p>
							<p>Speed:{singelData.stats[5].base_stat}</p>
						</div>
					</div>
				</section>
			) : (
				<p>loading...</p>
			)}
		</>
	);
};

export default Details;
