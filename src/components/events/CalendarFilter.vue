<template>
  <div>
    <div>
      Events for:
      <b-form-select
        v-model="selectedMonth"
        :options="availableMonths"
        style="width: 180px; margin-left: 5px"
        @input="monthSelected"
      />
    </div>
    <div>
      Event Type:
      <b-form-select
        v-model="selectedType"
        options="['(All)', 'Social', 'Walk', 'Weekend']"
        style="width: 100px; margin-left: 5px"
        @input="typeSelected"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarFilter',
  data() {
    return {
      selectedMonth: '',
      selectedType: '(All)',
      availableMonths: []
    };
  },
  methods: {
    async monthSelected() {
      if (this.selectedMonth === '') {
        this.events = this.allEvents;
      } else {
        this.events = this.allEvents.filter(this.filterEvents);
      }
      this.reports = [];
      // this.reports = await DataService.getYearReports(this.selectedYear);
    },
    filterEvents(ev) {
      return ev.month === this.selectedMonth;
    }
  }
};
</script>
