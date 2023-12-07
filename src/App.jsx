import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Details from "./components/Details/Details";
import { useEffect, useState } from "react";
import { FetchData, LoadingDone, ReadyToRender } from "./context/Context";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [render, setRender] = useState(0);
	useEffect(() => {}, [data.render]);
	console.log(render);
	console.log(loading);

	return (
		<>
			<ReadyToRender.Provider value={{ render, setRender }}>
				<LoadingDone.Provider value={{ loading, setLoading }}>
					<FetchData.Provider value={{ data, setData }}>
						<div className='pokemonRight'></div>
						<Header />
						<Routes>
							<Route
								path='/'
								element={<Home />}
							/>
							<Route
								path='/details/:id'
								element={<Details />}
							/>
						</Routes>
					</FetchData.Provider>
				</LoadingDone.Provider>
			</ReadyToRender.Provider>
		</>
	);
}

export default App;
