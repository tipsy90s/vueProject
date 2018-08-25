<template>
  <div>
    <div class="my-music">
      <!-- <p>https://music.163.com/#/search/m/?id=30987293&s=%E6%88%91%E6%98%AF%E7%9C%9F%E7%9A%84%E7%88%B1%E4%BD%A0&type=1</p> -->
      <p><a href = "">网易云音乐</a></p>
      <p><a href = "">百度音乐</a></p>
      <p><a href = "">酷狗音乐</a></p>
      <p><a href = "">QQ音乐</a></p>
    </div>
    <!-- <span class="page-style">|</span> -->
    <div class="search-music">
      <input style="display:none" ref="inputDisplay">
      <button @click="input()"><img src="../../photos/search.png"></button>
    </div>
  </div>
</template>

<script>
export default {

  methods:{
    input(){
      this.$refs.inputDisplay.style.display="inline";
    }
  },

}
</script>

<style scoped>
.my-music {
  width:200px;
  float:left;
}

/* .page-style {
  height:500px;
} */

.search-music {
  width:400px;
}

.search-music button {
   background: bisque;
}

.search {
   /* background-image: url(../photos/search.png); */
}
</style>


