import "./Filterbar.scss"

const Filterbar = () => {
    return ( 
        <section className="filterbar">
            <h2>Filter</h2>
            <div>
                <button>Type</button>
                <button>Height</button>
                <button>Weight</button>
                <button>Habitat</button>
            </div>
            
        </section>
     );
}
 
export default Filterbar;