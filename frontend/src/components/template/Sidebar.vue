<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">
        <li>
          <router-link to="/">
            <i class="fa fa-dashboard"></i>
            <span>Dashboard</span>
          </router-link>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-newspaper-o"></i>
            <span>Quadrinhos</span>
            <i class="fa fa-angle-left pull-right-container"></i>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link to="/comic">
                <i class="fa fa-edit"></i>
                <span>Cadastro</span>
              </router-link>
            </li>
            <li>
              <router-link to="/comics">
                <i class="fa fa-list"></i>
                <span>Lista</span>
              </router-link>
            </li>
            <li>
              <router-link to="/comic-stats">
                <i class="fa fa-database"></i>
                <span>Estatísticas</span>
              </router-link>
            </li>
            <li>
              <router-link to="/top-comic-writers">
                <i class="fa fa-user"></i>
                <span>Top Escritores</span>
              </router-link>
            </li>
            <li>
              <router-link to="/top-comic-artists">
                <i class="fa fa-user-o"></i>
                <span>Top Artistas</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-address-card-o"></i>
            <span>Mangás</span>
            <i class="fa fa-angle-left pull-right-container"></i>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link to="/manga">
                <i class="fa fa-edit"></i>
                <span>Cadastro</span>
              </router-link>
            </li>
            <li>
              <router-link to="/mangas">
                <i class="fa fa-list"></i>
                <span>Lista</span>
              </router-link>
            </li>
            <li>
              <router-link to="/manga-stats">
                <i class="fa fa-database"></i>
                <span>Estatísticas</span>
              </router-link>
            </li>
            <li>
              <router-link to="/top-manga-writers">
                <i class="fa fa-user"></i>
                <span>Top Escritores</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-book"></i>
            <span>Livros</span>
            <i class="fa fa-angle-left pull-right-container"></i>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link to="/book">
                <i class="fa fa-edit"></i>
                <span>Cadastro</span>
              </router-link>
            </li>
            <li>
              <router-link to="/books">
                <i class="fa fa-list"></i>
                <span>Lista</span>
              </router-link>
            </li>
            <li>
              <router-link to="/book-stats">
                <i class="fa fa-database"></i>
                <span>Estatísticas</span>
              </router-link>
            </li>
            <li>
              <router-link to="/top-book-writers">
                <i class="fa fa-user"></i>
                <span>Top Escritores</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
</template>