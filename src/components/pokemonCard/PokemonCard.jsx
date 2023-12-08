import { Link } from "react-router-dom";
import './Card.scss'

const PokemonCard = ({ name, image, weight, id }) => {

	return (
		<Link to={`/details/${id}`}>
			<article className="card">
				<div>			
				<img className="icon"
					src={image}
					alt=''
				/>
				</div>
				<div className="name">
					<h2 >{name}</h2>
				</div>
			</article>
		</Link>
	);
};

export default PokemonCard;
