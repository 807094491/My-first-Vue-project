<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import myHeader from './components/myHeader'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components : {
    myHeader
  }
}
</script>

<style>
</style>
