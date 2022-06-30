// ==UserScript==
// @name         cme_91huayi_class
// @namespace    https://github.com/hysbeta/91huayi/blob/master/cme_91huayi_auto_exam.js
// @version      1.0
// @description  try to take over the world!
// @author       Acdtms4zfx
// @match        http://*.91huayi.com/course_ware/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

// 91华医 2022年公需课：数字化转型与产业创新发展

(function() {
    'use strict'
    alert = console.log;
    var qdict = {
        "年度公需科目是否还可以补学":"否，根据上级文件要求，逾期不提供补学服务。",
        "年度公需科目的学习是否有时间限制":"是，截止至",
        "是否需要在广东省专业技术人员继续教育管理系统中进行注册":"是，需要注册并完善个人信息。",
        "都需要学习完成吗":"完成一个专题即可",
        "我国国民经济和社会发展第十四个五年规划":"正确",
        "第二次信息革命代表性是英国的":"错误",
        "是对数字经济的认识由关注生产力，到生产力和生产关系并重":"错误",
        "将为数字经济提供全新的关键基础设施":"正确",
        "再到突出数据要素对经济社会发展的重要作用":"错误",
        "将为数字经济提供全新的关键基础设施":"正确",
        "数字化产业广东省软件业务收入规模连续":"正确",
        "数字经济带来的增长必将是经济发展的重要因素":"正确",
        "信息通信技术成为推进生产力提升的通用性主导力量":"正确",
        "网络、数据中心等新型基础设施建设进度，这是数据中心首次被明确纳入新型基础设":"错误",
        "数字产业化即信息通信产业，是数字经济发展的先导产业，为数字经济发展提供技术、产品、服务和解决方案等":"正确",
        "目前是全球数字经济发展的重大战略机遇期，应继续加快数字经济的发展步伐，优先于其他产业的发展":"错误",
        "十四五愿景目标:以实现“九个一”为重点，建设“都会城市、智慧城市”，打造西部新型智慧城市标杆":"正确",
        "数据要素的资产化指的是企业":"正确",
        "数字经济中的核心生产力是算力":"正确",
        "是我国基于新一轮科技革命和产业变革的大背景提出的战略工程":"正确",
        "“东数西算”中的“数”，指的是数据":"正确",
        "老基建与新基建的区别主要是设施的投入的经费不一样":"错误",
        "工程调配的资源是新型可再生的算力资源":"正确",
        "有助于促进我国区域平衡协调发展":"正确",
        "数字技术是数字经济长期快速发展的核心基础和创新源动力。":"正确",
        "数字经济是以数字化的知识和信息作为关键生产要素，以数字技术为核心驱动力量，以现代信息网络为重要载体，通过数字技术与实体经济深度融合":"正确",
        "数字化转型是一件知易难、持续不断的过程":"正确",
        "传统数字化转型相比敏捷式数字化转型，更适用于广大中小企业的数字化转型":"错误",
        "年正式进入元宇宙":"错误",
        "元宇宙的理想状态应是赋能全产业和生态开放、经济自洽、虚实互通的":"正确",
        "过去的时代，人需要学习操作机器，未来的趋势是人成为唯一的控制中心":"正确",
        "创新的认知属性有相对优势、兼容性、复杂性、可试性、可见性":"正确",
        "数字化转型包括资源链接、资产形成、信息反馈、决策赋能":"正确",
        "释放数据价值的有效路径是数据治理":"正确",
        "为了摆脱招工难、产能不足、加工质量低下等问题，企业只需要研发购置大量的自动化装备以机器换人方式提高生产率即可":"错误",
        "数字化转型的价值维度包括工程建设":"错误",
        "网络化、智能化，新技术、新产业、新模式、新产品大规模涌现":"正确",
        "为了摆脱招工难、产能不足、加工质量低下等问题，企业只需要研发购置大量的自动化装备以机器换人方式提高生产率即可":"错误",
        "我国数字经济延续蓬勃发展态势，规模由":"正确",
        "智能工厂规划的步骤是规划":"正确",
        "数字化工厂是一个迭代升级、不断演化的过程，在每一个周期告一段落的时候，需要对建设效果进行客观的评价":"正确",
        "游标卡尺不属于智能装备":"正确",
        "只需将生产过程设备、质量、物料、人员等数据实时上传":"错误",
        "数字化工厂运营平台主要解决企业运营层面的数据管理和流程处理问题":"正确",
        "德国工业":"错误",
        "我国工业互联网标识解析体系的注册量已经超过":"正确",
        "工业互联网平台的主要工作和目标是对工业数据的汇聚":"错误",
        "制造业的数字化转型是个系统工程，需要从多方面体系化推进":"正确",
        "《中华人民共和国数据安全法》和《中华人民共和国个人信息保护法》":"错误",
        "的立法宗旨是在确保个人信息安全的前提下，依法促进个人信息的合理利用，“保护”个人信息和“促进”合理利用要同步推进":"正确",
        "网络运营者收集、使用个人信息，应当遵循合法、正当、必要的原则,公开收集、使用规则":"正确",
        "第二十六条在公共场所安装图像采集、个人身份识别设备，应当为维护公共安全所必需":"正确",
        "任何国家或者地区在个人信息保护方面对中华人民共和国采取歧视性的禁止、限制或者其他类似措施的":"正确",
        "任何组织、个人有权对违法个人信息处理活动向履行个人信息保护职责的部门进行投诉、举报。":"正确",
        "所说的数据是指任何以电子或者其他方式对信息的记":"正确",
        "规定的个人信息包括匿名化处理后的信息":"错误",
        "规定的网络运营者一般安全保护义务的是纳入关键信息基础设施统一管理":"错误",
        "规定的一般安全制度":"错误",
        "个人要求个人信息处理者对其个人信息处理规则进行解释说明的，如果解释说明涉及商业秘密的，个人信息处理者可以拒绝。":"正确",
        "个人信息处理者处理不满十四周岁未成年人个人信息的，应当取得未成年人的父母或者其他监护人的同意":"正确",
        "规定的内容包括数据活动安全要求、信息无障碍建设、数据财产权益":"正确",
        "规定对新技术、新产业、新业态、新模式等实行包容审慎监":"正确"
    };
    sleep();
    var fuc = setInterval(function() {
        if (document.querySelector("#video > div > div.pv-ask-modal-wrap > div > div.pv-ask-content.pv-ask-content-noimg > div.pv-ask-right > div > h3")){
            var QuestionContent = document.querySelector("#video > div > div.pv-ask-modal-wrap > div > div.pv-ask-content.pv-ask-content-noimg > div.pv-ask-right > div > h3").textContent;
            console.log("Question:");
            console.log(QuestionContent);
            for(var key in qdict){
                if(QuestionContent.indexOf(key) != -1){
                    console.log("Answer:");
                    console.log(qdict[key]);
                    console.log("Finding answer...");
                    var sc = document.querySelector("#video > div > div.pv-ask-modal-wrap > div > div.pv-ask-content.pv-ask-content-noimg > div.pv-ask-right > div").childElementCount;
                    AnsSelect:
                    for(var i=2;i<=sc;i++){
                        var AnswerContent = document.querySelector("#video > div > div.pv-ask-modal-wrap > div > div.pv-ask-content.pv-ask-content-noimg > div.pv-ask-right > div > div:nth-child("+ i +")").textContent.trim();
                        if(AnswerContent.indexOf(qdict[key]) != -1){
                            console.log("Answer is found!");
                            document.querySelector("#video > div > div.pv-ask-modal-wrap > div > div.pv-ask-content.pv-ask-content-noimg > div.pv-ask-right > div > div:nth-child("+ i +") > label").click()
                            break AnsSelect;
                        };
                    };
                };
            };
            document.querySelector("#video > div > div.pv-ask-modal-wrap > div > div.pv-ask-foot > button.pv-ask-submit").click();
            document.querySelector("#video > div > div.pv-ask-modal-wrap.pv-ask-modal-answer > div > div.pv-ask-foot > button").click();
        };
        document.querySelector("#jrks").click();
    },10000);
})();
