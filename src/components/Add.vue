<template> 
    <div class="container">
        <div class="card text-dark bg-light mb-3">
            <div class="card-header">
                <h2>添加用户信息</h2>
            </div>
            <div class="card-body">
               <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">姓名:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" v-model="name">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">电话:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="phone" v-model="phone">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">邮箱:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">毕业院校:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Graduate School"v-model="graduateSchool">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">个人简介:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" v-model="profile"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" @click="addMsg">添加</button>
                    <router-link tag="button" class="btn btn-outline-secondary" :to="'/admin'">返回</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            phone: '',
            email: '',
            graduateSchool: '',
            profile: ''
        }
    },
    methods:{
        addMsg(e){
            e.preventDefault();//阻止默认事件
            if(!this.name || !this.phone || !this.email || !this.graduateSchool){
                console.log("输入信息不全");               
            }else{
                let newMsg = {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    graduateSchool: this.graduateSchool,  
                    profile: this.profile               
                }
                this.$http.post("http://localhost:3000/users",newMsg).then(function(Response){
                    console.log(Response);                   
                })
                this.$router.push({path:"/admin",query:{message:"添加信息成功"}})
            }
        }
    }
}
</script>


<style scoped>
input:focus,textarea:focus{
    box-shadow: none;
}
</style>