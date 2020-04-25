// ==UserScript==
// @name         cme_91huayi_exam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*.91huayi.com/pages/exam.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    alert = console.log;
    var arr_answer = ["A、2008年以后以重工业为主导","A、科技实力跃升，跻身创新型国家前列","A、迈入制造强国行列","A、普惠性、高质量、可持续","A、人民生活总体上达到温饱","A、社会保险卡","A、实施“头雁”工程","A、市民待遇","A、以4G、量子通信为引领的新一代信息技术及IT产业","B、1∕4","B、10","B、129","B、3","B、产业兴旺 生态宜居 乡风文明 治理有效 生活富裕 摆脱贫困","B、创新、创业、创意","B、二〇二〇年","B、防范生态危机","B、房地产业处于龙头地位","B、局部领跑","B、劳动力短缺","B、三次产业从“一、二、三”结构演变为“二、三、一”结构，进一步演变为“三、二、一”结构","B、市场高水平互联互通","B、维护祖国的团结稳定，早日实现“和平统一”","B、先导产业就是主导产业","B、支柱产业一定是主导产业","B、制度创新","B、住有所居","C、10年","C、4.5","C、产业结构调整","C、电子设备制造业占先进制造业的比重最高","C、建成 决胜","C、农民和土地","C、十六大","C、市场","D、产业战略、产业政策、产业规划没有什么差别","D、敢闯敢试、敢为人先、埋头苦干","D、坚持制度创新","D、绿水青山就是金山银山","D、权力清单、责任清单、负面清单","D、人才强国战略、军民融合发展战略、乡村振兴战略","D、是促进收入分配公平的根本措施","D、新时代","D、以上都包括","D、以上都是","D、战略产业是永恒不变的","D、战略性新兴产业就是主导产业","D、总体小康只是城市的，全面小康还包括农村","E、以上都是"];
    var special_question_true = ["2、广东提出实施以功能区为引领的区域协调发展战略，加快构建形成“一核一带一区”区域发展新格局。其中，“一区”是指北部生态发展区，是全省重要的生态屏障（ ）","1、发展是第一要务，人才是第一资源，创新是第一动力（ ）","1、“三期叠加”是指增长速度换档期、结构调整阵痛期和前期刺激政策消化期的叠加（ ）","2、广东常住人口规模已连续稳居全国首位12年（ ）","1、广东人才区域分布极不均衡（ ）","2、2018年，广东常住人口城镇化率首次超过70%（ ）","1、2018年，广东碳排放权交易市场总体规模位居全国第一，世界第三位，仅次于欧盟和韩国（ ）","2、环保投入占GDP的比重严重偏低，是广东生态文明建设不充分的重要体现（ ）","2、“十四五”广东生态文明建设的总体思路是：巩固前期成果、调整目标方向、优化治理手段、完善制度体系、提高发展质量（ ）","1、农业农村污染问题是广东生态文明建设城乡之间不平衡的表现（ ）","2、《粤港澳大湾区发展规划纲要》于2019年2月正式公布全文（ ）","2、粤港澳合作经历了“前店后厂”的阶段（ ）","2、广深港澳科创走廊是粤港澳大湾区建设的重要抓手之一（ ）"];
    var special_question_false = ["1、深圳对照十九大要求，提出“民生七优”工作目标：幼有善育、学有优教、劳有厚得、病有良医、老有所养、住有所居、弱有众扶。体现了深圳的担当，以及追逐全球城市定位、彰显社会主义优越性的本质意义（ ）","1、广东人口转变具有数量转变与质量转变同步特征（ ）","1、《粤港澳大湾区发展规划纲要》中没有提出有关生态文明建设方面的任务要求（ ）","2、2019年，广东71个国考断面水质优良比例为77.5%，已经达到了国家下达的约束性考核目标（ ）","1、粤港澳大湾区包括了2个特别行政区和10个广东省城市（ ）","1、粤港澳大湾区的集装箱吞吐量低于东京湾区（ ）","1、粤港澳大湾区和改革开放初期粤港澳合作的目标是完全相同的（ ）","3、珠海是粤港澳大湾区的四个中心城市之一（ ）"];
    console.log('Script Ready!');
    var qc = document.querySelector("#gvQuestion > tbody").childElementCount;
    for (var i=1;i<=qc;i++){
		var type = null;
        if (document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td") != null){
            for (var l = 0; l < special_question_true.length; l++) {
                var question_t = special_question_true[l];
                if (question_t == document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table > thead > tr > th > span").textContent.trim() ) {
                    type="TQ";
                }
            }
			for (var m = 0; m < special_question_false.length; m++) {
                var question_f = special_question_false[m];
                if (question_f == document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table > thead > tr > th > span").textContent.trim() ) {
                    type="FQ";
                }
            }
			console.log(type);
			var sc = document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td").childElementCount;
			for(var j=1;j<=sc;j++){
				if (document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2)> tbody > tr:nth-child("+j+") > td") != null){
					console.log("Ready for question");
					if (type=="TQ"){
						if ("A、正确" == document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2)> tbody > tr:nth-child("+j+") > td").textContent.trim() ) {
							document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2)> tbody > tr:nth-child("+j+") > td > input").click();
						};
					}else if(type=="FQ"){
						if ("B、错误" == document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2)> tbody > tr:nth-child("+j+") > td").textContent.trim() ) {
							document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2)> tbody > tr:nth-child("+j+") > td > input").click();
						};
					}else{
						for (var s = 0; s < arr_answer.length; s++) {
							var thisEntry = arr_answer[s];
							if (thisEntry == document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2)> tbody > tr:nth-child("+j+") > td").textContent.trim() ) {
								document.querySelector("#gvQuestion > tbody > tr:nth-child("+i+") > td > table:nth-child(2)> tbody > tr:nth-child("+j+") > td > input").click();
							};
						};
					};
				};
			};
        };
    };
    document.querySelector("#btn_submit").click();
    setTimeout( function(){
    location.reload();
    }, 5 * 1000 );
})();
