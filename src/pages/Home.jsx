import PokemonGallery from "../components/Pokemons/PokemonGallery";
import "./Home.scss";
const Home = () => {
	return (
		<main>
			<fieldset>
				<legend>
					{/* Pokemon Logo */}
					<img
						src='./../public/img/pokemon_logo.gif'
						alt='Pokemon Logo'
					/>
				</legend>
				{/* <Filterbar />	 */}
				<PokemonGallery />
			</fieldset>

			<PokemonGallery />
		</main>
	);
};

export default Home;
