import { computed, makeObservable, observable } from "mobx";

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

class PokemonStore {
  pokemon: Pokemon[] = [];
  filter: string = "";

  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      filteredPokemon: computed,
    });
  }

  setPokemon(pokemon: Pokemon[]) {
    this.pokemon = pokemon;
  }

  get filteredPokemon() {
    return this.pokemon.filter(({ name }) =>
      name.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}

const store = new PokemonStore();

export default store;
