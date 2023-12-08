import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useContext, useEffect, useState } from "react";
import { names } from "../data/Names";
import { FetchData, LoadingDone, ReadyToRender } from "../../context/Context";
import { useDarkmode } from "../../context/DarkModeContext";
import DarkmodeIcon from "../../assets/svg/Darkmode";

const Header = () => {
	const render = useContext(ReadyToRender);

	//  array from urls
	const [foundId, setFoundId] = useState([]);
	useEffect(() => {
		const urls = [];
		names.forEach((name) => urls.push(name.url));
		setFoundId(urls);
	}, []);

	//fetch all and save local
	const [allPokemons, setAllPokemons] = useState([]);
	const loadingState = useContext(LoadingDone);
	const fetchState = useContext(FetchData);
	useEffect(() => {
		const pokemonArray = [];
		foundId.forEach((url) => {
			fetch(`${url}`)
				.then((response) => response.json())
				.then((data) => {
					pokemonArray.push(data);
					setAllPokemons(
						[...pokemonArray].sort((a, b) => a.id - b.id),
					);
				})
				.catch((err) => console.log(err));
		});
	}, [foundId]);
	useEffect(() => {
		if (allPokemons.length === 1217) {
			fetchState.setData(allPokemons);
			render.setRender(1217);
		}
	}, [allPokemons]);

	//search function
	const [searchInput, setSearchInput] = useState("");
	useEffect(() => {
		if (searchInput.length > 0) {
			const searchResult = [];
			[...allPokemons].filter((pokemon) =>
				pokemon.forms[0].name.includes(searchInput)
					? searchResult.push(pokemon)
					: false,
			);
			fetchState.setData(searchResult);

			render.setRender(searchResult.length);
		} else if (searchInput.length === 0) {
			fetchState.setData(allPokemons);
			render.setRender(1217);
		}
	}, [searchInput]);
	useEffect(() => {
		if (render === 1217) {
			loadingState.setLoading(true);
		}
	}, [render]);

	//=======DarkMode=================
	const { isDarkMode, setIsDarkMode } = useDarkmode(false);
	const body = document.body;
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		if (!isDarkMode) {
			body.classList.remove("lightMode");
			body.classList.add("darkMode");
		} else {
			body.classList.remove("darkMode");
			body.classList.add("lightMode");
		}
	};
	useEffect(() => {}, [isDarkMode]);

	return (
		<header>
			{/* ------------------------
				Header 2. Version
				------------------------ */}
			{/* Navigation */}
			<nav>
				<NavLink to='/'>HoMe</NavLink>
				<NavLink to='/filter-options'>Types</NavLink>
				<div>
					<button
						className='darkModeButton'
						onClick={toggleDarkMode}>
						<DarkmodeIcon />
					</button>
				</div>
			</nav>

			{/* Suchleiste */}
			<section>
				<input
					type='text'
					placeholder='Pokémon Search...'
					onChange={(e) => setSearchInput(e.target.value)}
					value={searchInput}
				/>
			</section>
		</header>
	);
};

export default Header;
