(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ToDo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ToDo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/todo_service */ "./resources/js/services/todo_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "toDo",
  data: function data() {
    return {
      fields: [{
        key: "index",
        sortable: false,
        label: "#"
      }, {
        key: "content",
        sortable: true
      }, {
        key: "status",
        sortable: true
      }, {
        key: "updated_at",
        sortable: true
      }, {
        key: "create_by",
        sortable: true
      }, "action"],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {
        value: 1000,
        text: "Show all"
      }],
      filter: null,
      filterOn: [],
      todos: [],
      toDoData: {
        content: "",
        status: "PENDING"
      },
      moreExists: false,
      nextPage: 0,
      editToDoData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadToDo();
  },
  computed: {
    totalrows: function totalrows() {
      return this.todos.length;
    }
  },
  methods: {
    loadToDo: function () {
      var _loadToDo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_todo_service__WEBPACK_IMPORTED_MODULE_1__["loadToDo"]();

              case 3:
                response = _context.sent;
                this.todos = response.data;
                /*
                        if(response.data.current_page < response.data.last_page) {
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        } else {
                            this.moreExists = false;
                        } */

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

      function loadToDo() {
        return _loadToDo.apply(this, arguments);
      }

      return loadToDo;
    }(),
    createToDO: function () {
      var _createToDO = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append("content", this.toDoData.content);
                formData.append("status", this.toDoData.status);
                _context2.prev = 3;
                _context2.next = 6;
                return _services_todo_service__WEBPACK_IMPORTED_MODULE_1__["createToDo"](formData);

              case 6:
                response = _context2.sent;
                this.todos.unshift(response.data);
                this.flashMessage.success({
                  title: "Success!",
                  message: "ToDo stored successfully!",
                  time: 5000,
                  icon: "/img/flash/success.svg"
                });
                this.toDoData = {
                  content: "",
                  status: "PENDING"
                };
                _context2.next = 21;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](3);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 17 : 19;
                break;

              case 17:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 21);

              case 19:
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured, please try again!",
                  time: 5000,
                  icon: "/img/flash/error.svg"
                });
                return _context2.abrupt("break", 21);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 12]]);
      }));

      function createToDO() {
        return _createToDO.apply(this, arguments);
      }

      return createToDO;
    }(),
    deleteToDo: function () {
      var _deleteToDo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(todo) {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$confirm("Are you sure you want to delete ?").then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.prev = 0;
                          _context3.next = 3;
                          return _services_todo_service__WEBPACK_IMPORTED_MODULE_1__["deleteToDo"](todo.id);

                        case 3:
                          _this.todos = _this.todos.filter(function (obj) {
                            return obj.id != todo.id;
                          });

                          _this.flashMessage.success({
                            title: "Success! ",
                            message: "Todo item deleted successfully!",
                            time: 5000,
                            icon: "/img/flash/success.svg"
                          });

                          _context3.next = 10;
                          break;

                        case 7:
                          _context3.prev = 7;
                          _context3.t0 = _context3["catch"](0);

                          _this.flashMessage.error({
                            title: "Error. ",
                            message: "Some error occured, please try again!",
                            time: 5000,
                            icon: "/img/flash/error.svg"
                          });

                        case 10:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[0, 7]]);
                })));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteToDo(_x) {
        return _deleteToDo.apply(this, arguments);
      }

      return deleteToDo;
    }(),
    hideeditToDoModal: function hideeditToDoModal() {
      this.$refs.editToDoModal.hide();
      this.$data.errors = {};
    },
    showeditToDoModal: function showeditToDoModal() {
      this.$refs.editToDoModal.show();
    },
    editToDo: function editToDo(todo) {
      this.editToDoData = _objectSpread({}, todo);
      this.showeditToDoModal();
    },
    updateToDo: function () {
      var _updateToDo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                formData = new FormData();
                formData.append("content", this.editToDoData.content);
                formData.append("status", this.editToDoData.status);
                formData.append("_method", "put");
                _context5.next = 7;
                return _services_todo_service__WEBPACK_IMPORTED_MODULE_1__["updateToDo"](this.editToDoData.id, formData);

              case 7:
                response = _context5.sent;
                this.todos.map(function (todo) {
                  if (todo.id == response.data.id) {
                    for (var key in response.data) {
                      todo[key] = response.data[key];
                    }
                  }
                });
                this.hideeditToDoModal();
                this.flashMessage.success({
                  title: "Success!",
                  message: "ToDo updated successfully!",
                  time: 5000,
                  icon: "/img/flash/success.svg"
                });
                _context5.next = 22;
                break;

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](0);
                _context5.t1 = _context5.t0.response.status;
                _context5.next = _context5.t1 === 422 ? 18 : 20;
                break;

              case 18:
                this.errors = _context5.t0.response.data.errors;
                return _context5.abrupt("break", 22);

              case 20:
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured, please try again!",
                  time: 5000,
                  icon: "/img/flash/error.svg"
                });
                return _context5.abrupt("break", 22);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 13]]);
      }));

      function updateToDo() {
        return _updateToDo.apply(this, arguments);
      }

      return updateToDo;
    }(),
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ToDo.vue?vue&type=template&id=673da105&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ToDo.vue?vue&type=template&id=673da105& ***!
  \**************************************************************************************************************************************************************************************************/
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
    { staticClass: "calendar-wrapper", attrs: { id: "wrapper" } },
    [
      _c(
        "ul",
        {
          staticClass:
            "navbar-nav shadow sidebar sidebar-dark accordion d-print-none",
          attrs: { id: "accordionSidebar" }
        },
        [
          _c("li", { staticClass: "nav-item p-1" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createToDO($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Todo Content")
                    ]),
                    _vm._v(" "),
                    _c("b-form-textarea", {
                      attrs: {
                        autofocus: "",
                        id: "textarea-state",
                        name: "content",
                        placeholder: "Enter content here ...",
                        rows: "10"
                      },
                      model: {
                        value: _vm.toDoData.content,
                        callback: function($$v) {
                          _vm.$set(_vm.toDoData, "content", $$v)
                        },
                        expression: "toDoData.content"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.content
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.errors.content[0]) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "color" } }, [
                    _vm._v("Choose Status")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.toDoData.status,
                          expression: "toDoData.status"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "status", id: "status" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.toDoData,
                            "status",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", [_vm._v("PENDING")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("COMPLETE")])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.errors.status
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.errors.status[0]) +
                            "\n          "
                        )
                      ])
                    : _vm._e()
                ]),
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
                          size: "sm",
                          block: ""
                        }
                      },
                      [
                        _c("span", { staticClass: "fa fa-check" }),
                        _vm._v(" Add")
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-column", attrs: { id: "content-wrapper" } },
        [
          _c("div", { attrs: { id: "content" } }, [
            _c("div", { staticClass: "container-fluid" }, [
              _c(
                "div",
                { staticClass: "card border-left-primary shadow h-100 py-2" },
                [
                  _vm._m(0),
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
                            {
                              staticClass: "my-1",
                              attrs: { "offset-lg": "2", lg: "3" }
                            },
                            [
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
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "my-1",
                              attrs: { "offset-lg": "2", lg: "3" }
                            },
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
                          items: _vm.todos,
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
                                  "\n                " +
                                    _vm._s(data.index + 1) +
                                    "\n              "
                                )
                              ]
                            }
                          },
                          {
                            key: "cell(status)",
                            fn: function(data) {
                              return [
                                data.item.status == "COMPLETE"
                                  ? _c("span", [
                                      _c("i", {
                                        staticClass: "fas fa-check text-success"
                                      })
                                    ])
                                  : _c("span", [
                                      _c("i", {
                                        staticClass: "fa fa-clock text-danger"
                                      })
                                    ])
                              ]
                            }
                          },
                          {
                            key: "cell(updated_at)",
                            fn: function(data) {
                              return [
                                _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("datetime")(data.item.created_at)
                                    )
                                  )
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
                                        return _vm.editToDo(data.item)
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
                                        return _vm.deleteToDo(data.item)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-trash" })]
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editToDoModal",
          attrs: { "hide-footer": "", title: "Update ToDo form" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateToDo($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "content" } }, [
                      _vm._v("Enter Content")
                    ]),
                    _vm._v(" "),
                    _c("b-form-textarea", {
                      attrs: {
                        autofocus: "",
                        id: "editContent",
                        name: "content",
                        placeholder: "Enter content here ...",
                        rows: "5"
                      },
                      model: {
                        value: _vm.editToDoData.content,
                        callback: function($$v) {
                          _vm.$set(_vm.editToDoData, "content", $$v)
                        },
                        expression: "editToDoData.content"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.content
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.errors.content[0]) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "status" } }, [
                    _vm._v("Choose Status")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editToDoData.status,
                          expression: "editToDoData.status"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "status", id: "status" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.editToDoData,
                            "status",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", [_vm._v("PENDING")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("COMPLETE")])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.errors.status
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.errors.status[0]) +
                            "\n          "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      attrs: { type: "button" },
                      on: { click: _vm.hideeditToDoModal }
                    },
                    [_vm._v("\n            Cancel\n          ")]
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
    return _c("div", { staticClass: "card-header d-flex" }, [
      _c("span", [
        _c("i", { staticClass: "fas fa-tasks" }),
        _vm._v(" ToDos List ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/todo_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/todo_service.js ***!
  \***********************************************/
/*! exports provided: createToDo, loadToDo, deleteToDo, updateToDo, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToDo", function() { return createToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadToDo", function() { return loadToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteToDo", function() { return deleteToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToDo", function() { return updateToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createToDo(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('./todo', data);
}
function loadToDo() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('./todo');
}
function deleteToDo(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("todo/".concat(id));
}
function updateToDo(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("todo/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("todo?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/ToDo.vue":
/*!*************************************!*\
  !*** ./resources/js/views/ToDo.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToDo_vue_vue_type_template_id_673da105___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo.vue?vue&type=template&id=673da105& */ "./resources/js/views/ToDo.vue?vue&type=template&id=673da105&");
/* harmony import */ var _ToDo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo.vue?vue&type=script&lang=js& */ "./resources/js/views/ToDo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ToDo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToDo_vue_vue_type_template_id_673da105___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToDo_vue_vue_type_template_id_673da105___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ToDo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ToDo.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/ToDo.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToDo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ToDo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ToDo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToDo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ToDo.vue?vue&type=template&id=673da105&":
/*!********************************************************************!*\
  !*** ./resources/js/views/ToDo.vue?vue&type=template&id=673da105& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToDo_vue_vue_type_template_id_673da105___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ToDo.vue?vue&type=template&id=673da105& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ToDo.vue?vue&type=template&id=673da105&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToDo_vue_vue_type_template_id_673da105___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToDo_vue_vue_type_template_id_673da105___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);