(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user_service */ "./resources/js/services/user_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "user",
  data: function data() {
    return {
      users: [],
      userData: {
        name: "",
        user_id: "",
        password: "",
        password_confirmation: "",
        role: ""
      },
      moreExists: false,
      nextPage: 0,
      editUserData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers: function () {
      var _loadUsers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_1__["loadUsers"]();

              case 3:
                response = _context.sent;
                this.users = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured. Please refresh!",
                  time: 5000,
                  icon: '/img/flash/error.svg'
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadUsers() {
        return _loadUsers.apply(this, arguments);
      }

      return loadUsers;
    }(),
    hideNewUserModal: function hideNewUserModal() {
      this.$refs.newUserModal.hide();
    },
    showNewUserModal: function showNewUserModal() {
      //console.log(this.$refs);
      this.$refs.newUserModal.show();
    },
    createUser: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append("name", this.userData.name);
                formData.append("user_id", this.userData.user_id);
                formData.append("password", this.userData.password);
                formData.append("password_confirmation", this.userData.password_confirmation);
                formData.append("role", this.userData.role);
                _context2.prev = 6;
                _context2.next = 9;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_1__["createUser"](formData);

              case 9:
                response = _context2.sent;
                this.users.unshift(response.data);
                this.hideNewUserModal();
                this.flashMessage.success({
                  title: "Success. ",
                  message: "User stored successfully!",
                  time: 5000,
                  icon: '/img/flash/success.svg'
                });
                this.userData = {
                  name: "",
                  user_id: "",
                  password: "",
                  password_confirmation: "",
                  role: ""
                };
                _context2.next = 25;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](6);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 21 : 23;
                break;

              case 21:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 25);

              case 23:
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured, please try again!",
                  time: 5000,
                  icon: '/img/flash/error.svg'
                });
                return _context2.abrupt("break", 25);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 16]]);
      }));

      function createUser() {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }(),
    deleteUser: function () {
      var _deleteUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(user) {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$confirm("Are you sure you want to delete ".concat(user.name)).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.prev = 0;
                          _context3.next = 3;
                          return _services_user_service__WEBPACK_IMPORTED_MODULE_1__["deleteUser"](user.id);

                        case 3:
                          _this.users = _this.users.filter(function (obj) {
                            return obj.id != user.id;
                          });

                          _this.flashMessage.success({
                            title: "Success ",
                            message: "User deleted successfully!",
                            time: 5000,
                            icon: '/img/flash/success.svg'
                          });

                          _context3.next = 20;
                          break;

                        case 7:
                          _context3.prev = 7;
                          _context3.t0 = _context3["catch"](0);
                          _context3.t1 = _context3.t0.response.status;
                          _context3.next = _context3.t1 === 422 ? 12 : _context3.t1 === 401 ? 14 : _context3.t1 === 500 ? 16 : 18;
                          break;

                        case 12:
                          _this.errors = _context3.t0.response.data.errors;
                          return _context3.abrupt("break", 20);

                        case 14:
                          _this.flashMessage.error({
                            title: "Error. ",
                            message: _context3.t0.response.data.message,
                            time: 5000,
                            icon: '/img/flash/error.svg'
                          });

                          return _context3.abrupt("break", 20);

                        case 16:
                          _this.flashMessage.error({
                            title: "Error. ",
                            message: _context3.t0.response.data.message,
                            time: 5000,
                            icon: '/img/flash/error.svg'
                          });

                          return _context3.abrupt("break", 20);

                        case 18:
                          _this.flashMessage.error({
                            title: "Error. ",
                            message: "Some error occured, please try again!",
                            time: 5000,
                            icon: '/img/flash/error.svg'
                          });

                          return _context3.abrupt("break", 20);

                        case 20:
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

      function deleteUser(_x) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }(),
    hideEditUserModal: function hideEditUserModal() {
      this.$refs.editUserModal.hide();
    },
    showEditUserModal: function showEditUserModal() {
      this.$refs.editUserModal.show();
    },
    editUser: function editUser(user) {
      this.editUserData = _objectSpread({}, user);
      this.showEditUserModal();
    },
    updateUser: function () {
      var _updateUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                formData = new FormData();
                formData.append("name", this.editUserData.name);
                formData.append("user_id", this.editUserData.user_id);
                formData.append("password", this.editUserData.password);
                formData.append("password_confirmation", this.editUserData.password_confirmation);
                formData.append("role", this.editUserData.role);
                formData.append("_method", "put");
                _context5.next = 10;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_1__["updateUser"](this.editUserData.id, formData);

              case 10:
                response = _context5.sent;
                this.users.map(function (user) {
                  if (user.id == response.data.id) {
                    for (var key in response.data) {
                      user[key] = response.data[key];
                    }
                  }
                });
                this.hideEditUserModal();
                this.flashMessage.success({
                  title: "Success! ",
                  message: "User updated successfully!",
                  time: 5000,
                  icon: '/img/flash/success.svg'
                });
                _context5.next = 25;
                break;

              case 16:
                _context5.prev = 16;
                _context5.t0 = _context5["catch"](0);
                _context5.t1 = _context5.t0.response.status;
                _context5.next = _context5.t1 === 422 ? 21 : 23;
                break;

              case 21:
                this.errors = _context5.t0.response.data.errors;
                return _context5.abrupt("break", 25);

              case 23:
                this.flashMessage.error({
                  title: "Error. ",
                  message: "Some error occured, please try again!",
                  time: 5000,
                  icon: '/img/flash/error.svg'
                });
                return _context5.abrupt("break", 25);

              case 25:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 16]]);
      }));

      function updateUser() {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
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
                return _services_user_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context6.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this2.users.push(data);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users.vue?vue&type=template&id=e2911f0e& ***!
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
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm ml-auto",
              attrs: { type: "button" },
              on: { click: _vm.showNewUserModal }
            },
            [_c("span", { staticClass: "fa fa-plus" }), _vm._v(" Create New ")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row no-gutters align-items-center" }, [
            _c("table", { staticClass: "table table-sm" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.users, function(user, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.user_id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.role))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("myDate")(user.updated_at)))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.editUser(user)
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
                              return _vm.deleteUser(user)
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
          ref: "newUserModal",
          attrs: { "hide-footer": "", title: "Create New User" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createUser($event)
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
                        value: _vm.userData.name,
                        expression: "userData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      id: "name",
                      placeholder: "Enter Rank & Name"
                    },
                    domProps: { value: _vm.userData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.userData, "name", $event.target.value)
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
                  _c("label", { attrs: { for: "user_id" } }, [
                    _vm._v("User Id")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.userData.user_id,
                        expression: "userData.user_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "user_id",
                      id: "user_id",
                      placeholder: "Enter service number"
                    },
                    domProps: { value: _vm.userData.user_id },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.userData, "user_id", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.user_id
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.errors.user_id[0]) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
                    _c("label", { attrs: { for: "Password" } }, [
                      _vm._v("Password")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userData.password,
                          expression: "userData.password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        id: "password",
                        placeholder: "Password"
                      },
                      domProps: { value: _vm.userData.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.userData,
                            "password",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.password
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.errors.password[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
                    _c("label", { attrs: { for: "Confirm Password" } }, [
                      _vm._v("Confirm Password")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userData.password_confirmation,
                          expression: "userData.password_confirmation"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        id: "password_confirmation",
                        placeholder: "Confirm Password"
                      },
                      domProps: { value: _vm.userData.password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.userData,
                            "password_confirmation",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.password_confirmation
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.errors.password_confirmation[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "user_id" } }, [_vm._v("Role")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userData.role,
                          expression: "userData.role"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "role", id: "role" },
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
                            _vm.userData,
                            "role",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Choose Role")
                      ]),
                      _vm._v(" "),
                      _c("option", [_vm._v("user")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("administrator")])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.errors.role
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.errors.role[0]) +
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
                      on: { click: _vm.hideNewUserModal }
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
          ref: "editUserModal",
          attrs: { "hide-footer": "", title: "Update user form" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateUser($event)
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
                        value: _vm.editUserData.name,
                        expression: "editUserData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      id: "name",
                      placeholder: "Enter user name"
                    },
                    domProps: { value: _vm.editUserData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.editUserData, "name", $event.target.value)
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
                  _c("label", { attrs: { for: "user_id" } }, [
                    _vm._v("User Id")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editUserData.user_id,
                        expression: "editUserData.user_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "user_id",
                      id: "user_id",
                      placeholder: "Enter user id"
                    },
                    domProps: { value: _vm.editUserData.user_id },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editUserData,
                          "user_id",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.user_id
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.errors.user_id[0]) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
                    _c("label", { attrs: { for: "Password" } }, [
                      _vm._v("Password")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editUserData.password,
                          expression: "editUserData.password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        name: "password",
                        id: "password",
                        placeholder: "Password",
                        required: ""
                      },
                      domProps: { value: _vm.editUserData.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editUserData,
                            "password",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.password
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.errors.password[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
                    _c("label", { attrs: { for: "Confirm Password" } }, [
                      _vm._v("Confirm Password")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editUserData.password_confirmation,
                          expression: "editUserData.password_confirmation"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        password: "password_confirmation",
                        id: "password_confirmation",
                        placeholder: "Confirm Password",
                        required: ""
                      },
                      domProps: {
                        value: _vm.editUserData.password_confirmation
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editUserData,
                            "password_confirmation",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.password_confirmation
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.errors.password_confirmation[0]) +
                              "\n                        "
                          )
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "role" } }, [_vm._v("Role")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editUserData.role,
                          expression: "editUserData.role"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "role", id: "role" },
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
                            _vm.editUserData,
                            "role",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Choose Role")
                      ]),
                      _vm._v(" "),
                      _c("option", [_vm._v("user")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("administrator")])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.errors.role
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.errors.role[0]) +
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
                      on: { click: _vm.hideEditUserModal }
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
      _c("i", { staticClass: "fas fa-users" }),
      _vm._v(" Users Management\n            ")
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
        _c("th", [_vm._v("User Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/views/Users.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Users.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=e2911f0e& */ "./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Users.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Users.vue?vue&type=template&id=e2911f0e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=e2911f0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);