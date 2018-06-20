$(function () {

	$('#loginBtn').on('click', function () {
	var result = $('#loginForm').serializeToJson();

	if(!$.trim(result.username)) {
		alert('请输入用户名')
		return;
	}

	if(!$.trim(result.password)) {
		alert('请输入密码')
		return;
	}
	
	$.ajax({
		type:'post',
		url:url.baseURL +'http:fullstack.net.cn:3000',
		data:result,
		success:function (response) {


			if(response.success) {
				//登录成功
				location.href = 'user.htmls'
			}else {
				//登录失败
				alert('response.mseeage')
			}
		}
	})

})