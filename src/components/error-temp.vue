<template>
    <div>
        <p v-if="error">
            Error Message : 
             {{ error }}
        </p>
        <button @click="retryFetch">
            Retry 
        </button>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    props:{
        error:{
            type:String,
            default:null
        }
    },
    methods:{
        retryFetch(){
            this.$emit('retryFetch')
        }
    }
}
</script>