<template>
    <div class="displayVideos">
        <div id="nav">
            <span>来自360搜索综艺排行榜</span>
            <span >上一页</span>
            <span v-for="page in pages" class="page-number" @click = "changePages">{{ page }}</span>
            <span @click = "nextPage">下一页</span>
        </div>

        <div class="videosDisplay" v-for = "hotMovie in hotMovies" res="backgroundColor" @mouseover = "mouseOver" style= "">
          <a v-bind:href="hotMovie.m_url">
            <div class="images">
              <img v-bind:src="hotMovie.imgurl" class="imgs">
            </div>
            <div class="titles" scoped>
              <p>{{ hotMovie.moviename }}</p>
            </div>
          </a>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      i :1,
      pages:[],
      hotMovies:[],
    };
  },

  mounted(){
    this.fetchVideos()
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
      console.log('fetchVideos with response:', response.display.hot);
      this.hotMovies = response.display.hot;
      for(this.i;this.i < 7;this.i++){
        this.pages = this.i;
      }
    },

    nextPage(){
      this.i = this.i+6;
      return this.i;
      console.log(this.i);
    },

    changePages(){
      console.log(page);
      // return fetchVideos();

    },

    mouseOver(){
      this.$refs.backgroundColor.style = "background:yellow;border-color:yellow;";
    }

  }
}
</script>

<style scoped>
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

.images{
  width: 150px;
  height: 200px;
  margin: 0 auto;
  z-index:2;
  /* background:white; */
}

 .titles p{
  margin-top: 10px;
  margin-right: 1px;
  margin-bottom: 0;
  margin-left: 1px;
  font-size: 16px;
  text-align: center;
}

.videosDisplay{
  width:152px;
  height:238px;
  float: left;
  margin:7px;
  border: 3px solid aquamarine;
}

.imgs{
  width: 100%;
  height: 100%;
  margin-bottom: 0;
}

.displayVideos{
  width: 880px;
  height:100%;
}

#nav {
  position: relative;
  left: 0;
}

</style>
