<template>
	<view>
	<view class="uni-card">
		审批管理
	</view>
	<view class="wrap">
			<view class="meun-wrap" >
				<view class="meuns" v-for="(item,index) in meunsList" :key="index" @click="goDetailPage(item.id)">
					<image :src="item.icon" mode=""></image>
					<text>{{item.msg}}</text>
				</view>
			</view>
	</view>
	</view>
</template>

<script>
	export default {
			data() {
				return {
					meunsList:[
						{
							icon:"/static/done.png",
							msg:"已处理",
							id:"examDone"
						},
						{
							icon:"/static/todo.png",
							msg:"待处理",
							id:"examToDo"
						},
					]
					
				}
			},
			methods: {
				goDetailPage(e){
					const url = e + '/' + e
					uni.navigateTo({
						url: url,
						fail(error){
							console.log(error)
						}
					})  
				}
			}
		}
</script>

<style>
	.wrap{
			height: 100vh;
			display: flex;
			justify-content: center;
		}
		.meun-wrap{
			width: 500rpx;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 40rpx;
			box-shadow: 0px 2px 16px 0px rgba(17, 33, 50, 0.08);
			border-radius: 20rpx;
			margin-top: 100rpx;
		}
		.meuns{
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 26rpx;
		}
		image{
			width: 80rpx;
			height: 80rpx;
			margin-bottom: 15rpx;
		}
</style>

