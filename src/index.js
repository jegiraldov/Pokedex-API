const URL_API = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"

function dibujarPokemon(pokemonApi) {
    console.log(pokemonApi)
    const element = document.getElementById('name')
    element.innerHTML = pokemonApi.name
    const avatar = document.getElementById('pokemon-avatar')
    avatar.src = pokemonApi.sprites.front_default
    const weight = document.getElementById('pokemon-weight')
    weight.innerHTML = pokemonApi.weight
    const skill = document.getElementById('pokemon-skill')
    skill.innerHTML = pokemonApi.abilities[0].ability.name
    const level = document.getElementById('pokemon-level')
    level.innerHTML = pokemonApi.base_experience
    const height = document.getElementById('pokemon-height')
    height.innerHTML = `${pokemonApi.height} m`
    const type = document.getElementById('pokemon-type');
    type.innerHTML = pokemonApi.types[0].type.name
    const number = document.getElementById('pokemon-number')
    number.innerHTML = `#${pokemonApi.id}`
  }
  
  
  async function traerPokemon(pokemon) {
    let { data }  = await axios.get(pokemon.url);
    dibujarPokemon(data);
  }


let pokemons = [];
async function traerPokemonsList() {               //-------------- Paso 1
    let { data }  = await axios.get(URL_API);
    pokemons = data.results;
  
    dibujarPokemonsList(pokemons);
  }


  function dibujarPokemonsList(listPokemons) {
    let elemento = document.getElementById("lista");
    elemento.innerHTML = "";
    for (let i = 0; i < listPokemons.length; i++) {
      let item = document.createElement("div");
      item.className = "pokemon";
      item.innerHTML =  `<div>${listPokemons[i].name}</div>`;
      item.addEventListener("click", () => {
        traerPokemon(listPokemons[i]);
      })
      elemento.appendChild(item)
    }
  }

  traerPokemonsList();



let elSearch = document.getElementById("search");
elSearch.addEventListener("keydown", () => {
  let value = elSearch.value;
  let newList = pokemons.filter(p => p.name.includes(value));
  dibujarPokemonsList(newList);
});