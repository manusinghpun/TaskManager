(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Groups.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Groups.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/group_service */ "./resources/js/services/group_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "group",
  data: function data() {
    return {
      groups: [],
      groupData: {
        group_name: ""
      },
      moreExists: false,
      nextPage: 0,
      editGroupData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadGroups();
  },
  methods: {
    loadGroups: function () {
      var _loadGroups = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_group_service__WEBPACK_IMPORTED_MODULE_1__["loadGroups"]();

              case 3:
                response = _context.sent;
                this.groups = response.data.data;
                conslole.log(groups);

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured. Please refresh!",
                  time: 5000,
                  icon: '/img/flash/error.svg'
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function loadGroups() {
        return _loadGroups.apply(this, arguments);
      }

      return loadGroups;
    }(),
    hideNewGroupModal: function hideNewGroupModal() {
      this.$refs.newGroupModal.hide();
    },
    showNewGroupModal: function showNewGroupModal() {
      //console.log(this.$refs);
      this.$refs.newGroupModal.show();
    },
    createGroup: function () {
      var _createGroup = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append("group_name", this.groupData.group_name);
                _context2.prev = 2;
                _context2.next = 5;
                return _services_group_service__WEBPACK_IMPORTED_MODULE_1__["createGroup"](formData);

              case 5:
                response = _context2.sent;
                this.groups.unshift(response.data);
                this.hideNewGroupModal();
                this.flashMessage.success({
                  title: "Success!",
                  message: "Group stored successfully!",
                  time: 5000,
                  icon: '/img/flash/success.svg'
                });
                this.groupData = {
                  group_name: "",
                  updated_by: ""
                };
                _context2.next = 21;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](2);
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
                  icon: '/img/flash/error.svg'
                });
                return _context2.abrupt("break", 21);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 12]]);
      }));

      function createGroup() {
        return _createGroup.apply(this, arguments);
      }

      return createGroup;
    }(),
    deleteGroup: function () {
      var _deleteGroup = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(group) {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$confirm("Are you sure you want to delete ".concat(group.group_name)).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.prev = 0;
                          _context3.next = 3;
                          return _services_group_service__WEBPACK_IMPORTED_MODULE_1__["deleteGroup"](group.id);

                        case 3:
                          _this.groups = _this.groups.filter(function (obj) {
                            return obj.id != group.id;
                          });

                          _this.flashMessage.success({
                            title: "Success! ",
                            message: "Group deleted successfully!",
                            time: 5000,
                            icon: '/img/flash/success.svg'
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
                            icon: '/img/flash/error.svg'
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

      function deleteGroup(_x) {
        return _deleteGroup.apply(this, arguments);
      }

      return deleteGroup;
    }(),
    hideEditGroupModal: function hideEditGroupModal() {
      this.$refs.editGroupModal.hide();
    },
    showEditGroupModal: function showEditGroupModal() {
      this.$refs.editGroupModal.show();
    },
    editGroup: function editGroup(group) {
      this.editGroupData = _objectSpread({}, group);
      this.showEditGroupModal();
    },
    updateGroup: function () {
      var _updateGroup = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                formData = new FormData();
                formData.append("name", this.editGroupData.name);
                formData.append("color", this.editGroupData.color);
                formData.append("_method", "put");
                _context5.next = 7;
                return _services_group_service__WEBPACK_IMPORTED_MODULE_1__["updateGroup"](this.editGroupData.id, formData);

              case 7:
                response = _context5.sent;
                this.groups.map(function (group) {
                  if (group.id == response.data.id) {
                    for (var key in response.data) {
                      group[key] = response.data[key];
                    }
                  }
                });
                this.hideEditGroupModal();
                this.flashMessage.success({
                  title: "Success!",
                  message: "Group updated successfully!",
                  time: 5000,
                  icon: '/img/flash/success.svg'
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
                  icon: '/img/flash/error.svg'
                });
                return _context5.abrupt("break", 22);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 13]]);
      }));

      function updateGroup() {
        return _updateGroup.apply(this, arguments);
      }

      return updateGroup;
    }(),
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_group_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context6.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this2.groups.push(data);
                });
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured, please try again!",
                  time: 5000,
                  icon: '/img/flash/error.svg'
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Groups.vue?vue&type=template&id=03f989b3&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Groups.vue?vue&type=template&id=03f989b3& ***!
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
              on: { click: _vm.showNewGroupModal }
            },
            [
              _c("span", { staticClass: "fa fa-plus" }),
              _vm._v(" Create New\n            ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row no-gutters align-items-center" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.groups, function(group, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(group.group_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(group.group_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(group.updated_at))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.editGroup(group)
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
                              return _vm.deleteGroup(group)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-trash" })]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.moreExists,
                  expression: "moreExists"
                }
              ],
              staticClass: "text-center"
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { type: "button" },
                  on: { click: _vm.loadMore }
                },
                [
                  _c("span", { staticClass: "fa fa-arrow-down" }),
                  _vm._v(" Load More\n                    ")
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newGroupModal",
          attrs: { "hide-footer": "", title: "Add group form" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createGroup($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "group_name" } }, [
                    _vm._v("Enter Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.groupData.group_name,
                        expression: "groupData.group_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "group_name",
                      id: "group_name",
                      placeholder: "Enter group name"
                    },
                    domProps: { value: _vm.groupData.group_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.groupData,
                          "group_name",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.group_name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.errors.group_name[0]) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "color" } }, [
                    _vm._v("Choose Color")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.groupData.color,
                        expression: "groupData.color"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "color",
                      name: "color",
                      id: "color",
                      placeholder: "Choose Color"
                    },
                    domProps: { value: _vm.groupData.color },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.groupData, "color", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.color
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.errors.color[0]) +
                            "\n                    "
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
                      on: { click: _vm.hideNewGroupModal }
                    },
                    [
                      _vm._v(
                        "\n                        Cancel\n                    "
                      )
                    ]
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
                      _vm._v(" Save\n                    ")
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
          ref: "editGroupModal",
          attrs: { "hide-footer": "", title: "Update group form" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateGroup($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Enter Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editGroupData.name,
                        expression: "editGroupData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      id: "name",
                      placeholder: "Enter group name"
                    },
                    domProps: { value: _vm.editGroupData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.editGroupData, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.errors.name[0]) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "color" } }, [
                    _vm._v("Choose Color")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editGroupData.color,
                        expression: "editGroupData.color"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "color",
                      name: "color",
                      id: "color",
                      placeholder: "Enter group color"
                    },
                    domProps: { value: _vm.editGroupData.color },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editGroupData,
                          "color",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.color
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.errors.color[0]) +
                            "\n                    "
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
                      on: { click: _vm.hideEditGroupModal }
                    },
                    [
                      _vm._v(
                        "\n                        Cancel\n                    "
                      )
                    ]
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
                      _vm._v(" Update\n                    ")
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
      _vm._v("\n                Groups Management\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Group Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Users")]),
        _vm._v(" "),
        _c("th", [_vm._v("Updated At")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/group_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/group_service.js ***!
  \************************************************/
/*! exports provided: createGroup, loadGroups, deleteGroup, updateGroup, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGroup", function() { return createGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGroups", function() { return loadGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGroup", function() { return deleteGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGroup", function() { return updateGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createGroup(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('./groups', data);
}
function loadGroups() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('./groups');
}
function deleteGroup(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("groups/".concat(id));
}
function updateGroup(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("groups/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("groups?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/Groups.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Groups.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Groups_vue_vue_type_template_id_03f989b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Groups.vue?vue&type=template&id=03f989b3& */ "./resources/js/views/Groups.vue?vue&type=template&id=03f989b3&");
/* harmony import */ var _Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Groups.vue?vue&type=script&lang=js& */ "./resources/js/views/Groups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Groups_vue_vue_type_template_id_03f989b3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Groups_vue_vue_type_template_id_03f989b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Groups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Groups.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Groups.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Groups.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Groups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Groups.vue?vue&type=template&id=03f989b3&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Groups.vue?vue&type=template&id=03f989b3& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_03f989b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Groups.vue?vue&type=template&id=03f989b3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Groups.vue?vue&type=template&id=03f989b3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_03f989b3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_03f989b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);