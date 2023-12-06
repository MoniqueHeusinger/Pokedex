import { useContext } from "react";
import { FetchData, LoadingDone } from "../../context/Context";
import {v4 as uuidv4} from "uuid"



const PokemonCard = ({name, image, weight}) => {
    return (
		<article>
			<img
				src={image}
				alt=''
			/>
			<div>
				<h2>{name}</h2>
				<h2>weight: {weight}</h2>
			</div>
		</article>
	);
}
 
export default PokemonCard;