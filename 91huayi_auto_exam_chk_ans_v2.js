// ==UserScript==
// @name         91huayi_auto_exam_chk_ans_v2
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  try to take over the world!
// @author       Acdtms4zfx
// @match        *://*.91huayi.com/pages/exam_result.aspx?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';//写cookies
    alert = console.log;
    console.log('91huayi_auto_exam_chk_ans_v2');
    function sleep(time, unit){
        if(time == null){time = 15000;}
        if(unit != null){time = time * 1000;}
        for(var t = Date.now();Date.now() - t <= time;);
    }
    function setCookie(name,value,time)
    {
        var strsec = getsec(time);
        var exp = new Date();
        exp.setTime(exp.getTime() + strsec*1);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
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
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

        if(arr=document.cookie.match(reg))

            return unescape(arr[2]);
        else
            return null;
    }
    function delCookie(name)
    {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
    if (getCookie("sub_ans")==null){
        var sub_ans = {};
    }else{
        var sub_ans = JSON.parse(getCookie("sub_ans"));
    };
    if (getCookie("correct_ans")==null){
        var correct_ans = {};
    }else{
        var correct_ans = JSON.parse(getCookie("correct_ans"));
    };
    if (getCookie("wrong_ans")==null){
        var wrong_ans = {};
    }else{
        var wrong_ans = JSON.parse(getCookie("wrong_ans"));
    };
    var i, j, key, wrong_questions;
    wrong_questions = [];
    for (i=1;i<=document.querySelector("#ctl00 > div.state_container > div.state_cent_box > ul").childElementCount;i++){
        wrong_questions.push(document.querySelector("#ctl00 > div.state_container > div.state_cent_box > ul > li:nth-child("+i+") > p").textContent);
    }
    //console.log(wrong_questions);
    for (key in sub_ans) {
        console.log("Q:"+key);
        if (wrong_questions.indexOf(key) != -1){
            console.log("Wrong answer -> "+sub_ans[key]);
            if (!wrong_ans.hasOwnProperty(key)){
                wrong_ans[key]=[];
            };
            wrong_ans[key].push(sub_ans[key]);
        }else{
            correct_ans[key]=sub_ans[key];
            console.log("Correct answer -> "+sub_ans[key]);
        };
    };
    //console.log(sub_ans);
    //console.log(correct_ans);
    //console.log(wrong_ans);
    if (document.querySelector("#ctl00 > div.state_container > div.state_cent_box > div.state_tips > p").textContent=="考试通过"){
        delCookie("sub_ans");
        delCookie("correct_ans");
        delCookie("wrong_ans");
        for (j=1;j<=document.querySelector("#ctl00 > div.state_container > div.state_cent_box > ul").childElementCount;j++){
            if (document.querySelector("#ctl00 > div.state_container > div.state_cent_box > ul > li:nth-child("+j+") > input").value=="立即学习"){
                console.log("Congratulations! We will move to next class in 15s...");
                console.log("Next:"+document.querySelector("#ctl00 > div.state_container > div.state_cent_box > ul > li:nth-child("+j+") > p").title);
                sleep();
                document.querySelector("#ctl00 > div.state_container > div.state_cent_box > ul > li:nth-child("+j+") > input").click();
                break;
            };
        }
    }else{
        console.log("Oh... We will take the exam again in 15s...");
        delCookie("sub_ans");
        setCookie("correct_ans",JSON.stringify(correct_ans),"s300");
        setCookie("wrong_ans",JSON.stringify(wrong_ans),"s300");
        sleep();
        document.querySelector("#ctl00 > div.state_container > div.state_cent_box > div.state_foot > input:nth-child(2)").click();
    };
    if (document.querySelector("#ctl00 > div.state_container > div.state_cent_box > div.state_foot > input:nth-child(1)").value!="申请证书"){
        setTimeout(function(){location.reload();},5000);
    }else{
        console.log("Congratulations! It's all done~")
    }
})();
