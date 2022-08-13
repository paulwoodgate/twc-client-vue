<template>
  <b-card-group deck>
    <b-card
      v-for="event in events"
      :key="event.id"
      :footer="event.type"
      style="max-width: 16rem; min-width: 14rem"
      class="mb-2"
    >
      <b-link :to="'/event/' + event.id">
        <b-card-img v-if="event.image !== undefined" :src="'/assets/images/' + event.image" />
        <b-card-title>{{ event.title }}</b-card-title>
        <b-card-text>{{ event.date }}</b-card-text>
        <b-card-text v-if="event.type == 'Walk'">{{ event.length }}</b-card-text>
        <b-card-text>{{ event.leave }}</b-card-text>
      </b-link>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: 'CardGroup',
  props: ['events']
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.deck {
  align-content: center;
}
</style>
