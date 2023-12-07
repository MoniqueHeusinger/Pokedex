import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { FetchData, LoadingDone, ReadyToRender } from "./context/Context";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [render, setRender] = useState(false);
	useEffect(() => {
		if (data.length === 1200) {
			LoadingDone = true;
		}
	}, [data]);
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
						</Routes>
					</FetchData.Provider>
				</LoadingDone.Provider>
			</ReadyToRender.Provider>
		</>
	);
}

export default App;
