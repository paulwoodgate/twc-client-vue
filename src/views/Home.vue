<template>
  <b-container fluid>
    <b-row align-v="center" class="mb-4 Banner">
      <h2>
        Welcome to the Walking Club...<br />
        "A walking club for everyone"
      </h2>
    </b-row>
    <b-row>
      <b-col md="1" />
      <b-col md="6">
        <p>
          The Club is based in the Peterborough/Stamford area. We walk every other Sunday, normally
          within a couple of hours of Peterborough. Three times a year we organise weekends away
          that are further afield. Walks are generally around 10 miles in length and run throughout
          the year. We also organise social events such as meals out.
        </p>
        <p>
          We don’t claim to be the best walking club in the world, but we aim to have the most fun
          whilst trying.
        </p>
        <p>
          The group contains a range of walkers, from the very experienced to novices. We welcome
          new members and are happy to provide guidance if required.
        </p>
      </b-col>
      <b-col md="4">
        <b-table-simple striped outlined>
          <b-thead head-variant="dark">
            <b-th colspan="2"> Upcoming Events </b-th>
          </b-thead>
          <b-tbody>
            <b-tr v-for="event in events" :key="event.id" style="text-align: left">
              <b-td>
                <b-link :to="'/event/' + event.id" class="custom-link">
                  {{ event.date }}
                </b-link>
              </b-td>
              <b-td>
                <b-link :to="'/event/' + event.id" class="custom-link">
                  {{ event.title }}
                </b-link>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
      <b-col md="1" />
    </b-row>
  </b-container>
</template>

<script>
import DataService from '../services/data-service';
export default {
  name: 'Home',
  data() {
    return {
      events: []
    };
  },
  async mounted() {
    this.events = await DataService.getUpcomingSummary();
  }
};
</script>

<style scoped>
a.custom-link {
  color: black !important;
}
.Banner {
  background-image: url('/assets/images/GreatRidge.png');
  color: white;
  height: 55vh;
  text-align: center;
  width: 100%;
}
@media screen and (min-width: 1601px) {
  .Banner {
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
h3 {
  color: white;
  text-align: center;
  width: 100vw;
}
</style>
