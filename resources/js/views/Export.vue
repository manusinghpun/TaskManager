<template>
        <div class="container-fluid">
            <!-- Page Heading -->
            <div
                class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Export Calendar</h1>
            </div>

            <!-- Content Row -->
            <div class="row">
                <!-- daily Card Example -->
                <div class="col-xl-6 col-md-6 mb-6">

                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-primary text-uppercase mb-1" >
                                        <i class="fas fa-clipboard-list  text-gray-300" ></i>
                                        Daily Card
                                    </div>
                                    
                                    <hr />
                                    <div class="mb-0" >
                                       <b-form v-on:submit.prevent="generateCard" @reset="onReset">
                                        <b-row class="my-1">
                                            <b-col sm="8">                
                                            <b-input-group size="sm" prepend="Start : " >
                                            <b-form-datepicker
                                                id="start_date"
                                                v-model="cardData.start_date"
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
                                        </b-row>

                                        <b-row class="my-1">
                                            <b-col sm="8">
                                            <b-input-group size="sm" prepend="End : " >
                                            <b-form-datepicker
                                                id="finish_date"
                                                v-model="cardData.finish_date"
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
                                        </b-row>
                                        <br/><br/>


                                        <div class="text-left">
                                            <b-button type="submit" variant="success" size="sm">
                                            <span class="fa fa-download"></span> Generate Card
                                            </b-button>
                                            <b-button type="reset" variant="danger" size="sm">Reset</b-button>
                                        </div>
                                        </b-form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pending Requests Card Example -->
                <div class="col-xl-6 col-md-6 mb-6">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-warning text-uppercase mb-1" >
                                        Calendar Views
                                    </div>
                                    <hr />
                                    <div class="mb-0 text-gray-800" >
                                       <b-form v-on:submit.prevent="generateView" @reset="onResetView">
                                       <b-row class="my-1">
                                        <b-col sm="3">
                                          <label>Select View Type</label>
                                        </b-col>
                                        <b-col sm="7">                                            
                                            <select v-model="viewData.role" class="form-control" name="role" id="role">
                                                <option value="">Choose View Type</option>
                                                <option>Day View</option>
                                                <option>Week View</option>
                                                <option>Month View</option>
                                                <option>Year View</option>
                                            </select>
                                            <div class="invalid-feedback" v-if="errors.role">
                                                {{ errors.role[0] }}
                                            </div>
                                        </b-col> 
                                        </b-row>
                                        <b-row class="my-1">
                                        <b-col sm="3">
                                          <label>Select date range</label>
                                        </b-col>
                                        <b-col sm="8">                
                                            <date-range-picker
                                              :startDate="startDate"
                                              :endDate="endDate"
                                              @update="console.log(value)"
                                              :locale-data="locale"
                                              :opens="opens"
                                              :dateRange="ranges"
                                            >
                                              <template v-slot:input="picker" style="min-width:350px;">
                                                {{picker.startDate |myDate}} - {{ picker.endDate | myDate}}
                                              </template>
                                            </date-range-picker>
                                        </b-col>
                                        </b-row>

                                        <b-row class="my-1">
                                            <b-col sm="3">
                                              <label> Filter Category</label>
                                            </b-col>
                                            <b-col sm="7">
                                                <div v-for="category in categories" v-bind:key="category.id">
                                                    <b-form-checkbox size="sm" :id="category.name" :value="category.id"  v-model="slectedCategories"  >
                                                    <b-badge v-bind:style="{'background-color':category.color}" >{{category.name}}</b-badge>
                                                    </b-form-checkbox>
                                                </div>
                                            </b-col>
                                        </b-row>
                                        <br/><br/>


                                        <div class="text-left">
                                            <b-button type="submit" variant="success" size="sm">
                                            <span class="fa fa-download"></span> Generate View
                                            </b-button>
                                            <b-button type="reset" variant="danger" size="sm">Reset</b-button>
                                        </div>
                                        </b-form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                


                
            </div>

            <!-- Content Row -->
            
           

            
        </div>
</template>


<script>
import Vue from 'vue';
import * as exportService from "../services/export_service";
import moment from 'moment';
import DateRangePicker from 'vue2-daterange-picker';
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';

Vue.use(DateRangePicker);


export default {
  components: { DateRangePicker},
  name: 'export',
    created(){
      //document.querySelector('body').style.backgroundColor = '#343a40';
    },
    data() {
      return {
        cardData: {
          start_date: '',
          finish_date: ''
        }, 
        viewData: {
          role:''
        }, 
        errors: {},
        minDateTo: "",
        categories: [],
        slectedCategories: [],
        //daterange
        startDate: '2017-09-05',
        endDate: '2020-12-31',
        opens: 'center',
        locale: {
          direction: 'ltr',
          format: 'dd-mm-yyyy',
          separator: ':',
          applyLabel: 'Apply',
          cancelLabel: 'Cancel',
          weekLabel: 'W',
          customRangeLabel: 'Custom Range',
          daysOfWeek: moment.weekdaysMin(),
          monthNames: moment.monthsShort(),
          firstDay: 1,
          showWeekNumbers: true,

      },
      ranges: {
        'Today' : [ moment(), moment() ],
        'Yesterday' : [ moment().subtract(1, 'days'), moment().subtract(1, 'days') ],
        'This month' : [ moment().subtract(1, 'month'), moment().subtract(1, 'month') ],
        'This year' : [ moment().subtract(1, 'year'), moment().subtract(1, 'year') ],
        'Last week' : [ moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week') ],
        'Last month' : [ moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month') ]
      }
      }
    },

    mounted() {
        this.loadCategories();
    },

    methods: {
    forceFileDownload(response){
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download','file.docx')
        document.body.appendChild(link)
        link.click()
    },

    downloadWithAxios(){
        axios({
            method:'get',
            url: this.url,
            responseType: 'arraybuffer'
        })
        .then(response => {
            this.forceFileDownload(response)
        })
        .catch(() => console.log('error occured'))
    },

    generateCard: async function (){
    let formData = new FormData();
            formData.append("start_date", this.cardData.start_date);
            formData.append("finish_date", this.cardData.finish_date);

      try {
        const response = await exportService.exportCard(formData);
        window.open('../storage/export/card.docx');

        this.flashMessage.success({
          title: "Success! ",
          message: "Daily card export successfully!",
          time: 5000,
          icon : '/img/flash/success.svg',
        });
        this.cardData = {
            start_date: '',
            finish_date: ''
        };
      } catch (error) {
          console.log(error);
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            this.flashMessage.warning({
                title: error,
                message: "Some error occured, please try again!",
                time: 5000,
                icon : '/img/flash/warning.svg',
            });
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
    
    generateView: async function (){
    let formData = new FormData();
            formData.append("start_date", this.cardData.start_date);
            formData.append("finish_date", this.cardData.finish_date);

      try {
        const response = await exportService.exportCard(formData);
        window.open('../storage/export/card.docx');

        this.flashMessage.success({
          title: "Success! ",
          message: "Daily card export successfully!",
          time: 5000,
          icon : '/img/flash/success.svg',
        });
        this.cardData = {
            start_date: '',
            finish_date: ''
        };
      } catch (error) {
          console.log(error);
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            this.flashMessage.warning({
                title: error,
                message: "Some error occured, please try again!",
                time: 5000,
                icon : '/img/flash/warning.svg',
            });
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

    
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.cardData.start_date = "";
      this.cardData.finish_date = "";
    },

    onResetView(evt) {
      evt.preventDefault();
      // Reset our form values
      this.cardData.start_date = "";
      this.cardData.finish_date = "";
    },

    updateDDT(ctx) {
      this.minDateTo = ctx.selectedYMD;
    },

    loadCategories: async function () {
      try {
        const response = await exportService.loadCategories();
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

   

     

    },
};
</script>