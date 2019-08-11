<template>
    <div class="row mb-5 box">
        <div class="col-4">
            <div class="list-group mb-5">
                <router-link :to="{name:'introduceLink'}" tag="li" class="nav-link">
                     <a class="list-group-item list-group-item-action" >系统介绍</a>
                </router-link>
                <br>
                <router-link :to="{name:'operationLink'}" tag="li" class="nav-link">
                     <a class="list-group-item list-group-item-action" >操作流程</a>
                </router-link>
                <br>
                <router-link :to="{name:'contactLink'}" tag="li" class="nav-link">
                     <a class="list-group-item list-group-item-action" >联系我们</a>
                </router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// import Contact from './about/Contact'

export default {
    data(){
        return{}
    },
    // components : {
    //     Contact
    // }
    
}
</script>


<style scoped>
.box{
    margin: 70px auto;
}
</style>
