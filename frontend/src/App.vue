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
import axios from "axios";
import { mapState } from "vuex";
import { baseApiUrl, userKey } from "@/global";
import Header from "./components/template/Header";
import Sidebar from "./components/template/Sidebar";
import Footer from "./components/template/Footer";

export default {
  name: "App",
  components: { Header, Sidebar, Footer },
  computed: mapState(["user"]),
  data: function() {
    return {
      validatingToken: true
    };
  },
  methods: {
    async validateToken() {
      this.validatingToken = true;

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        this.validatingToken = false;
        this.$router.push({ name: "auth" });
        return;
      }

      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);

      if (res.data) {
        this.$store.commit("setUser", userData);
        if (this.$mq === "xs" || this.$mq === "sm") {
          this.$store.commit("toggleMenu", false);
        }
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: "auth" });
      }

      this.validatingToken = false;
    }
  },
  created() {
    //this.validateToken();
  }
};
</script>

<style>
* {
  font-family: "Lato", "sans-serif";
}
</style>