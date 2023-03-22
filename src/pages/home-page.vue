<template>
  <div class="container">
      <div class="Error">
        <Error :error="errorMessage" @retryFetch="retryFetch"/>
      </div>
      <div class="content" v-if="cardsData.length">
        <Card v-for="card in cardsData" :key="card.id" :title="card.title" :body="card.body"/>
       
      </div>
      <div class="pagination">
        <button @click="pagination('next')">next</button>
        <button  @click="pagination('prev')">prev</button>
      </div>
  </div>
</template>
<script>
import Card from '../components/card-temp.vue'
import Error from '../components/error-temp.vue'
export default {
  data() {
    return {
      cardsData:[],
      page:1,
      perPage:10,
      retryReq:2,
      errorMessage:null
    };
  },
  components:{
    Card,
    Error
  },
  created() {
  this.getPostsData()
  },
  methods:{
    pagination(val){
      if(val==='next'){
        this.page=this.page+1;
      }else if(val==='prev' && this.page>1){
        this.page=this.page-1
      }
      this.getPostsData()
    },
    getPostsData(){
      this.cardsData=[]
      let start=this.page*10-10
      let end=this.page*10
      let url=`posts?_start=${start}&amp;_limit=${end}`
      this.$axios.get(url)
    .then(res=>{
      this.cardsData=res.data
    }).catch(err=>{
      if(this.retryReq>1){
        this.errorMessage=`${err}`
        this.getPostsData()
        this.retryReq=this.retryReq-1
      }
    })
    },
    retryFetch(){
      this.page=1
      this.getPostsData()
    }
  }
};
</script>
<style scoped>
.container{

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  
}
.container .content{
  width: 1000px;
  height: 800px;
  background-color: #eee;
  overflow-y: auto;
  padding: 20px ;
  box-sizing: border-box;
  
}
.pagination{
  display: flex;
  align-items: center;
  justify-content: center;

}
.pagination button{
  margin: 5px;
  cursor: pointer;
}
</style>