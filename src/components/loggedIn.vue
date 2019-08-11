<template>
    <div class="container">        
            <ul class="list-group mt-5">
                <h1 class="card-header ">
                    管理员{{user.name}}，你好！
                    <button class="btn btn-danger float-right" @click="logOut">退出登录</button>
                </h1>
                <div>
                    <li class="list-group-item">用户名：{{user.name}}</li>
                    <li class="list-group-item">登录邮箱：{{user.email}}</li>                  
                </div>
            </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user: [],
            id: ''
        }
    },
    methods: {
        fetchUser(id){
            this.$http.get("http://localhost:3000/admin/"+id).then(function(Response){
                console.log(Response);
                
                this.user = Response.body    
                console.log(this);                                                     
            })          
        },
        logOut(){
            this.$store.commit('changeFlag',false);
            this.$router.push({path:'/'})
        }

    },
    created(){
        this.id =  this.$store.getters.getId;    
        this.fetchUser(this.id)
    },
    // updated(){
    //     this.fetchUser(this.id)
    // }

}
</script>

<style scoped>

</style>