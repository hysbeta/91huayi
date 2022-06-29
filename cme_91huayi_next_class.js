// ==UserScript==
// @name         cme_91huayi_next_class
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Acdtms4zfx
// @match        http://*.91huayi.com/pages/exam_result.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    alert = console.log;
    function sleep(time, unit){
        if(time == null){time = 5000;}//我想不带参数的时候就默认5秒
        if(unit != null){time = time * 1000;}//我想这个参数是任意字符时，前面的就是秒，当然，真要在别处用，这里要再改改
        for(var t = Date.now();Date.now() - t <= time;);
    }
    sleep();
    if (document.querySelector("body > div.case4 > b").textContent=="考试通过！"){
        var nodenumber = document.querySelector("body > div.case3 > div.left > dl").childElementCount;
        var i = 2
        for (i=2;i<=nodenumber;i++){
            if(document.querySelector("body > div.case3 > div.left > dl > dd:nth-child("+i+") > input").value=="立即学习"){
                document.querySelector("body > div.case3 > div.left > dl > dd:nth-child("+i+") > input").click();
                break;
            }
        };
    };
    setTimeout(function(){location.reload();},30000);
})();
