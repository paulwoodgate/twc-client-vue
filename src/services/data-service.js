/* eslint-disable no-console */
import axios from 'axios';

export default {
  getAllEvents: async () => {
    try {
      let events = [];
      const res = await axios.get('/api/events/upcoming');
      events = res.data;
      return events;
    } catch (err) {
      console.log(err);
    }
  },
  getEventDetails: async (eventId) => {
    let event = {};
    await axios
      .get('/api/events/' + eventId)
      .then((res) => (event = res.data))
      .catch((err) => console.log(err));

    return event;
  },
  getReportYears: async () => {
    let years = [];
    await axios
      .get('/api/reports/years')
      .then((res) => (years = res.data))
      .catch((err) => console.log(err));

    return years;
  },
  getYearReports: async (year) => {
    let reports = [];
    await axios
      .get('/api/reports/' + year)
      .then((res) => (reports = res.data))
      .catch((err) => console.log(err));

    return reports;
  },
  getReportDetails: async (reportId) => {
    let report = {};
    await axios
      .get('/api/reports/detail/' + reportId)
      .then((res) => (report = res.data))
      .catch((err) => console.log(err));

    return report;
  },
  saveMessage: async (message) => {
    try {
      await axios.post('/api/messages', message);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
};
