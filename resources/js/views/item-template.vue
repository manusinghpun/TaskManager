<template>
  <div>
    #{{ item.title }}<br/>
    <small><i class="fa fa-clock"></i>{{ item.start | datetime }}</small>
  </div>
</template>
 
<script>
export default {
  props: {
    item: { required: true },
  }
}
</script> 