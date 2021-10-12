<template>
  <!-- Topbar -->
  <nav class="navbar navbar-expand navbar-light topbar mb-4 static-top shadow-sm">
    <router-link
      to="/"
      exact
      class="nav-link sidebar-brand d-flex align-items-center justify-content-center"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-calendar"></i>
      </div>
      <div class="sidebar-brand-text mx-3">UDAAN Task Manager</div>
    </router-link>

    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link to="/home" class="nav-link">
          Dashboard
        </router-link>
      </li>
      <!--
      <div class="topbar-divider d-none d-sm-block"></div>
      <li class="nav-item">
        <router-link to="/home/calendar" class="nav-link">
          <i class="nav-icon fas fa-calendar-alt text-secondary"></i>
          Events
        </router-link>
      </li>
      -->
      <div class="topbar-divider d-none d-sm-block"></div>
      <li class="nav-item">
        <router-link to="/home/task" class="nav-link">
          <i class="nav-icon far fa-calendar text-secondary"></i>
          Tasks
        </router-link>
      </li>
      <div class="topbar-divider d-none d-sm-block"></div>
      <li class="nav-item">
        <router-link to="/home/todo" class="nav-link">
          <i class="nav-icon fas fa-tasks text-secondary"></i>
          ToDos
        </router-link>
      </li>      
      <div class="topbar-divider d-none d-sm-block"></div>
      <li class="nav-item">
        <router-link to="/home/profile" class="nav-link"  >
          <i class="nav-icon fa fa-key text-secondary"></i>
          Change Password
        </router-link>
      </li>


      <div
        class="topbar-divider d-none d-sm-block"
        v-if="$store.state.profile.role === 'administrator'"
      ></div>

      <li class="nav-item dropdown" v-if="$store.state.profile.role === 'administrator'">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-muted-600 small">Management</span>
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <!--
          <router-link to="/home/events" class="dropdown-item" exact>
            <i class="fas fa-fw fa-list-alt text-muted"></i>
            <span>Event List</span>
          </router-link>
          <router-link to="/home/categories" class="dropdown-item" exact>
            <i class="fas fa-fw fa-list-alt text-muted"></i>
            <span>Categories</span>
          </router-link>
          <router-link to="/home/groups" class="dropdown-item" exact>
            <i class="fas fa-fw fa-list-alt text-muted"></i>
            <span>Groups</span>
          </router-link>
          -->
          <router-link to="/home/ActivityLog" class="dropdown-item" exact>
            <i class="fas fa-fw fa-history text-muted"></i>
            <span>Activity Logs</span>
          </router-link>
          <router-link to="/home/users" class="dropdown-item" exact>
            <i class="fa fa-users text-muted"></i>
            <span>Users</span>
          </router-link>
        </div>
      </li>
    </ul>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-muted-600 small">
            {{$store.state.profile.name}}
            <small>({{$store.state.profile.role}})</small>
          </span>
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <button type="button" class="dropdown-item" v-on:click="logout">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </button>
        </div>
      </li>
    </ul>
    
  </nav>
  <!-- End of Topbar -->

  
</template>

<script>
import * as auth from "../services/auth_service";
export default {
  methods: {
    logout: async function () {
      auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>