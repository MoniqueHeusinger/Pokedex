import { useContext } from "react";
import { FetchData, LoadingDone } from "../../context/Context";
import {v4 as uuidv4} from "uuid"


const PokemonCard = ({name, image, id}) => {
    return (
		<article>
			<img
				src={image}
				alt=''
			/>
			<div>
				<h2>{name}</h2>
				<h2># {id}</h2>
			</div>

		</article>
	);
}
 
export default PokemonCard;