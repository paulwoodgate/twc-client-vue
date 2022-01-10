<template>
  <b-container fluid>
    <b-row class="mb-3">
      <Banner title="Reports" />
    </b-row>
    <b-row class="mb-3">
      <b-col style="text-align: left">
        Year:
        <b-form-select
          v-model="selectedYear"
          :options="availableYears"
          style="width: 100px; margin-left: 5px"
          @input="yearSelected"
        />
      </b-col>
    </b-row>
    <report-list :reports="this.reports" />
  </b-container>
</template>

<script>
import Banner from '@/components/Banner.vue';
import ReportList from '@/components/ReportList.vue';
import DataService from '../services/data-service';

export default {
  name: 'Reports',
  components: {
    Banner,
    ReportList
  },

  data() {
    return {
      availableYears: [],
      selectedYear: 2020,
      reports: []
    };
  },

  async created() {
    this.availableYears = await DataService.getReportYears();
    this.availableYears = this.availableYears.reverse();

    this.selectedYear =
      localStorage.reportYear && localStorage.reportYear != -1
        ? localStorage.reportYear
        : this.availableYears[0];

    this.reports = await DataService.getYearReports(this.selectedYear);
  },

  methods: {
    async yearSelected() {
      localStorage.reportYear = this.selectedYear;
      this.reports = [];
      this.reports = await DataService.getYearReports(this.selectedYear);
    }
  }
};
</script>

<style scoped></style>
