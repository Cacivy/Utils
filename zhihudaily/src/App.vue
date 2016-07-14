<template>
    <div id="app">
    	<div class="head">
    		<h1>
    			<em></em>
    			<a v-link="{ path: '/list' }">知乎日报</a>
    		</h1>
    	</div>
        <div class="float">
            <div class="top" onclick="javascript:scroll(0,0)">
                <div class="arrow"></div>
                <div class="stick"></div>
            </div>
        </div>

      <router-view></router-view>
    </div>

 </template>

<script>
import './css/root.scss'

export default {
	ready() {
		this.$router.go({path: '/list'})
	}
}

</script>

<style lang='scss'>

</style>
