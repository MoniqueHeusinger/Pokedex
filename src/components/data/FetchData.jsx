const loadingState = useContext(LoadingDone);
const fetchState = useContext(FetchData);
useEffect(() => {
	const pokemonArray = [];
	foundId.forEach((url) => {
		fetch(`${url}`)
			.then((response) => response.json())
			.then((data) => {
				pokemonArray.push(data);
				fetchState.setData(pokemonArray.sort((a, b) => a.id - b.id));
				console.log("fetch");
				if (pokemonArray.length === render.render) {
					loadingState.setLoading(true);
				}
			})
			.catch((err) => console.log(err));
	});
}, [foundId]);
console.log(render);
console.log(fetchState);
