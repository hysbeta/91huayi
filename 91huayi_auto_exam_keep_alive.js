// ==UserScript==
// @name         91huayi_auto_exam_keep_alive
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  91huayi_auto_exam_keep_alive_
// @author       Acdtms4zfx
// @match        *://*.91huayi.com/pages/course.aspx?cid=*
// @match        *://*.91huayi.com/pages/noplay.aspx?cid=*
// @match        *://*.91huayi.com/secure/login.aspx
// @match        *://*.91huayi.com/cme/index.html
// @grant        none
// @license      CC BY-NC-ND 2.0 DEED
// ==/UserScript==

(function() {
    'use strict';
    alert = console.log;
    var wait_time=10;
    console.log('91huayi_auto_exam_keep_alive_v1.4');
    function getlocalStorage(name)
    {
        if(localStorage.getItem(name)!=null){
            return unescape(localStorage.getItem(name));
        }else{
            return null;
        }
    };
    function setlocalStorage(name,value)
    {
        localStorage.setItem(name,escape(value));
    };
    function sleep(time, unit){
        if(time == null){time = wait_time * 1000;}
        if(unit != null){time = time * 1000;}
        for(var t = Date.now();Date.now() - t <= time;);
    };
    sleep();
    if (document.querySelector("body").textContent.search("应用程序中的服务器错误。") != -1 && document.querySelector("body").textContent.search("运行时错误") != -1){
        setTimeout(function(){location.reload();},wait_time * 1000);
    };
    if (window.location.href.search("noplay.aspx") != -1){
        window.close();
    };
    if (window.location.href.search("login.aspx") != -1){
        setTimeout(function(){location.reload();},wait_time * 1000 * 2);
    };
    if (window.location.href.search("cme/index.html") != -1 && getlocalStorage("classURL") != null){
        window.location.href=getlocalStorage("classURL");
    };
    if (window.location.href.search("course.aspx?cid=") != -1){
        setlocalStorage("classURL",window.location.href);
    };
    if (getlocalStorage("lastactionts") == null){
        console.log("Class not started yet or last action ts misssing. Do nothing now...");
        setTimeout(function(){location.reload();},wait_time * 1000 * 2);
    }else{
        if (Date.parse(new Date()) - getlocalStorage("lastactionts") < wait_time * 1000 * 3){
            console.log("Having class now...");
            setTimeout(function(){location.reload();},wait_time * 1000 * 3);
        }else{
            console.log("Seems like got exception, try to take class again...");
            var i;
            for (i=3;i<=document.querySelector("#containter > div.main > div.colm_mid").childElementCount;i++){
                if (document.querySelector("#containter > div.main > div.colm_mid > div:nth-child("+i+")").getAttribute("class")=="course"){
                    if (document.querySelector("#containter > div.main > div.colm_mid > div:nth-child("+i+") > h3 > span > a > img").getAttribute("src").search("anniu_03a.gi") == -1){
                        document.querySelector("#containter > div.main > div.colm_mid > div:nth-child("+i+") > h3 > span > a > img").click();
                        break
                    };
                };
            };
            setTimeout(function(){location.reload();},wait_time * 1000 * 3);
        };
    };
})();
