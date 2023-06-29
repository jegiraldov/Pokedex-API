const printPokemon = (pokemon, container) => {
  console.log(pokemon);
  container.innerHTML = `
    <div class="charizard">
        <div class="charizard_titulo">
            <img class="emoji_fuego" src="https://images.emojiterra.com/google/android-11/512px/1f525.png" alt="">
            <h1 id="name" class="upper" >${pokemon.name}</h1>
        </div>

        <div class="charizard_png">
            <img class="charizard-img" id="pokemon-avatar"
                src="${pokemon.image}">
        </div>
    </div>
    <div class="skills">
        <div class="column1">
            <div class="skills_one" id="skill1">
                <p>NO.</p>
                <p>
                    <span id="pokemon-number" class="upper"> 00${pokemon.id} </span>
                </p>
            </div>
            <div class="skills_one" id="skill2">
                <p>TYPE</p>
                <p>
                    <span id="pokemon-type" class="upper">${pokemon.type}</span>
                </p>
            </div>
            <div class="skills_one" id="skill3">
                <p>HEIGHT</p>
                <p>
                    <span id="pokemon-height" > ${pokemon.height} m </span>
                </p>
            </div>
        </div>
        <div class="column2">
            <div class="skills_one" id="skill4">
                <p>LEVEL</p>
                <p>
                    <span id="pokemon-level" class="upper">${pokemon.level}</span>
                </p>
            </div>
            <div class="skills_one" id="skill5">
                <p>ABILITY</p>
                <p>
                    <span id="pokemon-skill" class="upper">${pokemon.ability}</span>
                </p>
            </div>
            <div class="skills_one" id="skill6">
                <p>WEIGHT</p>
                <p>
                    <span id="pokemon-weight" >${pokemon.weight} kg</span>
                </p>
            </div>
        </div>

    </div>
    `;
};

export default printPokemon;
