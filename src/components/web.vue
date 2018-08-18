<template>
    <div>
        <h6>热点事件</h6>
        <p>{{ mesg }}</p>
        <li v-for="item in title.id"> {{ item }} </li>
        <h6>事件</h6>
    </div>
</template>

<script>

export default({
    data(){
        return {
            mesg:"nihao",
            title:{
                id:1,
                id:2,
            },
        }
    },

   methods:{
    
    },
})
</script>

<style>
  
</style>
