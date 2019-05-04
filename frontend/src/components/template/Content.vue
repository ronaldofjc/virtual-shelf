<template>
  <div>
    <section class="content-header">
      <div class="row">
        <h2 class="center">Estante Virtual</h2>
        <h4 class="center">Coleção de Livros, Quadrinhos e Mangás</h4>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      comics: [],
      mangas: [],
      booksRead: []
    };
  },
  methods: {}
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
