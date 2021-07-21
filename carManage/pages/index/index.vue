<template>
	
	<view class='content'>
		<view class='item'>
			<label class='title'>查勘车辆管理系统</label>
			<button class="submit" type='primary' @click="toLogin" :disabled='!checked'>还未登录，去登录授权</button>
			<checkbox class="check" value='agree' :checked='checked' @click="change">我同意</checkbox>
			<view class='text' @click="show">此用户条款</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false
			}
		},
		created() {
			let _this = this;
			if (_this.$store.state.token != '') {
				_this.checked = true;
				console.log(_this.$store.state.userInfo.position)
				uni.showToast({
					title: '自动登陆中',
					icon: 'loading',
					duration: 1000,
					success() {
						if(_this.$store.state.userInfo.position==='管理人'){
							setTimeout(function() {
							uni.switchTab({
								url: '../manage/index/index'
							})
						}, 1000)
						}
						if(_this.$store.state.userInfo.position==='负责人'){
							setTimeout(function() {
								uni.switchTab({
									url:'../director/index/index'
								})
							}, 1000)
						}
						
					}
				})
			}
		},
		methods: {
			toLogin() {
				let _this = this;
				if (_this.$store.state.token  === '') {
					uni.redirectTo({
						url: '../authentication/authentication'
					})
				} else {
					uni.redirectTo({
						url: '../manage/manage'
					})
				}
			},
			change() {
				this.checked = !this.checked;
			},
			show() {
				let _this = this;
				uni.showModal({
					title: '用户条款',
					content: '此微信小程序仅供公司内员工使用，若为查勘员某些功能需要使用用户位置信息',
					success(res) {
						if (res.confirm) {
							_this.checked = true
						} else if (res.cancel) {
							_this.checked = false
						}
					}
				})
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fffaf3;
		flex-direction: column;
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.item {
		position: absolute;
		top: 200rpx;
		background-color: white;
		height: 800rpx;
		width: 500rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		border-radius: 30rpx;

	}

	.title {
		color: #ffb84c;
		font-size: 50rpx;
		position: absolute;
		top: 150rpx;
	}

	.submit {
		position: absolute;
		top: 400rpx;
	}

	.check {
		position: absolute;
		top: 550rpx;
		left: 135rpx;
	}

	.text {
		color: #0A98D5;
		position: absolute;
		top: 555rpx;
		left: 280rpx;
	}
</style>
