/**
 * Created by Nicky on 2017/9/18.
 */
var _mm = {
    fastClick : function(){
        $(function() {
            FastClick.attach(document.body);
        });
    },
     // 公用的切换
    changeColor : function(k,v,flag){
         $(k).click(function(){
            $(this).addClass('active').parent().siblings().find(v).removeClass('active');
            // 存储内存和颜色
            var result = sessionStorage.getItem('product-info');
                result = JSON.parse(result);
            if(flag === 'memory'){
                result.memory = $(this).text();
            }else{
                result.color  = $(this).text();
            };
            var info = JSON.stringify(result);
            sessionStorage.setItem('product-info',info);
        });
    }
};
 