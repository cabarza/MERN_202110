import { useEffect, useState } from "react";
import axios from 'axios';
const Pokemones = () => {
    const [pokemones, setPokemones] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    useEffect(() => {
        axios.get(url)
            .then(resp => {
                console.log(resp);
                setPokemones([...pokemones, ...resp.data.results]);
                if(resp.data.next) {
                    setUrl(resp.data.next);
                }
            })
    }, [url])

    return <ul>
        {pokemones.map((p, i) => <li key={i}>
            {p.name}
        </li>)}
    </ul>
}

export default Pokemones;