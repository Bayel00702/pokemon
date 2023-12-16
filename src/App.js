import axios from "axios";
import {logDOM} from "@testing-library/react";
import {useEffect, useState} from "react";


function App() {

    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        axios('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
            .then((res) => {
                setPokemon(res.data.results);
            })
    }

    useEffect(() => {
        getPokemon()
    }, [])


  return (
    <div className="app">
        {
            pokemon.map((item, idx) => (
                <div key={item.id || idx} className="app__card">
                    <img src={item.url} alt="" className="app__card-img"/>
                    <p className="app__card-text">{item.name}</p>
                </div>
            ))
        }

    </div>
  );
}

export default App;
