define(function(require,exports,module){
	var $ = require('jquery');
	
	require('./footer.css');
	

//	var Footer = function(){
//		this.init();
//	};
//	
//	Footer.prototype = {
//		
//		init:function(){
//			this.bindEvent();
//		},
//		
//		bindEvent:function(){
//			var context = this;
//			
//			$('.header').on('click',function(){
//				context.render();
////				alert();
//			});
//		},
//		
//		render:function(){
//			$('.header').html('没错，这就是模块header');
//		}
//	};
	
	module.exports = Footer;
})
