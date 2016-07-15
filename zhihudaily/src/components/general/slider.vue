<template>
	<div class="sliders">
		<div class="slider" v-for="item in list">
			<img :src="item.image | zhihuimg">
			<p v-link="{ path: item.url}"> {{item.title}} </p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			list: []
		},
		data() {
			return {
				
			}
		},
		computed: {
	
		},
		ready() {

		}
	}
</script>
	
<style lang="scss">
.sliders {
	overflow: hidden;
	width: 100%;
	height: 640px;
	margin: 10px 0;

	.slider {
		position: relative;

		img {
			width: 100%;
			height: 640px;
		}
		
		p {
			width: 70%;
			word-wrap: break-word;
			position: absolute;
			text-align: center;
			bottom: 10px;
			left: 15%;
			color: #fff;
			cursor: pointer;
		}
	}
}

</style>