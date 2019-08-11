<template>
    <div class="container">
        <div class="card text-dark bg-light">
            <h3 class="mt-3 mb-3">&nbsp用户信息</h3>
        </div>
        <div v-show="message" class="alert alert-warning alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="close"><span aria-hidden="true">&times;</span></button>
            {{message}}
        </div>
       <div class="row mt-3 mb-3">
           <div class=" col-4 mr-auto form-inline">
               <input class="form-control mr-sm-2"  placeholder="按关键字搜索"  v-model="searchInf">             
            </div>
            <div>
                <router-link :to="{name:'addLink'}" class="btn btn-outline-primary mr-3 " >添加信息</router-link>
            </div>
       </div>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th>毕业院校</th>
                    <th>详情</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(consumer,i) in searchConsumers(consumers,searchInf)" :key="consumer.name">
                    <td>{{consumer.name}}</td>
                    <td>{{consumer.phone}}</td>
                    <td>{{consumer.email}}</td>
                    <td>{{consumer.graduateSchool}}</td>
                    <td><router-link tag="button" class="btn btn-outline-success" :to="'/information/'+consumer.id">详情</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            consumers: [],
            searchInf:'',
            message:'',
        }
    },
    methods:{
        fetchConsumers(){
            this.$http.get("http://localhost:3000/users").then(function(Response){
                // console.log(Response);  
                this.consumers = Response.body;           
            })
        },
        searchConsumers(consumers,searchInf){
            var newConsumers=[];           
            if(searchInf==''){
                return consumers;
            }
            else{
                    consumers.some(function(consumer,i){
                    if(consumers[i].name.indexOf(searchInf)!=-1){                        
                        newConsumers.push(consumers[i]);
                        // console.log(consumers[i]);                       
                    }
                },this)
                return  newConsumers; 
            }
        },
        close(){
            this.message = '';
        }
    },
    created(){
        if(this.$route.query.message){
            this.message = this.$route.query.message
        }
        this.fetchConsumers();
        
    },
    updated(){
        this.fetchConsumers();
    }
}
</script>
<style scoped>
input:focus{
    box-shadow: none;
}
</style>
