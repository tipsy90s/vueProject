<template>
    <div>
      <!-- 需要渲染：covers title source -->
        <!-- <p class="reflash">您有未查看的新内容，点击查看</p> -->
          <div v-for="callbackNew in callbackNews" class="displayNews">
            <div>
              <img v-bind:src="callbackNew.data.covers" class="covers">
            </div>
            <div class="titles">
              <p> {{callbackNew.data.title}} </p>
              <p>{{callbackNew.data.source}}</p>
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
        this.callbackNews = res.data;
        console.log(res.data[0].data.source);
        console.log(res.data[0].data.title);
        console.log(res.data[0].data.covers);
      }
    },

}
</script>

<style>
.reflash {
  background:#FFD39B;
  font-size: 20px;
  width: 900px;
  /* text-align: center; */
}

.covers {
  width: 250px;
  height: 150px;
}

.titles {
  width: 600px;
  font-size: 30px;
}

.displayNews {
  width: 880px;
  float: left;
}

</style>


