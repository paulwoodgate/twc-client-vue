<template>
  <div class="mb-3" style="height: 60px">
    <b-navbar toggleable="lg" type="dark" variant="success" fixed="top">
      <b-navbar-brand to="/" class="p-0">
        <img
          src="/assets/images/TWCLogo.jpg"
          class="d-inline-block align-center"
          width="140px"
          height="60px"
          alt="Walking Club Logo"
        />
        <div class="d-none d-lg-inline ml-3">The Walking Club</div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <template>
          <img
            src="/assets/images/hamburger.png"
            class="d-inline-block align-center"
            width="32px"
            height="32px"
            alt="Hamburger"
          />
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-item-dropdown text="The Club">
            <b-dropdown-item to="/about">About us</b-dropdown-item>
            <b-dropdown-item to="/faq">FAQ</b-dropdown-item>
            <b-dropdown-item to="/contact">Contact us</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/calendar">Calendar</b-nav-item>
          <b-nav-item to="/reports">Reports</b-nav-item>
          <b-nav-item-dropdown text="Information">
            <b-dropdown-item to="/kitnotes">Kit Notes</b-dropdown-item>
            <b-dropdown-item to="/checklist">Kit Checklist</b-dropdown-item>
            <b-dropdown-item to="/adminstuff">Admin Stuff</b-dropdown-item>
            <b-dropdown-item to="/codes">Behaviour Codes</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation'
};
</script>
