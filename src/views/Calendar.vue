<template>
  <b-container fluid>
    <b-row class="mb-3">
      <Banner title="Calendar" />
    </b-row>
    <b-row>
      <Message message="All walks start at 10am unless stated" />
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
        <CardGroup :events="this.events" />
      </b-col>
      <b-col md="1" />
    </b-row>
  </b-container>
</template>

<script>
import Banner from '@/components/common/Banner.vue';
import DataService from '../services/data-service';
import CardGroup from '@/components/events/EventCardGroup.vue';
import Message from '@/components/common/Message.vue';

export default {
  name: 'Events',
  components: {
    Banner,
    CardGroup,
    Message
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
