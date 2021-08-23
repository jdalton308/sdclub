
<template>

<div class="pokemon-card card">
  
  <div class="card-image">
    <div class="image is-4by3">
      <img :src="`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${ id }.png?raw=true`" alt="">
    </div>
  </div>

  <div class="card-content">
    <h3 class="pokemon-name">{{ name }}</h3>

    <div class="pokemon-stat-list">
      <div
        class="pokemon-stat"
        v-for="(statValue, statTitle) in stats"
        :key="statTitle"
      >
        <div class="stat-title">{{ statTitle }}:</div>
        <div class="stat-value">{{ statValue }}</div>
      </div>
    </div>

    <SmileButton
      :onClick="() => {}"
    >
      Learn more
    </SmileButton>
  </div>

</div>

</template>



<script>

import SmileButton from './smile-button.vue';


export default {
  name: 'pokemon-card',
  components: {
    SmileButton,
  },

//----

  props: {
    name: {
      type: String,
    },
    id: {
      type: Number,
    },
    stats: {
      type: Object,
    },
  }
}

</script>



<style lang="scss">

.pokemon-card.card {
  .card-image {
    background-color: #E0E0E0;
  }
  .pokemon-name {
    text-transform: capitalize;
  }
  .pokemon-stat-list {
    margin-bottom: 20px;

    .pokemon-stat {
      font-size: 0.875rem; // 14px
      line-height: 1.4em;

      .stat-title {
        display: inline-block;
        font-weight: 600;
        text-transform: capitalize;
      }
      .stat-value {
        display: inline-block;
        text-transform: capitalize;
      }
    }
  }
}

</style>