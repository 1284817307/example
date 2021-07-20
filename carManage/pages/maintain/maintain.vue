<template>
	<view>
		<view class='title'>
			<label class="title-top">保养提醒</label>
		</view>
		<uni-forms v-for="(v,index) in msg" :key="v.id">
			<view class='input-width'>
				<uni-forms-item label="车牌号">
					<uni-easyinput disabled :value="v.id"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="最近保养">
					<uni-easyinput disabled :value="v.time"></uni-easyinput>
				</uni-forms-item>
			</view>
		</uni-forms>
		<uni-forms>
			<uni-card>请尽快维护该车辆</uni-card>
			<uni-forms-item>
				<button type="primary" @click="back">我已知晓</button>
			</uni-forms-item>
		</uni-forms>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: [],
				//test:[{id:'浙A3423432',time:'2021/1/1'},{id:'浙A575758',time:'2021/2/2'}],
			}
		},
		created() {
			let _this = this;
			uni.request({
				url: '/protect',
				method: 'POST',
				success: (res) => {
					_this.msg = res.data.msg

				}
			})
		},
		methods: {
			back() {
				uni.navigateBack({

				})
			}
		}

	}
</script>

<style>
	@import url("../../common/uni.css");

	.input-width {
		width: 500rpx;
		display: flex;
		align-items: center;
		background: #fffaf3;
		width: 100%;
		height: 100%;
	}



	.title-top {
		font-size: 50rpx;
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-color: #000000;
		border-width: thin;
		border-style: solid;
	}
</style>
