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
import Banner from '@/components/common/Banner.vue';
import ReportList from '@/components/reports/ReportList.vue';
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
    if (this.$session.exists('availableYears')) {
      this.availableYears = JSON.parse(this.$session.get('availableYears'));
    } else {
      this.availableYears = await (await DataService.getReportYears()).reverse();
      this.$session.set('availableYears', JSON.stringify(this.availableYears));
    }
    this.selectedYear = this.$session.exists('reportYear')
      ? this.$session.get('reportYear')
      : this.availableYears[0];

    this.reports = await DataService.getYearReports(this.selectedYear);
  },

  methods: {
    async yearSelected() {
      this.$session.set('reportYear', this.selectedYear);
      this.reports = [];
      this.reports = await DataService.getYearReports(this.selectedYear);
    }
  }
};
</script>

<style scoped></style>
