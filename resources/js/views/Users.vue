<template>
    <div class="container-fluid">

        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-header d-flex">
                <span>
                    <i class="fas fa-users"></i> Users Management
                </span>
                <button  type="button" class="btn btn-primary btn-sm ml-auto" 
                    v-on:click="showNewUserModal" >
                    <span class="fa fa-plus"></span> Create New </button>
            </div>
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Id</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ user.user_id }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.role }}</td>
                                <td>{{ user.updated_at | myDate}}</td>
                                <td>
                                    <button class="btn btn-primary btn-sm" v-on:click="editUser(user)" >
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn btn-danger btn-sm" v-on:click="deleteUser(user)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                    <div class="text-center" v-show="moreExists">
                        <button type="button" class="btn btn-primary btn-sm" v-on:click="loadMore">
                            <span class="fa fa-arrow-down"></span> Load More
                        </button>
                    </div>
            </div>
        </div>

        <b-modal ref="newUserModal" hide-footer title="Create New User">
            <div class="d-block">
                <form v-on:submit.prevent="createUser">
                    <div class="form-group">
                        <label for="name">Enter Name</label>
                        <input type="text" v-model="userData.name" class="form-control" name="name"
                            id="name" placeholder="Enter Rank & Name" />
                        <div class="invalid-feedback" v-if="errors.name">
                            {{ errors.name[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="user_id">User Id</label>
                        <input type="text" v-model="userData.user_id" class="form-control" name="user_id"
                            id="user_id" placeholder="Enter service number" />
                        <div class="invalid-feedback" v-if="errors.user_id">
                            {{ errors.user_id[0] }}
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <label for="Password">Password</label>
                            <input type="password" v-model="userData.password" class="form-control" id="password" placeholder="Password" >
                            <div class="invalid-feedback" v-if="errors.password">
                                {{ errors.password[0] }}
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <label for="Confirm Password">Confirm Password</label>
                            <input type="password" v-model="userData.password_confirmation" class="form-control" id="password_confirmation" placeholder="Confirm Password" >
                            <div class="invalid-feedback" v-if="errors.password_confirmation">
                                {{ errors.password_confirmation[0] }}
                            </div>
                        </div>
                        
                    </div>
                    <div class="form-group">
                        <label for="user_id">Role</label>
                        <select v-model="userData.role" class="form-control" name="role" id="role">
                            <option value="">Choose Role</option>
                            <option>user</option>
                            <option>administrator</option>
                        </select>
                        <div class="invalid-feedback" v-if="errors.role">
                            {{ errors.role[0] }}
                        </div>
                    </div>
                    <hr />
                    <div class="text-right">
                        <button type="button" class="btn btn-warning"  v-on:click="hideNewUserModal" >
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <span class="fa fa-check"></span> Save
                        </button>
                    </div>
                </form>
            </div>
        </b-modal>

        <b-modal ref="editUserModal" hide-footer  title="Update user form" >
            <div class="d-block">
                <form v-on:submit.prevent="updateUser">
                    <div class="form-group">
                        <label for="name">Enter Name</label>
                        <input type="text" v-model="editUserData.name"  class="form-control"
                            name="name"  id="name" placeholder="Enter user name" />
                        <div class="invalid-feedback" v-if="errors.name">
                            {{ errors.name[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="user_id">User Id</label>
                        <input type="text" v-model="editUserData.user_id"  class="form-control"
                            name="user_id"  id="user_id" placeholder="Enter user id" />
                        <div class="invalid-feedback" v-if="errors.user_id">
                            {{ errors.user_id[0] }}
                        </div>                        
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <label for="Password">Password</label>
                            <input type="password" v-model="editUserData.password" class="form-control" name="password" id="password" 
                            placeholder="Password" required />
                            <div class="invalid-feedback" v-if="errors.password">
                                {{ errors.password[0] }}
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <label for="Confirm Password">Confirm Password</label>
                            <input type="password" v-model="editUserData.password_confirmation" class="form-control" password="password_confirmation"
                             id="password_confirmation" placeholder="Confirm Password" required />
                            <div class="invalid-feedback" v-if="errors.password_confirmation">
                                {{ errors.password_confirmation[0] }}
                            </div>
                        </div>                        
                    </div>
                    <div class="form-group">
                        <label for="role">Role</label>
                        <select v-model="editUserData.role" class="form-control" name="role" id="role">
                            <option value="">Choose Role</option>
                            <option>user</option>
                            <option>administrator</option>
                        </select>
                        <div class="invalid-feedback" v-if="errors.role">
                            {{ errors.role[0] }}
                        </div>
                    </div>
                    <hr />
                    <div class="text-right">
                        <button type="button"  class="btn btn-warning"  v-on:click="hideEditUserModal" >
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <span class="fa fa-check"></span> Update
                        </button>
                    </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>
import * as userService from "../services/user_service";
export default {
    name: "user",
    data() {
        return {
            users: [],
            userData: {
                name: "",
                user_id: "",
                password: "",
                password_confirmation: "",
                role: ""
            },
            moreExists : false,
            nextPage : 0,
            editUserData: {},
            errors: {}
        };
    },
    mounted() {
        this.loadUsers();
    },
    methods: {
        loadUsers: async function() {
            try {
                const response = await userService.loadUsers();
                this.users = response.data.data;

                if(response.data.current_page < response.data.last_page) {
                    this.moreExists = true;
                    this.nextPage = response.data.current_page + 1;
                } else {
                    this.moreExists = false;
                }
            } catch (error) {
                this.flashMessage.error({
                    title: "Error. ",
                    message: "Some error occured. Please refresh!",
                    time: 5000,
                    icon : '/img/flash/error.svg',
                });
            }
        },

        hideNewUserModal() {
            this.$refs.newUserModal.hide();
        },

        showNewUserModal() {
            //console.log(this.$refs);
            this.$refs.newUserModal.show();
        },

        createUser: async function() {
            let formData = new FormData();
            formData.append("name", this.userData.name);
            formData.append("user_id", this.userData.user_id);
            formData.append("password", this.userData.password);
            formData.append("password_confirmation", this.userData.password_confirmation);
            formData.append("role", this.userData.role);

            try {
                const response = await userService.createUser(formData);
                this.users.unshift(response.data);
                this.hideNewUserModal();
                this.flashMessage.success({
                    title: "Success. ",
                    message: "User stored successfully!",
                    time: 5000,
                    icon : '/img/flash/success.svg',
                });
                this.userData = {
                    name: "",
                    user_id: "",
                    password: "",
                    password_confirmation: "",
                    role: ""
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
                            icon : '/img/flash/error.svg',
                        });
                        break;
                }
            }
        },

        deleteUser: async function(user) {
            this.$confirm(`Are you sure you want to delete ${user.name}`).then(async () => {
            try {
                await userService.deleteUser(user.id);
                this.users = this.users.filter(obj => {
                    return obj.id != user.id;
                });
                this.flashMessage.success({
                    title: "Success ",
                    message: "User deleted successfully!",
                    time: 5000,
                    icon : '/img/flash/success.svg',
                });
            } catch (error){
                     switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.flashMessage.error({
                                title: "Error. ",
                                message: error.response.data.message,
                                time: 5000,
                                icon : '/img/flash/error.svg',
                            });
                            break;
                        case 500:
                            this.flashMessage.error({
                                title: "Error. ",
                                message: error.response.data.message,
                                time: 5000,
                                icon : '/img/flash/error.svg',
                            });
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

            });
           
            
        },

        hideEditUserModal() {
            this.$refs.editUserModal.hide();
        },

        showEditUserModal() {
            this.$refs.editUserModal.show();
        },

        editUser(user) {
            this.editUserData = { ...user };
            this.showEditUserModal();
        },

        updateUser: async function() {
            try {
                const formData = new FormData();
                formData.append("name", this.editUserData.name);
                formData.append("user_id", this.editUserData.user_id);
                formData.append("password", this.editUserData.password);
                formData.append("password_confirmation", this.editUserData.password_confirmation);
                formData.append("role", this.editUserData.role);
                formData.append("_method", "put");

                const response = await userService.updateUser(
                    this.editUserData.id,
                    formData
                );
                this.users.map(user => {
                    if (user.id == response.data.id) {
                        for (let key in response.data) {
                            user[key] = response.data[key];
                        }
                    }
                });
                this.hideEditUserModal();
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
        
        loadMore: async function(){
            try{
                const response = await userService.loadMore(this.nextPage);  
                if(response.data.current_page < response.data.last_page) {
                    this.moreExists = true;
                    this.nextPage = response.data.current_page + 1;
                } else {
                    this.moreExists = false;
                } 
                response.data.data.forEach(data => {
                    this.users.push(data);
                });     
            } catch (error) {
                this.flashMessage.error({
                    title: "Error. ",
                    message: "Some error occured, please try again!",
                    time: 5000,
                    icon : '/img/flash/error.svg',
                });

            }
        }
    }
};
</script>
