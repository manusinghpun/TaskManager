<template>
<div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form  v-on:submit.prevent="register">
                <div class="form-group">
                    <input type="text" v-model="user.name" class="form-control form-control-user" id="name" placeholder="Enter full Name" required >
                    <div class="invalid-feedback" v-if="errors.name">
                            {{ errors.name[0] }}
                        </div>
                </div>
                <div class="form-group">
                  <input type="email"  v-model="user.email" class="form-control form-control-user" id="email" placeholder="Email Address" required>
                  <div class="invalid-feedback" v-if="errors.email">
                            {{ errors.email[0] }}
                        </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" v-model="user.password" class="form-control form-control-user" id="password" placeholder="Password" required>
                    <div class="invalid-feedback" v-if="errors.password">
                            {{ errors.password[0] }}
                        </div>
                  </div>
                  <div class="col-sm-6">
                    <input type="password" v-model="user.password_confirmation" class="form-control form-control-user" id="password_confirmation" placeholder="Confirm Password" required>
                    <div class="invalid-feedback" v-if="errors.password_confirmation">
                            {{ errors.password_confirmation[0] }}
                        </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-user btn-block">
                  Register Account
                </button>
              </form>
              <hr><br/><br/>
              <div class="text-center">
                <router-link  class="small" to="/resetPassword">Forgot Password?</router-link>
              </div>
              <div class="text-center">
              <router-link  class="small" to="/login">Already have an account? Login!</router-link>
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
  name: 'Register',

    created(){
      document.querySelector('body').style.backgroundColor = '#343a40';
    },
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        },
        errors: {}
      }
    },
    methods: {
      register: async function() {
        try {
          await auth.register(this.user);
          this.error = {};
          this.$router.push('/login');

        } catch (error) {
          switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;
                    case 500:
                        this.flashMessage.error({
                            title: "Error. ",
                            message: error.response.data.message,
                            time: 5000
                        });
                        break;
                    default:
                        this.flashMessage.error({
                            title: "Error. ",
                            message: "Some error occured, please try again!",
                            time: 5000
                        });
                        break;
                }
        }
      }
    },
};
</script>

