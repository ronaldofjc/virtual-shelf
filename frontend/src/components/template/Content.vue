<template>
  <div>
    <section class="content-header">
      <div class="row">
        <h1 class="center">Estante Virtual</h1>
        <h4 class="center">Coleção de Livros, Quadrinhos e Mangás</h4>
      </div>
    </section>
    <section class="content">
      <div class="row">
        <div class="col col-sm-12 col-md-4">
          <div class="small-box bg-green">
            <div class="inner">
              <h3>{{stats.books}}</h3>
              <p>Livros</p>
            </div>
            <div class="icon">
              <i class="fa fa-book"></i>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-4">
          <div class="small-box bg-blue">
            <div class="inner">
              <h3>{{stats.comics}}</h3>
              <p>Quadrinhos</p>
            </div>
            <div class="icon">
              <i class="fa fa-newspaper-o"></i>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-4">
          <div class="small-box bg-red">
            <div class="inner">
              <h3>{{stats.mangas}}</h3>
              <p>Mangás</p>
            </div>
            <div class="icon">
              <i class="fa fa-address-card-o"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/index.jpg" class="img-responsive" alt="Responsive image">
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  data() {
    return {
      stats: {
        books: 1,
        comics: 2,
        mangas: 3
      }
    };
  },
  methods: {
    async getStats() {
      //axios.get(`${baseApiUrl}/stats`).then(res => (this.stats = res.data));
    }
  },
  created() {
    //this.getStats();
  }
};
</script>

<style>
.center {
  text-align: center;
}
.img-responsive {
  max-width: 99%;
  max-height: 90%;
  left: auto;
  right: auto;
}
</style>
