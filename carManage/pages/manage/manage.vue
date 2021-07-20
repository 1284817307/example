<template>
	<view>
		<view>
			<uni-list>
				<uni-list-item title="管理员首页" note="此页面为管理者的首页"></uni-list-item>
				<uni-list-item title="管理员姓名" :note="note"></uni-list-item>
			</uni-list>
			<button @click="logout">退出登录</button>
		</view>

	</view>
</template>

<script>
	export default {
		onShow() {
			wx.hideHomeButton(); //隐藏左上角返回首页的图标
		},
		created() {
			let _this = this;
			uni.showToast({
				title: '获取消息中',
				icon: 'loading',
				duration: 1000,
				success() {
					setTimeout(function() {
						console.log('timestart')
						uni.request({
							url: '/protect',
							method: 'POST',
							success: (res) => {
								console.log('navigate')
								if (res.data.status === '1') {
									uni.navigateTo({
										url:"../maintain/maintain"
									})
								}
							}
						})
					}, 1000)
				}
			})
		},
		data(){
			let _this=this;
			return{
				note:_this.$store.state.userInfo.name,
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
								url: '../index/index'
							})
						}, 1000)
					}
				})
			},
		}

	}
</script>

<style>
</style>
