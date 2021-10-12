<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-2">
      <h1 class="h4 mb-0 text-gray-800">Dashboard</h1>
      <!--
      <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i class="fas fa-download fa-sm text-white-50"></i>
        Generate Report
      </a>
      -->
    </div>

    <!-- Content Row -->
    <div class="row">
      <!-- Content Column -->
      <div class="col-lg-6 mb-2">
        <!-- Todays event -->
        <div class="card border-left-info shadow mb-2">
          <div class="card-header py-3">
            <h6 class="m-0 text-info">Todays Event</h6>
          </div>
          <div class="card-body">
            Table of todays events
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <router-link to="/home/calendar" class="float-right">More &rarr; </router-link>
          </div>
        </div>
      </div>
      <!-- Content Column -->
      <div class="col-lg-6 mb-2">
        <!-- forthcoming event -->
        <div class="card border-left-warning shadow mb-2">
          <div class="card-header py-3">
            <h6 class="m-0 text-warning">Forthcoming Event</h6>
          </div>
          <div class="card-body">
            Table of forthcoming events
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <router-link to="/home/calendar" class="float-right">More &rarr; </router-link>
          </div>
        </div>
      </div>

     
    </div>

    <div class="row">
      <div class="col-lg-6 mb-2">
        <!-- Pending tasks -->
        <div class="card border-left-danger shadow mb-2">
          <div class="card-header py-3">
            <h6 class="m-0 text-danger">Pending Tasks</h6>
          </div>
          <div class="card-body">
            <div class="text-center">
              <img
                class="img-fluid px-3 px-sm-4 mt-3 mb-2"
                style="width: 25rem;"
                src="img/undraw_posting_photo.svg"
                alt
              />
            </div>Table of pending tasks
            <br />
            <br />
            <br />
            <br />
            <br />
            <router-link to="/home/calendar" class="float-right">More &rarr; </router-link>
          </div>
        </div>
      </div>

      <!-- Content Column -->
      <div class="col-lg-6 mb-2">
        <!-- Recent Reply received tasks -->
        <div class="card border-left-success shadow mb-2">
          <div class="card-header py-3">
            <h6 class="m-0 text-info">Pending requests</h6>
          </div>
          <div class="card-body">
            Table of pending requests to be replied
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <router-link to="/home/calendar" class="float-right">More &rarr; </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import * as categoryService from "../services/category_service";
export default {
  name: "dashboard",
  data() {
    return {};
  },
  mounted() {
    //this.loadCategories();
  },
  methods: {},
};
</script>
