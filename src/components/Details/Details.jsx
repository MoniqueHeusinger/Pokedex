// import { useParams } from "react-router-dom";
// import { useContext, useEffect, useState } from "react";
// import { FetchData } from "../../context/Context";
// import "./Details.css";

// const Details = () => {
// 	const pokeParams = useParams();
// 	const [poke, setPoke] = useState({});
// 	const [singelData, setSingleData] = useState([]);
// 	const myData = useContext(FetchData);
// 	console.log(myData);
// 	useEffect(() => {
// 		setSingleData(
// 			[...myData.data].find(
// 				(dataItem) =>
// 					dataItem.id.toString() === pokeParams.id.toString(),
// 			),
// 		);
// 	}, [myData]);
// 	useEffect(() => {
// 		fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeParams.id}`)
// 			.then((res) => res.json())
// 			.then((data) => setPoke(data))
// 			.catch((err) => console.log(err));
// 	}, []);
// 	console.log(poke);
// 	return (
// 		<>
// 			{singelData && poke ? (
// 				<section className='Details'>
// 					<div>
// 						<h3>{singelData.species.name} </h3>
// 						<h3>#00{singelData.id} </h3>
// 					</div>
// 					<img
// 						src={
// 							singelData.sprites.other["official-artwork"]
// 								.front_shiny
// 						}
// 						alt=''
// 					/>

// 					<div>
// 						<h4> Height: </h4>
// 						<p>{singelData.height} m</p>
// 					</div>
// 					<div>
// 						<h4> Weight: </h4>
// 						<p>{singelData.weight} kg</p>
// 					</div>
// 					<div>
// 						<h4> Color: </h4>
// 						<p>{poke?.color?.name}</p>
// 					</div>
// 					<div>
// 						<h4> Habitat: </h4>
// 						<p>{poke?.habitat?.name}</p>
// 					</div>
// 					<div>
// 						<h4>Type:</h4>
// 						<div>
// 							{singelData.types.map((type, index) => (
// 								<p key={index}>{type.type.name}</p>
// 							))}
// 						</div>
// 					</div>
// 					<div>
// 						<h4>Abilities:</h4>
// 						<div>
// 							{" "}
// 							{singelData.abilities.map((ability, index) => (
// 								<p key={index}>{ability.ability.name} </p>
// 							))}
// 						</div>
// 					</div>

// 					<div>
// 						<h4>Moves:</h4>
// 						<div>
// 							<p>{singelData.moves[0].move.name}</p>
// 							<p>{singelData.moves[1].move.name}</p>
// 							<p> show more</p>
// 						</div>
// 					</div>
// 					<div>
// 						<h4>Stats:</h4>
// 						<div>
// 							{singelData.stats.map((stat, index) => (
// 								<p key={index}>{stat.stat.name}</p>
// 							))}
// 						</div>
// 					</div>
// 				</section>
// 			) : (
// 				<p>loading...</p>
// 			)}
// 		</>
// 	);
// };

// export default Details;

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FetchData } from "../../context/Context";
import "./Details.css";
import { Link } from "react-router-dom";

const Details = () => {
	const pokeParams = useParams();
	// console.log(pokeParams);
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
						<p>{poke.color.name}</p>
					</div>
					<div>
						<h4> Habitat: </h4>
						<p>{poke.habitat.name}</p>
					</div>
					<div>
						<h4>Type:</h4>
						<div>
							{singelData.types.map((type, index) => (
								<p key={index}>{type.type.name}</p>
							))}
						</div>
					</div>
					<div>
						<h4>Abilities:</h4>
						<div>
							{" "}
							{singelData.abilities.map((ability, index) => (
								<p key={index}>{ability.ability.name} </p>
							))}
						</div>
					</div>

					<div>
						<h4>Moves:</h4>
						<div>
							<p>{singelData.moves[0].move.name}</p>
							<p>{singelData.moves[1].move.name}</p>
							<p> show more</p>
						</div>
					</div>
					<div>
						<h4>Stats:</h4>
						<div>
							{singelData.stats.map((stat, index) => (
								<p key={index}>{stat.stat.name}</p>
							))}
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
