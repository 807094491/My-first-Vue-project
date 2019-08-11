<template>
    <div class="container">        
            <ul class="list-group">
                <h1 class="card-header ">{{consumer.name}}
                    <div class="float-right">
                        <router-link tag="button" class="btn btn-outline-secondary" :to="'/admin'">返回</router-link>
                        <router-link tag="button" class="btn btn-primary pull-right" :to="'/edit/'+consumer.id">编辑</router-link>
                        <button class="btn btn-danger" @click="deleteConsumer">删除</button>
                    </div>
                </h1>
                <div>
                    <li class="list-group-item">姓名：{{consumer.name}}</li>
                    <li class="list-group-item">电话：{{consumer.phone}}</li>
                    <li class="list-group-item">邮箱：{{consumer.email}}</li>
                    <li class="list-group-item">毕业院校：{{consumer.graduateSchool}}</li>
                    <li class="list-group-item">
                        个人简介：<br>
                        <div class="indent mt-2">
                            {{consumer.profile}}
                        </div>
                    </li>
                </div>
            </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            consumer: [],
            id: this.$route.params.id
        }
    },
    methods: {
        fetchConsumer(id){
            this.$http.get("http://localhost:3000/users/"+id).then(function(Response){
                this.consumer = Response.body       
                // console.log(this.consumer.id);
                        
            })          
        },
        deleteConsumer(e){
            e.preventDefault();
            this.$http.delete("http://localhost:3000/users/"+this.$route.params.id).then(function(Response){
                this.$router.push({path:'/admin',query:{message:"删除信息成功"}})
                
            })
        }
    },
    created(){
        this.fetchConsumer(this.$route.params.id)
    }
}
</script>

<style scoped>
.indent{
    text-indent: 2em;
}

</style>