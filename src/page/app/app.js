/*
* @Author: GARNET
* @Date:   2018-03-27 17:03:04
* @Last Modified by:   GARNET
* @Last Modified time: 2018-05-25 16:58:05
*/

require('../common/index');
require('../../assets/css/mixin.less');
var gs = require('../../utils/gs');
var asideMenu = require('../common/aside/index');
var styles = require('./app.css');



asideMenu.init({
	name: 'about',
})

function Login() {
	var r = $('<a href="javascript:;" class="el-button el-button--primary el-button--medium" id="do">start</a>')
	$('.app-hs').append(r);


	var data = {
		con: '香椿摊鸡蛋',
	}
	var dom = '<div class=' + styles.con + '><b class=' + styles.b + '>{{con}}</b></div>';
	var p = gs.renderTpl(dom, data);
	$('.app-hs').append(p)


}

gs.request({
	url: '/product/list.do?keyword=1',
	success: function(res) {
		console.log(res)
	}
});



function init() {
	Login();
	
	var btn = $('#do');
	btn.on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		var dom = gs.successTips();
		$('body').append(dom);
	});
}
// init();







































// =============================================================
// $('body').append('<div class="v-modal"></div>');

// if (module.hot) {
// 	module.hot.accept('./index.js', function() {
// 		console.log('Accepting the updated Login module!');
// 		Login();
// 	})
// }


