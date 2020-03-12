<template>
  <div id="app">
    登录页
  </div>
</template>
<script>
import * as Api from './api/index'
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.login();
  },
  methods: {
    async login() {
      const data = await Api.getCouponList();
      console.log(data);
    }
  }
}
</script>

<style lang="less">

</style>
