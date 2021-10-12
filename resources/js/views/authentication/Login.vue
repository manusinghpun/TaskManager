<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image text-center">
                <br />
                <br />
                <img src="img/udaan.png" style="width:70%;" class="img img-responsive" />
                <br />
                <br />
                <br />
                <br />
                <h1 class="text-danger" style="text-shadow:2px 2px 3px black;">{{ new Date() | myDate}}</h1>
                <h3 class="text-warning">{{ new Date() | dayDate}}</h3>
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h2 text-gray-900 mb-2">Title</h1>
                    <h2 class="h3 text-gray-700 mb-2">Task Manager</h2>
                    <hr />
                    <br />
                  </div>
                  <form v-on:submit.prevent="login">
                    <div class="form-group">
                      <input
                        type="text"
                        v-model="user.user_id"
                        class="form-control form-control-user"
                        id="user_id"
                        aria-describedby="user_idHelp"
                        autofocus
                        placeholder="Enter User Id ..."
                        required
                      />
                      <div class="invalid-feedback" v-if="errors.user_id">{{ errors.user_id[0] }}</div>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        v-model="user.password"
                        class="form-control form-control-user"
                        id="password"
                        placeholder="Password"
                        required
                      />
                      <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
                    </div>
                    <!--
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          v-model="user.remember_me"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>-->
                    <button type="submit" class="btn btn-primary btn-user btn-block">Login</button>
                  </form>
                  <br />
                  <hr />
                  <div class="text-center">
                    Copyright &copy; {{ new Date().getFullYear() }} -
                    UDAAN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as auth from "../../services/auth_service";
export default {
  name: "Login",
  created() {
    //document.querySelector('body').style.backgroundColor = '#343a40';
    document.querySelector("body").style.backgroundImage = "url('img/bg.jpg')";
    document.querySelector("body").style.backgroundAttachment = "fixed";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.backgroundSize = "cover";
  },
  data() {
    return {
      user: {
        user_id: "",
        password: "",
        remember_me: false,
      },
      errors: {},
    };
  },
  methods: {
    login: async function () {
      try {
        const response = await auth.login(this.user);
        this.error = {};
        this.$router.push("/home");
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          case 401:
            this.flashMessage.error({
              title: "Error. ",
              message: error.response.data.message,
              time: 5000,
              icon: "/img/flash/error.svg",
            });
            break;
          case 500:
            this.flashMessage.error({
              title: "Error. ",
              message: error.response.data.message,
              time: 5000,
              icon: "/img/flash/error.svg",
            });
            break;
          default:
            this.flashMessage.error({
              title: "Error. ",
              message: "Some error occured, please try again!",
              time: 5000,
              icon: "/img/flash/error.svg",
            });
            break;
        }
      }
    },
  },
};
</script>