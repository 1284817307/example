<template>
	<view>
		<view class="uni-header-logo">
			
		</view>
		<view v-for="(item,index) in list" :key="item.id" class="uni-card" @click="goDetailPage(item.id)">
			{{item.name}}
		 </view>    
		<button @click="logout">退出登录</button>
		
		<tabBar :pagePath="'pages/common/userinfo/userinfo'"></tabBar>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				list:[
				{
					id:'userdetail',
					name:'员工信息',
				},
				{
					id:'help',
					name:'帮助',
				},
				{
					id:'about',
					name:'关于',
				},
				]
			}
		},
		methods: {
			logout() {
				let _this = this;
				_this.$store.commit('LOGOUT')
				uni.showToast({
					title: '退出中',
					icon: 'loading',
					duration: 1000,
					success() {
						setTimeout(function() {
							uni.redirectTo({
								url: '../../index/index'
							})
						}, 1000)
					}
				})
			},
		
				goDetailPage(e) {
					console.log("click")
					const url = '../' + e + '/' + e
					console.log(url)
					uni.navigateTo({
						url: url,
						fail(Error) {
							console.log(Error)
						}
					})
				},
				
		}

	}
</script>

<style>
</style>
