import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/img/logo.gif";
import "./Header.scss";
import { useContext, useEffect, useState } from "react";
import { names } from "../data/Names";
import { FetchData, LoadingDone } from "../../context/Context";

const Header = () => {
	const [searchInput, setSearchInput] = useState("");
	const fetchState = useContext(FetchData);
	const [foundId, setFoundId] = useState([]);
    const loadingState = useContext(LoadingDone)

	useEffect(() => {
		const urls = [];
		names.forEach((name) => urls.push(name.url));
		setFoundId(urls);
	}, []);


	useEffect(() => {
        const pokemonArray = []
		foundId.forEach((url) => {
			fetch(`${url}`)
				.then((response) => response.json())
				.then((data) => {
                    pokemonArray.push(data)
                    fetchState.setData(pokemonArray);
                    console.log("fetch")
                    if (pokemonArray.length === 1192) {
                        loadingState.setLoading(true)
                    }
                })
				.catch((err) => console.log(err));
		});
	}, [foundId]);

	console.log(fetchState);

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
