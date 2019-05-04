<template>
  <div id="app">
    <div class="wrapper">
      <Header></Header>
      <Sidebar></Sidebar>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/template/Header";
import Sidebar from "./components/template/Sidebar";
import Footer from "./components/template/Footer";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Footer
  }
};
</script>

<style>
</style>