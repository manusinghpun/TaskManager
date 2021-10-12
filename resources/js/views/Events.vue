<template>
  <div class="container-fluid">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-header d-flex">
        <span>
          <i class="fas fa-chart-area"></i>
          Events Management
        </span>
        <button
          type="button"
          class="btn btn-primary btn-sm ml-auto"
          v-on:click="showNewEventModal"
        >
          <span class="fa fa-plus"></span> Create New
        </button>
      </div>
      <div class="card-body">
        <b-row>
          <b-col lg="2" class="my-1">
            <b-form-group
              label="Show"
              label-cols-sm="8"
              label-cols-md="6"
              label-cols-lg="4"
              label-align-sm="right"
              label-size="sm"
              label-for="perPageSelect"
              class="mb-0"
            >
              <b-form-select
                v-model="perPage"
                id="perPageSelect"
                size="sm"
                :options="pageOptions"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col lg="4" class="my-1">
            <multiselect v-model="value" @input="inputChange" :options="categories" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Filter Categories" label="name" track-by="name" :preselect-first="true">
              <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
            </multiselect>
          </b-col>
          <b-col lg="2" class="my-1">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-table
          id="my-table"
          hover
          small
          outlined
          head-variant="dark"
          :items="events"
          :fields="fields"
          :filter="filter"
          :filter-included-fields="filterOn"
          @filtered="onFiltered"
          :current-page="currentPage"
          :per-page="perPage"
        >
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>

          <template #cell(category_id)="data">
            {{ findCategory(data.item.category_id) }}
          </template>

          <template #cell(start_time)="data">
            <small>{{ data.item.start_time | datetime }}</small>
          </template>

          <template #cell(fullday)="data">
                <span v-if="data.item.fullDay == '1'"
                  ><i class="fa fa-check text-success"></i
                ></span>
                <span v-else><i class="fa fa-times text-danger"></i></span>
          </template>

          <template #cell(updated_at)="data">
            <small>{{ data.item.updated_at | datetime }}</small>
          </template>

          <template #cell(action)="data">
            <button
              class="btn btn-primary btn-sm"
              v-on:click="editEvent(data.item)"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              class="btn btn-danger btn-sm"
              v-on:click="deleteEvent(data.item)"
            >
              <i class="fas fa-trash"></i>
            </button>
            <b-button size="sm" @click="data.toggleDetails" class="mr-2">
              {{ data.detailsShowing ? 'Hide' : 'Show'}} Details
            </b-button>
          </template>

          <template #row-details="data"><!--template for row details-->
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Start Time:</b></b-col>
                <b-col>{{ data.item.start_time }}</b-col>
                <b-col sm="3" class="text-sm-right" v-if="data.item.venue"><b>Venue:</b></b-col>
                <b-col v-if="data.item.venue">{{ data.item.venue }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right" ><b>Finish Time:</b></b-col>
                <b-col>{{ data.item.finish_time }}</b-col>                
                <b-col sm="3" class="text-sm-right" v-if="data.item.dressCode" ><b>Dress Code:</b></b-col>
                <b-col v-if="data.item.dressCode">{{ data.item.dressCode }}</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Event Create by:</b></b-col>
                <b-col>{{ data.item.author }}</b-col>
                <b-col sm="3" class="text-sm-right" v-if="data.item.comments"><b>Remarks:</b></b-col>
                <b-col v-if="data.item.comments">{{ data.item.comments }}</b-col>
              </b-row>

              <b-button size="sm" @click="data.toggleDetails">Hide Details</b-button>
            </b-card>
          </template>

        </b-table>
          <b-pagination
              v-model="currentPage"
              :total-rows="totalrows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>

      </div>
    </div>

    <b-modal ref="newEventModal" size="xl" hide-footer title="Add event form">
      <b-card bg-variant="light">
        <b-form v-on:submit.prevent="createEvent" @reset="onReset">
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
                >
                  {{ category.name }}
                </option>
              </select>
              <b-form-invalid-feedback v-if="errors.category_id">{{
                errors.category_id[0]
              }}</b-form-invalid-feedback>
            </b-col>
            <b-col sm="6">
              <b-form-input
                v-model="eventData.topic"
                placeholder="Event Name"
                id="topic"
                size="sm"
              ></b-form-input>
              <b-form-invalid-feedback v-if="errors.topic">{{
                errors.topic[0]
              }}</b-form-invalid-feedback>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6">
              <b-input-group size="sm" prepend="Start : ">
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
              <b-form-invalid-feedback v-if="errors.start_date">{{
                errors.start_date[0]
              }}</b-form-invalid-feedback>
            </b-col>
            <b-col sm="4">
              <b-form-timepicker
                size="sm"
                v-model="eventData.start_time"
                id="start_time"
                :readonly="displayTime"
                locale="en"
                :hour12="false"
                :hide-header="true"
              ></b-form-timepicker>
              <b-form-invalid-feedback v-if="errors.start_time">{{
                errors.start_time[0]
              }}</b-form-invalid-feedback>
            </b-col>
            <b-col sm="2">
              <b-form-checkbox
                id="fullDay"
                v-model="eventData.fullDay"
                value="1"
                :unchecked-value="0"
                @change="checkFullDay"
                >All Day</b-form-checkbox
              >
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6">
              <b-input-group size="sm" prepend="End : ">
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
              <b-form-invalid-feedback v-if="errors.finish_date">{{
                errors.start_date[0]
              }}</b-form-invalid-feedback>
            </b-col>
            <b-col sm="4">
              <b-form-timepicker
                v-model="eventData.finish_time"
                id="finish_time"
                size="sm"
                :readonly="displayTime"
                locale="en"
                :hour12="false"
                :hide-header="true"
              ></b-form-timepicker>
              <b-form-invalid-feedback v-if="errors.finish_time">{{
                errors.finish_time[0]
              }}</b-form-invalid-feedback>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6">
              <b-form-input
                id="venue"
                v-model="eventData.venue"
                placeholder="Venue"
                size="sm"
              ></b-form-input>
            </b-col>
            <b-col sm="6">
              <b-form-input
                id="dressCode"
                v-model="eventData.dressCode"
                placeholder="Dress Code"
                size="sm"
              ></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="12">
              <b-form-input
                v-model="eventData.comments"
                id="comments"
                placeholder="Enter something..."
              ></b-form-input>
            </b-col>
            <b-col sm="12"></b-col>
          </b-row>

          <hr />
          <div class="text-right">
            <b-button type="submit" variant="primary" size="sm">
              <span class="fa fa-check"></span> Save
            </b-button>
            <b-button type="reset" variant="danger" size="sm">Reset</b-button>
            <b-button
              type="button"
              variant="warning"
              v-on:click="hideNewEventModal"
              size="sm"
              >Close</b-button
            >
          </div>
        </b-form>
      </b-card>
    </b-modal>

    <!--update Event Modal-->
    <b-modal ref="updateEventModal" size="xl" hide-footer title="Event Details">
      <div class="d-block">
        <b-card bg-variant="light">
          <b-form v-on:submit.prevent="updateEvent">
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
                  >
                    {{ category.name }}
                  </option>
                </select>
                <b-form-invalid-feedback v-if="errors.category_id">{{
                  errors.category_id[0]
                }}</b-form-invalid-feedback>
              </b-col>
              <b-col sm="6">
                <b-form-input
                  v-model="editEventData.topic"
                  placeholder="Event Name"
                  id="topic"
                  size="sm"
                ></b-form-input>
                <b-form-invalid-feedback v-if="errors.topic">{{
                  errors.topic[0]
                }}</b-form-invalid-feedback>
              </b-col>
            </b-row>

            <b-row class="my-1">
              <b-col sm="6">
                <b-input-group size="sm" prepend="Start : ">
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
                <b-form-invalid-feedback v-if="errors.start_date">{{
                  errors.start_date[0]
                }}</b-form-invalid-feedback>
              </b-col>
              <b-col sm="4">
                <b-form-timepicker
                  size="sm"
                  v-model="editEventData.start_time"
                  id="start_time"
                  :readonly="displayTime"
                  locale="en"
                  :hour12="false"
                  :hide-header="true"
                ></b-form-timepicker>
                <b-form-invalid-feedback v-if="errors.start_time">{{
                  errors.start_time[0]
                }}</b-form-invalid-feedback>
              </b-col>
              <b-col sm="2">
                <b-form-checkbox
                  id="fullDay"
                  v-model="editEventData.fullDay"
                  value="1"
                  :unchecked-value="0"
                  @change="checkFullDay"
                  >All Day</b-form-checkbox
                >
              </b-col>
            </b-row>

            <b-row class="my-1">
              <b-col sm="6">
                <b-input-group size="sm" prepend="End : ">
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
                <b-form-invalid-feedback v-if="errors.finish_date">{{
                  errors.start_date[0]
                }}</b-form-invalid-feedback>
              </b-col>
              <b-col sm="4">
                <b-form-timepicker
                  v-model="editEventData.finish_time"
                  id="finish_time"
                  size="sm"
                  :readonly="displayTime"
                  locale="en"
                  :hour12="false"
                  :hide-header="true"
                ></b-form-timepicker>
                <b-form-invalid-feedback v-if="errors.finish_time">{{
                  errors.finish_time[0]
                }}</b-form-invalid-feedback>
              </b-col>
            </b-row>

            <b-row class="my-1">
              <b-col sm="6">
                <b-form-input
                  id="venue"
                  v-model="editEventData.venue"
                  placeholder="Venue"
                  size="sm"
                ></b-form-input>
              </b-col>
              <b-col sm="6">
                <b-form-input
                  id="dressCode"
                  v-model="editEventData.dressCode"
                  placeholder="Dress Code"
                  size="sm"
                ></b-form-input>
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
              <b-button
                type="button"
                variant="warning"
                v-on:click="hideEditEventModal"
                size="sm"
                >Cancel</b-button
              >
            </div>
          </b-form>
        </b-card>
      </div>
    </b-modal>
    <!--end of update Event Modal-->
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import * as eventService from "../services/event_service";
import Multiselect from 'vue-multiselect';
import moment from "moment";

export default {
  components: {
    Multiselect
  },
  name: "event",
  data() {
    return {
       fields: [
        {
          key: "index",
          sortable: false,
          label: "#",
        },
        {
          key: "category_id",
          sortable: true,
          label: 'Event Category'
        },
        {
          key:"topic",
          sortable:true,
          label:'Event'
        },
        {
          key:"start_time",
          sortable: true,
        },
        {
          key: "fullDay",
          sortable: true,
          label: "Fullday?"
        },
        {
          key: "updated_at",
          sortable: true,
        },
        "action",
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 20, 50, { value: 1000, text: "Show all" }],
      filter: null,
      filterOn: [],
      categories: [],
      events: [],
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
      errors: {},
      minDateTo: "",
      displayTime: false, //deafault start_time & finish_time readonly = false

       value: [],
     
    };
  },
  mounted() {
    this.loadCategories();
    this.loadEvents();
  },

  computed: {
      totalrows() {
        return this.events.length
      }
  },

  methods: {
    loadCategories: async function () {
      try {
        const response = await eventService.loadCategories();
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
    loadEvents: async function () {
      try {
        const response = await eventService.loadEvents();
        this.events = response.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon: "/img/flash/error.svg",
        });
      }
    },
    hideNewEventModal() {
      this.$refs.newEventModal.hide();
      this.$data.eventData.category_id = "";
      this.$data.eventData.topic = "";
      this.$data.eventData.comments = "";
      this.$data.eventData.venue = "";
      this.$data.eventData.start_date = new Date().toJSON().slice(0, 10);
      this.$data.eventData.finish_date = new Date().toJSON().slice(0, 10);
      this.$data.eventData.start_time = "09:00:00";
      this.$data.eventData.finish_time = "09:00:00";
      this.$data.eventData.dressCode = "";
      this.$data.eventData.fullDay = "0";
      this.$data.eventData.author = "";
      this.$data.errors = {};
      this.$data.displayTime = false;
    },
    showNewEventModal() {
      this.$refs.newEventModal.show();
    },
    createEvent: async function () {
      // console.log(moment().format('HH:mm:ss'))

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
        this.hideNewEventModal();
        this.flashMessage.success({
          title: "Success! ",
          message: "Event stored successfully!",
          time: 5000,
          icon: "/img/flash/success.svg",
        });
        this.eventData = {
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
            });
            break;
        }
      }
    },

    deleteEvent: async function (event) {
      this.$confirm(`Are you sure you want to delete  ${event.topic} `).then(
        async () => {
          try {
            await eventService.deleteEvent(event.id);
            this.events = this.events.filter((obj) => {
              return obj.id != event.id;
            });
            this.flashMessage.success({
              title: "Success!",
              message: "Event deleted successfully!",
              time: 5000,
              icon: "/img/flash/success.svg",
            });
          } catch (error) {
            this.flashMessage.error({
              title: "Error. ",
              message: "Some error occured, please try again!",
              time: 5000,
              icon: "/img/flash/error.svg",
            });
          }
        }
      );
    },

    hideEditEventModal() {
      this.$refs.updateEventModal.hide();
      this.$data.eventData.category_id = "";
      this.$data.eventData.topic = "";
      this.$data.eventData.comments = "";
      this.$data.eventData.venue = "";
      this.$data.eventData.start_date = new Date().toJSON().slice(0, 10);
      this.$data.eventData.finish_date = new Date().toJSON().slice(0, 10);
      this.$data.eventData.start_time = "09:00:00";
      this.$data.eventData.finish_time = "09:00:00";
      this.$data.eventData.dressCode = "";
      this.$data.eventData.fullDay = "0";
      this.$data.eventData.author = "";
      this.$data.errors = {};
      this.$data.displayTime = false;
    },

    showEditEventModal() {
      this.$refs.updateEventModal.show();
    },

    editEvent(event) {
      // this.editEventData = { ...event };
      var start = event.start_time.split(" ");
      var finish = event.finish_time.split(" ");
      this.editEventData = {
        id: event.id,
        category_id: event.category_id,
        start_date: start[0],
        start_time: start[1],
        finish_date: finish[0],
        finish_time: finish[1],
        fullDay: event.fullDay,
        venue: event.venue,
        dressCode: event.dressCode,
        comments: event.comments,
        topic: event.topic,
      };
      if (this.editEventData.fullDay == "1") {
        this.displayTime = true;
      } else {
        this.displayTime = false;
      }
      this.showEditEventModal();
    },

    updateEvent: async function () {
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
        this.events.map((event) => {
          if (event.id == response.data.id) {
            for (let key in response.data) {
              event[key] = response.data[key];
            }
          }
        });
        this.hideEditEventModal();
        this.flashMessage.success({
          title: "Good. ",
          message: "Event updated successfully!",
          time: 5000,
          icon: "/img/flash/success.svg",
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: error.response.data.message,
          time: 5000,
          icon: "/img/flash/error.svg",
        });
      }
    },

    findCategory(category_id) {
      let category_name = "";
      this.categories.forEach((category) => {
        if (category.id == category_id) {
          category_name = category.name;
        }
      });
      return category_name;
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.eventData.category_id = "";
      this.eventData.topic = "";
      this.eventData.comments = "";
      this.eventData.venue = "";
      this.eventData.dressCode = "";
      this.eventData.fullDay = "0";
      (this.start_date = new Date().toJSON().slice(0, 10)),
        (this.finish_date = new Date().toJSON().slice(0, 10)),
        (this.eventData.start_time = "09:00:00");
      this.eventData.finish_time = "09:00:00";
      this.$data.displayTime = false;
      this.$data.errors = {};

      // Trick to reset/clear native browser form validation state
      //this.show = false
      //this.$nextTick(() => {
      // this.show = true
      // })
    },

    updateDDT(ctx) {
      this.minDateTo = ctx.selectedYMD;
    },

    checkFullDay: function (e) {
      //console.log(this.$refs);
      if (e == "1") {
        this.eventData.start_time = "00:01:01";
        this.eventData.finish_time = "23:59:00";
        this.editEventData.start_time = "00:01:01";
        this.editEventData.finish_time = "23:59:00";
        this.displayTime = true;
      } else {
        this.eventData.start_time = "09:00:00";
        this.eventData.finish_time = "09:00:00";
        this.editEventData.start_time = "09:00:00";
        this.editEventData.finish_time = "09:00:00";
        this.displayTime = false;
      }
    },

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    inputChange (item) {
      var id = item;
      console.log(id);
      //console.log(value.indexOf(this.value))
      // return this.events.filter(product => !product.value.indexOf(this.value))
    },
    
  },
};
</script>
