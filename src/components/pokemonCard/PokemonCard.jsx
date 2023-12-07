import { useContext } from "react";
import { FetchData, LoadingDone } from "../../context/Context";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, image, weight, id }) => {
  return (
    <Link to={`/details/${id}`}>
      <article>
        <img src={image} alt="" />
        <div>
          <h2>{name}</h2>
          <h2>weight: {weight}</h2>
        </div>
      </article>
    </Link>
  );
};


 
export default PokemonCard;

