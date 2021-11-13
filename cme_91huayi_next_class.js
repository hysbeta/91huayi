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
    console.log('Script Ready!');
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
})();
