import "./FilterOptions.css";
import { Link } from "react-router-dom";
const FilterOptions = () => {
  var types = [
    {
      type: "bug",
      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #a4e271",
        backgroundColor: "#74b807",
        border: "1px solid #74b807",
        textShadow: "0px 1px 0px #528009",
      },
    },
    {
      type: "dark",
      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #4e4e4e",
        backgroundColor: "#303030",
        border: "1px solid #303030",
        textShadow: "0px 1px 0px #7d7d7d",
      },
    },
    {
      type: "dragon",
      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #0876e4",
        backgroundColor: "#00458A",
        border: "1px solid #00458A",
        textShadow: "0px 1px 0px #2d7ccb",
      },
    },
    {
      type: "electric",
      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #ffe713",

        backgroundColor: "#e4cd01",
        border: "1px solid #e4cd01",

        textShadow: "0px 1px 0px #e0d35d",
      },
    },
    {
      type: "fairy",

      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #FFC2F9",

        backgroundColor: "#f98aee",
        border: "1px solid #f98aee",

        textShadow: "0px 1px 0px #f7c8f3",
      },
    },
    {
      type: "fighting",

      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #ed4242",

        backgroundColor: "#E40000",
        border: "1px solid #E40000",
        textShadow: "0px 1px 0px #f14d4d",
      },
    },
    {
      type: "fire",

      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #fcbb59",

        backgroundColor: "#FF9900",
        border: "1px solid #FF9900",
        textShadow: "0px 1px 0px #fcbb59",
      },
    },
    {
      type: "flying",

      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #e5edee",

        backgroundColor: "#CCDADD",
        border: "1px solid #CCDADD",
      },
    },
    {
      type: "ghost",
      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #8e2d9e",
        backgroundColor: "#5A1E64",
        border: "1px solid #5A1E64",

        textShadow: "0px 1px 0px #a94eb8",
      },
    },
    {
      type: "grass",
      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #78bf31",
        backgroundColor: "#57921C",
        border: "1px solid #57921C",
        textShadow: "0px 1px 0px #8ed448",
      },
    },
    {
      type: "ground",

      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #d18411",
        backgroundColor: "#965A00",
        border: "1px solid #965A00",
        textShadow: "0px 1px 0px #e69c2f",
      },
    },
    {
      type: "ice",

      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #aee2f9",
        backgroundColor: "#6AD2FF",
        border: "1px solid #6AD2FF",
        textShadow: "0px 1px 0px #aee2f9",
      },
    },
    {
      type: "normal",

      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #d5d5d5",
        backgroundColor: "#B3B3B3",
        border: "1px solid #B3B3B3",
        textShadow: "0px 1px 0px #eeeeee",
      },
    },
    {
      type: "plant",
      color: "#70DF00",
      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #8bf124",

        backgroundColor: "#70DF00",
        border: "1px solid #70DF00",

        textShadow: "0px 1px 0px #9bee46",
      },
    },
    {
      type: "poison",
      color: "#AB00AE",
      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #df17e3",

        backgroundColor: "#AB00AE",
        border: "1px solid #AB00AE",

        textShadow: "0px 1px 0px #f45cf7",
      },
    },
    {
      type: "psychic",

      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #faaef2",

        backgroundColor: "#FF81F2",
        border: "1px solid #FF81F2",

        textShadow: "0px 1px 0px #faaef2",
      },
    },
    {
      type: "rock",

      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #f7d06a",

        backgroundColor: "#E1B237",
        border: "1px solid #E1B237",

        textShadow: "0px 1px 0px #f7d06a",
      },
    },
    {
      type: "steel",

      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #4e8490",

        backgroundColor: "#2A4950",
        border: "1px solid #2A4950",
        textShadow: "0px 1px 0px #649aa6",
      },
    },
    {
      type: "water",
      buttonStyle: {
        boxShadow: "inset 0px 39px 0px -24px #1cb0ee",

        backgroundColor: "#00A0E4",
        border: "1px solid #00A0E4",

        textShadow: "0px 1px 0px #6acffa",
      },
    },
  ];
  return (
    <section className="filterOptions">
      {types ? (
        <div>
          {types.map((item, index) => (
            <Link key={index} to={`/filter-results/${item.type}`}>
              <p style={item.buttonStyle}>{item.type} </p>
            </Link>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </section>
  );
};

export default FilterOptions;
