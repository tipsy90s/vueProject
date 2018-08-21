<template>
    <div>
        <div id="nav">
            <span>来自360搜索综艺排行榜</span>
            <span class="pageRight">上一页</span>
            <span v-for="pages in page.id">{{ pages }}</span>
            <span class="pageLeft">下一页</span>
        </div>
        <div>
            <image>{{ images }}</image>
            <p>{{ movieNames }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
          page:{
              id:1,
              id:2,
              id:3,
              id:4,
          },
          images:"",
          movieNames:"",
        }
    },

  methods: {
    render(){
        let url="http://open.onebox.so.com/dataApi?&tpl=2&callback=lgd.cb.get360RankedVideos&_1528902170281&query=%E7%BB%BC%E8%89%BA&url=%E7%BB%BC%E8%89%BA%E6%8E%92%E8%A1%8C&type=relation_variety_rank&src=onebox&num=1&addInfo=types:%E5%85%A8%E9%83%A8|region:%E5%85%A8%E9%83%A8|year:%E5%85%A8%E9%83%A8|limit:10|page:1";
        this.$axios.get(url)
        .then(res => {
            this.get360RankedVideos(res)
            })
        .catch(error)(error =>{
            console.log(error)
        })
        // images = res.image;
        // movieNames = res.display.hot[0].movieName;
    },
    
    get360RankedVideos(res){
        console.log(res);
        console.log(res.display.hot[0].movieName);
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
