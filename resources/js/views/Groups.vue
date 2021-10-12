<template>
    <div class="container-fluid">

        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-header d-flex">
                <span>
                    <i class="fas fa-chart-area"></i>
                    Groups Management
                </span>
                <button
                    type="button"
                    class="btn btn-primary btn-sm ml-auto"
                    v-on:click="showNewGroupModal"
                >
                    <span class="fa fa-plus"></span> Create New
                </button>
            </div>
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Group Name</th>
                                <th>Users</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(group, index) in groups" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ group.group_name }}</td>
                                <td>{{ group.group_name }}</td>
                                <td>{{ group.updated_at }}</td>
                                <td>
                                    <button class="btn btn-primary btn-sm" v-on:click="editGroup(group)" >
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn btn-danger btn-sm" v-on:click="deleteGroup(group)">
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

        <b-modal ref="newGroupModal" hide-footer title="Add group form">
            <div class="d-block">
                <form v-on:submit.prevent="createGroup">
                    <div class="form-group">
                        <label for="group_name">Enter Name</label>
                        <input  type="text"  v-model="groupData.group_name"  class="form-control"  
                        name="group_name"  id="group_name"  placeholder="Enter group name" />
                        <div class="invalid-feedback" v-if="errors.group_name">
                            {{ errors.group_name[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="color">Choose Color</label>
                        <input  type="color"  v-model="groupData.color"  class="form-control"  
                        name="color"  id="color"  placeholder="Choose Color" />
                        <div class="invalid-feedback" v-if="errors.color">
                            {{ errors.color[0] }}
                        </div>
                    </div>
                    <hr />
                    <div class="text-right">
                        <button type="button" class="btn btn-warning" v-on:click="hideNewGroupModal">
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <span class="fa fa-check"></span> Save
                        </button>
                    </div>
                </form>
            </div>
        </b-modal>

        <b-modal ref="editGroupModal" hide-footer  title="Update group form" >
            <div class="d-block">
                <form v-on:submit.prevent="updateGroup">
                    <div class="form-group">
                        <label for="name">Enter Name</label>
                        <input  type="text"  v-model="editGroupData.name"  class="form-control"
                            name="name" id="name" placeholder="Enter group name" />
                        <div class="invalid-feedback" v-if="errors.name">
                            {{ errors.name[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="color">Choose Color</label>
                        <input  type="color"  v-model="editGroupData.color"  class="form-control"
                            name="color" id="color" placeholder="Enter group color" />
                        <div class="invalid-feedback" v-if="errors.color">
                            {{ errors.color[0] }}
                        </div>
                    </div>
                    <hr />
                    <div class="text-right">
                        <button type="button" class="btn btn-warning"  v-on:click="hideEditGroupModal" >
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
import * as groupService from "../services/group_service";
export default {
    name: "group",
    data() {
        return {
            groups: [],
            groupData: {
                group_name: ""
            },
            moreExists : false,
            nextPage : 0,
            editGroupData: {},
            errors: {}
        };
    },
    mounted() {
        this.loadGroups();
    },
    methods: {
        loadGroups: async function() {
            try {
                const response = await groupService.loadGroups();
                this.groups = response.data.data;

                conslole.log(groups);

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
        hideNewGroupModal() {
            this.$refs.newGroupModal.hide();
        },
        showNewGroupModal() {
            //console.log(this.$refs);
            this.$refs.newGroupModal.show();
        },
        createGroup: async function() {
            let formData = new FormData();
            formData.append("group_name", this.groupData.group_name);

            try {
                const response = await groupService.createGroup(formData);
                this.groups.unshift(response.data);
                this.hideNewGroupModal();
                this.flashMessage.success({
                    title: "Success!",
                    message: "Group stored successfully!",
                    time: 5000,
                    icon : '/img/flash/success.svg',
                });
                this.groupData = {
                    group_name: "",
                    updated_by: ""
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
        deleteGroup: async function(group) {
            this.$confirm(`Are you sure you want to delete ${group.group_name}`).then(async () => {
                try {
                    await groupService.deleteGroup(group.id);
                    this.groups = this.groups.filter(obj => {
                        return obj.id != group.id;
                    });
                    this.flashMessage.success({
                        title: "Success! ",
                        message: "Group deleted successfully!",
                        time: 5000,
                        icon : '/img/flash/success.svg',
                    });
                } catch (error) {
                    this.flashMessage.error({
                        title: "Error. ",
                        message: "Some error occured, please try again!",
                        time: 5000,
                        icon : '/img/flash/error.svg',
                    });
                }

            });

        },
        hideEditGroupModal() {
            this.$refs.editGroupModal.hide();
        },
        showEditGroupModal() {
            this.$refs.editGroupModal.show();
        },
        editGroup(group) {
            this.editGroupData = { ...group };
            this.showEditGroupModal();
        },
        updateGroup: async function() {
            try {
                const formData = new FormData();
                formData.append("name", this.editGroupData.name);
                formData.append("color", this.editGroupData.color);
                formData.append("_method", "put");

                const response = await groupService.updateGroup(
                    this.editGroupData.id,
                    formData
                );
                this.groups.map(group => {
                    if (group.id == response.data.id) {
                        for (let key in response.data) {
                            group[key] = response.data[key];
                        }
                    }
                });
                this.hideEditGroupModal();
                this.flashMessage.success({
                    title: "Success!",
                    message: "Group updated successfully!",
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
                const response = await groupService.loadMore(this.nextPage);  
                if(response.data.current_page < response.data.last_page) {
                    this.moreExists = true;
                    this.nextPage = response.data.current_page + 1;
                } else {
                    this.moreExists = false;
                } 
                response.data.data.forEach(data => {
                    this.groups.push(data);
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
