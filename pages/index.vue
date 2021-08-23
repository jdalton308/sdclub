<template>

<div class="page page-pokemon px-5">

  <div class="page-title-container container">
    <h1 class="title-eyebrow">
      Pokemon Cards
    </h1>
    <h2 class="page-title">
      Gotta catch 'em all
    </h2>
  </div>

  <div class="cards-container container">
    <div class="columns">
      <div
        v-for="pokemon in allPokemon"
        :key="pokemon.id"
        class="column"
      >
        <PokemonCard
          :name="pokemon.name"
          :id="pokemon.id"
          :stats="pokemon.stats"
        />
      </div>
    </div>
  </div>

</div>

</template>



<script>

import createPokemonRequest from '../utils/pokemon-request.js';
import PokemonCard from '../components/pokemon-card.vue';


export default {
  name: 'page-pokemon',
  components: {
    PokemonCard,
  },

//----

  async asyncData({ $axios }) {
    const allResponses = await Promise.all([
      $axios.$post(
        "https://beta.pokeapi.co/graphql/v1beta",
        createPokemonRequest('charmander'),
      ),
      $axios.$post(
        "https://beta.pokeapi.co/graphql/v1beta",
        createPokemonRequest('bulbasaur'),
      ),
      $axios.$post(
        "https://beta.pokeapi.co/graphql/v1beta",
        createPokemonRequest('squirtle'),
      ),
    ]);

    const allPokemon = allResponses.map((response) => {
      const {
        name,
        id,
        pokemon
      } = response.data.species[0];

      console.log('pokemon response: ', pokemon);

      return {
        name,
        id,
        stats: {
          abilities: pokemon.nodes[0].abilities.map((abilityObj) => abilityObj.ability.name).join(', '),
          types: pokemon.nodes[0].types.map((typeObj) => typeObj.type.name).join(', '),
          HP: pokemon.nodes[0].stats.find((stat) => stat.stat.name === 'hp').base_stat,
          attack: pokemon.nodes[0].stats.find((stat) => stat.stat.name === 'attack').base_stat,
          defense: pokemon.nodes[0].stats.find((stat) => stat.stat.name === 'defense').base_stat,
        }
      };
    });

    return { allPokemon };
  },
}
</script>



<style lang="scss">

.page-pokemon {
  padding-bottom: 40px;

  .page-title-container {
    padding-top: 40px;
  }
}
</style>