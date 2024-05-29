// ==UserScript==
// @name         91huayi_auto_class(91华医公需课选修课视频考试我全都要)
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  91huayi_auto_class_
// @author       Acdtms4zfx
// @match        *://*.91huayi.com/course_ware/*
// @grant        none
// @license      CC BY-NC-ND 2.0 DEED
// ==/UserScript==

(function() {
    'use strict'
    alert = console.log;
    console.log('91huayi_auto_class_v1.4');
    var wait_time=10;
    function setlocalStorage(name,value)
    {
        localStorage.setItem(name,escape(value));
    };
    function enableStartExam(){
        var btn_exam = $("#jrks");
        showExam(true);
        var p = $("<p>   </p>");
        p.appendTo(btn_exam);
        setTimeout(() => {
            p.trigger('click');
        }, wait_time);
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
    var fuc = setInterval(function() {
        document.querySelector("#video > div > div.pv-video-wrap > video").muted=true; //启用未交互后台播放
        document.querySelector("#video > div > div.pv-video-wrap > video").play(); //播放
        document.querySelector("#video > div > div.pv-video-wrap > video").volume=0; //播放器静音
        closeBangZhu(); //关闭提示弹窗
        if (document.querySelector("#video > div > div.pv-line-tips") != null){
            document.querySelector("#video > div > div.pv-line-tips > a").click();
        }; //切换线路
        if (document.querySelector("#video > div > div.pv-ask-modal-wrap") != null){
            document.querySelector("#video > div > div.pv-ask-modal-wrap").remove();
        }; //清除问题
        if (document.querySelector("#video > div > div.sign-in-menu > div") != null){
            document.querySelector("#video > div > div.sign-in-menu > div").remove();
        }; //清除签到
        if (document.querySelector("#video > div > div.pv-skin-blue.pv-video-bottom.pv-subtitle-hide.pv-base-control > div.pv-controls > div.pv-controls-right") != null){
            for (var i=1;i<=document.querySelector("#video > div > div.pv-skin-blue.pv-video-bottom.pv-subtitle-hide.pv-base-control > div.pv-controls > div.pv-controls-right").childElementCount;i++){
                if (document.querySelector("#video > div > div.pv-skin-blue.pv-video-bottom.pv-subtitle-hide.pv-base-control > div.pv-controls > div.pv-controls-right > div:nth-child("+i+") > button") != null){
                    if(document.querySelector("#video > div > div.pv-skin-blue.pv-video-bottom.pv-subtitle-hide.pv-base-control > div.pv-controls > div.pv-controls-right > div:nth-child("+i+") > button").className.indexOf('pv-icon-volumeon') != -1){
                        document.querySelector("#video > div > div.pv-skin-blue.pv-video-bottom.pv-subtitle-hide.pv-base-control > div.pv-controls > div.pv-controls-right > div:nth-child("+i+") > button").click();
                    };
                };
            };
        }; //播放按钮静音
        initialSign(); //调用签到保活（保持播放）
        while (document.querySelector("#video > div > div.sign-in-menu > div > div.sign-in-wrap > div.sign-in-wrap_btn > span") != null){
            document.querySelector("#video > div > div.sign-in-menu > div > div.sign-in-wrap > div.sign-in-wrap_btn > span").click();
        }; //签到
        if (document.querySelector("#video > div > div.pv-video-wrap > div.pv-log-error > div.pv-log-errormsg").textContent!=""){
            console.log("Looks like something goes wrong, try refresh the page after 10s...");
            setTimeout(function(){location.reload();},wait_time * 1000);
        }; //If error
        document.querySelector("#jrks").click();
        setlocalStorage("lastactionts",Date.parse(new Date()));
    },wait_time * 1000);
})();
