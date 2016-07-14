<template>
  <div class="detail">
     <img class="postimage" :src="detail.image | zhihuimg">
     {{{ detail.body  | zhihuimg | zhihulink }}}
  </div>
</template>

<script>
import api from '../api/index'
import '../css/zhihu.css'
export default {
  data() {
    return {
      detail: {}
    }
  },
  ready() {
    let id= this.$route.params.id;
    api.getNewsById(id).then(res => {
      this.detail= JSON.parse(res.data)
    })
  }
}
</script>

<style>

</style>