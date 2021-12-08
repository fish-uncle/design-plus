<template>
	<div class="example-showcase">
		<client-only>
			<component :is="demo" v-if="demo" v-bind="$attrs" />
		</client-only>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'vp-example',
	props: {
		file: {
			type: String,
			required: true,
		},
		demo: {
			type: Object,
			required: false,
		},
	},
})
</script>
<style lang="scss" scoped>
.example-showcase {
	padding: 1rem;
	margin: 0.5px;
	background-color: #ffffff;
	&.transparent-enabled {
		background-image: linear-gradient(45deg, rgb(249, 249, 250) 25%, transparent 25%),
			linear-gradient(135deg, rgb(249, 249, 250) 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, rgb(249, 249, 250) 75%),
			linear-gradient(135deg, transparent 75%, rgb(249, 249, 250) 75%);
		background-size: 20px 20px;
		background-position: 0 0, 10px 0, 10px -10px, 0 10px;
	}

	@at-root .dark .example-showcase {
		background-image: unset;
		background-color: #fafafa;
	}
}
</style>
