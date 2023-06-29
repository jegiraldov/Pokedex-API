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

  lista.addEventListener("click", async (event) => {
    // Obtener el valor seleccionado
    if (event.target.tagName === "LI") {
      const selectedValue = event.target.getAttribute("data-value");
      console.log(selectedValue);
      const pokemonselect = await getPokemon(selectedValue);
      const pokemonList = await getPokemonsType(pokemonselect);
      printPokemon(pokemonselect, pokemonMainEl);

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
    }
    // Hacer algo con el valor seleccionado (por ejemplo, mostrarlo en la consola)
  });

  searchBtn.addEventListener("click", async () => {
    console.log(elSearch.value);
    if (elSearch.value.length > 0) {
      const pokemonsearch = await getPokemon(elSearch.value);
      printPokemon(pokemonsearch, pokemonMainEl);
      elSearch.value = "";

      const pokemonList = await getPokemonsType(pokemonsearch.type);
      console.log(pokemonList);
      printPokemon(pokemonsearch, pokemonMainEl);

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
    }
  });
});
