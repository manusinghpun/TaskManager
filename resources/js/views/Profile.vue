<template>
  <div class="container-fluid">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-header d-flex">
        <span>
          <i class="fa fa-key"></i> Change Password
        </span>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateUser">
          <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <label for="Password">Password</label>
              <input
                type="password"
                v-model="editUserData.password"
                class="form-control"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
              <label for="Confirm Password">Confirm Password</label>
              <input
                type="password"
                v-model="editUserData.password_confirmation"
                class="form-control"
                password="password_confirmation"
                id="password_confirmation"
                placeholder="Confirm Password"
                required
              />
              <div
                class="invalid-feedback"
                v-if="errors.password_confirmation"
              >{{ errors.password_confirmation[0] }}</div>

              <hr />
              <div class="text-right">
                <button type="submit" class="btn btn-primary">
                  <span class="fa fa-check"></span> Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as userService from "../services/user_service";


export default {
  name: "profile",
  data() {
    return {
      editUserData: {},
      errors: {},
    };
  },
  mounted() {
    //this.loadCategories();
  },
  methods: {

      updateUser: async function() {
            try {
                const formData = new FormData();
                formData.append("name", this.$store.state.profile.name);
                formData.append("user_id", this.$store.state.profile.user_id);
                formData.append("role", this.$store.state.profile.role);
                formData.append("password", this.editUserData.password);
                formData.append("password_confirmation", this.editUserData.password_confirmation);
                formData.append("_method", "put");

                const response = await userService.updateUser(
                    this.$store.state.profile.id,
                    formData
                );
                this.editUserData = {};
                this.flashMessage.success({
                    title: "Success! ",
                    message: "User updated successfully!",
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
        },

  },
};
</script>
