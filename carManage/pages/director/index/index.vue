<template>
	<view>

		<view class="top">
			<view class="uni-flex uni-row">
				<image src="../../../static/carbody.png" style="width: 220rpx;height: 180rpx;"></image>
				<text
					style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;margin-top: 120rpx;color: #DCDFE6;">好车险
					中华行</text>
			</view>
			<view>
				<uni-notice-bar single="true" scrollable="true" v-if="text" :text="text"></uni-notice-bar>
			</view>
		</view>
		<view class="card">主要功能</view>
		<view class="wrap" style="justify-content:flex-start;height: 250rpx;">
			<view class="meuns" v-for="(item,index) in meunsList" :key="index" @click="goDetailPage(item.id)">
				<image :src="item.icon"></image>
				{{item.msg}}
			</view>
		</view>
		<view class="wrap" style="justify-content:flex-start;height: 250rpx;">

			<view class="meuns" v-for="(item,index2) in meunsList2" :key="index2" @click="goDetailPage(item.id)">
				<uni-badge size="small" :text="1" absolute='rightTop' type="error">
					<button type="default">
						<image :src="item.icon"></image>{{item.msg}}
					</button>
				</uni-badge>
			</view>
		</view>
		<view class="card">车辆信息</view>

		<view class="wrap" style="justify-content:flex-start;height: 250rpx;">
			<view class="meuns" v-for="(item,index2) in meunsList2" :key="index2" @click="goDetailPage(item.id)">
				<image :src="item.icon"></image>
				<text>{{item.msg}}</text>
			</view>

		</view>

		<tabBar :pagePath="'pages/director/index/index'"></tabBar>
	</view>
</template>

<script>
	export default {
		created() {
			let _this = this;
			uni.showToast({
				title: '获取消息中',
				icon: 'loading',
				duration: 1500,
				//这里填写接口，获取消息，然后以红点显示出来
			})
		},
		data() {
			return {
				text: '新增信息',
				meunsList: [{
						icon: "/static/exam.png",
						msg: "审批",
						id: "examine"
					},

					{
						icon: "/static/data.png",
						msg: "报表图",
						id: "carReport"
					},

					{
						icon: "/static/message.png",
						msg: "消息",
						id: "message"
					}
				],
				meunsList2: [{
						icon: "/static/car4.png",
						msg: "违规记录",
						id: "violationsRecord"
					},
					{
						icon: "/static/car4.png",
						msg: "维修记录",
						id: "fixRecord"
					},
					{
						icon: "/static/car4.png",
						msg: "保养记录",
						id: "protectRecord"
					},
				],
			}
		},
		methods: {
			goDetailPage(e) {
				const url = '/pages/director/' + e + '/' + e
				uni.navigateTo({
					url: url
				})
			},
			getMore() {

			}
		}
	}
</script>

<style>
	@import url("../../../common/uni.css");

	.wrap {
		height: 350rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		border-radius: 30rpx;
	}

	.meun-wrap {
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

	.meuns {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 26rpx;
		width: 180rpx;
	}

	image {
		width: 80rpx;
		height: 80rpx;
		margin-bottom: 15rpx;
	}

	.card {
		background: #fff;
		border-radius: 8rpx;
		margin: 20rpx 0;
		position: relative;
		box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, .3);
		height: 60rpx;
	}

	.top {
		background-color: #f2a8b1;
		border-radius: 30rpx;
		height: 270rpx;
	}

	.line {
		background-color: #ffffff;
		border-radius: 50rpx;
	}
</style>
