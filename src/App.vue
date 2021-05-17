<!-- Name: Brady M -->
<!-- Final Exam Project -->
<template>
  <div id="app">
    <Nav></Nav>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- Displays main content using vue-router -->
  <router-view></router-view>
  </div>
</template>

<script>
// Import Scripts
// import HelloWorld from './components/HelloWorld.vue'
// import Weather from './components/Weather.vue'
import Nav from './components/Nav.vue'

// export
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<!-- CSS -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
