/*
* @Author: lenovo
* @Date:   2017-10-28 13:10:19
* @Last Modified by:   lenovo
* @Last Modified time: 2017-10-30 15:28:28
*/
$(function(){
	var section2 = $('.section-2').data('flag',false);
	var section3 = $('.section-3').data('flag',false);
	var section4 = $('.section-4').data('flag',false);
	var section5 = $('.section-5').data('flag',false);
	var section6 = $('.section-6').data('flag',false);
	var section7 = $('.section-7').data('flag',false);
	var section8 = $('.section-8').data('flag',false);

	$('#fullpage').fullpage({
		controlArrowColor: '#000',
    	verticalCentered: false,
    	navigation:true,
    	// 当切换到某一屏的时候执行
        afterLoad:function(anchorLink,index){
			//index序号  从1开始
			if( index== 2 && !section2.data('flag')){

				section2.data('flag',true)

				//animate jquery中做动画的方法
				//1)要调整的元素的样式
				//2)动画运动的时间
				//3)默认是慢快慢的缓冲运动 swing
				//4)动画执行完成后的回调函数
               section2.find('.search').animate({
			   opacity:1,
			   marginLeft:-100
			 },800,'linear',function(){
			   //让从右运动到左侧的搜索隐藏掉
			   $(this).hide();
			   //让向上运动的搜索显示并且运动右上方
				section2.find('.leave').show().animate({
					width:148,
					height:30,
					marginLeft:100,
					bottom:449
				},800,'linear');
				   //沙发产品图运动出来
               section2.find('.goods').animate({
				   height:218
			   },800)
				   //文字显示
				section2.find('.words-2').animate({
					opacity:1
				},800,function(){

		    		//向下按钮淡出
		    	    $('.next').fadeIn();
				})
			 })
			}
        },
		//当开始滚动的时候执行
		onLeave: function(index, nextIndex,direction){
			//index当前屏幕序号
			//nextIndex 下一屏的序号
			//direction 方向 向下滚动 "down" 向上滚动 "up"

			//当下一屏的序号是3 并且滚动的方向是下
			if(nextIndex == 3 && direction == "down" && !section3.data('flag')){
				section3.data('flag',true);

				//沙发从第二屏滚动到第三屏
				section2.find('.shirt').show().animate({
					//每个电脑的屏幕高度，每个浏览器的可视窗口大小不一样
					bottom:-$(window).height()+190,
					width:207,
					marginLeft:-247
				},1000)

				//遮罩层显示
				section2.find('.cover').show();

				//尺码颜色  亮色 渐渐显示
				section3.find('.color-2').delay(700).animate({
					opacity:1
				},1000)

				//购物车按钮 亮色 渐渐显示
				section3.find('.button-2').delay(700).animate({
					opacity:1
				},1000,function(){

		    		//向下按钮淡出
		    	   $('.next').fadeIn();
				})
			}

            //当下一屏的序号为4，并且滚动方向是向下
			if(nextIndex ==4 && direction == "down" && !section4.data('flag')){
 
                section4.data('flag',true);

				//将从第二屏掉到第三屏的沙发隐藏掉
				section2.find('.shirt').hide();

				//将倾斜的沙发显示，并且运动到第四屏
				section3.find('.italic').show().animate({
					bottom:-$(window).height() +229,
					marginLeft:-55
				},1000,function(){

					//掉下来的沙发隐藏掉
					$(this).hide();

					//将购物车中的沙发显示出来
					section4.find('.cart img').show();

					//将购物车移动出去
					section4.find('.cart').animate({
						left:'200%'
					},1000,'easeInBack',function(){

						//购物车之后做的事情

						//文字显示
						section4.find('.word-2').animate({
							opacity:1
						},600)

						//电脑显示
						section4.find('.card').fadeIn(600,function(){

							//地址显示
							section4.find('.card img').animate({opacity:1},600,function(){

					    		//向下按钮淡出
					    	    $('.next').fadeIn();
							})
						});
					})
				})
			}

		//当下一屏的序号是5，并且滚动的方向向下
		if(nextIndex == 5 && direction == "down" && !section5.data('flag')){

				section5.data('flag',true);

			section5.find('.italic').show().animate({
				marginBottom:-230
			},1000)

			section5.find('.order').animate({
				marginTop:-185
			},1000)

			section5.find('.hand').animate({
				bottom:0
			},1000,function(){

				section5.find('.mouse-b').show();

	    		//向下按钮淡出
	    	    $('.next').fadeIn();
			})
		}

		//当下一屏的序号是6，并且滚动的方向向下
		if(nextIndex == 6 && direction == "down" && !section6.data('flag')){

			section6.data('flag',true);

        //第五屏的盒子掉到第六屏
        section5.find('.italic').show().animate({
        	bottom:-$(window).height()+560,
        	marginBottom:0,
        	width:100,
        	marginLeft:-200
        }, 1000,function(){
         //盒子隐藏
        	$(this).hide();
        //让盒子掉到车厢里面
        	section6.find('.box').animate({
        		bottom:25
        	},1000,function(){
               //盒子隐藏
        		$(this).hide();

        		//地址显示
        		section6.find('.address').show();

        		//文字飞出
        		section6.find('.word').animate({
        			opacity:1,
        			marginLeft:-300
        		}, 600)

        		//背景图片移动
        		section6.animate({
        			backgroundPositionX:'100%'
        		}, 1000,'linear',function(){

        			//让那个送货人出现
        			section6.find('.man').animate({
        				height:305,
        				bottom:116
        				//移动到女孩的房门前
        			}, 800).animate({
        				marginLeft:15
        			},800,function(){

        				//女孩出现
        				section6.find('.woman').animate({
        					height:294
        				}, function(){

        					//请收货
        				section6.find('.please').show();

			    		//向下按钮淡出
			    	    $('.next').fadeIn();

        				})
        			})
        		})
        	})
        });
        //盒子接住沙发
        section6.find('.box').show().animate({
        	marginLeft:-210
        },1000)

	}

    //当下一屏的序号是7，并且滚动的方向向下
    if(nextIndex == 7 && direction == "down" && !section7.data('flag')){

    	section7.data('flag',true);

    	section7.find('.star').delay(700).animate({
    		width:96
    	}, 800)

    	section7.find('.goods').delay(700).animate({
             opacity:1,
             marginLeft:-280
    	}, 800,function(){

    		//向下按钮淡出
    	    $('.next').fadeIn();
    	})
    }

     //当下一屏的序号是8，并且滚动的方向向下
     if(nextIndex == 8 && direction == "down" && !section8.data('flag')){

		section8.data('flag',true);

     	section8.on('mousemove',function(event){
         
         //获取鼠标X轴 
         var iLeft = event.pageX - 85;
         //获取鼠标Y轴坐标
         var iTop = event.pageY + 25;

         //手的top值不能小于屏幕的高度减去手的高度
         if(iTop < $(window).height() - 449){

         	//如果小于了，就等于
         	iTop = $(window).height() - 449
         }

         section8.find('.hand').css({
         	left:iLeft,
         	top:iTop
         })
     	})

        //当点击再来一次按钮的时候
        section8.find('.again').on('click',function(){

        	//滚动到第几屏
        	$.fn.fullpage.moveTo(1);

        	//将所有的元素身上的行内样式清空，排除#fullpage,.section,body,html元素
        	$('*').not('#fullpage,.section,body,html').attr('style','');

        	//将第六屏的背景位置清空
        	$('.section-6').css('backgroundPositionX','');

        	$('.section').each(function (){

        		$(this).data('flag',false);

        	});

        })

     }




   }
	})

    $('.next').on('click',function(){

    	//滚动到下一屏
    	$.fn.fullpage.moveSectionDown();

    	//向下按钮淡出
    	$(this).fadeOut();
    })


	
})



