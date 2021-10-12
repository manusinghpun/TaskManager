<template>
<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"  id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <router-link to ="/"   exact class="nav-link sidebar-brand d-flex align-items-center justify-content-center" >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">LaraVue <sup>CRUD</sup></div>
        </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <router-link to ="/home"  class="nav-link" exact>
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
        </router-link>
      </li>


      <li class="nav-item" v-if="$store.state.profile.role === 'administrator'">
        <router-link to ="/home/categories" class="nav-link" exact>
          <i class="fas fa-fw fa-list-alt"></i>
            <span>Categories</span></a>
        </router-link>

      </li>

      <li class="nav-item" v-if="$store.state.profile.role === 'user'">
        <router-link to ="/home/products" class="nav-link" exact>
          <i class="fas fa-fw fa-list-alt"></i>
            <span>Products</span></a>
        </router-link>

      </li>

       <!-- Divider -->
      <hr class="sidebar-divider">

     

    </ul>
<!-- End of Sidebar -->
</template>
