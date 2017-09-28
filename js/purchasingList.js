/**
 * Created by Nicky on 2017/9/18.
 */
  // 用来存储手机颜色、套餐等数据
var data = {
    price   : '',
    memory  : '',
    color   : '',
    package : '',
    phone   : ''
};
var page = {
    init : function(){
        //设置rem
        _mm.setRem();
        //移动端300毫秒延迟
        _mm.fastClick();
        //事件绑定
        this.bindEvent();
    },
    bindEvent : function(){
        // 切换列表的水平和垂直布局
        $('#change-style').click(function(){
            if($('.list-content').hasClass('horizontal')){
                $('.list-content').removeClass('horizontal').addClass('vertical');
           }else if($('.list-content').hasClass('vertical')){
                $('.list-content').removeClass('vertical').addClass('horizontal');
            };
        });
         // 获取产品列表的价格
        $('.list-content li').click(function(){
            var result = sessionStorage.getItem('product-info'),
                result = JSON.parse(result);
            result.price = $(this).find('.price').text();
            var info = JSON.stringify(result);
            sessionStorage.setItem('product-info',info);
        });    
    }

}
$(function(){
    page.init();
    // 存储信息
    var result = JSON.stringify(data);
    sessionStorage.setItem('product-info',result);
});