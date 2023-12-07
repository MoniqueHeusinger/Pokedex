import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/img/logo.gif";
import "./Header.scss";
import { useContext, useEffect, useState } from "react";
import { names } from "../data/Names";
import { FetchData, LoadingDone } from "../../context/Context";

const Header = () => {
	//  array from urls
	const [foundId, setFoundId] = useState([]);
	useEffect(() => {
		const urls = [];
		names.forEach((name) => urls.push(name.url));
		setFoundId(urls);
	}, []);

	//fetch all and save local
	const loadingState = useContext(LoadingDone);
	const fetchState = useContext(FetchData);
	useEffect(() => {
		const pokemonArray = [];
		foundId.forEach((url) => {
			fetch(`${url}`)
				.then((response) => response.json())
				.then((data) => {
					pokemonArray.push(data);
					fetchState.setData(
						pokemonArray.sort((a, b) => a.id - b.id),
					);
					console.log("fetch");
					if (pokemonArray.length === 1292) {
						loadingState.setLoading(true);
					}
				})
				.catch((err) => console.log(err));
		});
	}, [foundId]);

	console.log(fetchState);

	//search function
	const [searchInput, setSearchInput] = useState("");
	useEffect(() => {
		const searchResult = [];
		fetchState.data.filter((pokemon) =>
			pokemon.forms[0].name.includes(searchInput)
				? searchResult.push(pokemon)
				: false,
		);
		console.log(searchResult);
	}, [searchInput]);
	return (
		<header>
			<nav>
				<Link>
					<img
						src={logo}
						alt=''
					/>
				</Link>
				<div>
					<NavLink>Home</NavLink>
					<NavLink>Types</NavLink>
					<NavLink>Our Team</NavLink>
				</div>
			</nav>
			<section>
				<input
					type='text'
					placeholder='Search...'
					onChange={(e) => setSearchInput(e.target.value)}
				/>
			</section>
		</header>
	);
};

export default Header;
