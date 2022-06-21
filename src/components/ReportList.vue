<template>
  <b-card-group deck>
    <b-card v-for="report in reports" :key="report.id" style="max-width: 12rem; margin-bottom: 1rem;">
      <b-link :to="'/report/' + report.id">
        <b-card-img
          :src="
            'https://ik.imagekit.io/wlaapxxvhpff/Photos/' + report.year + '/' + report.coverPhoto
          "
        />
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
