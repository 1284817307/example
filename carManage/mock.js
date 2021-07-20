const Mock = require('better-mock/dist/mock.mp.js')

let Result = {
	code: "200",
	msg: '操作成功',
	data: '返回data',
	token:'返回token'
}

Mock.mock('/try', 'GET', () => {
	return Result
})

Mock.mock('/login','POST',()=>{
	let Result={
		status:'正确'
	}
	
	return Result
	
})

Mock.mock('/authentication','POST',(option)=>{
    
	console.log(option)
	return Result

	
})





Mock.mock('/protect', 'POST', () => {
	let Rq={
		status:"1",
		msg:[{id:'浙A3423432',time:'2021/1/1'},{id:'浙A575758',time:'2021/2/2'}],
	}
	return Rq
})