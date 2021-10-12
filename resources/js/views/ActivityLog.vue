<template>
    <div class="container-fluid">

        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-header d-flex">
                <span>
                    <i class="fas fa-history"></i>
                     Activity Logs
                </span>
            </div>
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <table class="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Action Taken</th>
                                <th>Action By</th>
                                <th>Properties</th>
                                <th>Updated At</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(activity, index) in activities" :key="index" >
                                <td>{{ index + 1 }}</td>
                                <td> <span v-if="activity.description == 'created'"><i class="fa fa-plus text-success"></i></span>
                                    <span v-else-if="activity.description == 'deleted'"><i class="fa fa-trash text-danger"></i></span> 
                                    <span v-else-if="activity.description == 'updated'"><i class="fas fa-fw fa-edit text-warning"></i></span>              
                                </td>
                                <td>{{ activity.user_relation.name }}</td>
                                <td>{{ activity.properties }}</td>
                                <td><small>{{ activity.updated_at | datetime }}</small></td>
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

    </div>
</template>

<script>
import * as activityService from "../services/activity_service";
export default {
    name: "activity",
    data() {
        return {
            activities: [],
            activityData: {
                description: "",
                causer_id: "",
                properties: "",
                created_at: ""
            },
            moreExists : false,
            nextPage : 0,
            errors: {}
        };
    },
    mounted() {
        this.loadActivities();
    },
    methods: {
        loadActivities: async function() {
            try {
                const response = await activityService.loadActivities();
                this.activities = response.data.data;

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
                    time: 5000
                });
            }
        },
        
        loadMore: async function(){
            try{
                const response = await activityService.loadMore(this.nextPage);  
                if(response.data.current_page < response.data.last_page) {
                    this.moreExists = true;
                    this.nextPage = response.data.current_page + 1;
                } else {
                    this.moreExists = false;
                } 
                response.data.data.forEach(data => {
                    this.activities.push(data);
                });     
            } catch (error) {
                this.flashMessage.error({
                    title: "Error. ",
                    message: "Some error occured, please try again!",
                    time: 5000
                });

            }
        },
    }
};
</script>
