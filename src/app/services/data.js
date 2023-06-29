import axios from "axios";

const URL_API = "https://pokeapi.co/api/v2";

const AxiosPokemon = axios.create({
  baseURL: URL_API,
});

export default AxiosPokemon;
