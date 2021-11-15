/* eslint-disable no-console */
import axios from 'axios';

export default {
  getAllEvents: async () => {
    let events = [];
    await axios
      .get('/api/events/upcoming')
      .then(res => (events = res.data))
      .catch(err => console.log(err));

    return events;
  },
  getEventDetails: async eventId => {
    let event = {};
    await axios
      .get('/api/events/' + eventId)
      .then(res => (event = res.data))
      .catch(err => console.log(err));

    return event;
  },
  getReportYears: async () => {
    let years = [];
    await axios
      .get('/api/reports/years')
      .then(res => (years = res.data))
      .catch(err => console.log(err));

    return years;
  },
  getYearReports: async year => {
    let reports = [];
    await axios
      .get('/api/reports/' + year)
      .then(res => (reports = res.data))
      .catch(err => console.log(err));

    return reports;
  },
  getReportDetails: async reportId => {
    let report = {};
    await axios
      .get('/api/reports/detail/' + reportId)
      .then(res => (report = res.data))
      .catch(err => console.log(err));

    return report;
  },
  sendMessage: async message => {
    try {
      await axios.post('/api/messages', message);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
};
