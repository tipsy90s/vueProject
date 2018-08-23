<template>
    <div class="news-range">
      <!-- 需要渲染：covers title source -->
        <!-- <p class="reflash">您有未查看的新内容，点击查看</p> -->
          <div v-for="callbackNew in callbackNews" class="displayNews">
            <div v-if = "callbackNew.data.covers">
            <div class="covers">
              <img v-bind:src="callbackNew.data.covers" class="covers">
            </div>
            <div class="titles">
              <a v-bind:href="callbackNew.open_url"><p> {{callbackNew.data.title}} </p></a>
              <p>{{callbackNew.data.source}}  {{ callbackNew.data.pdata_str }}</p>
            </div>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    data(){
      return {
        callbackNews:[],
      }
    },

    mounted(){
      this.renderNews()
    },

    methods:{

      renderNews(){
        const url = "https://pc.api.btime.com/btimeweb/getInfoFlow";
        const options = {
          callbackQuery: 'callback',
          channel: 'news',
          request_pos: 'channel',
          citycode: 'local_330500_330000',
          sub_channel: '',
          refresh: 6,
          req_count: 6,
          refresh_type: 2,
          pid: 3,
          from: '',
          page_refresh_id: 'bdd83c10-6f19-11e8-8796-6c92bf0a9cdb',
          _: 1528901698882,
        }

        this.$jsonp(url,options)
        .then(res => {
          this.handleNews(res)
        })
        .catch(error => {
          console.log(error);
        })
      },

      handleNews(res){
        console.log(res);
        console.log(res.data);
        console.log(res.data[3].data.covers);
        // for(var i = 0;i < res.data.length;i++){
        //   if(res.data[i].data.covers){
            this.callbackNews = res.data;
        //   }
        // }
      }

    },
}
</script>

<style scoped>
.news-range {
  width: 900px;
  height: 768px;
  /* text-align: center; */
}

.coverImages {
  width: 250px;
  height: 150px;
}

.covers {
  width: 248px;
  height: 148px;
  float: left;
  /* margin-bottom: 7px; */
}

.titles {
  width: 600px;
  font-size: 30px;
  float: left;
  margin-left: 20px;
}

.displayNews {
  width: 880px;
}

</style>


