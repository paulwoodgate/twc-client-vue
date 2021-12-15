<template>
  <b-card-group deck>
    <b-card v-for="report in reports" :key="report.id" style="max-width: 15rem; min-width: 12rem">
      <b-link :to="'/report/' + report.id">
        <b-card-img :src="'/assets/photos/' + report.year + '/' + report.coverPhoto" />
      </b-link>
      <b-card-title>{{ report.title }}</b-card-title>
      <b-card-text>{{ report.formattedDate }}</b-card-text>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: 'ReportList',
  props: ['reports']
};
</script>
