// ==UserScript==
// @name         cme_91huayi_class
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       VX:Acdtms4zfx
// @match        http://*.91huayi.com/course_ware/course_ware_cc.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    console.log('Script Ready!');
    var fuc = setInterval(function() {
        if (document.querySelector("#jrks").getAttribute("disabled")==null){
            document.querySelector("#jrks").click();
            console.log('OK');
        }else{
            console.log('Still playing video...');
        }
    },1000)
})();
