<template>

<div class="page page-pokemon">

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
      <div class="column">
        <PokemonCard />
      </div>
      <div class="column">
        <PokemonCard />
      </div>
      <div class="column">
        <PokemonCard />
      </div>
    </div>
  </div>

</div>

</template>



<script>

import PokemonCard from '../components/pokemon-card.vue';


export default {
  name: 'page-pokemon',
  components: {
    PokemonCard,
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