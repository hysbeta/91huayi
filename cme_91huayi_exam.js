// ==UserScript==
// @name         cme_91huayi_exam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Acdtms4zfx
// @match        http://*.91huayi.com/pages/exam.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    alert = console.log;
    setTimeout((function(){console.log('Script Ready!')}),5000);
    var qdict = {
        "《广东省数字经济发展规划（2018-2025年）》提出，广东省数字经济发展面临的形势包括以下哪些":"以上都是",
        "发达国家新一代信息技术发展战略重点不包括以下哪项":"共享经济",
        "孵化器模式的基本要素不包括":"淘汰过程",
        "三螺旋空间具体指的是以下哪几项":"以上都是",
        "世界创新格局和板块呈向西移动趋势，将有可能深刻影响改变国家力量对比，成为重塑世界经济结构和国家竞争格局的关键。":"错误",
        "数字化、智能化、网络化并非是一场思维、思想与系统管理的革命。":"错误",
        "中大创新谷的服务模式为属于下列哪种模式":"投资促进型",
        "中国制造2025十大重点领域中，排在第一位的是哪个领域":"新一代信息通信技术产业",
        "制造业转型升级的重点不包括":"精细化生产向规模化标准化升级",
        "新高技术战略——创新德国”部署的六大优先领域包括":"智能交通",
        "大湾区经济社会整合的困境有“两制”差异制约公共产品供给合作":"正确",
        "对具体运营时间不做要求是粤港澳科技企业孵化载体的认定特点之一。":"正确",
        "改革开放40年的广东经验昭示，广东未来技术发展唯":"自主创新",
        "广东省众创空间认定条件中，申报主体应为广东省内注册的独立法人，机构实际注册并运营满2年。":"错",
        "互联网具有使用者少，信息储存量小，获取低效，慢速的特点":"错误",
        "基于功能的数字平台可分为哪几类（以上都是）":"以上都是",
        "三螺旋—场相互作用模型说明从自由主义到国家干预主义模式，但是三个机构范畴之间并不需要保持一定的张力和均衡。":"错误",
        "太阳能光伏设备代表企业在我国的分布主要集中于长三角地区，其中":"江苏省",
        "习近平总书记高度重视科技创新与成果转化工作，强调要加快创新成果转化应用、彻底打通官咖、破解实现":"技术突破、产品制造、市场模式、产业发展",
        "“互联网+”战略是在哪一年提出的":"2015",
        "《粤港澳大湾区发展规划纲要》提出，粤港澳大湾区要建成世界哪几大产业基地":"以上都是",
        "2017年12月22日，广东省启动的第一批省实验室不包括":"岭南现代农业科学与技术广东省实验室",
        "2019年全球风机制制造商前十五强中，中国占":"8",
        "根据孵化器联网原动力对它们进行分类是有意的，可以分为互联网络、内部网络、外部网络三种类型。":"正确",
        "物联网是以互联网为基础，通过射频识别(RFID)、传感器、无线通信等技术，构造一个覆盖面极大、所连物件极多的虚拟与现实相连的网络。":"正确",
        "在2021年全国两会期间，习近平总书记多次提及高质量发展，下列哪项不是习总书记的论述":"高质量发展不是中国一国的要求，而是全世界国家共同的要求",
        "根据应用场景的不同，机器人可以分为":"工业机器人和服务机器人",
        "广东省大学科技园建设问题较国内其他先进地区均有一定的差距，并与省内高水平大学建设要求及经济科技发展水平严重不符。（正确）":"正确",
        "您是否已经学习完本课程":"是"
    };
    var qc = document.querySelector("#gvQuestion > tbody").childElementCount;
    for (var i=1;i<=qc;i++){
		var type = null;
        if (document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td") != null){
            var QuestionContent = document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td").textContent;
            console.log("Question:");
            console.log(QuestionContent);
            for(var key in qdict){
                if(QuestionContent.indexOf(key) != -1){
                    console.log("Answer:");
                    console.log(qdict[key]);
                    console.log("Finding answer...");
                    var sc = document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody").childElementCount;
                    AnsSelect:
                    for(var j=1;j<=sc;j++){
                        var AnswerContent = document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody > tr:nth-child("+j+")").textContent.trim();
                        if(AnswerContent.indexOf(qdict[key]) != -1){
                            console.log("Answer is found!");
                            document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2) > tbody > tr:nth-child("+j+") > td > label").click()
                            break AnsSelect;
                        }
                    }
                }
            }
        };
    };
    document.querySelector("#btn_submit").click();
    setTimeout( function(){
    location.reload();
    }, 5000);
})();
