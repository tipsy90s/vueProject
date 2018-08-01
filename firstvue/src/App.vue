<template>
  <div>
    <h2>你好世界</h2>
    <h4>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
      My Browser 
      </h4>
    <input type="text" value="">
    <button type="submit"><a href="https://www.baidu.com/">搜索</a></button>
  <div v-for="msg in msgs"><p>{{ msg }}</p>></div>
  </div>
  <!-- <p>{{ msg }}</p> -->
</template>
<script>

import qs from "qs";

export default {
  data(){
    return{
      msgs:[]
    }
  },
  created(){
    // this.$axios.get("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=%E4%B8%8A%E6%B5%B7s&json=1&cb=lgd")
    // .then(res => {
    //   console.log(res.data.chengpinDetails[0].content
    let url = this.HOST + "su?wd=上海&json=1&cb=lgd";
    this.$axios.get(url,{
      params:{
        count:5,
        start:1,
      }
    })
    .then(res => {
      console.log(res);
      this.filterData(res);
    })
    .catch(error => {
      console.log(error);
    })
  },
  method:{
    filterData(res){
      var restData = [];
      var resultData = [];
      let num1 = res.data.indexOf('(');
      let num2 = res.data.indexOf(')');
      let resData = JSON.parse(res.data.substring(num1 + 1, num2));
      for (var i=0;i<resData.g.length;i++){
       resultData = resData.g[i].q;
      }
      this.msgs = resultData;
      console.log(msgs);
    }
  }
}
</script>
<style>
  div {
    width:100%;
    height:600px;
    background-repeat: no-repeat;
    text-align: center;
    background-image: url(../photos/cat3.jpg);
    background-size: 100% 100%;
  }
  h2,h4 {
    font-family: hakuyoxingshu7000;
    font-size: 40px;
  }
   h2 {
    letter-spacing:30px;
  }
  li {
    display:inline;
  }
</style>
