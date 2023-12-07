import PokemonGallery from "../components/Pokemons/PokemonGallery";
import Filterbar from "../components/filterbar/Filterbar";
import "./Home.scss"
const Home = () => {
	return (
		<main>

			<fieldset>
				<legend>
					{/* Pokemon Logo */}
					<img src="./../public/img/pokemon_logo.gif" alt="Pokemon Logo" />
					
					</legend>
				{/* <Filterbar />	 */}
				<PokemonGallery />
			</fieldset>
			
>>>>>>>>> Temporary merge branch 2
		</main>
	);
};

export default Home;
