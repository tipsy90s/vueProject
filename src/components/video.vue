<template>
    <div>
        <div id="nav">
            <span>来自360搜索综艺排行榜</span>
            <span class="pageRight">上一页</span>
            <span v-for="pages in page.id">{{ pages }}</span>
            <span class="pageLeft">下一页</span>
            <button @click="fetchVideos">获取最新视频信息</button>
        </div>
        <div>
            <image>{{ images }}</image>
            <p>{{ movieNames }}</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      page:{
        id:1,
      },
      images:"",
      movieNames:"",
    };
  },

  methods: {
    fetchVideos() {
      const url= "http://open.onebox.so.com/dataApi";

      const options = {
        callbackQuery: 'callback',

        tpl: 2,
        query: '综艺',
        url: '综艺排行',
        type: 'relation_variety_rank',
        src: 'onebox',
        num: 1,
        addInfo: 'types:全部|region:全部|year:全部|limit:10|page:1'
      };

      this.$jsonp(url, options)
        .then(response => {
          this.renderVideos(response)
        })
        .catch(error =>{
          console.error('fetchVideos with error:', error)
        });
      // images = response.image;
      // movieNames = response.display.hot[0].movieName;
    },

    renderVideos(response){
      console.log('fetchVideos with response:', response)

      // console.log(response.display.hot[0].movieName);
    }
  }
}
</script>

<style>
span {
    font-size: 20px;
}

.pageRight {
    position: relative;
    top: 0;
    left: 30%;
}

.pageLeft {
    position: relative;
    top: 0;
    left: 40%;
}
</style>
