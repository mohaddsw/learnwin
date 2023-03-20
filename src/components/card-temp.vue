<template>
    <div class="card">
        <h3>{{title}}</h3>
        <p>{{body}}</p>
    </div>
</template>
<script>
export default{
    data(){
        return{}
    },
    props:{
        title:{
            type:String,
            default:''
        },
        body:{
            type:String,
            default:''
        }
    }
}
</script>
<style scoped>
.card{
    box-sizing: border-box;
   width:100%;
   height: 100px;
   text-align: right;
   margin: 5px 0;
   background-color: #a19f9f;
   border-radius: 5px;
   padding: 20px;
}
.card p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
}
</style>