
<template>

<div
  class="card-flip-container"
  :class="{'flipped': cardFlipped}"
>
  <div class="pokemon-card card">
    
    <div class="card-image">
      <figure class="image">
        <img :src="`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${ id }.png?raw=true`" alt="">
      </figure>
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
        :onClick="flipCard"
      >
        Learn more
      </SmileButton>
    </div>

  </div>

  <!-- Card Back -->
  <div class="pokemon-card-back card">
    <div class="card-content">
      <h3 class="pokemon-name">{{ name }}</h3>

      <div class="pokemon-stat-list">
        <div
          class="pokemon-stat"
          v-for="(infoValue, infoTitle) in moreInfo"
          :key="infoTitle"
        >
          <div
            v-if="Array.isArray(infoValue)"
            class="all-stats-list"
          >
            <div class="all-stats-title">{{ infoTitle }}</div>
            <div class="pokemon-stat-list">
              <div
                class="pokemon-stat"
                v-for="listItem in infoValue"
                :key="listItem[0]"
              >
                <div class="stat-title">{{ listItem[0] }}:</div>
                <div class="stat-value">{{ listItem[1] }}</div>
              </div>
            </div>
          </div>
          <template v-else>
            <div class="stat-title">{{ infoTitle }}:</div>
            <div class="stat-value">{{ infoValue }}</div>
          </template>
        </div>
      </div>

      <SmileButton
        :onClick="flipCard"
      >
        Back
      </SmileButton>
    </div>
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
    moreInfo: {
      type: Object,
    }
  },

//----

  data: () => ({
    cardFlipped: false,
  }),

//----

  methods: {
    flipCard(e) {
      this.cardFlipped = !this.cardFlipped;
    },
  }
}

</script>



<style lang="scss">

.card-flip-container {
  position: relative;
  transition: transform 0.6s ease-in-out;
  transform-style: preserve-3d;
  perspective: 1000px;

  &.flipped {
    transform: rotateY(180deg);

    .pokemon-card {
      pointer-events: none;
    }
  }

  .card {
    backface-visibility: hidden;
  }
  .pokemon-card-back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: rotateY(180deg);
  }
}
.pokemon-card.card,
.pokemon-card-back.card {
  overflow: hidden;

  .card-image {
    background-color: #E0E0E0;

    img {
      width: auto;
      max-height: 290px;
      margin-left: auto;
      margin-right: auto;
    }
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
  .all-stats-list {
    margin: 20px 0 0;

    .all-stats-title {
      margin: 0 0 4px;
      text-transform: capitalize;
      font-weight: 600;
      font-size: 1rem;
    }
  }
}

</style>