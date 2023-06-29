const printPokemonTypes = (pokemons, container) => {
  container.innerHTML = "";
  pokemons.slice(1, 5).forEach((element) => {
    container.innerHTML += `
        <div class="pokemon" id="${element.id}" >
            <img src="${element.image}" />
        </div>`;
  });
};

export default printPokemonTypes;
