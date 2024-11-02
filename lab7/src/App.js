import './App.css'
import {useState} from 'react'

  function Pokemon(props)
  {
    return (
      <div className={"pokemon-" + props.number}>
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name} height="200px" />
        {/* if type is no empty show type 1 and type 2 else show only type 1 */}
        {props.type2 != null && <p>Types : {props.type1}, {props.type2}</p>}
        {props.type2 == null && <p>Type : {props.type1}</p>}
      </div>
    )
  }

  function Search(props)
  {    
    const [name, setName] = useState("Greninja");
    const [image, setImage] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png");
    const [number, setNumber] = useState("658");
    const [types, setTypes] = useState(["Water", "Dark"]);
    
    function onChange(event){ setName(event.target.value); }
    function clickHandler()
    {
      fetch("https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase())
      .then((response) => response.json())
      .then((data) => {
        if(data.sprites.other.dream_world.front_default != null){
          setImage(data.sprites.other.dream_world.front_default);
        }else {
          setImage(data.sprites.front_default);
        }
        setNumber(data.id);
        setTypes(data.types.map((type) => type.type.name)); //ai
      })
    }
    return (
      <div> Name : <input value={name} onChange={onChange}></input>
           <button onClick={clickHandler}>{props.text}</button>
           <Pokemon name={name} image={image} number={number} type1={types[0]} type2={types[1]}></Pokemon>
      </div> 
    )
  }
  
  function SearchByType(props)
  {
    const [type, setType] = useState("");
    const [pokemonUrl, setPokemonUrls] = useState([]);
    const [pokemons_list, setPokemonList] = useState([]);
    let pokemons = [];
    let max = 10;
    function onChange(event){ setType(event.target.value); }
    function clickHandler()
    {
      fetch("https://pokeapi.co/api/v2/type/" + type.toLowerCase())
      .then((response) => response.json())
      .then((data) => {
        setPokemonUrls(data.pokemon.map((pokemon) => pokemon.pokemon.url));
      })
      for(let i=0; i<max; i++){
        fetch(pokemonUrl[i])
        .then((response) => response.json())
        .then((data) => {
          pokemons.push({name: data.name, image: data.sprites.front_default, types: data.types.map((type) => type.type.name)
          , number: data.id});
          if(i== max-1){
            setPokemonList(pokemons);
          }
        })        
      }
      
    }
    return (
      <div> Type  : <input value={type} onChange={onChange}></input>
           <button onClick={clickHandler}>{props.text}</button>
           <ul>
            {
              pokemons_list.map((pokemon) => 
              <li>
                <Pokemon name={pokemon.name} image={pokemon.image} number={pokemon.number} type1={pokemon.types[0]} type2={pokemon.types[1]}></Pokemon>
              </li>)
            }
           </ul>
      </div> 
    )
  }
  

export default function App() {
  return (
    <main>
      <h1>Pokedex</h1>
     <SearchByType text="Search"></SearchByType> 
      <Search text="Search" name="Greninja"></Search>
    </main>
  )
}
