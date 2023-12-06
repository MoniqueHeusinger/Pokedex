import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { FetchData, LoadingDone } from "./context/Context";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState([]);
	useEffect(() => {
		if (data.length === 1192) {
			LoadingDone = true;
		}
	}, [data]);
	return (
		<>
			<LoadingDone.Provider value={{ loading, setLoading }}>
				<FetchData.Provider value={{ data, setData }}>
					<Header />
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
					</Routes>
				</FetchData.Provider>
			</LoadingDone.Provider>
		</>
	);
}

export default App;
