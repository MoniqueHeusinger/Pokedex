import "./FilterOptions.css";
import { Link } from "react-router-dom";
const FilterOptions = () => {
  return (
    <section className="filterOptions">
      <h1>Type</h1>
      <div>
        <Link to="/filter-results/bug">BUG</Link>
        <Link to="/filter-results/dark">DARK</Link>
        <Link to="/filter-results/dragon">DRAGON</Link>
        <Link to="/filter-results/electric">ELECTRIC</Link>
        <Link to="/filter-results/fairy">FAIRY</Link>
        <Link to="/filter-results/fighting">FIGHTING</Link>
        <Link to="/filter-results/fire">FIRE</Link>
        <Link to="/filter-results/flying">FLYING</Link>
        <Link to="/filter-results/ghost">GHOST</Link>
        <Link to="/filter-results/grass">GRASS</Link>
        <Link to="/filter-results/ground">GROUND</Link>
        <Link to="/filter-results/ice">ICE</Link>
        <Link to="/filter-results/normal">NORMAL</Link>
        <Link to="/filter-results/plant">PLANT</Link>
        <Link to="/filter-results/poison">POISON</Link>
        <Link to="/filter-results/psychic">PSYCHIC</Link>
        <Link to="/filter-results/rock">ROCK</Link>
        <Link to="/filter-results/steel">STEEL</Link>
        <Link to="/filter-results/water">WATER</Link>
      </div>
    </section>
  );
};

export default FilterOptions;
