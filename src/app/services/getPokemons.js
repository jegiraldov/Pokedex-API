import AxiosPokemon from "./data";

const getPokemons = async () => {
  try {
    const { data } = await AxiosPokemon.get("/pokemon", {
      params: {
        limit: 1000,
        offset: 0,
      },
    });
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getPokemons;
