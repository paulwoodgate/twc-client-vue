<template>
  <b-container fluid style="text-align: left">
    <b-row>
      <banner :title="report.formattedDate + ' - ' + report.title" class="mb-5" />
    </b-row>
    <b-row v-if="report.subjectType == 'Group'"> <report-list :reports="report.days" /> </b-row>
    <b-row v-else>
      <b-container>
        <b-row>
          <b-col></b-col>
          <b-col cols="10">
            <p v-for="line in report.report" :key="line" v-html="line"></p>
          </b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col></b-col>
          <b-col cols="10"><b>Report by:</b> {{ report.reportBy }}</b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col></b-col>
          <b-col cols="10"><b>Walk Rating:</b> {{ report.walkRating }}</b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col></b-col>
          <b-col cols="10"><b>Photos by:</b> {{ report.photographer }}</b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col style="text-align: center">
            <div
              v-for="photo in report.photos"
              :key="photo"
              style="margin: 10px; display: inline-block"
            >
              <b-img thumbnail :src="'/assets/photos/' + report.year + '/' + photo.file"></b-img>
              <p>{{ photo.caption }}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
import Banner from '@/components/Banner.vue';
import ReportList from '@/components/ReportList.vue';
import DataService from '../services/data-service';

export default {
  name: 'ReportDetails',
  components: {
    Banner,
    ReportList
  },
  props: ['id'],
  data() {
    return {
      report: {}
    };
  },
  methods: {
    async loadData(id) {
      window.scrollTo(0, 0);
      this.report = await DataService.getReportDetails(id);
    }
  },
  watch: {
    '$route.params.id': async function (id) {
      await this.loadData(id);
    }
  },
  async created() {
    await this.loadData(this.id);
  }
};
</script>
