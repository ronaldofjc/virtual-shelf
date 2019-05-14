<template>
  <div>
    <section class="content-header">
      <h1>
        Quadrinho
        <small>Cadastro</small>
      </h1>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <form class="row">
                <h3 class="center">Título {{comic.title}}</h3>
              </form>
            </div>
            <div class="box-body">
              <form @submit.prevent="save()">
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="Título">Título</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      name="title"
                      placeholder="Título"
                      v-model="comic.title"
                      data-vv-as="Título"
                    >
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="SubTitulo">Sub-Título</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Sub-Título"
                      v-model="comic.subTitle"
                    >
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="serie">Série</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Série"
                      v-model="comic.serie"
                    >
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="Editora">Editora</label>
                    <input
                      type="text"
                      class="form-control"
                      id="publishingCompany"
                      name="publishingCompany"
                      data-vv-as="Editora"
                      placeholder="Editora"
                      v-model="comic.publishingCompany"
                    >
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="Edicao">Edição</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Edição"
                      v-model="comic.edition"
                    >
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="Paginas">Páginas</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Páginas"
                      v-model="comic.pages"
                    >
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="Escritor">Escritor</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Escritor"
                      v-model="comic.writer"
                    >
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="Artista">Artista</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Artista"
                      v-model="comic.artist"
                    >
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="Capa">Capa</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Capa"
                      v-model="comic.cover"
                    >
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="Tipo">Tipo</label>
                    <select class="form-control" v-model="comic.type">
                      <option>ENCADERNADO</option>
                      <option>MENSAL</option>
                    </select>
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="Lido">Lido</label>
                    <select class="form-control" v-model="comic.read">
                      <option>SIM</option>
                      <option>NÃO</option>
                      <option>LENDO</option>
                    </select>
                  </div>
                </div>
                <div class="col col-md-4">
                  <div class="form-group">
                    <label for="Avaliação">Avaliação</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Avaliação"
                      v-model="comic.evaluation"
                    >
                  </div>
                </div>
                <div class="col col-md-12">
                  <div class="form-group">
                    <label for="Comentário">Comentário</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Comentário"
                      v-model="comic.comment"
                    >
                  </div>
                </div>
                <div class="form-row">
                  <div class="col col-sm-12 col-md-6 col-md-offset-3">
                    <button type="submit" class="btn btn-success btn-block">
                      <i class="fa fa-paper-plane"></i>
                      <strong>SALVAR</strong>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comic: {}
    };
  },
  methods: {
    save() {
      console.log("Cadastrado");
    }
  }
};
</script>

<style>
strong {
  margin-left: 10px;
}
</style>
