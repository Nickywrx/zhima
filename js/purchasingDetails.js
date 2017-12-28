/**
 * Created by Nicky on 2017/9/18.
 */
/**
 * Created by Nicky on 2017/9/18.
 */
 // 全局常量
 // 购物车数
 var count = 0;

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
        // 点击显示内存量和颜色选框
        $('.details-center').click(function(){
            $("html,body").animate({scrollTop:120}, 0);
            $('.option-dialog').show();
        });
        // 点击关闭内存量和颜色选框
        $('.close-btn').click(function(){
            $("html,body").animate({scrollTop:500}, 0);
            $('.option-dialog').hide();
        });
        // 选择内存
        _mm.changeColor('.phone-memory li a','a','memory');
        // 选择颜色
        _mm.changeColor('.phone-color li a','a','color');
        // 点击确定按钮
        $('.btn').click(function(){
             if(!$('.phone-memory li a').hasClass('active')){
                alert('请选择内存');
                return;
             }
             if(!$('.phone-color li a').hasClass('active')){
                alert('请选择颜色');
                return;
             }
             window.location.href = './purchasingPackage.html';
        });
        // 加入购物车
        $('.add-cart').click(function(){
            count++;
            $('.buy-cart i').text(count);
        });
        // 点击购物车
        $('.buy-cart').click(function(){
            alert('购物车虚拟 不可跳转');
        });
        // 立即购买
        $('.buy-now').click(function(){
            if(!$('.phone-memory li a').hasClass('active')){
                $("html,body").animate({scrollTop:120}, 0);
                $('.option-dialog').show();
                return;
             };
             window.location.href = './purchasingPackage.html'
        });
        // tab切换
        $('.tab-title li').click(function(){
            $(this).addClass('current').siblings().removeClass('current');
            var index = $(this).index();
            $('.tab-content li').eq(index).show().siblings().hide();
        })
    },
    // 初始化数据
    initData : function(){
        var result = sessionStorage.getItem('product-info');
            result = JSON.parse(result);
            $('#price').text(result.price);
    }
   
}
// 初始化
$(function(){
    page.init();
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay: 2500,
        paginationClickable: true,
        loop: true
    });

});