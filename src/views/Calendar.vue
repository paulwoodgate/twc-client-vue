<template>
  <b-container fluid>
    <b-row class="mb-5">
      <Banner title="Calendar" />
    </b-row>
    <b-row class="mb-3">
      <b-col md="1" />
      <b-col>
        Events for:
        <b-form-select
          v-model="selectedMonth"
          :options="availableMonths"
          style="width: 180px; margin-left: 5px"
          @input="monthSelected"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col md="1" />
      <b-col>
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
      </b-col>
      <b-col md="1" />
    </b-row>
  </b-container>
</template>

<script>
import Banner from '@/components/Banner.vue';
import DataService from '../services/data-service';

export default {
  name: 'Events',
  components: {
    Banner
  },
  data() {
    return {
      selectedMonth: '',
      allEvents: [],
      events: [],
      availableMonths: []
    };
  },
  async created() {
    if (this.$session.exists('events')) {
      this.allEvents = JSON.Parse(this.$session.get('events'));
      this.availableMonths = JSON.Parse(this.$session.get('availableMonths'));
    } else {
      const data = await DataService.getUpcomingEvents();
      this.allEvents = data.events;
      this.availableMonths = data.months;
    }
    this.events = this.allEvents;
  },
  methods: {
    async monthSelected() {
      if (this.selectedMonth === '') {
        this.events = this.allEvents;
      } else {
        this.events = this.allEvents.filter(this.filterEvents);
      }
      this.reports = [];
      this.reports = await DataService.getYearReports(this.selectedYear);
    },
    filterEvents(ev) {
      return ev.month === this.selectedMonth;
    }
  }
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
