<template>
	<view class="container">
		<RandomCompass></RandomCompass>
	</view>
</template>

<script>
	import RandomCompass from 'components/random-compass/random-compass'
	export default {
		data() {
			return {

			}
		},
		components:{
			RandomCompass:RandomCompass
		},
		methods: {

		},
		mounted(){
			console.log('本项目已包含uni ui组件，无需import和注册，可直接使用。在代' +
					'码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处' +
					'按F1，即可查看组件文档。详见：https://uniapp.dcloud.io/component/README?id=uniui')
		}
	}
</script>

<style>
	.container {
	}
</style>
