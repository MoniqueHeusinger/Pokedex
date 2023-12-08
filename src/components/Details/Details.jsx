import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FetchData } from "../../context/Context";
import "./Details.css";
import { Link } from "react-router-dom";

const styles = {
  bug: {
    boxShadow: "inset 0px 39px 0px -24px #a4e271",
    backgroundColor: "#74b807",
    border: "1px solid #74b807",
    textShadow: "0px 1px 0px #528009",
  },
  dark: {
    boxShadow: "inset 0px 39px 0px -24px #4e4e4e",
    backgroundColor: "#303030",
    border: "1px solid #303030",
    textShadow: "0px 1px 0px #7d7d7d",
  },
  dragon: {
    boxShadow: "inset 0px 39px 0px -24px #0876e4",
    backgroundColor: "#00458A",
    border: "1px solid #00458A",
    textShadow: "0px 1px 0px #2d7ccb",
  },
  electric: {
    boxShadow: "inset 0px 39px 0px -24px #ffe713",
    backgroundColor: "#e4cd01",
    border: "1px solid #e4cd01",
    textShadow: "0px 1px 0px #e0d35d",
  },
  fairy: {
    boxShadow: "inset 0px 39px 0px -24px #FFC2F9",
    backgroundColor: "#f98aee",
    border: "1px solid #f98aee",
    textShadow: "0px 1px 0px #f7c8f3",
  },
  fighting: {
    boxShadow: "inset 0px 39px 0px -24px #ed4242",
    backgroundColor: "#E40000",
    border: "1px solid #E40000",
    textShadow: "0px 1px 0px #f14d4d",
  },
  fire: {
    boxShadow: "inset 0px 39px 0px -24px #fcbb59",
    backgroundColor: "#FF9900",
    border: "1px solid #FF9900",
    textShadow: "0px 1px 0px #fcbb59",
  },
  flying: {
    boxShadow: "inset 0px 39px 0px -24px #e5edee",
    backgroundColor: "#CCDADD",
    border: "1px solid #CCDADD",

    textShadow: "0px 1px 0px #fff",
  },
  ghost: {
    boxShadow: "inset 0px 39px 0px -24px #8e2d9e",
    backgroundColor: "#5A1E64",
    border: "1px solid #5A1E64",
    textShadow: "0px 1px 0px #a94eb8",
  },
  grass: {
    boxShadow: "inset 0px 39px 0px -24px #78bf31",
    backgroundColor: "#57921C",
    border: "1px solid #57921C",
    textShadow: "0px 1px 0px #8ed448",
  },
  ground: {
    boxShadow: "inset 0px 39px 0px -24px #d18411",
    backgroundColor: "#965A00",
    border: "1px solid #965A00",
    textShadow: "0px 1px 0px #e69c2f",
  },
  ice: {
    boxShadow: "inset 0px 39px 0px -24px #aee2f9",
    backgroundColor: "#6AD2FF",
    border: "1px solid #6AD2FF",
    textShadow: "0px 1px 0px #aee2f9",
  },
  normal: {
    boxShadow: "inset 0px 39px 0px -24px #d5d5d5",
    backgroundColor: "#B3B3B3",
    border: "1px solid #B3B3B3",
    textShadow: "0px 1px 0px #eeeeee",
  },
  plant: {
    boxShadow: "inset 0px 39px 0px -24px #8bf124",
    backgroundColor: "#70DF00",
    border: "1px solid #70DF00",
    textShadow: "0px 1px 0px #9bee46",
  },
  poison: {
    boxShadow: "inset 0px 39px 0px -24px #df17e3",
    backgroundColor: "#AB00AE",
    border: "1px solid #AB00AE",
    textShadow: "0px 1px 0px #f45cf7",
  },
  psychic: {
    boxShadow: "inset 0px 39px 0px -24px #faaef2",
    backgroundColor: "#FF81F2",
    border: "1px solid #FF81F2",
    textShadow: "0px 1px 0px #faaef2",
  },
  rock: {
    boxShadow: "inset 0px 39px 0px -24px #f7d06a",
    backgroundColor: "#E1B237",
    border: "1px solid #E1B237",
    textShadow: "0px 1px 0px #f7d06a",
  },
  steel: {
    boxShadow: "inset 0px 39px 0px -24px #4e8490",
    backgroundColor: "#2A4950",
    border: "1px solid #2A4950",
    textShadow: "0px 1px 0px #649aa6",
  },
  water: {
    boxShadow: "inset 0px 39px 0px -24px #1cb0ee",
    backgroundColor: "#00A0E4",
    border: "1px solid #00A0E4",
    textShadow: "0px 1px 0px #6acffa",
  },
};

const Details = () => {
  const pokeParams = useParams();
  const [poke, setPoke] = useState({});

  const myData = useContext(FetchData);

  const singelData = myData.data.find(
    (dataItem) => dataItem.id.toString() === pokeParams.id.toString()
  );

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeParams.id}`)
      .then((res) => res.json())
      .then((data) => setPoke(data));
  }, [pokeParams]);

  return (
    <>
      {singelData ? (
        <section className="Details">
          <div>
            <h3>{singelData.species.name} </h3>
            <h3>#00{singelData.id} </h3>
          </div>
          <img
            src={singelData.sprites.other["official-artwork"].front_shiny}
            alt=""
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
              <p style={styles[singelData?.types[0]?.type.name]}>
                {singelData.types[0]?.type.name}
              </p>
              <p style={styles[singelData?.types[1]?.type.name]}>
                {singelData.types[1]?.type.name}
              </p>
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
              <p>Special-Attack:{singelData.stats[3].base_stat}</p>
              <p>Special-Defense:{singelData.stats[4].base_stat}</p>
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
