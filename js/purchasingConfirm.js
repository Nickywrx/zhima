/**
 * Created by Nicky on 2017/9/19.
 */

var page = {
	 init : function(){
        //设置rem
        _mm.setRem();
        //移动端300毫秒延迟
        _mm.fastClick();
        //事件绑定
        this.bindEvent();
        // 初始化数据
        this.initData();
    },
    bindEvent : function(){
    	// 选择支付方式
        $('.pay-list').click(function(){
        	$(this).addClass('active').siblings().removeClass('active');
        	$(this).find('div').show().parent().siblings().find('div').hide();
        });
        // 选择分期方式
        $('.hb-stages-item').click(function(){
        	$(this).addClass('active').siblings().removeClass('active');
        });
        // ----------点击提交按钮---------
        $('.to-pay .btn').click(function(){
        	if($('.hb-list').hasClass('active')){
        		if(!$('.hb-stages-item').hasClass('active')){
        			alert('请选择分期数');
        			return;
        		}
        	}
        	window.location.href = './zhimaPackage.html';
        });
    },
    initData : function(){
      var result = sessionStorage.getItem('product-info');
            result = JSON.parse(result);
            $('#price').text(result.price);
    }
}


$(document).ready(function(){
   page.init();
})