<template>
    <div>
      <!-- 需要渲染：covers title source -->
        <p class="reflash">您有未查看的新内容，点击查看</p>
        <div class="displayInline">
          <div>
            <p>1</p>
          </div>
          <div>
            <p>1</p>
            <p>2</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return {
        // 对象
      }
    },
    
    methods:{
      renderNews(){
        let url = "https://pc.api.btime.com/btimeweb/getInfoFlow?callback=jQuery111308214331648120714_1528901698870&channel=news&request_pos=channel&citycode=local_330500_330000&sub_channel=&refresh=6&req_count=6&refresh_type=2&pid=3&from=&page_refresh_id=bdd83c10-6f19-11e8-8796-6c92bf0a9cdb&_=1528901698882";
        this.$axios.get(url)
        .then(res => {
          this.handleNews(res)
        })
        .catch(error => {
          console.log(error);
        })
      },

      handleNews(res){
        console.log(res);
      }
    }

}
</script>

<style>
.reflash {
  background:#FFD39B;
  font-size: 20px;
  width: 900px;
  text-align: center;
}

</style>


