<template>
    <div>
        
        <div id="wrapper">            
            
            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">
                
                <div id="content">                        
                    <Topbar/>
                    <router-view></router-view>
                </div>

            <!--<Footer/>-->

            </div>
            <!-- End of Content Wrapper -->

        </div>

    </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';
import Topbar from '../components/Topbar.vue';
export default {
     components: {
        Sidebar,
        Footer,
        Topbar
        }
}
</script>