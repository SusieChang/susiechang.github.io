$(document).ready(function() {
	var sub = $('#sub-content');
	var activeRow;//激活的一级菜单中的行
	var activeMenu;//对应的激活二级菜单
	var timer;

	$('#nav-button')
		.on('mouseenter', function(e){
			$('#sub-wrap')[0].style.left = "0px";
	})

	$('#sub-wrap ul')
		.on('mouseenter', 'li', function(e) {//事件代理
			if(!activeMenu) {
				activeRow = $(this).addClass('active');
				activeMenu = $('#' + activeRow.data('id'));
				console.log(activeRow.data('id'));
				activeMenu.removeClass('none');
				sub[0].style.left = "200px";
				return;
			}
		var self = $(this);
		timer = setTimeout(function(){
			activeRow.removeClass('active');
			activeMenu.addClass('none');
			activeRow = self;
			activeRow.addClass('active');
			activeMenu = $('#' + activeRow.data('id'));
			activeMenu.removeClass('none');
			sub[0].style.left = "200px";
		}, 400)
		})
		.on("mouseleave", 'li', function(){
			if(timer){
				clearTimeout(timer);
		}});

	$('#sub')
		.on('mouseleave', function(e){
			sub[0].style.left = "-625px";
			setTimeout(function(){
				$('#sub-wrap')[0].style.left = "-210px";
			}, 200)
			if(activeRow) {
				activeRow.removeClass('active');
				activeRow = null;
			}
			if(activeMenu) {
				activeMenu.addClass('none');
				activeMenu = null;
			}
			return;
		})
})