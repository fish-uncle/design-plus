<template>
	<client-only>
		<!-- danger here DO NOT USE INLINE SCRIPT TAG -->
		<p class="example-description" v-html="decodedDescription" />
		<div class="example">
			<div class="example-button-box">
				<a class="example-button" :href="demoSourceUrl" rel="noreferrer noopener" target="_blank">
					<github-icon />
				</a>
				<copy-icon class="example-button" @click="copyCode" />
				<source-code-icon class="example-button" @click="setSourceVisible" />
			</div>
			<div class="example-divider" />
			<vp-example :file="path" :demo="formatPathDemos[path]" />
			<vp-source-code v-show="sourceVisible" :source="source" />
		</div>
	</client-only>
</template>
<script lang="ts">
import { computed, toRef, defineComponent } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useToggle } from '../composables/toggle'
import { useSourceCode } from '../composables/source-code'
import GithubIcon from '../components/github.vue'
import SourceCodeIcon from '../components/source-code.vue'
import CopyIcon from '../components/copy-icon.vue'
import VpExample from "./vp-example.vue";
import VpSourceCode from "./vp-source-code.vue";

export default defineComponent({
	name: 'vp-demo',
	components: {
		VpSourceCode,
		VpExample,
		GithubIcon,
		SourceCodeIcon,
		CopyIcon,
	},
	props: {
		source: {
			type: String,
			required: true,
		},
		path: {
			type: String,
			required: true,
		},
		css: {
			type: String,
			required: true,
		},
		cssPreProcessor: {
			type: String,
			required: true,
		},
		js: {
			type: String,
			required: true,
		},
		jsPreProcessor: {
			type: String,
			required: true,
		},
		html: {
			type: String,
			required: true,
		},
		demos: {
			type: Object,
			required: true,
		},
		rawSource: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
	},
	setup(props) {
		const { copy, isSupported } = useClipboard({
			source: decodeURIComponent(props.rawSource),
			read: false,
		})
		const copyCode = async () => {
			if (!isSupported) {
				console.log('copy-error')
			}
			try {
				await copy()
				console.log('copy-success')
			} catch (e: Error) {
				console.log(e.message)
			}
		}
		const formatPathDemos = computed(() => {
			const demos = {}
			Object.keys(props.demos).forEach(key => {
				demos[key.replace('../examples/', '').replace('.vue', '')] = props.demos[key].default
			})
			return demos
		})
		const [sourceVisible, setSourceVisible] = useToggle()
		const demoSourceUrl = useSourceCode(toRef(props, 'path'))
		const decodedDescription = computed(() => decodeURIComponent(props.description))
		return {
			copyCode,
			formatPathDemos,
			decodedDescription,
			demoSourceUrl,
			sourceVisible,
			setSourceVisible,
		}
	},
})
</script>
<style lang="scss" scoped>
.example-description {
	font-size: 14px;
}
.example {
	border: 1px solid #dcdfe6;
	border-radius: 4px;
	overflow: hidden;

	.example-button-box {
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 3rem;
		line-height: 3rem;
		.example-button {
			margin: 0 0.5rem;
			cursor: pointer;
			color: #303133;
			height: 1em;
			width: 1em;
			line-height: 1em;
			text-align: center;
			fill: currentColor;
			font-size: 20px;
		}
	}
	.example-divider {
		height: 1px;
		width: 100%;
		background-color: #dcdfe6;
	}
}
</style>
