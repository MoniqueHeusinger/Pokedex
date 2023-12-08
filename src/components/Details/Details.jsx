import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FetchData } from "../../context/Context";
// import "./Details.css";
import "./Details.scss";
import { Link } from "react-router-dom";
import PokemonLogo from "./../../../public/img/logo.png"

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

				<>
        <img className="pokemonlogo" src={PokemonLogo} alt="Pokemon Logo" />
        <section className="details_wrapper">
        <section className='details_section'>
          {/* Vorderseite
          ==================== */}
          <article className="details_front">

            <div className="pokemon_color">
              {/* Name und KP */}
              <div className="name_container">
                <h3>{singelData.species.name} </h3>
                <h3><span>HP</span>{singelData.stats[0].base_stat} </h3>
              </div>

              {/* Bild */}
              <div className="image_container">
                <img
                src={
                  singelData.sprites.other["official-artwork"]
                    .front_shiny
                }
                alt=''
              />
              </div>

              {/* Statistik Vorderseite */}
              <div className="pokemon_size_container">
                <p>#00{singelData.id}</p>
                <p>Height: {singelData.height} m</p>
                <p>Weight: {singelData.weight} kg</p>
              </div>
              
              {/* Habitat */}
              <div className="pokemon_habitat">
              <h4>Habitat</h4>
              <p>{poke?.habitat?.name}</p>
            </div>

              {/* Attack */}
            <div className="pokemon_attack">
              <p>Attack</p>
              <p>{singelData.stats[1].base_stat}</p>
            </div>  
              {/* Moves */}
            <div className="silver_block">
              <p>{singelData.moves[0]?.move.name}</p>
              <p>{singelData.moves[1]?.move.name}</p>
              {singelData.moves.length > 2 ? (
                <Link to={`/more-moves/${pokeParams.id}`}>
                  <p className="more_moves">all</p>
                  </Link>
                ) : (
                  <span></span>
                )}
              </div>

              </div>
          </article>

          {/* Statistik Rückseite
          ======================== */}
          <article className="details_back">

            <div className="pokemon_color">
            {/* Container für kleines Bild + Name + ID */}
            <div className="pokemon_mini_container">
              <div className="pokemon_general_stat">
                {/* Name */}
                <h3>{singelData.species.name} </h3>
                {/* ID */}
                <p><span>#</span>00{singelData.id}</p>
              </div>

              <div className="image_container">
              {/* Bild */}
                <img
                src={
                  singelData.sprites.other["official-artwork"]
                    .front_shiny
                }
                alt=''
              />
              </div>
            </div>
            
            {/* Type */}
            <div className="pokemon_type">
              <h4>Type</h4>

              {/* Type-Buttons */}
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

            {/* Abilities */}
            
            <div className="pokemon_ability">
              <h4>Abilities</h4>
              <div className="silver_block">
                <p>{singelData.abilities[0]?.ability.name}</p>
                <p>{singelData.abilities[1]?.ability.name}</p>
                {singelData.abilities.length > 2 ? (
                  <Link to={`/more-abilities/${pokeParams.id}`}>
                    <p>all</p>
                  </Link>
                ) : (
                  <span></span>
                )}
              </div>
            </div>

            {/* Combat Skills */}
            <div className="pokemon_combat_skills">

              {/* Special-Attack */}
              <div>
                <h3>Special-Attack</h3>
                <p>{singelData.stats[3].base_stat}</p>
              </div>

              {/* Defense */}
              <div>
                <h3>Defense</h3>
                <p>{singelData.stats[2].base_stat}</p>
              </div>
              
              {/* Special-Defense */}
              <div>
                <h3>Special-Defense</h3>
                <p>{singelData.stats[4].base_stat}</p>
              </div>
              
              {/* Speed */}
              <div>
                <h3>Speed</h3>
                <p>{singelData.stats[5].base_stat}</p>
              </div>
                
              </div>

            {/* <div>
              <h4> Color: </h4>
              <p>{poke?.color?.name}</p>
            </div> */}
            </div>
          </article>

        </section>
        </section>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );

};

export default Details;
