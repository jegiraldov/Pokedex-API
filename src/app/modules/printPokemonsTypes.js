const printPokemonTypes = (pokemons, container) => {
  container.innerHTML = "";
  pokemons.slice(1, 7).forEach((element) => {
    container.innerHTML += `
        <li class="pokemon" data-value="${element.name}" >
            <img src="${element.image}" />
        </li>`;
  });
};

export default printPokemonTypes;
