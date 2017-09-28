/**
 * Created by Nicky on 2017/9/19.
 */

var page = {
	 init : function(){
        //移动端300毫秒延迟
        _mm.fastClick();
        //事件绑定
        this.bindEvent();
        // 初始化数据
        this.initData();
    },
    bindEvent : function(){
    	
        // ----------点击提交按钮---------
        $('.order-foot .btn').click(function(){
        	var invoiceHeadStyle = $('#invoice-head-style').val(),
        		      demand			 = $('#demand').val();
           if(!invoiceHeadStyle){
           	 alert('请填写发票抬头');
           	 return;
           };
           if(!demand){
           	 var result = confirm('确定不填写特殊需求么');
           	  if(result  == true){
           	 	// 验证通过
                window.location.href = './purchasingConfirm.html';
           	  }else{
                // 不作任何动作
           	 }
           }
            
        });
    },
    initData : function(){
      var result = sessionStorage.getItem('product-info');
            result = JSON.parse(result);
            $('#price').text(result.price);
            $('#memory').text(result.memory);
            $('#color').text(result.color);
            $('#package').text(result.package);
            $('#phone').text(result.phone);
            $('.checkout-price').text('￥'+result.price);
    }
}


$(document).ready(function(){
   page.init();
})