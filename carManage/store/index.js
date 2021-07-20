import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		hasLogin: false,
		token: '',
		userInfo: {
			name: '',
			no: '',
			position:''
		}
	},
	mutations: {
		LOGIN(state, [name,no,position]) {
			state.userInfo.name = name;
			state.userInfo.no = no;
			uni.setStorageSync('name', name);
			uni.setStorageSync('no', no);
			uni.setStorageSync('position',position)

		},
		SETTOKEN(state, token) {
			state.token = token;
			uni.setStorageSync('token', token);
		},
		LOGOUT(state) {
			state.token = '';
			uni.clearStorage();
		}
	},
	actions: {},
	modules: {
			
	},
	
})
