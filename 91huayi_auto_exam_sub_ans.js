// ==UserScript==
// @name         91huayi_auto_exam_sub_ans
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  91huayi_auto_exam_sub_ans_
// @author       Acdtms4zfx
// @match        *://*.91huayi.com/pages/exam.aspx?*
// @grant        none
// @license      CC BY-NC-ND 2.0 DEED
// ==/UserScript==

(function() {
    'use strict';
    alert = console.log;
    var wait_time=10;
    console.log('91huayi_auto_exam_sub_ans_v1.4');
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
    function dellocalStorage(name)
    {
       localStorage.removeItem(name);
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
    if (getlocalStorage("correct_ans")==null){
        var correct_ans = {};
    }else{
        var correct_ans = JSON.parse(getlocalStorage("correct_ans"));
    };
    if (getlocalStorage("wrong_ans")==null){
        var wrong_ans = {};
    }else{
        var wrong_ans = JSON.parse(getlocalStorage("wrong_ans"));
    };
    console.log("correct_ans:"+JSON.stringify(correct_ans));
    console.log("wrong_ans:"+JSON.stringify(wrong_ans));
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
    console.log("sub_ans:"+JSON.stringify(sub_ans));
    setlocalStorage("sub_ans",JSON.stringify(sub_ans))
    setlocalStorage("lastactionts",Date.parse(new Date()));
    document.querySelector("#btn_submit").click();
    setTimeout(function(){location.reload();},wait_time * 1000);
})();
