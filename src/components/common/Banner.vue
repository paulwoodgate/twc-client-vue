<template>
  <b-container fluid>
    <b-row align-v="center" fluid id="banner" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <h2 fluid>{{ title }}</h2>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Banner',
  props: ['title'],
  computed: {
    backgroundUrl() {
      const images = [
        'PeakSkyline',
        'BradgatePark',
        'OldJohn',
        'KeswickPanorama',
        'IvinghoeBeacon'
      ];
      const randomNumber = Math.floor(Math.random() * 5);
      return `/assets/images/${images[randomNumber]}.png`;
    }
  }
};
</script>

<style scoped>
#banner {
  background-image: '/assets/images/PeakSkyline.png';
  text-align: center;
  background-color: black;
  height: 25vh;
  width: auto;
}

@media screen and (min-width: 1601px) {
  #banner {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }
}
h2 {
  color: white;
  text-align: center;
  width: 100vw;
}
</style>
