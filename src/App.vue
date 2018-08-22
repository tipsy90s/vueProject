<template>
  <div id="mainPage" ref="mainPage">
    <h2>Hello,I'm your eyes!</h2>
    <h4>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      My Browser
    </h4>
    <input id= "inputIn" type="text" v-model="message" placeholder="do what you want !" ref="changeValues"  @input="renderInput" />
    <button id="seachButton" type="submit" @click="searchKey" ><a ref="forSearch" id="forSearch" href="javascript:void(0)">搜索</a></button>
   <div id="list">
     <ul id="valueList" ref="getValues">
        <li v-for="msg in msgs">
          <a href="javascript:void(0)"  @click="getValue">{{ msg }}</a>
        </li>
     </ul>
   </div>

    <div id="nav">
      <router-link to="/">名站大全</router-link>
       &nbsp &nbsp &nbsp &nbsp
      <router-link to="/videos">影视大全</router-link>
       &nbsp &nbsp &nbsp &nbsp
      <router-link to="/music">众听音乐</router-link>
       &nbsp &nbsp &nbsp &nbsp
       <router-link to="/news">新闻头条</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

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
    this.msgs = res.s;
    },

    renderInput(){
     //input框里拿到的值替换到 url 上。
      const url = "http://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";

      const options = {
        callbackQuery: 'cb',
        // callbackName: 'callback', 加上报错。
        wd: this.message,
        json: '1',
      }
      // let url = this.HOST + "//sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" +  this.message  + "&json=1&cb=lgd";
      const that = this;
      // console.log('that.filterData outer of axios scope:', that.filterData)
     that.$jsonp(url,options
      )
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
        // console.log(this.message);
        // 将输入框的值替换到url
        this.$refs.forSearch.href = "https://www.baidu.com/s?wd=" + this.$refs.changeValues.value;
      }
    },

    getValue(){
      let inputValue = this.$refs.changeValues;
      this.$refs.getValues.onclick = function(event){
        var targetNode = event.target;
        if(targetNode.nodeName == 'A'){
          inputValue.value = targetNode.innerText;
        }
      }
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
    z-index:0;
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

  ul li {
    list-style: none;
    margin-bottom: 10px;
    padding: 0px;
  }

  #valueList {
    padding-left: 10px;
    margin-top: 0;
  }

  a {
    text-decoration: none;
    color:  black;
  }

  #seachButton {
    width: 70px;
    height: 35px;
    font-size: 20px;
    background: #3385ff;
  }

  #forSearch {
    font-family: hakuyoxingshu7000;
    color: white;
  }

  #firstnav,#secondnav  {
    width:  200px;
    height: 30px;
    font-size: 20px;
    margin-bottom: 20px;
  }

  #nav {
    position: relative;
    left: 17%;
    top: 5%;
    text-align: left;
    font-size: 30px;
    margin-bottom: 10px;
  }

  #list {
    position: relative;
    top: 0;
    left: 20.6%;
    width: 700px;
    background: white;
    z-index: 5;
  }

  #list li{
    text-align: left;
    list-style: none;
    font-family: hakuyoxingshu7000;
    font-size: 20px;
    margin-bottom: 5px;
  }

</style>
