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


			$('.list-name').click(function() {
				
				if($(this).siblings().hasClass('fn-hide')) {
					$(this).find('.icon').html('&#xe605;');
				} else {
					$(this).find('.icon').html('&#xe606;');
				}

				$(this).next().hasClass('fn-hide') ? $(this).next().removeClass('fn-hide') : $(this).next().addClass('fn-hide');

			});

			
			var list_val;
			$('.list-num>ul>li').on('click', 'a', function(e) {
				var e = e || window.event;
				e.preventDefault();
				$('.list-num>ul>li>a').removeClass('car_color');
				$(this).addClass('car_color').siblings('a').removeClass('car_color');
				list_val = $.trim($(this).text());
			})
			$('.confirm>button').on('click', 'a', function() {
				$('.main-wrap').removeClass('hide');
				$('.choose-classify').addClass('hide');
				$('.classify-choose>span').text(list_val);
			});
			
			
//			图片上传
			$('.addition-upload-box').on('click', function() {
             		context.addcoverpicture();
                $(".headpicinput_1").change(function(e) {
                    that.UpLoad();
                });
            });
			
			

		},

		choose: function() {
			$('.choose-classify').removeClass('hide');
			$('.main-wrap').addClass('hide');
		},
		
		addcoverpicture: function() {
            var that = this;
            var picturehtml = "";
//          var base64 = $('.base').attr('data-base');
//          var imgUrlInput = $('.imgUrl').val();
//          var dataId = $('.addcover-picture').attr('addval');
            picturehtml += '<div class="upload-box">'+
            '<div class="upload-picture">'+
            '<ul>'+
            '<li><a href=""><img src="//i1.dd-img.com/assets/image/1498455579-eb2eadd2969682a5-192w-192h.png" /></a>'+
            '<div class="upload-close"><i class="icon">&#xe601;</i></div></li>'+
            '<li><a href=""><img src="//i1.dd-img.com/assets/image/1498456024-71597723b227aa1f-192w-192h.png" /></a></li>'+
            '<li><a href=""><img src="//i1.dd-img.com/assets/image/1498456024-9ad9a6ae70d3ec6b-192w-192h.png" /></a></li>'+
            '<li><a href=""><img src="//i1.dd-img.com/assets/image/1498455579-f82385c83d1738e1-192w-192h.png" /></a>'+
            '<div class="upload-close"><i class="icon">&#xe601;</i></div></li>'+
            '</ul></div></div>';
            $('.addition-box').after(picturehtml);
        },
		
		UpLoad: function(e) {
            var that = this;
            var f = document.querySelector("#headpicinput_1").files[0];
            fileType = f.type;
            var baseBox = $('.base');
            var imgUrlInput = $('.imgUrl');
            var Orientation = '';
            if (/image\/\w+/.test(fileType)) {
                var fileReader = new FileReader();
                EXIF.getData(f, function() {
                    // alert(EXIF.pretty(this));  
                    EXIF.getAllTags(this);
                    //alert(EXIF.getTag(this, 'Orientation'));   
                    Orientation = EXIF.getTag(this, 'Orientation');
                });

                fileReader.readAsDataURL(f);

                fileReader.onload = function(event) {
                    var result = event.target.result; //返回的dataURL
                    // var image = new Image();

                    // image.src = result;
                    //若图片大小大于1M，压缩后再上传，否则直接上传

                    var maxW = 1200;
                    var maxH = 1000;
                    var rat = maxW / maxH;

                    var image = new Image();
                    image.src = result; //;e.target.result;  
                    image.onload = function() {
                        var expectWidth = this.naturalWidth;
                        var expectHeight = this.naturalHeight;

                        if (this.naturalWidth > this.naturalHeight && this.naturalWidth > maxW) {
                            expectWidth = maxW;
                            expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
                        } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > maxH) {
                            expectHeight = maxH;
                            expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
                        }
                        var canvas = document.createElement("canvas");
                        var ctx = canvas.getContext("2d");
                        canvas.width = expectWidth;
                        canvas.height = expectHeight;
                        //console.log(canvas.width+':'+canvas.height);
                        ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
                        var base64 = null;
                        //修复ios  
                        if (navigator.userAgent.match(/iphone/i)) {
                            //console.log('iphone');  
                            //alert(expectWidth + ',' + expectHeight);  
                            //如果方向角不为1，都需要进行旋转 added by lzk  
                            if (Orientation != "" && Orientation != 1) {
                                //alert('旋转处理');  
                                switch (Orientation) {
                                    case 6: //需要顺时针（向左）90度旋转  
                                        //alert('需要顺时针（向左）90度旋转');  
                                        that.rotateImg(this, 'left', canvas);
                                        break;
                                    case 8: //需要逆时针（向右）90度旋转  
                                        //alert('需要顺时针（向右）90度旋转');  
                                        that.rotateImg(this, 'right', canvas);
                                        break;
                                    case 3: //需要180度旋转  
                                        //alert('需要180度旋转');  
                                        that.rotateImg(this, 'right', canvas); //转两次  
                                        that.rotateImg(this, 'right', canvas);
                                        break;
                                }
                            }
                            base64 = canvas.toDataURL(fileType, 0.8);
                        } else if (navigator.userAgent.match(/Android/i)) { // 修复android  
                            var canvas = document.getElementById("canvas");
                            canvas.width = this.width;
                            canvas.height = this.height; //计算等比缩小后图片宽高
                            var ctx = canvas.getContext('2d');
                            var expectHeight = this.naturalHeight;
                            console.log(canvas.width + '/' + canvas.height);
                            //等比压缩
                            if (canvas.width / canvas.height > rat) {
                                if (canvas.width > maxW) {
                                    canvas.width = maxW;
                                    canvas.height = parseInt((canvas.height * maxW) / this.width);
                                }
                            } else {
                                if (canvas.height > maxH) {
                                    canvas.height = maxH;
                                    canvas.width = parseInt((canvas.width * maxH) / this.height);
                                } else {

                                }
                            }
                            console.log(canvas.width + '=>' + canvas.height);
                            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
                            base64 = canvas.toDataURL(fileType, 0.8); //重新生成图片
                            // var encoder = new JPEGEncoder();  
                            // base64 = encoder.encode(ctx.getImageData(0, 0, expectWidth, expectHeight), 80);  
                        } else {
                            //alert(Orientation);  
                            if (Orientation != "" && Orientation != 1) {
                                //alert('旋转处理');  
                                switch (Orientation) {
                                    case 6: //需要顺时针（向左）90度旋转  
                                        //alert('需要顺时针（向左）90度旋转');  
                                        that.rotateImg(this, 'left', canvas);
                                        break;
                                    case 8: //需要逆时针（向右）90度旋转  
                                        //alert('需要顺时针（向右）90度旋转');  
                                        that.rotateImg(this, 'right', canvas);
                                        break;
                                    case 3: //需要180度旋转  
                                        //alert('需要180度旋转');  
                                        that.rotateImg(this, 'right', canvas); //转两次  
                                        that.rotateImg(this, 'right', canvas);
                                        break;
                                }
                            }

                            base64 = canvas.toDataURL(fileType, 0.8);

                        }
                        var postData = base64.replace("data:" + fileType + ";base64,", '');
                        // 图片赋值
                         preViewImg.attr("src", base64);  


                        that.addcoverpicture();


                        $.post('/live/ajax/', {
                            opt: 'upload',
                            base64Img: postData,
                            fileType: fileType,
                            rnd: Math.random()
                        }, function(result) {
                            if (result.match("^\{(.+:.+,*){1,}\}$")) {
                                result = $.parseJSON(result);
                                if (result.code == 200) {
                                    imgUrlInput.val(result.data);
                                    //preViewImg.attr('src', result.data);
                                } else {
                                    alert(result.msg);
                                }
                            } else {
                                alert('上传出错, 返回格式不正确');
                            }
                        });
                    };

                }
            } else {
                alert("请选择图片");
            }
        },

        //对图片旋转处理 added by lzk  
        rotateImg: function(img, direction, canvas) {
            //alert(img);  
            //最小与最大旋转方向，图片旋转4次后回到原方向    
            var min_step = 0;
            var max_step = 3;
            //var img = document.getElementById(pid);    
            if (img == null) return;
            //img的高度和宽度不能在img元素隐藏后获取，否则会出错    
            var height = img.height;
            var width = img.width;
            //var step = img.getAttribute('step');    
            var step = 2;
            if (step == null) {
                step = min_step;
            }
            if (direction == 'right') {
                step++;
                //旋转到原位置，即超过最大值    
                step > max_step && (step = min_step);
            } else {
                step--;
                step < min_step && (step = max_step);
            }
            //img.setAttribute('step', step);    
            var canvas = document.getElementById('pic_' + pid);
            if (canvas == null) {
                img.style.display = 'none';
                canvas = document.createElement('canvas');
                canvas.setAttribute('id', 'pic_' + pid);
                img.parentNode.appendChild(canvas);
            }
            //旋转角度以弧度值为参数    
            var degree = step * 90 * Math.PI / 180;
            var ctx = canvas.getContext('2d');
            switch (step) {
                case 0:
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0);
                    break;
                case 1:
                    canvas.width = height;
                    canvas.height = width;
                    ctx.rotate(degree);
                    ctx.drawImage(img, 0, -height);
                    break;
                case 2:
                    canvas.width = width;
                    canvas.height = height;
                    ctx.rotate(degree);
                    ctx.drawImage(img, -width, -height);
                    break;
                case 3:
                    canvas.width = height;
                    canvas.height = width;
                    ctx.rotate(degree);
                    ctx.drawImage(img, -width, 0);
                    break;
            }
        }

	};

	module.exports = PostDynamic;
});