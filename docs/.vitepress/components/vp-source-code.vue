<template>
	<div class="example-source language-vue" v-html="decoded"></div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
export default defineComponent({
	name: 'vp-source-code',
	props: {
		source: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const decoded = computed(() => {
			return decodeURIComponent(props.source)
		})
		return {
			decoded,
		}
	},
})
</script>
<style scoped lang="scss">
.language-vue {
	margin: 0;
	border-radius: 0;
}
</style>
