// ==UserScript==
// @name         91huayi_auto_exam_keep_alive
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  91huayi_auto_exam_keep_alive_
// @author       Acdtms4zfx
// @match        *://*.91huayi.com/pages/course.aspx?cid=*
// @match        *://*.91huayi.com/secure/login.aspx
// @match        *://*.91huayi.com/cme/index.html
// @grant        none
// @license      CC BY-NC-ND 2.0 DEED
// ==/UserScript==

(function() {
    'use strict';
    alert = console.log;
    var wait_time=10;
    console.log('91huayi_auto_exam_keep_alive_v1');
    function getlocalStorage(name)
    {
        if(localStorage.getItem(name)!=null){
            return unescape(localStorage.getItem(name));
        }else{
            return null;
        }
    }
    function setlocalStorage(name,value)
    {
        localStorage.setItem(name,escape(value));
    }
    function getsec(str)
    {
        //alert(str);
        var str1=str.substring(1,str.length)*1;
        var str2=str.substring(0,1);
        if (str2=="s")
        {
            return str1*1000;
        }
        else if (str2=="h")
        {
            return str1*60*60*1000;
        }
        else if (str2=="d")
        {
            return str1*24*60*60*1000;
        }
    }
    if (document.querySelector("body").textContent.search("应用程序中的服务器错误。") != -1 && document.querySelector("body").textContent.search("运行时错误") != -1){
        setTimeout(function(){location.reload();},wait_time * 1000);
    };
    if (window.location.href.search("login.aspx") != -1){
        setTimeout(function(){location.reload();},wait_time * 15000);
    };
    if (window.location.href.search("cme/index.html") != -1 && getlocalStorage("classURL") != null){
        window.location.href=getlocalStorage("classURL");
    };
    if (getlocalStorage("lastactionts") == null){
        console.log("Class not started yet or last action ts misssing. Do nothing now...");
        setTimeout(function(){location.reload();},wait_time * 15000);
    }else{
        setlocalStorage("classURL",window.location.href);
        console.log(Date.parse(new Date()) - getlocalStorage("lastactionts"));
        if (Date.parse(new Date()) - getlocalStorage("lastactionts") < 30000){
            console.log("Having class now...");
            setTimeout(function(){location.reload();},wait_time * 10000);
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
        };
        setTimeout(function(){location.reload();},wait_time * 30000);
    };
})();
