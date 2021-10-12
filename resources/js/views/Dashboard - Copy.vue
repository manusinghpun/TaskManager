<template>
  <!-- Page Wrapper -->
  
  <div id="wrapper" class="calendar-wrapper">
    <!-- Sidebar -->
     <ul  class="navbar-nav shadow sidebar sidebar-dark accordion d-print-none"
      id="accordionSidebar"     >
      <li class="nav-item">
        <b-form-input  autofocus placeholder="Search event .." size="sm"></b-form-input>

      </li>
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

      <!-- toogle previos data -->
      <li class="nav-item p-1">
        <b-button variant="secondary" size="sm" block @click="togglePreEvents">Toggle Previous Events</b-button>
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

      <li class="nav-item p-1">
        <small> Filter Category
          <div v-for="category in categories" v-bind:key="category.id">
            <b-form-checkbox size="sm" :id="category.name" :value="category.id"  v-model="slectedCategories" @input="filterCategory" >
              <b-badge v-bind:style="{'background-color':category.color}" >{{category.name}}</b-badge>
            </b-form-checkbox>
          </div>
        </small>
      </li>
    </ul>
    
   
    <!-- End of Sidebar -->
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <FullCalendar   :options="calendarOptions" :events="events" ref="fullCalendar" :weekends="weekends"   />
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->
    </div>
    <!-- End of Content Wrapper -->


    <!--add Event Modal-->
    <b-modal ref="addEventModal"  size="xl" hide-footer title="Event Details">
            <div class="d-block">
                    <b-card bg-variant="light">
                      <b-form v-on:submit.prevent="createEvent" >
                        <b-row class="my-1">
                          <b-col sm="6">
                            <select
                              v-model="eventData.category_id"
                              id="category_id"
                              size="sm"
                              class="form-control"
                            >
                              <option value>Choose Event Category</option>
                              <option
                                v-for="(category, index) in categories"
                                :value="category.id"
                                :key="index"
                              >{{category.name}}</option>
                            </select>
                            <b-form-invalid-feedback v-if="errors.category_id">{{ errors.category_id[0] }}</b-form-invalid-feedback>
                          </b-col>
                          <b-col sm="6">
                            <b-form-input v-model="eventData.topic" placeholder="Event Name" id="topic" size="sm"></b-form-input>
                            <b-form-invalid-feedback v-if="errors.topic">{{ errors.topic[0] }}</b-form-invalid-feedback>
                          </b-col>
                        </b-row>

                        <b-row class="my-1">
                          <b-col sm="6">                
                          <b-input-group size="sm" prepend="Start : " >
                            <b-form-datepicker 
                              id="start_date"
                              v-model="eventData.start_date"
                              size="sm"
                              today-button
                              close-button
                              class="mb-2"
                              local="en"
                              @context="updateDDT"
                            ></b-form-datepicker>
                            
                          </b-input-group>
                            <b-form-invalid-feedback v-if="errors.start_date">{{ errors.start_date[0] }}</b-form-invalid-feedback>
                          </b-col>
                          <b-col sm="4">
                            <b-form-timepicker size="sm" v-model="eventData.start_time" id="start_time"  
                                              locale="en" :hour12="false"  :hide-header="true"></b-form-timepicker>
                            <b-form-invalid-feedback v-if="errors.start_time">{{ errors.start_time[0] }}</b-form-invalid-feedback>
                          </b-col>
                          <b-col sm="2">
                            <b-form-checkbox
                              id="fullDay"
                              v-model="eventData.fullDay"
                              value="1"
                              :unchecked-value="0"
                              @change="checkFullDay()"
                            >All Day</b-form-checkbox>
                          </b-col>
                        </b-row>

                        <b-row class="my-1">
                          <b-col sm="6">
                          <b-input-group size="sm" prepend="End : " >
                            <b-form-datepicker
                              id="finish_date"
                              v-model="eventData.finish_date"
                              size="sm"
                              today-button
                              close-button
                              class="mb-2"
                              local="en"
                              :min="minDateTo"
                            ></b-form-datepicker>
                          </b-input-group>
                            <b-form-invalid-feedback v-if="errors.finish_date">{{ errors.start_date[0] }}</b-form-invalid-feedback>
                          </b-col>
                          <b-col sm="4">
                            <b-form-timepicker v-model="eventData.finish_time" id="finish_time" size="sm" 
                                              locale="en" :hour12="false"  :hide-header="true"></b-form-timepicker>
                            <b-form-invalid-feedback v-if="errors.finish_time">{{ errors.finish_time[0] }}</b-form-invalid-feedback>
                          </b-col>
                        </b-row>

                        <b-row class="my-1">
                          <b-col sm="6">
                            <b-form-input id="venue" v-model="eventData.venue"  placeholder="Venue" size="sm"></b-form-input>
                          </b-col>
                          <b-col sm="6">
                            <b-form-input id="dressCode" v-model="eventData.dressCode" placeholder="Dress Code" size="sm"></b-form-input>
                          </b-col>
                        </b-row>

                        <b-row class="my-1">
                          <b-col sm="12">
                            <b-form-input
                              v-model="eventData.comments"
                              id="comments"
                              placeholder="Enter more details about this event..."
                            ></b-form-input>
                          </b-col>
                          <b-col sm="12"></b-col>
                        </b-row>

                        <hr />
                        <div class="text-right">
                          <b-button type="submit" variant="primary" size="sm">
                            <span class="fa fa-check"></span> Save
                          </b-button>
                          <b-button type="button" variant="warning" v-on:click="hideaddEventModal" size="sm">Cancel</b-button>
                        </div>
                      </b-form>
                    </b-card>
            </div>
    </b-modal>
    <!--end of Event Modal-->

    <!--update Event Modal-->
    <b-modal ref="updateEventModal"  size="xl" hide-footer title="Event Details">
            <div class="d-block">
                    <b-card bg-variant="light">
                      <b-form v-on:submit.prevent="updateEvent" >
                        <b-row class="my-1">
                          <b-col sm="6">
                            <select
                              v-model="editEventData.category_id"
                              id="category_id"
                              size="sm"
                              class="form-control"
                            >
                              <option value>Choose Event Category</option>
                              <option
                                v-for="(category, index) in categories"
                                :value="category.id"
                                :key="index"
                              >{{category.name}}</option>
                            </select>
                            <b-form-invalid-feedback v-if="errors.category_id">{{ errors.category_id[0] }}</b-form-invalid-feedback>
                          </b-col>
                          <b-col sm="6">
                            <b-form-input v-model="editEventData.topic" placeholder="Event Name" id="topic" size="sm"></b-form-input>
                            <b-form-invalid-feedback v-if="errors.topic">{{ errors.topic[0] }}</b-form-invalid-feedback>
                          </b-col>
                        </b-row>

                        <b-row class="my-1">
                          <b-col sm="6">                
                          <b-input-group size="sm" prepend="Start : " >
                            <b-form-datepicker
                              id="start_date"
                              v-model="editEventData.start_date"
                              size="sm"
                              today-button
                              close-button
                              class="mb-2"
                              local="en"
                              @context="updateDDT"
                            ></b-form-datepicker>
                            
                          </b-input-group>
                            <b-form-invalid-feedback v-if="errors.start_date">{{ errors.start_date[0] }}</b-form-invalid-feedback>
                          </b-col>
                          <b-col sm="4">
                            <b-form-timepicker size="sm" v-model="editEventData.start_time" id="start_time" 
                                              locale="en" :hour12="false"  :hide-header="true"></b-form-timepicker>
                            <b-form-invalid-feedback v-if="errors.start_time">{{ errors.start_time[0] }}</b-form-invalid-feedback>
                          </b-col>
                          <b-col sm="2">
                            <b-form-checkbox
                              id="fullDay"
                              v-model="editEventData.fullDay"
                              value="1"
                              :unchecked-value="0"
                            >All Day</b-form-checkbox>
                          </b-col>
                        </b-row>

                        <b-row class="my-1">
                          <b-col sm="6">
                          <b-input-group size="sm" prepend="End : " >
                            <b-form-datepicker
                              id="finish_date"
                              v-model="editEventData.finish_date"
                              size="sm"
                              today-button
                              close-button
                              class="mb-2"
                              local="en"
                              :min="minDateTo"
                            ></b-form-datepicker>
                          </b-input-group>
                            <b-form-invalid-feedback v-if="errors.finish_date">{{ errors.start_date[0] }}</b-form-invalid-feedback>
                          </b-col>
                          <b-col sm="4">
                            <b-form-timepicker v-model="editEventData.finish_time" id="finish_time" size="sm" 
                                              locale="en" :hour12="false"  :hide-header="true"></b-form-timepicker>
                            <b-form-invalid-feedback v-if="errors.finish_time">{{ errors.finish_time[0] }}</b-form-invalid-feedback>
                          </b-col>
                        </b-row>

                        <b-row class="my-1">
                          <b-col sm="6">
                            <b-form-input id="venue" v-model="editEventData.venue"   placeholder="Venue" size="sm"></b-form-input>
                          </b-col>
                          <b-col sm="6">
                            <b-form-input id="dressCode" v-model="editEventData.dressCode" placeholder="Dress Code" size="sm"></b-form-input>
                          </b-col>
                        </b-row>

                        <b-row class="my-1">
                          <b-col sm="12">
                            <b-form-input
                              v-model="editEventData.comments"
                              id="comments"
                              placeholder="Enter more details about this event..."
                            ></b-form-input>
                          </b-col>
                          <b-col sm="12"></b-col>
                        </b-row>

                        <hr />
                        <div class="text-right">
                          <b-button type="submit" variant="primary" size="sm">
                            <span class="fa fa-check"></span> Update
                          </b-button>
                          <b-button type="button" variant="danger" v-on:click="deleteEvent(editEventData.id)" size="sm">
                            <span class="fa fa-trash"></span> Delete
                          </b-button> &nbsp;&nbsp;&nbsp;&nbsp;
                          <b-button type="button" variant="warning" v-on:click="hideupdateEventModal" size="sm">Cancel</b-button>
                        </div>
                      </b-form>
                    </b-card>
            </div>
    </b-modal>
    <!--end of update Event Modal-->


  </div>
  <!-- End of Page Wrapper -->



</template>

<script>
import * as calendarService from "../services/calevent_service";
import * as eventService from "../services/event_service";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import adaptivePlugin from "@fullcalendar/adaptive";
import Axios from 'axios';
import {mapGetters, mapActions } from 'vuex';
import moment from 'moment';

//import yearPlugin from "fullcalendar-year-view/";


export default {
  name : 'event',
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },

   data() {
    return {
      events: "",
      weekends: false,
      preEvents: false,
      categories: [],
      selectedWeekFirstDay: null,
      weekFirstDayOptions: [
        { value: null, text: 'Please select an option' },
        { text: "Monday", value: "1" },
        { text: "Tuesday", value: "2" },
        { text: "Wednesday", value: "3" },
        { text: "Thursday", value: "4" },
        { text: "Friday", value: "5" },
        { text: "Saturday", value: "6" },
        { text: "Sunday", value: "7" },
      ],

      gotoDateValue: '',
      eventData: {
        category_id: "",
        topic: "",
        comments: "",
        venue: "",
        start_date: new Date().toJSON().slice(0,10),
        finish_date: new Date().toJSON().slice(0,10),
        start_time: "09:00:00",
        finish_time: "09:00:00",
        dressCode: "",
        fullDay: "0",
        author: "",
      },
      editEventData: {},
      errors: {},
      //datepicker change from to date dynamically
      minDateTo: "",
      slectedCategories: []
     
    };
  },
  
  computed: {
    ...mapGetters(['events','weekends']),
    calendarOptions () {
      return {
        ... this.configOptions,
        ...this.eventHandlers
      }
    },
    configOptions () {
      return {
        editable: true,
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
        headerToolbar: {
          left: "addEventButton printButton",
          center: "prev title next today",
          right: "listDay,dayGridMonth,timeGridWeek",
        },
        initialView: 'dayGridMonth',
        initialView: "listDay",
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        firstDay: 1,
        aspectRatio:2,
        nowIndicator: true,
        fixedWeekCount: false,
        showNonCurrentDates: false,
        slotEventOverlap: false,
        navLinks: true,
        scrollTime: '08:00:00',
        customButtons: {
          addEventButton: {
            text: "New Event",
            click: this.onAddButtonClick
          },
          printButton: {
            text: "Print",
            click: function () {
              window.print();
            },
          },
        },
        slotLabelFormat: {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        },
        views: {
          listDay: {
            type: "listDay",
            duration: { days: 1 },
            buttonText: "Day",
          },
        },
        displayEventEnd:false,//hide event end time
        eventTimeFormat: {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        },
        expandRows: true,
        snapDuration: '00:01:00',
        businessHours: [
          {
            daysOfWeek: [1,2,3,4,5],
            startTime: '08:00',
            endTime: '19:00'
          }
        ],
        
       

        ////////////

      }
    },
    eventHandlers () {
      return {
        viewClassNames: this.onViewClassNames,
        eventClick: this.onEventClick,
        eventDrop: this.onEventDrop,
        eventResize: this.onEventResize,
        select: this.onDateSelect,
      }
    },

        
  },
   mounted() {
    this.loadCategories();
  },

  created() {
    this.loadEvents();
  },
  methods: {
    ...mapActions([
      'createEvent',
      'updateEvent',
      'deleteEvent',
      'remove-events',
      'hideupdateEventModal'
    ]),

    loadEvents: async function () {
      try {
        const response = await calendarService.loadEvents();
        this.events = response.data.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon : '/img/flash/error.svg',
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
          icon : '/img/flash/error.svg',
        });
      }
    },

    gotoDate: function(ctx) {  
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
      if (value === false){
        calendarApi.setOption('validRange',{
          start:'',
        });
      } else if (value === true) {
        calendarApi.setOption('validRange',{
          start: moment().format('YYYY-MM-DD HH:mm')
        });
      }
      
      //this.validRange = moment().format('YYYY-MM-DD HH:mm'); // toggle the boolean!
    },

    weekFirstDay: function (value) {
      let calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.setOption('firstDay',value);
     // this.calendarOptions.firstDay = value; 
    },

    onViewClassNames:function (view){      //this function will hide print button for week view 
          let calendarApi = this.$refs.fullCalendar.getApi();
          if(view.view.type == "timeGridWeek"){
            //console.log(view.view.calendar.currentData.calendarOptions);
            calendarApi.setOption('headerToolbar',{
              left: "addEventButton",
              center: "prev title next today",
              right: "listDay,dayGridMonth,timeGridWeek",
            });           
           
          }  else {
            calendarApi.setOption('headerToolbar',{
              left: "addEventButton printButton",
              center: "prev title next today",
              right: "listDay,dayGridMonth,timeGridWeek",
            }); 

          }
      },
    

    hideupdateEventModal() {
      this.$refs.updateEventModal.hide();

      this.$data.editEventData.category_id= ""
      this.$data.editEventData.topic= ""
      this.$data.editEventData.comments= ""
      this.$data.editEventData.venue= ""
      this.$data.editEventData.start_date= new Date().toJSON().slice(0,10)
      this.$data.editEventData.finish_date= new Date().toJSON().slice(0,10)
      this.$data.editEventData.start_time= "09:00:00"
      this.$data.editEventData.finish_time= "09:00:00"
      this.$data.editEventData.dressCode= ""
      this.$data.editEventData.fullDay= "0"
      this.$data.editEventData.author= ""
      this.$data.errors= {}
    },

    hideaddEventModal() {
      this.$refs.addEventModal.hide();
      
      this.$data.eventData.category_id= ""
      this.$data.eventData.topic= ""
      this.$data.eventData.comments= ""
      this.$data.eventData.venue= ""
      this.$data.eventData.start_date= new Date().toJSON().slice(0,10)
      this.$data.eventData.finish_date= new Date().toJSON().slice(0,10)
      this.$data.eventData.start_time= "09:00:00"
      this.$data.eventData.finish_time= "09:00:00"
      this.$data.eventData.dressCode= ""
      this.$data.eventData.fullDay= "0"
      this.$data.eventData.author= ""
      this.$data.errors= {}
    },

    onAddButtonClick: function(){
      this.$refs.addEventModal.show();
    },

    updateDDT(ctx) {
      this.minDateTo = ctx.selectedYMD;
    },


    createEvent: async function () {

      let formData = new FormData();
      formData.append("category_id", this.eventData.category_id);
      formData.append("topic", this.eventData.topic);
      formData.append("start_date", this.eventData.start_date);
      formData.append("start_time", this.eventData.start_time);
      formData.append("finish_date", this.eventData.finish_date);
      formData.append("finish_time", this.eventData.finish_time);
      formData.append("fullDay", this.eventData.fullDay);
      formData.append("venue", this.eventData.venue);
      formData.append("dressCode", this.eventData.dressCode);
      formData.append("comments", this.eventData.comments);

      try {
        const response = await eventService.createEvent(formData);
        this.events.unshift(response.data);
        this.hideaddEventModal();
        this.flashMessage.success({
          title: "Success! ",
          message: "Event stored successfully!",
          time: 5000,
          icon : '/img/flash/success.svg',
        });
        this.eventData = {
            category_id: "",
            topic: "",
            comments: "",
            venue: "",
            start_date: new Date().toJSON().slice(0,10),
            finish_date: new Date().toJSON().slice(0,10),
            start_time: "09:00:00",
            finish_time: "09:00:00",
            dressCode: "",
            fullDay: "0",
            author: "",
        };
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          default:
            this.flashMessage.error({
              title: "Error. ",
              message: "Some error occured, please try again!",
              time: 5000,
              icon : '/img/flash/error.svg',
            });
            break;
        }
      }      
      this.loadEvents();
    },

    
    showEvent: async function (event_id) {
      try {
        const response = await eventService.showEvent(event_id);
        var start = response.data.start_time.split(" ");
        var finish = response.data.finish_time.split(" ");
        return this.editEventData = {
          id : response.data.id,
          category_id : response.data.category_id,
          start_date : start[0],
          start_time : start[1],
          finish_date : finish[0],
          finish_time : finish[1],
          fullDay : response.data.fullDay,
          venue : response.data.venue,
          dressCode : response.data.dressCode,
          comments : response.data.comments,
          topic : response.data.topic

        }
       //return this.editEventData = { ...response.data };
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon : '/img/flash/error.svg',
        });
      }
    },


    onEventClick ({ event }) {
      const event_id = event.extendedProps.id;
      this.showEvent(event_id);  
      this.$refs.updateEventModal.show();
    },

    updateEvent: async function() {
            try {
                const formData = new FormData();
                formData.append("category_id", this.editEventData.category_id);
                formData.append("topic", this.editEventData.topic);
                formData.append("start_date", this.editEventData.start_date);
                formData.append("start_time", this.editEventData.start_time);
                formData.append("finish_date", this.editEventData.finish_date);
                formData.append("finish_time", this.editEventData.finish_time);
                formData.append("fullDay", this.editEventData.fullDay);
                formData.append("venue", this.editEventData.venue);
                formData.append("dressCode", this.editEventData.dressCode);
                formData.append("comments", this.editEventData.comments);
                formData.append("_method", "put");

                const response = await eventService.updateEvent(
                    this.editEventData.id,
                    formData
                );
                this.events.map(event => {
                    if (event.id == response.data.id) {
                        for (let key in response.data) {
                            event[key] = response.data[key];
                        }
                    }
                });
                this.hideupdateEventModal();
                this.flashMessage.success({
                    title: "Success!",
                    message: "Category updated successfully!",
                    time: 5000,
                    icon : '/img/flash/success.svg',
                });
            } catch (error) {
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;
                    default:
                        this.flashMessage.error({
                            title: "Error. ",
                            message: "Some error occured, please try again!",
                            time: 5000,
                            icon : '/img/flash/error.svg',
                        });
                        break;
                }
            }
          this.loadEvents();
        },
    
    onDateSelect (selectInfo) {
      this.$refs.addEventModal.show();
      if(selectInfo.allDay){        
      this.$data.eventData.start_date = moment(selectInfo.start).format('YYYY-MM-DD');
      this.$data.eventData.finish_date = moment(selectInfo.end).subtract(1,"days").format('YYYY-MM-DD');
      this.$data.eventData.start_time = "00:01";
      this.$data.eventData.finish_time = "23:59";
      this.$data.eventData.fullDay = "1";
      } else {        
      this.$data.eventData.start_date = moment(selectInfo.start).format('YYYY-MM-DD');
      this.$data.eventData.finish_date = moment(selectInfo.end).format('YYYY-MM-DD');
      this.$data.eventData.start_time = moment(selectInfo.startStr).format('HH:mm');
      this.$data.eventData.finish_time = moment(selectInfo.endStr).format('HH:mm');
      this.$data.eventData.fullDay = "0";
      }
    },

    onEventDrop (info) {
      //return this.updateEvent(event)  
      this.$confirm(`${info.event.title} was dropped on ${moment(info.event.start).format('DD-MM-YYYY HH:mm')}, Are you sure about this change?`).then(async () => {
        var dropStart = moment(info.event.start).format('YYYY-MM-DD HH:mm');
        if(info.event.allDay){           
          var dropEnd = moment(info.event._instance.range.end).add(-1,'days').format('YYYY-MM-DD HH:mm');         
        } else {          
          var dropEnd = moment(info.event.end).format('YYYY-MM-DD HH:mm');
        }
        var id = info.event.extendedProps.id;
        try {
                const formData = new FormData();
                formData.append("start_time", dropStart);
                formData.append("finish_time", dropEnd);
                formData.append("_method", "put");

                const response = await eventService.updateEvent(
                    id,
                    formData
                );
                this.events.map(event => {
                    if (event.id == response.data.id) {
                        for (let key in response.data) {
                            event[key] = response.data[key];
                        }
                    }
                });
                //this.hideEditCategoryModal();
                this.flashMessage.success({
                    title: "Success!",
                    message: "Event updated successfully!",
                    time: 5000,
                    icon : '/img/flash/success.svg',
                });
            } catch (error) {
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;
                    default:
                        this.flashMessage.error({
                            title: error,
                            message: "Some error occured, please try again!",
                            time: 5000,
                            icon : '/img/flash/error.svg',
                        });
                        break;
                }
            }

        this.loadEvents();

      })
      .catch(function (){
        info.revert();
      });
    },

    onEventResize (info) {
      //return this.updateEvent(event)      
      this.$confirm(`${info.event.title} was resize from  ${moment(info.event.start).format('DD-MM-YYYY HH:mm')} to ${moment(info.event.end).format('DD-MM-YYYY HH:mm')},
       Are you sure about this change?`).then(async () => {
        var dropStart = moment(info.event.start).format('YYYY-MM-DD HH:mm');
        var dropEnd = moment(info.event.end).format('YYYY-MM-DD HH:mm');
        var id = info.event.extendedProps.id;
        try {
                const formData = new FormData();
                formData.append("start_time", dropStart);
                formData.append("finish_time", dropEnd);
                formData.append("_method", "put");

                const response = await eventService.updateEvent(
                    id,
                    formData
                );
                this.events.map(event => {
                    if (event.id == response.data.id) {
                        for (let key in response.data) {
                            event[key] = response.data[key];
                        }
                    }
                });
                //this.hideEditCategoryModal();
                this.flashMessage.success({
                    title: "Success!",
                    message: "Event updated successfully!",
                    time: 5000,
                    icon : '/img/flash/success.svg',
                });
            } catch (error) {
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;
                    default:
                        this.flashMessage.error({
                            title: "Error. ",
                            message: "Some error occured, please try again!",
                            time: 5000,
                            icon : '/img/flash/error.svg',
                        });
                        break;
                }
            }

        this.loadEvents();

      })
      .catch(function (){
        info.revert();
      });
    },

    deleteEvent: async function(id) {
            this.$confirm(`Are you sure you want to delete this event`).then(async () => {
                try {
                    await eventService.deleteEvent(id);
                    this.events = this.events.filter(obj => {
                        return obj.id != id;
                    });
                    
                    this.hideupdateEventModal();
                    this.loadEvents();
                    this.flashMessage.success({
                        title: "Success! ",
                        message: "Event deleted successfully!",
                        time: 5000,
                        icon : '/img/flash/success.svg',
                    });

                } catch (error) {
                    this.flashMessage.error({
                        title: error,
                        message: "Some error occured, please try again!",
                        time: 5000,
                        icon : '/img/flash/error.svg',
                    });
                }

            });
            


    },

    checkFullDay : function (value){
      console.log(value);
    },
    

    filterCategory (evt){
      console.log(evt);
    }

  }
}
  
</script>