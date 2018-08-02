<template>
  <div>
    <h2>你好世界</h2>
    <h4>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
      My Browser 
    </h4>
    <input id="inputValue" type="text" v-model="message" placeholder="do what you want!" >
    <p>你是：{{ message }}</p>
    <button type="submit" @click="searchKey">搜索</button>
    <li v-for="msg in msgs">
      <p>{{ msg }}</p>
    </li>
  </div>
  <!-- <p>{{ msg }}</p> -->
</template>
<script>
// const value =document.getElementById("inputValue").value;
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
    
  },
  methods:{
      filterData(res){
      var restData = [];
      var resultData = [];
      let num1 = res.data.indexOf('(');
      let num2 = res.data.indexOf(')');
      let resData = JSON.parse(res.data.substring(num1 + 1, num2));
      for (var i=0;i<resData.g.length;i++){
        resultData[i] = resData.g[i].q;
      }
      this.msgs = resultData;
      console.log(this.msgs);
    },
    searchKey(){
      let url = this.HOST + "//sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + "shang" + "&json=1&cb=lgd";
      const that = this;
      console.log('that.filterData outer of axios scope:', that.filterData)
      this.$axios.get(url,{
        params:{
          count:5,
          start:1,
        }
      })
      .then(res => {
        console.log(res);
        console.log('this in axios scope:', this)
        console.log('this.filterData in axios scope:', this.filterData)
        console.log('that.filterData in axios scope:', that.filterData)
        that.filterData(res)
      })
      .catch(error => {
        console.log(error);
      })
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
