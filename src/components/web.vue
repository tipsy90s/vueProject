<template>
    <div>
      <div class="float-left">
          <h5>社交</h5>
          <ul>
            <li><a href="">QQ空间</a></li>
            <li><a href="">新浪微博</a></li>
            <li><a href="">人人网</a></li>
            <li><a href="">YouTube</a></li>
          </ul>
      </div>

      <div class="float-left">
          <h5>邮箱</h5>
          <ul>
            <li><a href="">QQ邮箱</a></li>
            <li><a href="">163邮箱</a></li>
            <li><a href="">gmail</a></li>
            <li><a href="">新浪邮箱</a></li>
          </ul>
      </div>

      <div class="float-left">
          <h5>编程</h5>
          <ul>
            <li><a href="">w3school</a></li>
            <li><a href="">mdn</a></li>
            <li><a href="">vue.js</a></li>
            <li><a href="">w3cplus</a></li>
          </ul>
      </div>

      <div class="float-left">
          <h5>博客</h5>
          <ul>
            <li><a href="">csdn</a></li>
            <li><a href="">牛客</a></li>
            <li><a href="">蓝色理想</a></li>
            <li><a href="">coolshell</a></li>
          </ul>
      </div>

      <div class="float-left">
          <h5>购物</h5>
          <ul>
            <li><a href="">京东</a></li>
            <li><a href="">淘宝</a></li>
            <li><a href="">亚马逊</a></li>
            <li><a href="">澎湃网</a></li>
          </ul>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      mesg: "nihao",

      title: {
        id: 1,
      },
    };
  },

  methods: {

  },
};

</script>

<style scoped>
  li {
    font-size: 20px;
    margin-top:20px;
    margin-bottom: 20px;
  }

  .float-left {
    float:left;
    margin-top: 30px;
    margin-right: 50px;
    margin-left:20px;
  }
</style>
