
<template>

<div class="pokemon-card card">
  
  <div class="card-image">
    <div class="image is-4by3">
      <img src="https://via.placeholder.com/150" alt="">
    </div>
  </div>

  <div class="card-content">
    <h3>Charmander</h3>

    <div class="pokemon-stat-list">
      <div class="pokemon-stat">
        <div class="stat-title">Abilities:</div>
        <div class="stat-value">Blaze, Solar</div>
      </div>
      <div class="pokemon-stat">
        <div class="stat-title">Abilities:</div>
        <div class="stat-value">Blaze, Solar</div>
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
}

</script>



<style lang="scss">

.pokemon-card.card {
  .pokemon-stat-list {
    margin-bottom: 20px;

    .pokemon-stat {
      font-size: 0.875rem; // 14px
      line-height: 1.4em;

      .stat-title {
        display: inline-block;
        font-weight: 600;
      }
      .stat-value {
        display: inline-block;
      }
    }
  }
}

</style>