// ==UserScript==
// @name         91huayi_auto_exam_sub_ans_v2
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  try to take over the world!
// @author       Acdtms4zfx
// @match        *://*.91huayi.com/pages/exam.aspx?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';//写cookies
    alert = console.log;
    console.log('91huayi_auto_exam_sub_ans_v2');
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
    //console.log(correct_ans);
    //console.log(wrong_ans);
    var i, j, question_text, ans_text;
    var sub_ans = {};
    for (i=2;i<=document.querySelector("#gvQuestion > tbody").childElementCount;i++){
        question_text=(document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table.tablestyle > thead > tr > th > span").textContent.substring(document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table.tablestyle > thead > tr > th > span").textContent.indexOf("、")+1));
        console.log("Q:"+question_text)
        if (correct_ans.hasOwnProperty(question_text)){
            for (j=1;j<=document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody").childElementCount;j++){
                if (correct_ans[question_text]==document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody > tr:nth-child("+j+") > td").textContent){
                    document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody > tr:nth-child("+j+") > td > input").click();
                    ans_text=document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody > tr:nth-child("+j+") > td").textContent
                    sub_ans[question_text]=ans_text;
                    console.log("Already have correct answer for this question -> "+ans_text)
                    break;
                }
            }
        }else if(wrong_ans.hasOwnProperty(question_text)){
            for (j=1;j<=document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody").childElementCount;j++){
                if (wrong_ans[question_text].indexOf(document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody > tr:nth-child("+j+") > td").textContent) == -1){
                    document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody > tr:nth-child("+j+") > td > input").click();
                    ans_text=document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody > tr:nth-child("+j+") > td").textContent
                    sub_ans[question_text]=ans_text;
                    console.log("Only have wrong answer for this question, try -> "+ans_text)
                    break;
                }
            }
        }else{
            document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody > tr:nth-child(1) > td > input").click();
            ans_text=document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody > tr:nth-child(1) > td").textContent
            sub_ans[question_text]=ans_text;
            console.log("First time meet this question, try -> "+ans_text)
        }
    };
    //console.log(sub_ans);
    setCookie("sub_ans",JSON.stringify(sub_ans),"s300")
    sleep();
    document.querySelector("#btn_submit").click();
    setTimeout(function(){location.reload();},5000);
})();
