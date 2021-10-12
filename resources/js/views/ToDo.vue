<template>
  <!-- Page Wrapper -->

  <div id="wrapper" class="calendar-wrapper">
    <!-- Sidebar -->
    <ul
      class="navbar-nav shadow sidebar sidebar-dark accordion d-print-none"
      id="accordionSidebar"
    >
      <li class="nav-item p-1">
        <form v-on:submit.prevent="createToDO">
          <div class="form-group">
            <label for="name">Todo Content</label>
            <b-form-textarea
              autofocus
              id="textarea-state"
              name="content"
              v-model="toDoData.content"
              placeholder="Enter content here ..."
              rows="10"
            ></b-form-textarea>
            <div class="invalid-feedback" v-if="errors.content">
              {{ errors.content[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="color">Choose Status</label>
            <select
              v-model="toDoData.status"
              class="form-control"
              name="status"
              id="status"
            >
              <option>PENDING</option>
              <option>COMPLETE</option>
            </select>
            <div class="invalid-feedback" v-if="errors.status">
              {{ errors.status[0] }}
            </div>
          </div>
          <hr />
          <div class="text-right">
            <b-button type="submit" variant="primary" size="sm" block
              ><span class="fa fa-check"></span> Add</b-button
            >
          </div>
        </form>
      </li>
    </ul>

    <!-- End of Sidebar -->
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-header d-flex">
              <span> <i class="fas fa-tasks"></i> ToDos List </span>
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
                    <b-form-select
                      v-model="perPage"
                      id="perPageSelect"
                      size="sm"
                      :options="pageOptions"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col offset-lg="2" lg="3" class="my-1">
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="totalrows"
                        :per-page="perPage"
                        aria-controls="my-table"
                    ></b-pagination>
                </b-col>
                <b-col offset-lg="2" lg="3" class="my-1">
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
                :items="todos"
                :fields="fields"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                :current-page="currentPage"
                :per-page="perPage"
              >
                <template #cell(index)="data">
                  {{ data.index + 1 }}
                </template>
                <template #cell(status)="data">
                  <span v-if="data.item.status == 'COMPLETE'"
                    ><i class="fas fa-check text-success"></i
                  ></span>
                  <span v-else><i class="fa fa-clock text-danger"></i></span>
                </template>
                <template #cell(updated_at)="data">
                  <small>{{ data.item.created_at | datetime }}</small>
                </template>
                <template #cell(action)="data">
                  <button
                    class="btn btn-primary btn-sm"
                    v-on:click="editToDo(data.item)"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    v-on:click="deleteToDo(data.item)"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </template>
              </b-table>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->
    </div>
    <!-- End of Content Wrapper -->

    <b-modal ref="editToDoModal" hide-footer title="Update ToDo form">
      <div class="d-block">
        <form v-on:submit.prevent="updateToDo">
          <div class="form-group">
            <label for="content">Enter Content</label>
            <b-form-textarea
              autofocus
              id="editContent"
              name="content"
              v-model="editToDoData.content"
              placeholder="Enter content here ..."
              rows="5"
            ></b-form-textarea>
            <div class="invalid-feedback" v-if="errors.content">
              {{ errors.content[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="status">Choose Status</label>
            <select
              v-model="editToDoData.status"
              class="form-control"
              name="status"
              id="status"
            >
              <option>PENDING</option>
              <option>COMPLETE</option>
            </select>
            <div class="invalid-feedback" v-if="errors.status">
              {{ errors.status[0] }}
            </div>
          </div>
          <hr />
          <div class="text-right">
            <button
              type="button"
              class="btn btn-warning"
              v-on:click="hideeditToDoModal"
            >
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
  <!-- End of Page Wrapper -->
</template>
<script>
import * as todoService from "../services/todo_service";
export default {
  name: "toDo",
  data() {
    return {
      fields: [
        {
          key: "index",
          sortable: false,
          label: "#",
        },
        {
          key: "content",
          sortable: true,
        },
        {
          key: "status",
          sortable: true,
        },
        {
          key: "updated_at",
          sortable: true,
        },
        {
          key: "create_by",
          sortable: true,
        },
        "action",
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 1000, text: "Show all" }],
      filter: null,
      filterOn: [],
      todos: [],
      toDoData: {
        content: "",
        status: "PENDING",
      },
      moreExists: false,
      nextPage: 0,
      editToDoData: {},
      errors: {},
    };
  },
  mounted() {
    this.loadToDo();
  },
  computed: {
      totalrows() {
        return this.todos.length
      }
    },

  methods: {
    loadToDo: async function () {
      try {
        const response = await todoService.loadToDo();
        this.todos = response.data;
        /*
                if(response.data.current_page < response.data.last_page) {
                    this.moreExists = true;
                    this.nextPage = response.data.current_page + 1;
                } else {
                    this.moreExists = false;
                } */
      } catch (error) {
        this.flashMessage.error({
          title: "Error. ",
          message: "Some error occured. Please refresh!",
          time: 5000,
          icon: "/img/flash/error.svg",
        });
      }
    },
    createToDO: async function () {
      let formData = new FormData();
      formData.append("content", this.toDoData.content);
      formData.append("status", this.toDoData.status);

      try {
        const response = await todoService.createToDo(formData);
        this.todos.unshift(response.data);
        this.flashMessage.success({
          title: "Success!",
          message: "ToDo stored successfully!",
          time: 5000,
          icon: "/img/flash/success.svg",
        });
        this.toDoData = {
          content: "",
          status: "PENDING",
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

    deleteToDo: async function (todo) {
      this.$confirm(`Are you sure you want to delete ?`).then(async () => {
        try {
          await todoService.deleteToDo(todo.id);
          this.todos = this.todos.filter((obj) => {
            return obj.id != todo.id;
          });
          this.flashMessage.success({
            title: "Success! ",
            message: "Todo item deleted successfully!",
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

    hideeditToDoModal() {
      this.$refs.editToDoModal.hide();
      this.$data.errors = {};
    },
    showeditToDoModal() {
      this.$refs.editToDoModal.show();
    },

    editToDo(todo) {
      this.editToDoData = { ...todo };
      this.showeditToDoModal();
    },

    updateToDo: async function () {
      try {
        const formData = new FormData();
        formData.append("content", this.editToDoData.content);
        formData.append("status", this.editToDoData.status);
        formData.append("_method", "put");

        const response = await todoService.updateToDo(
          this.editToDoData.id,
          formData
        );
        this.todos.map((todo) => {
          if (todo.id == response.data.id) {
            for (let key in response.data) {
              todo[key] = response.data[key];
            }
          }
        });
        this.hideeditToDoModal();
        this.flashMessage.success({
          title: "Success!",
          message: "ToDo updated successfully!",
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
  },
};
</script>
