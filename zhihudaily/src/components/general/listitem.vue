<template>
	<div class="new" v-link="{ path: '/new/'+new.id }">
		<img :src="new.images[0] | zhihuimg" alt="">
		<em v-if="new.multipic">多图</em>
		<p>{{ new.title }}</p>
	</div>
</template>

<script>
	export default {
		props: {
			new: {
				type: Object,
				required: true
			}
		}
	}
</script>
