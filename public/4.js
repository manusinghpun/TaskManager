(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tasks.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/task_service */ "./resources/js/services/task_service.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user_service */ "./resources/js/services/user_service.js");
/* harmony import */ var _services_reply_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/reply_service */ "./resources/js/services/reply_service.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  name: "task",
  data: function data() {
    return {
      fields: [{
        key: "index",
        sortable: false,
        label: "#",
        thStyle: {
          width: '3%'
        }
      }, {
        key: "name",
        sortable: true,
        label: "Task Name",
        thStyle: {
          width: '22%'
        }
      }, {
        key: "pdc",
        sortable: true,
        label: "PDC",
        thStyle: {
          width: '8%'
        } //variant: 'danger',

      }, {
        key: "users",
        sortable: true,
        label: "Assign to",
        thStyle: {
          width: '35%'
        }
      }, {
        key: "created_by",
        sortable: true,
        label: "Created By",
        thStyle: {
          width: '10%'
        }
      }, {
        key: "status",
        sortable: true,
        label: "Status",
        thStyle: {
          width: '3%'
        }
      }, {
        key: "updated_at",
        sortable: true,
        thStyle: {
          width: '8%'
        }
      }, "action"],
      options: [{
        text: "Pending",
        value: "0"
      }, {
        text: "Completed",
        value: "1"
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 20, 50, {
        value: 1000,
        text: "Show all"
      }],
      filter: null,
      filterOn: [],
      tasks: [],
      users: [],
      taskData: {
        name: "",
        status: "0",
        description: "",
        pdc: "",
        assign_to: []
      },
      replyData: {
        comment: "",
        task_id: ""
      },
      moreExists: false,
      nextPage: 0,
      editTaskData: {},
      errors: {},
      min: new Date(),
      currentDate: moment__WEBPACK_IMPORTED_MODULE_6___default()().format("YYYY-MM-DD"),
      nextThreeDate: moment__WEBPACK_IMPORTED_MODULE_6___default()().add(3, "days").format("YYYY-MM-DD")
    };
  },
  mounted: function mounted() {
    this.loadTasks();
    this.loadUsers();
  },
  computed: {
    totalrows: function totalrows() {
      return this.tasks.length;
    },
    pendingCount: function pendingCount() {
      return this.tasks.filter(function (item) {
        if (item.status === 0) {
          return true;
        }
      }).length;
    }
  },
  methods: {
    loadTasks: function () {
      var _loadTasks = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_task_service__WEBPACK_IMPORTED_MODULE_1__["loadTasks"]();

              case 3:
                response = _context.sent;
                this.tasks = response.data;
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

      function loadTasks() {
        return _loadTasks.apply(this, arguments);
      }

      return loadTasks;
    }(),
    loadUsers: function () {
      var _loadUsers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_2__["loadUsers"]();

              case 3:
                response = _context2.sent;
                this.users = response.data.data;
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

      function loadUsers() {
        return _loadUsers.apply(this, arguments);
      }

      return loadUsers;
    }(),
    hideNewTaskModal: function hideNewTaskModal() {
      this.$refs.newTaskModal.hide();
    },
    showNewTaskModal: function showNewTaskModal() {
      //console.log(this.$refs);
      this.$refs.newTaskModal.show();
    },
    createTask: function () {
      var _createTask = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData = new FormData();
                formData.append("name", this.taskData.name);
                formData.append("pdc", this.taskData.pdc);
                formData.append("status", this.taskData.status);
                formData.append("description", this.taskData.description);
                formData.append("assign_to", this.taskData.assign_to);
                _context3.prev = 6;
                _context3.next = 9;
                return _services_task_service__WEBPACK_IMPORTED_MODULE_1__["createTask"](formData);

              case 9:
                response = _context3.sent;
                this.tasks.unshift(response.data);
                this.hideNewTaskModal();
                this.flashMessage.success({
                  title: "Success!",
                  message: "Task stored successfully!",
                  time: 5000,
                  icon: "/img/flash/success.svg"
                });
                this.taskData = {
                  name: "",
                  pdc: "",
                  status: "0",
                  description: "",
                  assign_to: []
                };
                _context3.next = 25;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](6);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 21 : 23;
                break;

              case 21:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 25);

              case 23:
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured, please try again!",
                  time: 5000,
                  icon: "/img/flash/error.svg"
                });
                return _context3.abrupt("break", 25);

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 16]]);
      }));

      function createTask() {
        return _createTask.apply(this, arguments);
      }

      return createTask;
    }(),
    deleteTask: function () {
      var _deleteTask = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(task) {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.$confirm("Are you sure you want to delete the task \"".concat(task.name, "\"")).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.prev = 0;
                          _context4.next = 3;
                          return _services_task_service__WEBPACK_IMPORTED_MODULE_1__["deleteTask"](task.id);

                        case 3:
                          _this.tasks = _this.tasks.filter(function (obj) {
                            return obj.id != task.id;
                          });

                          _this.flashMessage.success({
                            title: "Success! ",
                            message: "Task deleted successfully!",
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

      function deleteTask(_x) {
        return _deleteTask.apply(this, arguments);
      }

      return deleteTask;
    }(),
    hideEditTaskModal: function hideEditTaskModal() {
      this.$refs.editTaskModal.hide();
    },
    showEditTaskModal: function showEditTaskModal() {
      this.$refs.editTaskModal.show();
    },
    editTask: function editTask(task) {
      this.editTaskData = _objectSpread({}, task); //console.log(this.editTaskData);

      this.showEditTaskModal();
    },
    updateTask: function () {
      var _updateTask = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                formData = new FormData();
                formData.append("name", this.editTaskData.name);
                formData.append("pdc", this.editTaskData.pdc);
                formData.append("status", this.editTaskData.status);
                formData.append("description", this.editTaskData.description);
                formData.append("assign_to", this.editTaskData.assign_to);
                formData.append("_method", "put");
                _context6.next = 10;
                return _services_task_service__WEBPACK_IMPORTED_MODULE_1__["updateTask"](this.editTaskData.id, formData);

              case 10:
                response = _context6.sent;
                this.tasks.map(function (task) {
                  if (task.id == response.data.id) {
                    for (var key in response.data) {
                      task[key] = response.data[key];
                    }
                  }
                });
                this.hideEditTaskModal();
                this.flashMessage.success({
                  title: "Success!",
                  message: "Task updated successfully!",
                  time: 5000,
                  icon: "/img/flash/success.svg"
                });
                _context6.next = 25;
                break;

              case 16:
                _context6.prev = 16;
                _context6.t0 = _context6["catch"](0);
                _context6.t1 = _context6.t0.response.status;
                _context6.next = _context6.t1 === 422 ? 21 : 23;
                break;

              case 21:
                this.errors = _context6.t0.response.data.errors;
                return _context6.abrupt("break", 25);

              case 23:
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured, please try again!",
                  time: 5000,
                  icon: "/img/flash/error.svg"
                });
                return _context6.abrupt("break", 25);

              case 25:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 16]]);
      }));

      function updateTask() {
        return _updateTask.apply(this, arguments);
      }

      return updateTask;
    }(),
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    findUserName: function findUserName(param) {
      var user_name = "";
      this.users.forEach(function (user) {
        if (user.user_id == param) {
          user_name = user.name;
        }
      });
      return user_name;
    },
    createReply: function () {
      var _createReply = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                formData = new FormData();
                formData.append("comment", this.replyData.comment);
                formData.append("reply_by", this.$store.state.profile.user_id); //formData.append("task_id", this.$refs.task_id._value);

                formData.append("task_id", id);
                _context7.prev = 4;
                _context7.next = 7;
                return _services_reply_service__WEBPACK_IMPORTED_MODULE_3__["createReply"](formData);

              case 7:
                response = _context7.sent;
                //this.tasks.unshift(response.data);
                this.flashMessage.success({
                  title: "Success!",
                  message: "Comment stored successfully!",
                  time: 5000,
                  icon: "/img/flash/success.svg"
                });
                this.replyData = {
                  comment: ""
                };
                setTimeout(function () {
                  window.location.reload();
                }, 1000);
                _context7.next = 22;
                break;

              case 13:
                _context7.prev = 13;
                _context7.t0 = _context7["catch"](4);
                _context7.t1 = _context7.t0.response.status;
                _context7.next = _context7.t1 === 422 ? 18 : 20;
                break;

              case 18:
                this.errors = _context7.t0.response.data.errors;
                return _context7.abrupt("break", 22);

              case 20:
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured, please try again!",
                  time: 5000,
                  icon: "/img/flash/error.svg"
                });
                return _context7.abrupt("break", 22);

              case 22:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[4, 13]]);
      }));

      function createReply(_x2) {
        return _createReply.apply(this, arguments);
      }

      return createReply;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02& ***!
  \***************************************************************************************************************************************************************************************************/
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
          _vm.$store.state.profile.role == "administrator"
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm ml-auto",
                  attrs: { type: "button" },
                  on: { click: _vm.showNewTaskModal }
                },
                [
                  _c("span", { staticClass: "fa fa-plus" }),
                  _vm._v(" Create New\n      ")
                ]
              )
            : _vm._e()
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
                _c("b-col", { staticClass: "my-1", attrs: { lg: "6" } }, [
                  _vm._v(
                    "\n          Pending Tasks : " +
                      _vm._s(_vm.pendingCount) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "my-1", attrs: { lg: "4" } },
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
                items: _vm.tasks,
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
                    return [_vm._v(_vm._s(data.index + 1))]
                  }
                },
                {
                  key: "cell(pdc)",
                  fn: function(data) {
                    return [
                      data.item.pdc == _vm.currentDate
                        ? _c("small", { staticClass: "text-warning" }, [
                            _vm._v(_vm._s(_vm._f("myDate")(data.item.pdc)))
                          ])
                        : data.item.pdc < _vm.currentDate
                        ? _c("small", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm._f("myDate")(data.item.pdc)))
                          ])
                        : data.item.pdc < _vm.nextThreeDate &&
                          data.item.pdc > _vm.currentDate
                        ? _c("small", { staticClass: "text-primary" }, [
                            _vm._v(_vm._s(_vm._f("myDate")(data.item.pdc)))
                          ])
                        : _c("small", [
                            _vm._v(_vm._s(_vm._f("myDate")(data.item.pdc)))
                          ])
                    ]
                  }
                },
                {
                  key: "cell(users)",
                  fn: function(data) {
                    return _vm._l(data.item.users, function(item) {
                      return _c(
                        "b-badge",
                        { key: item.id, staticClass: "ml-1" },
                        [_vm._v(_vm._s(item.name))]
                      )
                    })
                  }
                },
                {
                  key: "cell(status)",
                  fn: function(data) {
                    return [
                      data.item.status == "1"
                        ? _c("span", [
                            _c("i", { staticClass: "fa fa-check text-success" })
                          ])
                        : _c("span", [
                            _c("i", { staticClass: "fa fa-clock text-danger" })
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
                  key: "cell(created_by)",
                  fn: function(data) {
                    return [
                      _c("small", [
                        _vm._v(_vm._s(_vm.findUserName(data.item.created_by)))
                      ])
                    ]
                  }
                },
                {
                  key: "cell(action)",
                  fn: function(data) {
                    return [
                      _vm.$store.state.profile.role == "administrator"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-sm",
                              on: {
                                click: function($event) {
                                  return _vm.editTask(data.item)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-edit" })]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.$store.state.profile.role == "administrator"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              on: {
                                click: function($event) {
                                  return _vm.deleteTask(data.item)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-2",
                          attrs: { variant: "info", size: "sm" },
                          on: { click: data.toggleDetails }
                        },
                        [
                          _vm._v(
                            _vm._s(data.detailsShowing ? "Hide" : "Show") +
                              " Details"
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
                                  attrs: { sm: "2" }
                                },
                                [_c("b", [_vm._v("Task Description:")])]
                              ),
                              _vm._v(" "),
                              _c("b-col", { attrs: { sm: "10" } }, [
                                _vm._v(_vm._s(data.item.description))
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.createReply(data.item.id)
                                }
                              }
                            },
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "text-sm-right",
                                      attrs: { sm: "2" }
                                    },
                                    [_c("b", [_vm._v("Comments:")])]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { sm: "8" } },
                                    [
                                      _c("b-form-textarea", {
                                        attrs: {
                                          id: "comment",
                                          placeholder:
                                            "Enter your comments for this task ...",
                                          size: "sm",
                                          rows: "4"
                                        },
                                        model: {
                                          value: _vm.replyData.comment,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.replyData,
                                              "comment",
                                              $$v
                                            )
                                          },
                                          expression: "replyData.comment"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.comment
                                        ? _c(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.errors.comment[0])
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { sm: "2" } },
                                    [
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "b-btn",
                                        {
                                          staticClass: "btn-success",
                                          attrs: { type: "submit" }
                                        },
                                        [_vm._v("Add Comments")]
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
                          _c("br"),
                          _vm._v(" "),
                          _vm._l(data.item.replies, function(item) {
                            return _c(
                              "b-alert",
                              {
                                key: item.id,
                                attrs: { show: "", variant: "secondary" }
                              },
                              [
                                _c(
                                  "b-row",
                                  [
                                    _c(
                                      "b-col",
                                      {
                                        staticClass: "text-sm-right",
                                        attrs: { sm: "2" }
                                      },
                                      [
                                        _c("b", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("datetime")(
                                                item.updated_at
                                              )
                                            )
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      {
                                        staticClass: "text-sm-right",
                                        attrs: { sm: "2" }
                                      },
                                      [
                                        _c(
                                          "small",
                                          { staticClass: "text-info" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.findUserName(item.reply_by)
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("b-col", [
                                      _c("span", {
                                        domProps: {
                                          innerHTML: _vm._s(item.comment)
                                        }
                                      }),
                                      _vm._v(".\n                ")
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          }),
                          _vm._v(" "),
                          _c("br"),
                          _c("br"),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { size: "sm", variant: "warning" },
                              on: { click: data.toggleDetails }
                            },
                            [_vm._v("Hide Details")]
                          )
                        ],
                        2
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
          ref: "newTaskModal",
          attrs: { "hide-footer": "", title: "Add task form" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createTask($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Enter Task Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.taskData.name,
                        expression: "taskData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      id: "name",
                      placeholder: "Enter task name"
                    },
                    domProps: { value: _vm.taskData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.taskData, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "status" } }, [
                      _vm._v("Task Status")
                    ]),
                    _vm._v(" "),
                    _c("b-form-radio-group", {
                      attrs: { options: _vm.options, name: "status" },
                      model: {
                        value: _vm.taskData.status,
                        callback: function($$v) {
                          _vm.$set(_vm.taskData, "status", $$v)
                        },
                        expression: "taskData.status"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "color" } }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("b-form-textarea", {
                      attrs: {
                        id: "description",
                        placeholder: "Enter task description ...",
                        size: "sm",
                        rows: "3"
                      },
                      model: {
                        value: _vm.taskData.description,
                        callback: function($$v) {
                          _vm.$set(_vm.taskData, "description", $$v)
                        },
                        expression: "taskData.description"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.description
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.description[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "pdc" } }, [
                      _vm._v("PDC Date")
                    ]),
                    _vm._v(" "),
                    _c("b-form-datepicker", {
                      staticClass: "mb-2",
                      attrs: {
                        id: "pdc",
                        size: "sm",
                        "today-button": "",
                        "close-button": "",
                        local: "en",
                        min: _vm.min
                      },
                      model: {
                        value: _vm.taskData.pdc,
                        callback: function($$v) {
                          _vm.$set(_vm.taskData, "pdc", $$v)
                        },
                        expression: "taskData.pdc"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.pdc
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.pdc[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "from-group" },
                  [
                    _c("label", { attrs: { for: "pdc" } }, [
                      _vm._v("Assign Task To")
                    ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      attrs: {
                        name: "assign_to",
                        options: _vm.users.map(function(user) {
                          return user.id
                        }),
                        "custom-label": function(opt) {
                          return _vm.users.find(function(x) {
                            return x.id == opt
                          }).name
                        },
                        multiple: true,
                        "close-on-select": false,
                        "clear-on-select": false,
                        "preserve-search": true,
                        placeholder: "Select users",
                        "preselect-first": false
                      },
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
                                          " users selected"
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.taskData.assign_to,
                        callback: function($$v) {
                          _vm.$set(_vm.taskData, "assign_to", $$v)
                        },
                        expression: "taskData.assign_to"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.assign_to
                      ? _c("b-form-invalid-feedback", [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.errors.assign_to[0]) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      attrs: { type: "button" },
                      on: { click: _vm.hideNewTaskModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Save\n          ")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editTaskModal",
          attrs: { "hide-footer": "", title: "Update task form" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateTask($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Enter Task Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editTaskData.name,
                        expression: "editTaskData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      id: "name",
                      placeholder: "Enter task name"
                    },
                    domProps: { value: _vm.editTaskData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.editTaskData, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "status" } }, [
                      _vm._v("Task Status")
                    ]),
                    _vm._v(" "),
                    _c("b-form-radio-group", {
                      attrs: { options: _vm.options, name: "status" },
                      model: {
                        value: _vm.editTaskData.status,
                        callback: function($$v) {
                          _vm.$set(_vm.editTaskData, "status", $$v)
                        },
                        expression: "editTaskData.status"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "color" } }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("b-form-textarea", {
                      attrs: {
                        id: "description",
                        placeholder: "Enter task description ...",
                        size: "sm",
                        rows: "3"
                      },
                      model: {
                        value: _vm.editTaskData.description,
                        callback: function($$v) {
                          _vm.$set(_vm.editTaskData, "description", $$v)
                        },
                        expression: "editTaskData.description"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.description
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.description[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "pdc" } }, [
                      _vm._v("PDC Date")
                    ]),
                    _vm._v(" "),
                    _c("b-form-datepicker", {
                      staticClass: "mb-2",
                      attrs: {
                        id: "pdc",
                        size: "sm",
                        "today-button": "",
                        "close-button": "",
                        local: "en",
                        min: _vm.min
                      },
                      model: {
                        value: _vm.editTaskData.pdc,
                        callback: function($$v) {
                          _vm.$set(_vm.editTaskData, "pdc", $$v)
                        },
                        expression: "editTaskData.pdc"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.pdc
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.pdc[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "from-group" },
                  [
                    _c("label", { attrs: { for: "assign_to" } }, [
                      _vm._v("Assign Task To "),
                      _c("code", [_vm._v(" (Add User)")])
                    ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      attrs: {
                        name: "assign_to",
                        options: _vm.users.map(function(user) {
                          return user.id
                        }),
                        "custom-label": function(opt) {
                          return _vm.users.find(function(x) {
                            return x.id == opt
                          }).name
                        },
                        multiple: true,
                        "close-on-select": false,
                        "clear-on-select": false,
                        "preserve-search": true,
                        placeholder: "Select users",
                        "preselect-first": false
                      },
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
                                          " users selected"
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.editTaskData.assign_to,
                        callback: function($$v) {
                          _vm.$set(_vm.editTaskData, "assign_to", $$v)
                        },
                        expression: "editTaskData.assign_to"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.assign_to
                      ? _c("b-form-invalid-feedback", [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.errors.assign_to[0]) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      attrs: { type: "button" },
                      on: { click: _vm.hideEditTaskModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Update\n          ")
                    ]
                  )
                ])
              ]
            )
          ])
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
      _vm._v("\n        Tasks Management\n      ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/reply_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/reply_service.js ***!
  \************************************************/
/*! exports provided: createReply, loadReplies, deleteReply, updateReply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReply", function() { return createReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadReplies", function() { return loadReplies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReply", function() { return deleteReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReply", function() { return updateReply; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createReply(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('./replies', data);
}
function loadReplies() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('./replies');
}
function deleteReply(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("replies/".concat(id));
}
function updateReply(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("replies/".concat(id), data);
}

/***/ }),

/***/ "./resources/js/services/task_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/task_service.js ***!
  \***********************************************/
/*! exports provided: createTask, loadTasks, deleteTask, updateTask, showTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTask", function() { return createTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTasks", function() { return loadTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTask", function() { return deleteTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTask", function() { return updateTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTask", function() { return showTask; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createTask(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('./tasks', data);
}
function loadTasks() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('./tasks');
}
function deleteTask(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("tasks/".concat(id));
}
function updateTask(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("tasks/".concat(id), data);
}
function showTask(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("tasks/".concat(id));
}

/***/ }),

/***/ "./resources/js/services/user_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/user_service.js ***!
  \***********************************************/
/*! exports provided: userScope, adminScope, loadUsers, createUser, deleteUser, updateUser, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userScope", function() { return userScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminScope", function() { return adminScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsers", function() { return loadUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function userScope() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/user/user-scope');
}
function adminScope() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/user/admin-scope');
}
function loadUsers() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('./users');
}
function createUser(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('./auth/register', data);
}
function deleteUser(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("users/".concat(id));
}
function updateUser(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("users/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("users?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/Tasks.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Tasks.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=f579aa02& */ "./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&");
/* harmony import */ var _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js& */ "./resources/js/views/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tasks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tasks.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Tasks.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=template&id=f579aa02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tasks.vue?vue&type=template&id=f579aa02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_f579aa02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);