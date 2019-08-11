<template>
    <div class="container">        
            <div class="card text-dark bg-light mb-3">
            <div class="card-header">
                <h2>编辑用户信息</h2>
            </div>
            <div class="card-body">
               <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">姓名:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" v-model="consumer.name">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">电话:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="phone" v-model="consumer.phone">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">邮箱:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email" v-model="consumer.email">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">毕业院校:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Graduate School"v-model="consumer.graduateSchool">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">个人简介:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" v-model="consumer.profile"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" @click="editMsg">提交</button>
                     <router-link tag="button" class="btn btn-outline-secondary" :to="'/information/'+id">返回</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            consumer:[],
            id: this.$route.params.id
        }
    },
    methods: {
        fetchConsumer(id){
            this.$http.get("http://localhost:3000/users/"+id).then(function(Reponse){
                this.consumer = Reponse.body;             
            })
        },
        editMsg(e){
            e.preventDefault();
            if(!this.consumer.name || !this.consumer.phone || !this.consumer.email || !this.consumer.graduateSchool){
                console.log("输入信息不足，无法编辑");          
            }else{
                console.log(this.id);
                
                let newMsg = {
                    name : this.consumer.name,
                    phone : this.consumer.phone,
                    email : this.consumer.email,
                    graduateSchool : this.consumer.graduateSchool,
                    profile : this.consumer.profile
                }   
                 this.$http.patch("http://localhost:3000/users/"+this.id,newMsg).then(function(response){
                     console.log(response);                                   
                })
                this.$router.push({path:'/admin',query:{message:'修改信息成功'}})
            }
        }
    },
    created(){
        this.fetchConsumer(this.$route.params.id)
        // console.log(this.$route.params.id);  
    }
}
</script>

<style scoped>
.indent{
    text-indent: 2em;
}
input:focus,textarea:focus{
    box-shadow: none;
}
</style>