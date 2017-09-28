/**
 * Created by Nicky on 2017/9/19.
 */

var page = {
	 init : function(){
        //移动端300毫秒延迟
        _mm.fastClick();
        //事件绑定
        this.bindEvent();
    },
     bindEvent : function(){
    	 // 选择套餐
        $('.package-item .choice-status').click(function(){
        	$(this).parent().addClass('active')
        	.parent().siblings().find('.package-item').removeClass('active');
            $(this).find('span').text('已选择').parents('li').siblings().find('span').text('未选择');
            // 存储套餐
            var result = sessionStorage.getItem('product-info');
                result = JSON.parse(result);
                result.package = $(this).parents('.package-item').find('.package').text();
                var info = JSON.stringify(result);
                sessionStorage.setItem('product-info',info);	
       });
         //---------老用户号码办理-----------
        $('.old-num').click(function(){
        	$('.old-num-icon').addClass('active');
        	$(this).siblings('.new-num').find('i').removeClass('active');
        	// 办理内容显示
        	$('.old-num-inner ul').show();
        	$('.new-num-inner ul').hide();
            // 手机号办理给个标志，方便下面确认按钮的验证
            $('.phoneNum-choice').addClass('active');
        });
        //--------------新号选择------------
        $('.new-num').click(function(){
        	$('.new-num-icon').addClass('active');
        	$(this).siblings('.old-num').find('i').removeClass('active');
        	// 办理内容显示
        	$('.new-num-inner ul').show();
        	$('.old-num-inner ul').hide();
            // 手机号办理给个标志，方便下面确认按钮的验证
            $('.phoneNum-choice').addClass('active');
        });
        // ----------选择号码-----------
        $('.new-num-inner').click(function(){
        	$(this).find('span').addClass('active');
        	// 显示手机弹框
        	$("html,body").animate({scrollTop:300}, 0);
        	$('.num-dialog').show();
            // 如果重新选择号码，打开的号码弹框的号码选中以号码框的内容相符
            var choiceNumVal = $('#choice-num').val();
            $('.num-list li:contains('+choiceNumVal+')').addClass('active').siblings().removeClass('active');
        });
        // ---------选择号码弹框----------
        // 点击取消按钮
        $('.num-cancel').click(function(){
            $('.num-dialog').hide();
        });
        // 点击确认按钮
        $('.num-sure').click(function(){
            $('.num-dialog').hide();
            var choiceNum = $('.num-list li[class="active"]').text();
            $('#choice-num').val(choiceNum);
            $('.search-num').val('');
        });
        // 手机列表号码的选择
        $('.num-list').on('click','li', function(){
            $(this).addClass('active').siblings().removeClass('active');
            
        });
        // 手机列表号码的尾号通过选择框选择
        /*$('.search-box .search-num').keyup(function(){
            var searchNumVal = $(this).val();
            if(!searchNumVal){
                $('.num-list li').removeClass('active');
                var choiceNumVal = $('#choice-num').val();
                if(choiceNumVal){
                    $('.num-list li:contains('+choiceNumVal+')').addClass('active');
                };
                return;
            }
           $('.num-list li:contains('+searchNumVal+')').addClass('active');
        });*/
        // ----------点击提交按钮---------
        $('.submit-btn .btn').click(function(){
            // 如果没有选择套餐
            if(!$('.package-item').hasClass('active')){
                alert('请选择套餐');
                return;
            };
            // 如果没有选择手机号办理
            if(!$('.phoneNum-choice').hasClass('active')){
                alert('请选择手机号办理');
                return;
            };
            // 如果点击了老用户号码办理
            if($('.old-num-icon').hasClass('active')){
                // 手机验证
                var reg          = /^1(3|4|5|7|8)\d{9}$/,
                    phone        = $('#phone').val(),
                    verification = $('#verification').val();
                if(!reg.test(phone)){
                    alert('手机号格式不正确');
                    return;
                };
                // 验证码不能为空
                if(!verification){
                    alert('验证码不能为空');
                    return;
                };
                 // 存储旧手机号码
                var result = sessionStorage.getItem('product-info');
                    result = JSON.parse(result);
                    result.phone = phone;
                    var info = JSON.stringify(result);
                    sessionStorage.setItem('product-info',info);
                    console.log(sessionStorage.getItem('product-info'));
            };
            // 如果点击了选择号码
            if($('.new-num-icon').hasClass('active')){
                var choiceNumText = $('#choice-num').val();
                if(!choiceNumText){
                    alert('新手机号不能为空');
                    return;
                };
                // 存储新手机号码
                var result = sessionStorage.getItem('product-info');
                    result = JSON.parse(result);
                    result.phone = choiceNumText;
                    var info = JSON.stringify(result);
                    sessionStorage.setItem('product-info',info);
                    console.log(sessionStorage.getItem('product-info'));
                };
            // 验证通过
            window.location.href = './purchasingOrder.html';
        });
        // --------发送校验码---------
        $('#send-verify').click(function(){
            var _this  = this,
                timer  = null,
                count  = 6, //倒数时间
                random = Math.ceil(Math.random()*100000+900000); //随机生成6位整数
                timer  = setInterval(function(){
                    count--;
                    $(_this).text(count+"s");
                    if(count<=0){
                        clearInterval(timer);
                        $('#verification').val(random);
                        $(_this).text('再次发送验证码');
                    }
            },1000);
        });
    }
}


$(document).ready(function(){
   page.init();
})