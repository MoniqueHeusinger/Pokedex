import { Link } from "react-router-dom";

const PokemonCard = ({ name, image, weight, id }) => {
	return (
		<Link to={`/details/${id}`}>
			<article>
				<img
					src={image}
					alt=''
				/>
				<div>
					<h2>{name}</h2>
					<h2>#00{id}</h2>
				</div>
			</article>
		</Link>
	);
};

export default PokemonCard;
