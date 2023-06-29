import AxiosPokemon from "./data";

const getPokemonsType = async (type) => {
  try {
    const { data } = await AxiosPokemon.get(`/type/${type}/`, {
      params: {
        limit: 1000,
        offset: 0,
      },
    });
    return data.pokemon;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getPokemonsType;
