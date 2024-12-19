<template>
  <div class="portfolio-tile">
    <img
      class="portfolio-tile__img"
      :src="img"
      :alt="'Website for ' + cliName"
      data-aos="fade-up"
    />
    <div class="portfolio-tile__text">
      <!--<p class="portfolio-tile__quote">"{{ cliQuote }}"</p>-->
      <p class="portfolio-tile__name">
        {{ cliName }}
      </p>
      <p class="portfolio-tile__year">
        {{ cliYear }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioTile',
  props: {
    cliName: String,
    cliQuote: String,
    cliYear: String,
    img: String,
  },
}
</script>

<style>
.portfolio-tile {
  padding-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.portfolio-tile__img {
  width: 40rem;
  padding: 2rem 2rem 0 0;
}
@media (max-width: 850px) {
  .portfolio-tile__img {
    height: 20vh;
    width: auto;
  }
}
.portfolio-tile__text {
  padding: 2rem;
  font-size: large;
}
.portfolio-tile__quote {
  padding-bottom: 3rem;
  font-weight: bold;
  font-size: large;
}
</style>
