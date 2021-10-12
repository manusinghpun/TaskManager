<template>
  <div class="container-fluid">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-header d-flex">
        <span>
          <i class="fas fa-chart-area"></i>
          Tasks Management
        </span>
        <button type="button" class="btn btn-primary btn-sm ml-auto" v-on:click="showNewTaskModal">
          <span class="fa fa-plus"></span> Create New
        </button>
      </div>
      <div class="card-body">
        <b-row>
          <b-col lg="2" class="my-1">
            <b-form-group
              label="Show"
              label-cols-sm="8"
              label-cols-md="6"
              label-cols-lg="4"
              label-align-sm="right"
              label-size="sm"
              label-for="perPageSelect"
              class="mb-0"
            >
              <b-form-select v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col lg="6" class="my-1">
            Pending Tasks : {{ pendingCount }}
            <!--
            <multiselect v-model="value" @input="inputChange" :options="categories" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Filter Categories" label="name" track-by="name" :preselect-first="true">
              <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
            </multiselect>
            -->
          </b-col>
          <b-col lg="4" class="my-1">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-table
          id="my-table"
          hover
          small
          outlined
          head-variant="dark"
          :items="tasks"
          :fields="fields"
          :filter="filter"
          :filter-included-fields="filterOn"
          @filtered="onFiltered"
          :current-page="currentPage"
          :per-page="perPage"
          
        ><!--:tbody-tr-class="rowClass"-->
          <template #cell(index)="data">{{ data.index + 1 }}</template>

          <template #cell(pdc)="data"  >
            <small>{{ data.item.pdc | myDate }}</small>
          </template>

          <template #cell(users)="data">
            <b-badge v-for="item in data.item.users" class="ml-1" :key="item.id">{{ item.name }}</b-badge>
          </template>

          <template #cell(status)="data">
            <span v-if="data.item.status == '1'">
              <i class="fa fa-check text-success"></i>
            </span>
            <span v-else>
              <i class="fa fa-clock text-danger"></i>
            </span>
          </template>

          <template #cell(updated_at)="data" >
            <small>{{ data.item.updated_at | datetime }}</small>
          </template>

          <template #cell(created_by)="data">{{ findUserName(data.item.created_by) }}</template>

          <template #cell(action)="data">
            <button class="btn btn-primary btn-sm" v-if="data.item.created_by == $store.state.profile.user_id" v-on:click="editTask(data.item)">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-danger btn-sm" v-if="data.item.created_by == $store.state.profile.user_id" v-on:click="deleteTask(data.item)">
              <i class="fas fa-trash"></i>
            </button>
            <b-button
              size="sm"
              @click="data.toggleDetails"
              class="mr-2"
            >{{ data.detailsShowing ? 'Hide' : 'Show'}} Details</b-button>
          </template>

          <template #row-details="data">
            <!--template for row details-->
            <b-card>
              <b-row class="mb-2">
                <b-col sm="2" class="text-sm-right">
                  <b>Task Description:</b>
                </b-col>
                <b-col sm="10">{{ data.item.description }}</b-col>
              </b-row>

              <!--form add reply form-->
              <b-form v-on:submit.prevent="createReply(data.item.id)">
                <!--<input type="hidden" name="task_id" ref="task_id" :value="data.item.id" />-->
                <b-row>
                  <b-col sm="2" class="text-sm-right">
                    <b>Comments:</b>
                  </b-col>
                  <b-col sm="8">
                    <b-form-textarea
                      id="comment"
                      v-model="replyData.comment"
                      placeholder="Enter your comments for this task ..."
                      size="sm"
                      rows="4"
                    ></b-form-textarea>
                    <div class="invalid-feedback" v-if="errors.comment">{{ errors.comment[0] }}</div>
                  </b-col>
                  <b-col sm="2">
                    <br />
                    <b-btn class="btn-success" type="submit">Add Comments</b-btn>
                  </b-col>
                </b-row>
              </b-form>
              <!--//form add reply form-->

              <b-row class="mb-2" v-for="item in data.item.replies" :key="item.id">
                <b-col sm="2" class="text-sm-right">
                  <b>{{ item.updated_at | datetime }}</b>
                </b-col>
                <b-col>
                  <small class="text-info">{{ findUserName(item.reply_by) }}</small>
                  {{ item.comment}}.
                </b-col>
              </b-row>

              <b-button size="sm" @click="data.toggleDetails">Hide Details</b-button>
            </b-card>
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalrows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </div>

    <b-modal ref="newTaskModal" hide-footer title="Add task form">
      <div class="d-block">
        <form v-on:submit.prevent="createTask">
          <div class="form-group">
            <label for="name">Enter Task Name</label>
            <input
              type="text"
              v-model="taskData.name"
              class="form-control"
              name="name"
              id="name"
              placeholder="Enter task name"
            />
            <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
          </div>
          <div class="form-group">
            <label for="status">Task Status</label>
            <b-form-radio-group v-model="taskData.status" :options="options" name="status"></b-form-radio-group>
          </div>
          <div class="form-group">
            <label for="color">Description</label>
            <b-form-textarea
              id="description"
              v-model="taskData.description"
              placeholder="Enter task description ..."
              size="sm"
              rows="3"
            ></b-form-textarea>
            <div class="invalid-feedback" v-if="errors.description">{{ errors.description[0] }}</div>
          </div>
          <div class="form-group">
            <label for="pdc">PDC Date</label>
            <b-form-datepicker
              id="pdc"
              v-model="taskData.pdc"
              size="sm"
              today-button
              close-button
              class="mb-2"
              local="en"
              :min="min"
            ></b-form-datepicker>
            <div class="invalid-feedback" v-if="errors.pdc">{{ errors.pdc[0] }}</div>
          </div>
          <div class="from-group">
            <label for="pdc">Assign Task To</label>
            <multiselect
              v-model="taskData.assign_to"
              name="assign_to"
              :options="users.map(user => user.id)"
              :custom-label="opt => users.find(x => x.id == opt).name"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Select users"
              :preselect-first="false"
            >
              <template slot="selection" slot-scope="{ values, search, isOpen }">
                <span
                  class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen"
                >{{ values.length }} users selected</span>
              </template>
            </multiselect>
            <b-form-invalid-feedback v-if="errors.assign_to">
              {{
              errors.assign_to[0]
              }}
            </b-form-invalid-feedback>
          </div>
          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-warning" v-on:click="hideNewTaskModal">Cancel</button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span> Save
            </button>
          </div>
        </form>
      </div>
    </b-modal>

    <b-modal ref="editTaskModal" hide-footer title="Update task form">
      <div class="d-block">
        <form v-on:submit.prevent="updateTask">
          <div class="form-group">
            <label for="name">Enter Task Name</label>
            <input
              type="text"
              v-model="editTaskData.name"
              class="form-control"
              name="name"
              id="name"
              placeholder="Enter task name"
            />
            <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
          </div>
          <div class="form-group">
            <label for="status">Task Status</label>
            <b-form-radio-group v-model="editTaskData.status" :options="options" name="status"></b-form-radio-group>
          </div>
          <div class="form-group">
            <label for="color">Description</label>
            <b-form-textarea
              id="description"
              v-model="editTaskData.description"
              placeholder="Enter task description ..."
              size="sm"
              rows="3"
            ></b-form-textarea>
            <div class="invalid-feedback" v-if="errors.description">{{ errors.description[0] }}</div>
          </div>
          <div class="form-group">
            <label for="pdc">PDC Date</label>
            <b-form-datepicker
              id="pdc"
              v-model="editTaskData.pdc"
              size="sm"
              today-button
              close-button
              class="mb-2"
              local="en"
              :min="min"
            ></b-form-datepicker>
            <div class="invalid-feedback" v-if="errors.pdc">{{ errors.pdc[0] }}</div>
          </div>
          <!--
          <div class="from-group">
            <label for="assign_to">Assign Task To</label>
            <multiselect
              v-model="editTaskData.assign_to"
              name="assign_to"
              :options="users.map(user => user.id)"
              :custom-label="opt => users.find(x => x.id == opt).name"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Select users"
              :preselect-first="false"
            >
              <template slot="selection" slot-scope="{ values, search, isOpen }">
                <span
                  class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen"
                >{{ values.length }} users selected</span>
              </template>
            </multiselect>
            <b-form-invalid-feedback v-if="errors.assign_to">
              {{
              errors.assign_to[0]
              }}
            </b-form-invalid-feedback>
          </div>
          -->

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-warning" v-on:click="hideEditTaskModal">Cancel</button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span> Update
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import * as taskService from "../services/task_service";
import * as userService from "../services/user_service";
import * as replyService from "../services/reply_service";
import store from "../store";

import Multiselect from "vue-multiselect";
import moment from "moment";

export default {
  components: {
    Multiselect,
  },
  name: "task",
  data() {
    return {
      fields: [
        {
          key: "index",
          sortable: false,
          label: "#",
        },
        {
          key: "name",
          sortable: true,
          label: "Task Name",
        },
        {
          key: "pdc",
          sortable: true,
          label: "PDC",
          variant: "danger"
        },
        {
          key: "users",
          sortable: true,
          label: "Assign to",
        },
        {
          key: "created_by",
          sortable: true,
          label: "Created By",
        },
        {
          key: "status",
          sortable: true,
          label: "Status",
        },
        {
          key: "updated_at",
          sortable: true,
        },
        "action",
      ],
      options: [
        { text: "Pending", value: "0" },
        { text: "Completed", value: "1" },
      ],

      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 20, 50, { value: 1000, text: "Show all" }],
      filter: null,
      filterOn: [],

      tasks: [],
      users: [],
      taskData: {
        name: "",
        status: "0",
        description: "",
        pdc: "",
        assign_to: [],
      },
      replyData: {
        comment: "",
        task_id: "",
      },
      moreExists: false,
      nextPage: 0,
      editTaskData: {},
      errors: {},
      min: new Date(),
    };
  },

  mounted() {
    this.loadTasks();
    this.loadUsers();
  },

  computed: {
    totalrows() {
      return this.tasks.length;
    },

    pendingCount() {
      return this.tasks.filter(function (item) {
        if (item.status === 0) {
          return true;
        }
      }).length;
    },
  },

  methods: {
    loadTasks: async function () {
      try {
        const response = await taskService.loadTasks();
        this.tasks = response.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon: "/img/flash/error.svg",
        });
      }
    },

    loadUsers: async function () {
      try {
        const response = await userService.loadUsers();
        this.users = response.data.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon: "/img/flash/error.svg",
        });
      }
    },

    hideNewTaskModal() {
      this.$refs.newTaskModal.hide();
    },
    showNewTaskModal() {
      //console.log(this.$refs);
      this.$refs.newTaskModal.show();
    },

    createTask: async function () {
      let formData = new FormData();
      formData.append("name", this.taskData.name);
      formData.append("pdc", this.taskData.pdc);
      formData.append("status", this.taskData.status);
      formData.append("description", this.taskData.description);
      formData.append("assign_to", this.taskData.assign_to);
      try {
        const response = await taskService.createTask(formData);
        this.tasks.unshift(response.data);
        this.hideNewTaskModal();
        this.flashMessage.success({
          title: "Success!",
          message: "Task stored successfully!",
          time: 5000,
          icon: "/img/flash/success.svg",
        });
        this.taskData = {
          name: "",
          pdc: "",
          status: "0",
          description: "",
          assign_to: [],
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
              icon: "/img/flash/error.svg",
            });
            break;
        }
      }
    },

    deleteTask: async function (task) {
      this.$confirm(
        `Are you sure you want to delete the task "${task.name}"`
      ).then(async () => {
        try {
          await taskService.deleteTask(task.id);
          this.tasks = this.tasks.filter((obj) => {
            return obj.id != task.id;
          });
          this.flashMessage.success({
            title: "Success! ",
            message: "Task deleted successfully!",
            time: 5000,
            icon: "/img/flash/success.svg",
          });
        } catch (error) {
          this.flashMessage.error({
            title: "Error. ",
            message: "Some error occured, please try again!",
            time: 5000,
            icon: "/img/flash/error.svg",
          });
        }
      });
    },

    hideEditTaskModal() {
      this.$refs.editTaskModal.hide();
    },
    showEditTaskModal() {
      this.$refs.editTaskModal.show();
    },
    editTask(task) {
      this.editTaskData = { ...task };
      //console.log(this.editTaskData);
      this.showEditTaskModal();
    },

    updateTask: async function () {
      try {
        const formData = new FormData();
        formData.append("name", this.editTaskData.name);
        formData.append("pdc", this.editTaskData.pdc);
        formData.append("status", this.editTaskData.status);
        formData.append("description", this.editTaskData.description);
        formData.append("_method", "put");

        const response = await taskService.updateTask(
          this.editTaskData.id,
          formData
        );
        this.tasks.map((task) => {
          if (task.id == response.data.id) {
            for (let key in response.data) {
              task[key] = response.data[key];
            }
          }
        });
        this.hideEditTaskModal();
        this.flashMessage.success({
          title: "Success!",
          message: "Task updated successfully!",
          time: 5000,
          icon: "/img/flash/success.svg",
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
              icon: "/img/flash/error.svg",
            });
            break;
        }
      }
    },

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    findUserName(param) {
      let user_name = "";
      this.users.forEach((user) => {
        if (user.user_id == param) {
          user_name = user.name;
        }
      });
      return user_name;
    },

    createReply: async function (id) {
      let formData = new FormData();
      formData.append("comment", this.replyData.comment);
      formData.append("reply_by", this.$store.state.profile.user_id);
      //formData.append("task_id", this.$refs.task_id._value);
      formData.APPEND("task_id", id);
      try {
        const response = await replyService.createReply(formData);
        //this.tasks.unshift(response.data);
        this.flashMessage.success({
          title: "Success!",
          message: "Comment stored successfully!",
          time: 5000,
          icon: "/img/flash/success.svg",
        });
        this.replyData = {
          comment: "",
        };
        setTimeout(function () {
          window.location.reload();
        }, 1000);
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
              icon: "/img/flash/error.svg",
            });
            break;
        }
      }
    },

    //rowClass(item,type) {
      variant(item,type) {
         console.log("hi");
        /*
      const currentDate = moment().format('YYYY-MM-DD');
      if(!item || type !== 'row') return
      if (item.pdc === currentDate) return 'table-primary'
      if (item.pdc < currentDate) return 'table-danger'
      */
     if(!item || type !== 'row') return
      console.log(type);
    }


  },
};
</script>
