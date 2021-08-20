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
        <div class="card">
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
            <button class="button-outline">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

</template>



<script>
export default {}
</script>



<style lang="scss">

.page-title-container {
  padding-top: 40px;
}
.cards-container {
  margin-bottom: 40px;
}

</style>