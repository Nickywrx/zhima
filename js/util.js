/**
 * Created by Nicky on 2017/9/18.
 */
var _mm = {
    /*设置rem*/
    setRem : function(){
        (function (win) {
            var doc = win.document, html = doc.documentElement;
            var baseWidth = 750;
            var grids = baseWidth / 100;
            var clientWidth = html.clientWidth || 320;
            html.style.fontSize = clientWidth / grids + "px";
            //var testDom = document.createElement("div");
            var testDomWidth = 0;
            var adjustRatio = 0;
            //setTimeout(calcTestDom, 20);
            var reCalc = function () {
                var newCW = html.clientWidth;
                if (newCW === clientWidth) {
                    return
                }
                clientWidth = newCW;
                html.style.fontSize = newCW * (adjustRatio ? adjustRatio : 1) / grids + "px"
            };
            if (!doc.addEventListener) {
                return
            }
            var resizeEvt = "orientationchange" in win ? "orientationchange" : "resize";
            win.addEventListener(resizeEvt, reCalc, false);
            doc.addEventListener("DOMContentLoaded", reCalc, false)

        })(window)
    },
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
 