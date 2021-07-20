<template>
	<view>
		<view class='title'>
			<label class="title-top">实名认证</label>
		</view>
		<view>
			<image src='../../static/sfrz.jpeg' style="width:100%; height: 280rpx;"></image>
			<uni-forms autoComplete="on" :model="authForm" ref="authForm">
				<uni-forms-item label="姓名" required labelAlign="center">
					<uni-easyinput placeholder="请输入您的真实姓名" name="realname" focus maxlength="10"
						v-model="authForm.realname"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="工作证" required labelAlign="center">
					<uni-easyinput placeholder="请输入您的值工号" name="no" v-model="authForm.no" maxlength="10">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="job">
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								所处职位
							</view>
							<view class="uni-list-cell-db">
								<picker @change="bindPickerChange" :value="index" :range="job">
									<view class="uni-input">{{job[index]}}</view>
								</picker>
							</view>
						</view>
					</view>
				</uni-forms-item>

				<uni-forms-item name="bumen">
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								所在部门
							</view>
							<view class="uni-list-cell-db">
								<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange"
									:value="multiIndex" :range="multiArray" v-model="authForm.bumen" name="bumen">
									<view class="uni-input">
										{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}
									</view>
								</picker>
							</view>
						</view>
					</view>
				</uni-forms-item>


				<uni-forms-item>
					<button type="primary" @click="submit">提交</button>
				</uni-forms-item>
			</uni-forms>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				focus: false,
				authForm: {
					realname: '',
					no: '',
				},
				job: ['查勘人', '管理人', '负责人'],
				index: 0,
				multiArray: [
					['管理部', '执行部'],
					['车辆管理部', '审批部'],
				],
				multiIndex: [0, 0],
			}
		},
		onLoad() {
			let _this = this;
			var code = '';
			var appId = 'wx42936ad485f33e67';
			var secret = '8b84771f5074f712daf6bbc53805106c';
			uni.login({
				success: (res) => {
					code = res.code;
					_this.code = code
					uni.request({
						url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId +
							'&secret=' + secret +
							'&js_code=' + res.code + '&grant_type=authorization_code',
						header: {
							'content-type': 'json'
						},
						success: function(res) {
							_this.openid = res.data.openid;
						}
					});

				},
				fail: res => {
					console.log("fail");
				}
			});

		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
			bindMultiPickerColumnChange: function(e) {
				this.multiIndex[e.detail.column] = e.detail.value
				switch (e.detail.column) {
					case 0:
						switch (this.multiIndex[0]) {
							case 0:
								this.multiArray[1] = ['车辆管理部', '审批部']
								break
							case 1:
								this.multiArray[1] = ['查勘部']
								break
						}
						this.multiIndex.splice(1, 1, 0)
						this.multiIndex.splice(2, 1, 0)
						break

				}
				this.$forceUpdate()
			},

			submit() {
				let _this = this;
				let dept = _this.multiArray[0][_this.multiIndex[0]] + ',' + _this.multiArray[1][_this.multiIndex[1]]
				let pos = _this.job[_this.index]
				if (_this.authForm.realname === '' || _this.authForm.no === '') {
					uni.showToast({
						title: '请完善表单',
						icon: 'none'
					})
				} else {
					uni.request({
						url: "/authentication",
						data: {
							no: _this.authForm.no,
							name: _this.authForm.realname,
							position: pos,
							dept: dept,
							facedata: 'facedata',
							openId: _this.openid,
						},
						method: 'POST',
						success: (res) => {
							console.log(res);
							if (res.data.code === '200') {
								_this.$store.commit('SETTOKEN', res.data.token);
								_this.$store.commit('LOGIN',[ _this.authForm.realname, _this.authForm.no,pos]);
								
								_this.$store.state.hasLogin = true;
								console.log(_this.$store.state);
								uni.showToast({
									title: '认证成功',
									icon: 'success',
									duration: 1000,
									success() {

										if (pos === '查勘人') {
											uni.showToast({
												title: '跳转到查勘人界面',
												duration: 1000,
											})
										}
										if (pos === "负责人") {
											console.log('to index')
											uni.switchTab({
												url:'../director/index/index'
											})
										}
										if (pos === "管理人") {
											setTimeout(function() {
												uni.redirectTo({
													url: '../manage/manage' //跳转到界面，此url为测试用
												})
											}, 1000)
										}
									}
								})
							} else {
								uni.showToast({
									title: '认证失败，请确认填写是否无误',
									icon: 'none',
									duration: 1000,
								})
							}
						},
						fail: (res) => {
							console.log('fail');
						}
					})
				}
			}
		}
	}
</script>

<style>
	@import url("../../common/uni.css");

	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-color: #000000;
		border-width: thin;
		border-style: solid;
	}

	.item {
		//form item 的样式
		display: flex;
		flex-direction: row;
		align-items: center;
		border-color: #000000;
		border-width: thin;
		border-style: solid;
	}

	.title-top {
		//顶部title
		font-size: 50rpx;
	}
</style>
