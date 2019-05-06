<template>
  <div class="skin-blue">
    <header class="main-header">
      <a href="/" class="logo">
        <span class="logo-mini">
          <i class="fa fa-fort-awesome"></i>
        </span>
        <span class="logo-lg">
          <i class="fa fa-fort-awesome"></i>
          <b>{{ title }}</b>
        </span>
      </a>
      <nav class="navbar navbar-static-top">
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Estante Virtual"
    };
  }
};
</script>

<style>
b {
  margin-left: 5px;
}
</style>
