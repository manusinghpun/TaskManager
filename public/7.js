(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Events.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Events.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event_service */ "./resources/js/services/event_service.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  name: "event",
  data: function data() {
    return {
      fields: [{
        key: "index",
        sortable: false,
        label: "#"
      }, {
        key: "category_id",
        sortable: true,
        label: 'Event Category'
      }, {
        key: "topic",
        sortable: true,
        label: 'Event'
      }, {
        key: "start_time",
        sortable: true
      }, {
        key: "fullDay",
        sortable: true,
        label: "Fullday?"
      }, {
        key: "updated_at",
        sortable: true
      }, "action"],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 20, 50, {
        value: 1000,
        text: "Show all"
      }],
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
        author: ""
      },
      editEventData: {},
      errors: {},
      minDateTo: "",
      displayTime: false,
      //deafault start_time & finish_time readonly = false
      value: []
    };
  },
  mounted: function mounted() {
    this.loadCategories();
    this.loadEvents();
  },
  computed: {
    totalrows: function totalrows() {
      return this.events.length;
    }
  },
  methods: {
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_event_service__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 3:
                response = _context.sent;
                this.categories = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured. Please refresh!",
                  time: 5000,
                  icon: "/img/flash/error.svg"
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    loadEvents: function () {
      var _loadEvents = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_event_service__WEBPACK_IMPORTED_MODULE_1__["loadEvents"]();

              case 3:
                response = _context2.sent;
                this.events = response.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured. Please refresh!",
                  time: 5000,
                  icon: "/img/flash/error.svg"
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function loadEvents() {
        return _loadEvents.apply(this, arguments);
      }

      return loadEvents;
    }(),
    hideNewEventModal: function hideNewEventModal() {
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
    showNewEventModal: function showNewEventModal() {
      this.$refs.newEventModal.show();
    },
    createEvent: function () {
      var _createEvent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log(moment().format('HH:mm:ss'))
                formData = new FormData();
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
                _context3.prev = 11;
                _context3.next = 14;
                return _services_event_service__WEBPACK_IMPORTED_MODULE_1__["createEvent"](formData);

              case 14:
                response = _context3.sent;
                this.events.unshift(response.data);
                this.hideNewEventModal();
                this.flashMessage.success({
                  title: "Success! ",
                  message: "Event stored successfully!",
                  time: 5000,
                  icon: "/img/flash/success.svg"
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
                  author: ""
                };
                _context3.next = 30;
                break;

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](11);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 26 : 28;
                break;

              case 26:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 30);

              case 28:
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured, please try again!",
                  time: 5000
                });
                return _context3.abrupt("break", 30);

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[11, 21]]);
      }));

      function createEvent() {
        return _createEvent.apply(this, arguments);
      }

      return createEvent;
    }(),
    deleteEvent: function () {
      var _deleteEvent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(event) {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.$confirm("Are you sure you want to delete  ".concat(event.topic, " ")).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.prev = 0;
                          _context4.next = 3;
                          return _services_event_service__WEBPACK_IMPORTED_MODULE_1__["deleteEvent"](event.id);

                        case 3:
                          _this.events = _this.events.filter(function (obj) {
                            return obj.id != event.id;
                          });

                          _this.flashMessage.success({
                            title: "Success!",
                            message: "Event deleted successfully!",
                            time: 5000,
                            icon: "/img/flash/success.svg"
                          });

                          _context4.next = 10;
                          break;

                        case 7:
                          _context4.prev = 7;
                          _context4.t0 = _context4["catch"](0);

                          _this.flashMessage.error({
                            title: "Error. ",
                            message: "Some error occured, please try again!",
                            time: 5000,
                            icon: "/img/flash/error.svg"
                          });

                        case 10:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, null, [[0, 7]]);
                })));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteEvent(_x) {
        return _deleteEvent.apply(this, arguments);
      }

      return deleteEvent;
    }(),
    hideEditEventModal: function hideEditEventModal() {
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
    showEditEventModal: function showEditEventModal() {
      this.$refs.updateEventModal.show();
    },
    editEvent: function editEvent(event) {
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
        topic: event.topic
      };

      if (this.editEventData.fullDay == "1") {
        this.displayTime = true;
      } else {
        this.displayTime = false;
      }

      this.showEditEventModal();
    },
    updateEvent: function () {
      var _updateEvent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                formData = new FormData();
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
                _context6.next = 15;
                return _services_event_service__WEBPACK_IMPORTED_MODULE_1__["updateEvent"](this.editEventData.id, formData);

              case 15:
                response = _context6.sent;
                this.events.map(function (event) {
                  if (event.id == response.data.id) {
                    for (var key in response.data) {
                      event[key] = response.data[key];
                    }
                  }
                });
                this.hideEditEventModal();
                this.flashMessage.success({
                  title: "Good. ",
                  message: "Event updated successfully!",
                  time: 5000,
                  icon: "/img/flash/success.svg"
                });
                _context6.next = 24;
                break;

              case 21:
                _context6.prev = 21;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  title: "Error. ",
                  message: _context6.t0.response.data.message,
                  time: 5000,
                  icon: "/img/flash/error.svg"
                });

              case 24:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 21]]);
      }));

      function updateEvent() {
        return _updateEvent.apply(this, arguments);
      }

      return updateEvent;
    }(),
    findCategory: function findCategory(category_id) {
      var category_name = "";
      this.categories.forEach(function (category) {
        if (category.id == category_id) {
          category_name = category.name;
        }
      });
      return category_name;
    },
    onReset: function onReset(evt) {
      evt.preventDefault(); // Reset our form values

      this.eventData.category_id = "";
      this.eventData.topic = "";
      this.eventData.comments = "";
      this.eventData.venue = "";
      this.eventData.dressCode = "";
      this.eventData.fullDay = "0";
      this.start_date = new Date().toJSON().slice(0, 10), this.finish_date = new Date().toJSON().slice(0, 10), this.eventData.start_time = "09:00:00";
      this.eventData.finish_time = "09:00:00";
      this.$data.displayTime = false;
      this.$data.errors = {}; // Trick to reset/clear native browser form validation state
      //this.show = false
      //this.$nextTick(() => {
      // this.show = true
      // })
    },
    updateDDT: function updateDDT(ctx) {
      this.minDateTo = ctx.selectedYMD;
    },
    checkFullDay: function checkFullDay(e) {
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
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    inputChange: function inputChange(item) {
      var id = item;
      console.log(id); //console.log(value.indexOf(this.value))
      // return this.events.filter(product => !product.value.indexOf(this.value))
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Events.vue?vue&type=template&id=1b973310&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Events.vue?vue&type=template&id=1b973310& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("div", { staticClass: "card border-left-primary shadow h-100 py-2" }, [
        _c("div", { staticClass: "card-header d-flex" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm ml-auto",
              attrs: { type: "button" },
              on: { click: _vm.showNewEventModal }
            },
            [
              _c("span", { staticClass: "fa fa-plus" }),
              _vm._v(" Create New\n      ")
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "b-row",
              [
                _c(
                  "b-col",
                  { staticClass: "my-1", attrs: { lg: "2" } },
                  [
                    _c(
                      "b-form-group",
                      {
                        staticClass: "mb-0",
                        attrs: {
                          label: "Show",
                          "label-cols-sm": "8",
                          "label-cols-md": "6",
                          "label-cols-lg": "4",
                          "label-align-sm": "right",
                          "label-size": "sm",
                          "label-for": "perPageSelect"
                        }
                      },
                      [
                        _c("b-form-select", {
                          attrs: {
                            id: "perPageSelect",
                            size: "sm",
                            options: _vm.pageOptions
                          },
                          model: {
                            value: _vm.perPage,
                            callback: function($$v) {
                              _vm.perPage = $$v
                            },
                            expression: "perPage"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "my-1", attrs: { lg: "4" } },
                  [
                    _c("multiselect", {
                      attrs: {
                        options: _vm.categories,
                        multiple: true,
                        "close-on-select": false,
                        "clear-on-select": false,
                        "preserve-search": true,
                        placeholder: "Filter Categories",
                        label: "name",
                        "track-by": "name",
                        "preselect-first": true
                      },
                      on: { input: _vm.inputChange },
                      scopedSlots: _vm._u([
                        {
                          key: "selection",
                          fn: function(ref) {
                            var values = ref.values
                            var search = ref.search
                            var isOpen = ref.isOpen
                            return [
                              values.length && !isOpen
                                ? _c(
                                    "span",
                                    { staticClass: "multiselect__single" },
                                    [
                                      _vm._v(
                                        _vm._s(values.length) +
                                          " options selected"
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.value,
                        callback: function($$v) {
                          _vm.value = $$v
                        },
                        expression: "value"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "my-1", attrs: { lg: "2" } },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "search",
                        id: "filterInput",
                        placeholder: "Type to Search"
                      },
                      model: {
                        value: _vm.filter,
                        callback: function($$v) {
                          _vm.filter = $$v
                        },
                        expression: "filter"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("b-table", {
              attrs: {
                id: "my-table",
                hover: "",
                small: "",
                outlined: "",
                "head-variant": "dark",
                items: _vm.events,
                fields: _vm.fields,
                filter: _vm.filter,
                "filter-included-fields": _vm.filterOn,
                "current-page": _vm.currentPage,
                "per-page": _vm.perPage
              },
              on: { filtered: _vm.onFiltered },
              scopedSlots: _vm._u([
                {
                  key: "cell(index)",
                  fn: function(data) {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(data.index + 1) + "\n        "
                      )
                    ]
                  }
                },
                {
                  key: "cell(category_id)",
                  fn: function(data) {
                    return [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.findCategory(data.item.category_id)) +
                          "\n        "
                      )
                    ]
                  }
                },
                {
                  key: "cell(start_time)",
                  fn: function(data) {
                    return [
                      _c("small", [
                        _vm._v(_vm._s(_vm._f("datetime")(data.item.start_time)))
                      ])
                    ]
                  }
                },
                {
                  key: "cell(fullday)",
                  fn: function(data) {
                    return [
                      data.item.fullDay == "1"
                        ? _c("span", [
                            _c("i", { staticClass: "fa fa-check text-success" })
                          ])
                        : _c("span", [
                            _c("i", { staticClass: "fa fa-times text-danger" })
                          ])
                    ]
                  }
                },
                {
                  key: "cell(updated_at)",
                  fn: function(data) {
                    return [
                      _c("small", [
                        _vm._v(_vm._s(_vm._f("datetime")(data.item.updated_at)))
                      ])
                    ]
                  }
                },
                {
                  key: "cell(action)",
                  fn: function(data) {
                    return [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.editEvent(data.item)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.deleteEvent(data.item)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-trash" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-2",
                          attrs: { size: "sm" },
                          on: { click: data.toggleDetails }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(data.detailsShowing ? "Hide" : "Show") +
                              " Details\n          "
                          )
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "row-details",
                  fn: function(data) {
                    return [
                      _c(
                        "b-card",
                        [
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-col",
                                {
                                  staticClass: "text-sm-right",
                                  attrs: { sm: "3" }
                                },
                                [_c("b", [_vm._v("Start Time:")])]
                              ),
                              _vm._v(" "),
                              _c("b-col", [
                                _vm._v(_vm._s(data.item.start_time))
                              ]),
                              _vm._v(" "),
                              data.item.venue
                                ? _c(
                                    "b-col",
                                    {
                                      staticClass: "text-sm-right",
                                      attrs: { sm: "3" }
                                    },
                                    [_c("b", [_vm._v("Venue:")])]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              data.item.venue
                                ? _c("b-col", [_vm._v(_vm._s(data.item.venue))])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-col",
                                {
                                  staticClass: "text-sm-right",
                                  attrs: { sm: "3" }
                                },
                                [_c("b", [_vm._v("Finish Time:")])]
                              ),
                              _vm._v(" "),
                              _c("b-col", [
                                _vm._v(_vm._s(data.item.finish_time))
                              ]),
                              _vm._v(" "),
                              data.item.dressCode
                                ? _c(
                                    "b-col",
                                    {
                                      staticClass: "text-sm-right",
                                      attrs: { sm: "3" }
                                    },
                                    [_c("b", [_vm._v("Dress Code:")])]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              data.item.dressCode
                                ? _c("b-col", [
                                    _vm._v(_vm._s(data.item.dressCode))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-col",
                                {
                                  staticClass: "text-sm-right",
                                  attrs: { sm: "3" }
                                },
                                [_c("b", [_vm._v("Event Create by:")])]
                              ),
                              _vm._v(" "),
                              _c("b-col", [_vm._v(_vm._s(data.item.author))]),
                              _vm._v(" "),
                              data.item.comments
                                ? _c(
                                    "b-col",
                                    {
                                      staticClass: "text-sm-right",
                                      attrs: { sm: "3" }
                                    },
                                    [_c("b", [_vm._v("Remarks:")])]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              data.item.comments
                                ? _c("b-col", [
                                    _vm._v(_vm._s(data.item.comments))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { size: "sm" },
                              on: { click: data.toggleDetails }
                            },
                            [_vm._v("Hide Details")]
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("b-pagination", {
              attrs: {
                "total-rows": _vm.totalrows,
                "per-page": _vm.perPage,
                "aria-controls": "my-table"
              },
              model: {
                value: _vm.currentPage,
                callback: function($$v) {
                  _vm.currentPage = $$v
                },
                expression: "currentPage"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newEventModal",
          attrs: { size: "xl", "hide-footer": "", title: "Add event form" }
        },
        [
          _c(
            "b-card",
            { attrs: { "bg-variant": "light" } },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createEvent($event)
                    },
                    reset: _vm.onReset
                  }
                },
                [
                  _c(
                    "b-row",
                    { staticClass: "my-1" },
                    [
                      _c(
                        "b-col",
                        { attrs: { sm: "6" } },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.eventData.category_id,
                                  expression: "eventData.category_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { id: "category_id", size: "sm" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.eventData,
                                    "category_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Choose Event Category")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.categories, function(category, index) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: category.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(category.name) +
                                        "\n              "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.category_id
                            ? _c("b-form-invalid-feedback", [
                                _vm._v(_vm._s(_vm.errors.category_id[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { sm: "6" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              placeholder: "Event Name",
                              id: "topic",
                              size: "sm"
                            },
                            model: {
                              value: _vm.eventData.topic,
                              callback: function($$v) {
                                _vm.$set(_vm.eventData, "topic", $$v)
                              },
                              expression: "eventData.topic"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.topic
                            ? _c("b-form-invalid-feedback", [
                                _vm._v(_vm._s(_vm.errors.topic[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "my-1" },
                    [
                      _c(
                        "b-col",
                        { attrs: { sm: "6" } },
                        [
                          _c(
                            "b-input-group",
                            { attrs: { size: "sm", prepend: "Start : " } },
                            [
                              _c("b-form-datepicker", {
                                staticClass: "mb-2",
                                attrs: {
                                  id: "start_date",
                                  size: "sm",
                                  "today-button": "",
                                  "close-button": "",
                                  local: "en"
                                },
                                on: { context: _vm.updateDDT },
                                model: {
                                  value: _vm.eventData.start_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.eventData, "start_date", $$v)
                                  },
                                  expression: "eventData.start_date"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.errors.start_date
                            ? _c("b-form-invalid-feedback", [
                                _vm._v(_vm._s(_vm.errors.start_date[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { sm: "4" } },
                        [
                          _c("b-form-timepicker", {
                            attrs: {
                              size: "sm",
                              id: "start_time",
                              readonly: _vm.displayTime,
                              locale: "en",
                              hour12: false,
                              "hide-header": true
                            },
                            model: {
                              value: _vm.eventData.start_time,
                              callback: function($$v) {
                                _vm.$set(_vm.eventData, "start_time", $$v)
                              },
                              expression: "eventData.start_time"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.start_time
                            ? _c("b-form-invalid-feedback", [
                                _vm._v(_vm._s(_vm.errors.start_time[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { sm: "2" } },
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              attrs: {
                                id: "fullDay",
                                value: "1",
                                "unchecked-value": 0
                              },
                              on: { change: _vm.checkFullDay },
                              model: {
                                value: _vm.eventData.fullDay,
                                callback: function($$v) {
                                  _vm.$set(_vm.eventData, "fullDay", $$v)
                                },
                                expression: "eventData.fullDay"
                              }
                            },
                            [_vm._v("All Day")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "my-1" },
                    [
                      _c(
                        "b-col",
                        { attrs: { sm: "6" } },
                        [
                          _c(
                            "b-input-group",
                            { attrs: { size: "sm", prepend: "End : " } },
                            [
                              _c("b-form-datepicker", {
                                staticClass: "mb-2",
                                attrs: {
                                  id: "finish_date",
                                  size: "sm",
                                  "today-button": "",
                                  "close-button": "",
                                  local: "en",
                                  min: _vm.minDateTo
                                },
                                model: {
                                  value: _vm.eventData.finish_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.eventData, "finish_date", $$v)
                                  },
                                  expression: "eventData.finish_date"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.errors.finish_date
                            ? _c("b-form-invalid-feedback", [
                                _vm._v(_vm._s(_vm.errors.start_date[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { sm: "4" } },
                        [
                          _c("b-form-timepicker", {
                            attrs: {
                              id: "finish_time",
                              size: "sm",
                              readonly: _vm.displayTime,
                              locale: "en",
                              hour12: false,
                              "hide-header": true
                            },
                            model: {
                              value: _vm.eventData.finish_time,
                              callback: function($$v) {
                                _vm.$set(_vm.eventData, "finish_time", $$v)
                              },
                              expression: "eventData.finish_time"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.finish_time
                            ? _c("b-form-invalid-feedback", [
                                _vm._v(_vm._s(_vm.errors.finish_time[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "my-1" },
                    [
                      _c(
                        "b-col",
                        { attrs: { sm: "6" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "venue",
                              placeholder: "Venue",
                              size: "sm"
                            },
                            model: {
                              value: _vm.eventData.venue,
                              callback: function($$v) {
                                _vm.$set(_vm.eventData, "venue", $$v)
                              },
                              expression: "eventData.venue"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { sm: "6" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "dressCode",
                              placeholder: "Dress Code",
                              size: "sm"
                            },
                            model: {
                              value: _vm.eventData.dressCode,
                              callback: function($$v) {
                                _vm.$set(_vm.eventData, "dressCode", $$v)
                              },
                              expression: "eventData.dressCode"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "my-1" },
                    [
                      _c(
                        "b-col",
                        { attrs: { sm: "12" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "comments",
                              placeholder: "Enter something..."
                            },
                            model: {
                              value: _vm.eventData.comments,
                              callback: function($$v) {
                                _vm.$set(_vm.eventData, "comments", $$v)
                              },
                              expression: "eventData.comments"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-col", { attrs: { sm: "12" } })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-right" },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            type: "submit",
                            variant: "primary",
                            size: "sm"
                          }
                        },
                        [
                          _c("span", { staticClass: "fa fa-check" }),
                          _vm._v(" Save\n          ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            type: "reset",
                            variant: "danger",
                            size: "sm"
                          }
                        },
                        [_vm._v("Reset")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            type: "button",
                            variant: "warning",
                            size: "sm"
                          },
                          on: { click: _vm.hideNewEventModal }
                        },
                        [_vm._v("Close")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "updateEventModal",
          attrs: { size: "xl", "hide-footer": "", title: "Event Details" }
        },
        [
          _c(
            "div",
            { staticClass: "d-block" },
            [
              _c(
                "b-card",
                { attrs: { "bg-variant": "light" } },
                [
                  _c(
                    "b-form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateEvent($event)
                        }
                      }
                    },
                    [
                      _c(
                        "b-row",
                        { staticClass: "my-1" },
                        [
                          _c(
                            "b-col",
                            { attrs: { sm: "6" } },
                            [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.editEventData.category_id,
                                      expression: "editEventData.category_id"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { id: "category_id", size: "sm" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.editEventData,
                                        "category_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v("Choose Event Category")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.categories, function(
                                    category,
                                    index
                                  ) {
                                    return _c(
                                      "option",
                                      {
                                        key: index,
                                        domProps: { value: category.id }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(category.name) +
                                            "\n                "
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _vm.errors.category_id
                                ? _c("b-form-invalid-feedback", [
                                    _vm._v(_vm._s(_vm.errors.category_id[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "6" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  placeholder: "Event Name",
                                  id: "topic",
                                  size: "sm"
                                },
                                model: {
                                  value: _vm.editEventData.topic,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editEventData, "topic", $$v)
                                  },
                                  expression: "editEventData.topic"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.topic
                                ? _c("b-form-invalid-feedback", [
                                    _vm._v(_vm._s(_vm.errors.topic[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "my-1" },
                        [
                          _c(
                            "b-col",
                            { attrs: { sm: "6" } },
                            [
                              _c(
                                "b-input-group",
                                { attrs: { size: "sm", prepend: "Start : " } },
                                [
                                  _c("b-form-datepicker", {
                                    staticClass: "mb-2",
                                    attrs: {
                                      id: "start_date",
                                      size: "sm",
                                      "today-button": "",
                                      "close-button": "",
                                      local: "en"
                                    },
                                    on: { context: _vm.updateDDT },
                                    model: {
                                      value: _vm.editEventData.start_date,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editEventData,
                                          "start_date",
                                          $$v
                                        )
                                      },
                                      expression: "editEventData.start_date"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.errors.start_date
                                ? _c("b-form-invalid-feedback", [
                                    _vm._v(_vm._s(_vm.errors.start_date[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "4" } },
                            [
                              _c("b-form-timepicker", {
                                attrs: {
                                  size: "sm",
                                  id: "start_time",
                                  readonly: _vm.displayTime,
                                  locale: "en",
                                  hour12: false,
                                  "hide-header": true
                                },
                                model: {
                                  value: _vm.editEventData.start_time,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editEventData,
                                      "start_time",
                                      $$v
                                    )
                                  },
                                  expression: "editEventData.start_time"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.start_time
                                ? _c("b-form-invalid-feedback", [
                                    _vm._v(_vm._s(_vm.errors.start_time[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "2" } },
                            [
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: {
                                    id: "fullDay",
                                    value: "1",
                                    "unchecked-value": 0
                                  },
                                  on: { change: _vm.checkFullDay },
                                  model: {
                                    value: _vm.editEventData.fullDay,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editEventData,
                                        "fullDay",
                                        $$v
                                      )
                                    },
                                    expression: "editEventData.fullDay"
                                  }
                                },
                                [_vm._v("All Day")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "my-1" },
                        [
                          _c(
                            "b-col",
                            { attrs: { sm: "6" } },
                            [
                              _c(
                                "b-input-group",
                                { attrs: { size: "sm", prepend: "End : " } },
                                [
                                  _c("b-form-datepicker", {
                                    staticClass: "mb-2",
                                    attrs: {
                                      id: "finish_date",
                                      size: "sm",
                                      "today-button": "",
                                      "close-button": "",
                                      local: "en",
                                      min: _vm.minDateTo
                                    },
                                    model: {
                                      value: _vm.editEventData.finish_date,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editEventData,
                                          "finish_date",
                                          $$v
                                        )
                                      },
                                      expression: "editEventData.finish_date"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.errors.finish_date
                                ? _c("b-form-invalid-feedback", [
                                    _vm._v(_vm._s(_vm.errors.start_date[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "4" } },
                            [
                              _c("b-form-timepicker", {
                                attrs: {
                                  id: "finish_time",
                                  size: "sm",
                                  readonly: _vm.displayTime,
                                  locale: "en",
                                  hour12: false,
                                  "hide-header": true
                                },
                                model: {
                                  value: _vm.editEventData.finish_time,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editEventData,
                                      "finish_time",
                                      $$v
                                    )
                                  },
                                  expression: "editEventData.finish_time"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.finish_time
                                ? _c("b-form-invalid-feedback", [
                                    _vm._v(_vm._s(_vm.errors.finish_time[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "my-1" },
                        [
                          _c(
                            "b-col",
                            { attrs: { sm: "6" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "venue",
                                  placeholder: "Venue",
                                  size: "sm"
                                },
                                model: {
                                  value: _vm.editEventData.venue,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editEventData, "venue", $$v)
                                  },
                                  expression: "editEventData.venue"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "6" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "dressCode",
                                  placeholder: "Dress Code",
                                  size: "sm"
                                },
                                model: {
                                  value: _vm.editEventData.dressCode,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editEventData,
                                      "dressCode",
                                      $$v
                                    )
                                  },
                                  expression: "editEventData.dressCode"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "my-1" },
                        [
                          _c(
                            "b-col",
                            { attrs: { sm: "12" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "comments",
                                  placeholder:
                                    "Enter more details about this event..."
                                },
                                model: {
                                  value: _vm.editEventData.comments,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editEventData, "comments", $$v)
                                  },
                                  expression: "editEventData.comments"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { sm: "12" } })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-right" },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                type: "submit",
                                variant: "primary",
                                size: "sm"
                              }
                            },
                            [
                              _c("span", { staticClass: "fa fa-check" }),
                              _vm._v(" Update\n            ")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: {
                                type: "button",
                                variant: "warning",
                                size: "sm"
                              },
                              on: { click: _vm.hideEditEventModal }
                            },
                            [_vm._v("Cancel")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area" }),
      _vm._v("\n        Events Management\n      ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/event_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/event_service.js ***!
  \************************************************/
/*! exports provided: createEvent, loadCategories, loadEvents, deleteEvent, showEvent, updateEvent, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEvents", function() { return loadEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEvent", function() { return deleteEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEvent", function() { return showEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEvent", function() { return updateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createEvent(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('./events', data);
}
function loadCategories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/get-categories");
}
function loadEvents() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("./events");
}
function deleteEvent(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("events/".concat(id));
}
function showEvent(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("events/".concat(id));
}
function updateEvent(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("events/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("events?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/Events.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Events.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events.vue?vue&type=template&id=1b973310& */ "./resources/js/views/Events.vue?vue&type=template&id=1b973310&");
/* harmony import */ var _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events.vue?vue&type=script&lang=js& */ "./resources/js/views/Events.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Events.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Events.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Events.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Events.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Events.vue?vue&type=template&id=1b973310&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Events.vue?vue&type=template&id=1b973310& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=template&id=1b973310& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Events.vue?vue&type=template&id=1b973310&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_1b973310___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);