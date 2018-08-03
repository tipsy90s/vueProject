<template>
  <div id="mainPage" ref="mainPage">
    <h2>Hello,I'm your eyes!</h2>
    <h4>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
      My Browser 
    </h4>
    <input id= "inputIn" type="text" v-model="message" placeholder="do what you want !"  @oninput="render" />
    <button id="seachButton" type="submit" @click="searchKey" ><a ref="forSearch" id="forSearch" href="">搜索</a></button>
    <!-- <p>{{ message }} </p> -->
    <li v-for="msg in msgs">
      <p>{{ msg }}</p>
    </li>

    <div id="nav">
    <li id="firstnav" @mouseover="over" @mouseout="out">热点事件</li>
    <li id="secondnav" @mouseover="over1">时间</li>
    </div
    >
    <!-- <button id="seachButton1"  type="submit" @click="changeBackground" >切换</button> -->

    <div class="video">
      <ul >
        <h5>watch you want</h5>
        <li><a href="">优酷</a></li>
        <li><a href="">爱奇艺</a></li>
        <li><a href="">腾讯视频</a></li>
        <li><a href="">土豆视频</a></li>
      </ul>
    </div>
    
    <div class="music">
      <ul>
        <h5>listen you like</h5>
        <li><a href="">网易云</a></li>
        <li><a href="">酷狗</a></li>
        <li><a href="">QQ音乐</a></li>
        <li><a href="">百度音乐</a></li>
      </ul>
    </div>

    <div class="communication">
    <ul>
      <h5>share you life</h5>
      <li><a href="">QQ空间</a></li>
      <li><a href="">微博</a></li>
      <li><a href="">微信</a></li>
      <li><a href="">twitch</a></li>
    </ul>
    </div>
  </div>
</template>
<script>
const time = new Date().toLocaleTimeString();

import qs from "qs";

export default {
  data(){
    return{
      message:'',
      msgs:[],
    }
  },

  //生命周期
  created(){
    
  },
  methods:{

    filterData(res){
      // console.log(valuee);
      var restData = [];
      var resultData = [];
      let num1 = res.data.indexOf('(');
      let num2 = res.data.indexOf(')');
      let resData = JSON.parse(res.data.substring(num1 + 1, num2));
      for (var i=0;i<resData.s.length;i++){
        resultData[i] = resData.g[i].q;
    }
    this.msgs = resultData;
    console.log(this.msgs);
    },

    render(){    
     //input框里拿到的值替换到 url 上。
      let url = this.HOST + "//sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" +  this.message  + "&json=1&cb=lgd";
      const that = this;
      console.log('that.filterData outer of axios scope:', that.filterData)
      this.$axios.get(url,{
        params:{
          count:5,
          start:1,
        }
      })
      .then(res => {
      // console.log(res);
      // console.log('this in axios scope:', this)
      // console.log('this.filterData in axios scope:', this.filterData)
      // console.log('that.filterData in axios scope:', that.filterData)
      that.filterData(res)
      })
      .catch(error => {
        console.log(error);
      })
    },

    searchKey(){
      if(this.messgae != '' ){
        console.log(this.message);
        this.$refs.forSearch.href = "https://www.baidu.com/s?wd=" + this.message;
      }
    },
    // changeBackground(){
    //   this.$refs.mainPage.style="background-image: url(../photos/6.jpg);background-size: 100% 100%;";
    // }
    over(){
      alert("hello");
    },
    out(){
      alert("world");
    },
    over1(){
      alert(time);
    },
  }
}
</script>

<style>
  #mainPage {
    width:  100%;
    height: 640px;
    background-repeat: no-repeat;
    text-align: center;
    background-image: url(../photos/7.jpg);
    background-size: 100% 100%;
    font-family: hakuyoxingshu7000;
  }

  h2,h4 {
    font-size: 40px;
  }
  h5 {
    margin-top: 5px;
    margin-bottom: 30px;
  }

   /* h2 {
    letter-spacing: 30px;
  } */

  #inputIn {
    width: 700px;
    height: 30px;
    opacity: 0.7;
    font-size: 20px;
  }

  .video {
    position: relative;
    left: 5%;
    top:  0;
    font-size: 40px;
    text-align: left;
    width:300px;
    height:120px;
  }

  .music {
    position: relative;
    left: 38%;
     top:  -25%;
    font-size: 40px;
    text-align: left;
    width:25%;
  }

  .communication {
    position: relative;
    left: 70%;
    top:  -72%;
    font-size: 40px;
    text-align: left;
    width:25%;
  }

  ul li {
    list-style: none;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color:  black;
  }

  #seachButton {
    width: 70px;
    height: 35px;
    font-size: 20px;
    border-radius: 35%;
  }

  #firstnav,#secondnav  {
    width:  200px;
    height: 30px;
    font-size: 20px;
    margin-bottom: 20px;
  }

  #nav {
    position: relative;
    left: 5%;
    top: -25%;
    text-align: left;
  }

</style>
