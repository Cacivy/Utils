<template>
  <div class="news" v-for="item in news">
    <h3>{{item.date | moment}}</h3>
    <slider v-if="!$index" :list="imglist"></slider>
    <listitem v-for="new in item.stories" :new="new"></listitem>
  </div>
  <div class="more" @click="getNews" v-if="news.length">
    {{ loading? "正在加载": "加载更多" }}
  </div>
 </template>

<script>
import api from '../api/index'
import moment from 'moment'
import listitem from './general/listitem.vue'
import slider from './general/slider'

export default {
  components: { listitem,slider },
  data() {
    return {
      news: [],
      loading: false
    }
  },
  computed: {
    imglist() {
      let arr= []
      if(this.news.length){
         let top_stories= this.news[0].top_stories
         top_stories.forEach(item => {
          arr.push({
            image: item.image,
            title: item.title,
            url: '/new/'+item.id
          })
         })
      }
      return arr
    }
  },
  methods: {
    getNews() {
      this.loading= true
      let lastdate= this.news[this.news.length-1].date
      let date= moment(lastdate,'YYYYMMDD').add(-1, 'days').format('YYYYMMDD')
      api.getNewsByDate(date).then(res => {
        let news= JSON.parse(res.data)
        this.news.push(news)
        this.loading= false
      })
    }
  },
  ready() {
    const cacheName= 'news'
    let cacheNews= localStorage.getItem(cacheName)
    if(cacheNews){
      let news= JSON.parse(cacheNews)
      if(news.date === moment().format('YYYYMMDD')){
        this.news.push(news)
        return
      }
    }
    api.getNews().then(res => {
      if(res.ok){
        let news= JSON.parse(res.data)
        this.news.push(news)
        localStorage.setItem(cacheName,res.data)
      }
    })
  }
}
</script>

<style lang='scss'>

</style>
