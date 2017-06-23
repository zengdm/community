define(function(require, exports, module) {

	var $ = require('jquery');

	var PostDynamic = function() {
		this.init();
	};

	PostDynamic.prototype = {

		init: function() {
			this.bindEvent();
		},

		bindEvent: function() {
			var context = this;

			$('.classify-choose').on('click', function() {
				context.choose();
			});
			
			
			$('.list-name').click(function(){
				
				if($(this).siblings().hasClass('fn-hide')){
					$(this).find('.icon').html('&#xe605;');
				}else{
					$(this).find('.icon').html('&#xe606;');
				}
				
				$(this).next().hasClass('fn-hide')?$(this).next().removeClass('fn-hide'):$(this).next().addClass('fn-hide');
	
			})
        	
		},

		choose: function() {
			$('.choose-classify').removeClass('hide');
			$('.main-wrap').addClass('hide');
		}

	};



	module.exports = PostDynamic;
});