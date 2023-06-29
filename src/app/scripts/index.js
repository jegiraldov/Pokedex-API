import printPokemonTypes from "../modules/printPokemonsTypes";
import printPokemon from "../modules/printpokemon";
import showElements from "../modules/showElements";
import getPokemon from "../services/getPokemon";
import getPokemonsType from "../services/getPokemonType";
import getPokemons from "../services/getPokemons";
import "../styles/style.css";

const elSearch = document.getElementById("search");
const lista = document.getElementById("lista");
const pokemonMainEl = document.getElementById("pokemonMain");
const optionMenu = document.getElementById("optionMenu");
const searchBtn = document.getElementById("searchBtn");
let listPokemons = [];

document.addEventListener("DOMContentLoaded", async () => {
  const pokemons = await getPokemons();
  const pokemonMain = await getPokemon(pokemons[0].name);
  const pokemonList = await getPokemonsType(pokemonMain.type);

  printPokemon(pokemonMain, pokemonMainEl);
  pokemonList.forEach(async (pokemon, index) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newPokemon = await getPokemon(pokemon.pokemon.name);
        listPokemons.push(newPokemon);
        if (pokemonList.length === index + 1) {
          resolve(printPokemonTypes(listPokemons, lista));
        }
      } catch (error) {
        reject(error);
      }
    });
  });

  elSearch.addEventListener("input", () => {
    const value = elSearch.value.trim();
    console.log(value);
    console.log(value.length);
    if (value.length > 0) {
      const newList = pokemons.filter((p) => p.name.includes(value));
      optionMenu.classList.remove("hidden");
      showElements(newList, optionMenu);
    } else {
      optionMenu.classList.add("hidden");
    }
  });

  optionMenu.addEventListener("click", (event) => {
    // Obtener el valor seleccionado
    const selectedValue = event.target.dataset.value;

    // Hacer algo con el valor seleccionado (por ejemplo, mostrarlo en la consola)
    elSearch.value = selectedValue;
    optionMenu.classList.add("hidden");
  });

  searchBtn.addEventListener("click", async () => {
    console.log(elSearch.value);
    if (elSearch.value.length > 0) {
      const pokemon = await getPokemon(elSearch.value);
      printPokemon(pokemon, pokemonMainEl);
      elSearch.value = "";
    }
  });
});
