import AxiosPokemon from "./data";

const getPokemon = async (id) => {
  try {
    const { data } = await AxiosPokemon.get(`/pokemon/${id}`);
    const newPokemon = {
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
      level: data.base_experience,
      type: data.types[0].type.name,
      ability: data.abilities[0].ability.name,
      height: data.height,
      weight: data.weight,
    };
    return newPokemon;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default getPokemon;
