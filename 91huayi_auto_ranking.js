// ==UserScript==
// @name         91huayi_auto_ranking
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  91huayi_auto_ranking_
// @author       Acdtms4zfx
// @match        *://*.91huayi.com/pages/course_evaluate.aspx?*
// @grant        none
// @license      CC BY-NC-ND 2.0 DEED
// ==/UserScript==

(function() {
    'use strict';
    alert = console.log;
    var wait_time=6;
    console.log('91huayi_auto_ranking_v2');
    function sleep(time, unit){
        if(time == null){time = wait_time * 1000;}
        if(unit != null){time = time * 1000;}
        for(var t = Date.now();Date.now() - t <= time;);
    };
    sleep();
    document.querySelector("#xingxing > dd:nth-child(5)").click();
    document.querySelector("#OkNext").click();
    document.querySelector("#layui-layer1 > div.layui-layer-btn > a").click();
})();
