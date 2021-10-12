<template>
  <!-- Page Wrapper -->

  <div id="wrapper" class="calendar-wrapper">
    <!-- Sidebar -->
    <ul class="navbar-nav shadow sidebar sidebar-dark accordion d-print-none" id="accordionSidebar">
      <li class="nav-item">
        <a class="nav-link">
          <b-calendar
            v-model="gotoDateValue"
            @context="gotoDate"
            :hideHeader="true"
            width="100%"
            locale="en-US"
            :start-weekday="1"
          ></b-calendar>
        </a>
      </li>

      <li>
        <!--<b-form-input  autofocus placeholder="Search event .." size="sm"></b-form-input>  -->

        <vue-suggestion
          :items="items"
          v-model="item"
          :setLabel="setLabel"
          :itemTemplate="itemTemplate"
          @changed="inputChange"
          @selected="itemSelected"
          placeholder="Search event"
          inputClasses="form-control"
          :maxLen="10"
        ></vue-suggestion>
      </li>

      <!-- toogle previos data -->
      <li class="nav-item p-1">
        <b-button
          variant="secondary"
          size="sm"
          block
          @click="togglePreEvents"
        >Toggle Previous Events</b-button>
      </li>

      <!-- toogle weekends-->
      <li class="nav-item p-1">
        <b-button variant="secondary" size="sm" block @click="toggleWeekends">Toggle Weekends</b-button>
      </li>

      <li class="nav-item p-1">
        <small>
          <b-form-group label="First Day of week" label-for="backdrop-variant">
            <b-form-select
              id="backdrop-variant"
              v-model="selectedWeekFirstDay"
              :options="weekFirstDayOptions"
              size="sm"
              @change="weekFirstDay"
            ></b-form-select>
          </b-form-group>
        </small>
      </li>

      <!--
      <li class="nav-item p-1">
        <small> Filter Category
          <div v-for="category in categories" v-bind:key="category.id">
            <b-form-checkbox size="sm" :id="category.name" :value="category.id" name="filter[]" v-model="slectedCategories" @input="filterCategory" >
              <b-badge v-bind:style="{'background-color':category.color}" >{{category.name}}</b-badge>
            </b-form-checkbox>
          </div>
        </small>
      </li>
      -->
    </ul>

    <!-- End of Sidebar -->
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <FullCalendar
            :options="calendarOptions"
            :events="events"
            ref="fullCalendar"
            :weekends="weekends"
          />
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->
    </div>
    <!-- End of Content Wrapper -->

    <!--show Event Modal-->
    <b-modal ref="showEventModal" size="xl" hide-footer title="Task Details">
      <div class="d-block">
        <b-card bg-variant="light">
          <b-row class="my-1">
            <b-col sm="2">
              <b>Task</b>
            </b-col>
            <b-col sm="10">{{ showEventData.name }}</b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="2">
              <b>PDC</b>
            </b-col>
            <b-col sm="4">{{ showEventData.pdc }}</b-col>
            <b-col sm="2">
              <b>Status</b>
            </b-col>
            <b-col sm="4">
              <span class="badge badge-danger" v-if="showEventData.status == '0'">Pending</span>
              <span class="badge badge-success" v-if="showEventData.status == '1'">Completed</span>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="2">
              <b>Created By</b>
            </b-col>
            <b-col sm="4">{{ findUserName(showEventData.created_by) }}</b-col>
            <b-col sm="2">
              <b>Updated At</b>
            </b-col>
            <b-col sm="4">{{ showEventData.updated_at | datetime }}</b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="2">
              <b>Assign To</b>
            </b-col>
            <b-col sm="10">
              <b-badge
                v-for="item in showEventData.users"
                class="ml-1"
                :key="item.id"
              >{{ item.name }}</b-badge>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="2">
              <b>Description</b>
            </b-col>
            <b-col sm="10">{{ showEventData.description }}</b-col>
          </b-row>

          <hr />

          <b-row class="mb-2" v-for="item in showEventData.replies" :key="item.id">
            <b-col sm="2" class="text-sm-right">
              <b>{{ item.updated_at | datetime }}</b>
            </b-col>
            <b-col>
              <small class="text-info">{{ findUserName(item.reply_by) }}</small>
              <span v-html="item.comment"></span>.
            </b-col>
          </b-row>

          <div class="text-right">
            <b-button
              type="button"
              variant="warning"
              v-on:click="hideshowEventModal"
              size="sm"
            >Close</b-button>
          </div>
        </b-card>
      </div>
    </b-modal>
    <!--end of update Event Modal-->
  </div>
  <!-- End of Page Wrapper -->
</template>

<script>
import * as calendarService from "../services/calevent_service";
import * as taskService from "../services/task_service";
import * as userService from "../services/user_service";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import adaptivePlugin from "@fullcalendar/adaptive";
import Axios from "axios";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";

import * as auth from "../services/auth_service";
import itemTemplate from "./item-template.vue";

export default {
  name: "dashboard",
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },

  data() {
    return {
      events: "",
      weekends: false,
      preEvents: false,
      categories: [],
      users: [],
      selectedWeekFirstDay: null,
      weekFirstDayOptions: [
        { value: null, text: "Please select an option" },
        { text: "Monday", value: "1" },
        { text: "Tuesday", value: "2" },
        { text: "Wednesday", value: "3" },
        { text: "Thursday", value: "4" },
        { text: "Friday", value: "5" },
        { text: "Saturday", value: "6" },
        { text: "Sunday", value: "7" },
      ],
      displayTime: false, //deafault start_time & finish_time readonly = false

      gotoDateValue: "",
      eventData: {
        category_id: "",
        topic: "",
        comments: "",
        venue: "",
        start_date: new Date().toJSON().slice(0, 10),
        finish_date: new Date().toJSON().slice(0, 10),
        start_time: "09:00:00",
        finish_time: "09:00:00",
        dressCode: "",
        fullDay: "0",
        author: "",
      },
      editEventData: {},
      showEventData: {},
      errors: {},
      //datepicker change from to date dynamically
      minDateTo: "",
      slectedCategories: [],

      //autocomplete
      item: {},
      items: [],
      itemTemplate,
    };
  },

  computed: {
    ...mapGetters(["events", "weekends"]),
    calendarOptions() {
      if (auth.getUserRole() == "user") {
        return {
          ...this.configOptions,
          ...this.userEventHandlers,
        };
      } else {
        return {
          ...this.configOptions,
          ...this.eventHandlers,
        };
      }
    },

    configOptions() {
      /*
      if (auth.getUserRole() == 'user'){
       var editable = false;
       var selectable = false;
      } else {
        var editable = true;
        var selectable = true;
      }
      */
      return {
        editable: false,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: false,
        events: this.events,
        weekends: this.weekends,
        plugins: [
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          listPlugin,
          adaptivePlugin,
        ],
        initialView: "dayGridWeek",
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        firstDay: 1,
        aspectRatio: 2,
        nowIndicator: true,
        fixedWeekCount: false,
        showNonCurrentDates: false,
        slotEventOverlap: false,
        navLinks: true,
        views: {
          listDay: {
            type: "listDay",
            duration: { days: 1 },
            buttonText: "Day",
          },
        },
        displayEventEnd: false, //hide event end time
        eventTimeFormat: {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        },
        expandRows: true,
        snapDuration: "00:01:00",
        businessHours: [
          {
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: "08:00",
            endTime: "19:00",
          },
        ],

        ////////////
      };
    },

    eventHandlers() {
      return {
        viewClassNames: this.onViewClassNames,
        eventClick: this.onEventClick,
        eventDrop: this.onEventDrop,
        eventResize: this.onEventResize,
        select: this.onDateSelect,
      };
    },

    userEventHandlers() {
      return {
        eventClick: this.onEventClick,
        viewClassNames: this.onUserViewClassNames,
      };
    },
  },
  mounted() {
    this.loadCategories();
    this.loadUsers();
  },

  created() {
    this.loadEvents();
  },
  methods: {
    ...mapActions([
      "createEvent",
      "updateEvent",
      "deleteEvent",
      "remove-events",
      "hideshowEventModal",
    ]),

    loadEvents: async function () {
      //console.log(auth.getUserRole());
      try {
        const response = await calendarService.loadEvents();
        this.events = response.data.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon: "/img/flash/error.svg",
        });
      }
    },

    loadCategories: async function () {
      try {
        const response = await calendarService.loadCategories();
        this.categories = response.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon: "/img/flash/error.svg",
        });
      }
    },

    loadUsers: async function () {
      try {
        const response = await userService.loadUsers();
        this.users = response.data.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon: "/img/flash/error.svg",
        });
      }
    },

    gotoDate: function (ctx) {
      var gotoDateValue = ctx.activeYMD;
      let calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.gotoDate(gotoDateValue);
    },

    toggleWeekends: function () {
      this.weekends = !this.calendarOptions.weekends; // toggle the boolean!
    },

    togglePreEvents: function () {
      this.preEvents = !this.preEvents;
      let calendarApi = this.$refs.fullCalendar.getApi();
      var value = this.preEvents;
      if (value === false) {
        calendarApi.setOption("validRange", {
          start: "",
        });
      } else if (value === true) {
        calendarApi.setOption("validRange", {
          start: moment().format("YYYY-MM-DD HH:mm"),
        });
      }

      //this.validRange = moment().format('YYYY-MM-DD HH:mm'); // toggle the boolean!
    },

    weekFirstDay: function (value) {
      let calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.setOption("firstDay", value);
      // this.calendarOptions.firstDay = value;
    },

    onViewClassNames: function (view) {
      //this function will hide print button for week view
      let calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.setOption("headerToolbar", {
        left: "today",
        center: "prev title next",
        right: "listDay,dayGridMonth,dayGridWeek",
      });
    },

    onUserViewClassNames: function (view) {
      //this function will hide print button for week view
      let calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.setOption("headerToolbar", {
        left: "today",
        center: "prev title next",
        right: "listDay,dayGridMonth,dayGridWeek",
      });
    },

    hideshowEventModal() {
      this.$refs.showEventModal.hide();

      this.$data.editEventData.category_id = "";
      this.$data.editEventData.topic = "";
      this.$data.editEventData.comments = "";
      this.$data.editEventData.venue = "";
      this.$data.editEventData.start_date = new Date().toJSON().slice(0, 10);
      this.$data.editEventData.finish_date = new Date().toJSON().slice(0, 10);
      this.$data.editEventData.start_time = "09:00:00";
      this.$data.editEventData.finish_time = "09:00:00";
      this.$data.editEventData.dressCode = "";
      this.$data.editEventData.fullDay = "0";
      this.$data.editEventData.author = "";
      this.$data.errors = {};
      this.$data.displayTime = false;
    },

    updateDDT(ctx) {
      this.minDateTo = ctx.selectedYMD;
    },

    showEvent: async function (event_id) {
      try {
        const response = await taskService.showTask(event_id);

        return (this.showEventData = {
          id: response.data.id,
          name: response.data.name,
          pdc: response.data.pdc,
          description: response.data.description,
          status: response.data.status,
          created_by: response.data.created_by,
          updated_at: response.data.updated_at,
          users: response.data.users,
          replies: response.data.replies,
        });
        //return this.editEventData = { ...response.data };
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon: "/img/flash/error.svg",
        });
      }
    },

    onEventClick({ event }) {
      const event_id = event.extendedProps.id;
      this.showEvent(event_id);
      this.$refs.showEventModal.show();
    },

    filterCategory: async function () {
      try {
        //console.log(this.slectedCategories);
        const response = await calendarService.filterCategories(
          this.slectedCategories
        );
        this.events = response.data.data;
      } catch (error) {
        this.flashMessage.error({
          title: error,
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon: "/img/flash/error.svg",
        });
      }
    },

    //vue-suggestion
    itemSelected(item) {
      this.item = item;
      //console.log(this.item);
      let calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.gotoDate(item.start);
    },
    setLabel(item) {
      return item.title;
    },
    inputChange(text) {
      this.items = this.$data.events.filter((item) =>
        item.title.includes(text)
      );
    },

    findUserName(param) {
      let user_name = "";
      this.users.forEach((user) => {
        if (user.user_id == param) {
          user_name = user.name;
        }
      });
      return user_name;
    },
  },
};
</script>