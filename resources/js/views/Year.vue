<template>
    <div class="container-fluid">
        <FullCalendar :options="calendarOptions" />
    </div>
</template>

<script>
import yearPlugin from "fullcalendar-year-view/";
//import * as categoryService from "../services/category_service";
export default {
    name: "year",
    components: {
        FullCalendar, // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
                plugins: [ yearPlugin],
                initialView: 'year'
            }

        };
    },
    mounted() {
        //this.loadCategories();
    },
    methods: {
       
    }
};
</script>
