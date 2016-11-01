$(document).ready(function () {


    //退款退货页面的右内容高度统一
    function widHei() {
        var ProcessL = $(".ProcessL");
        var ProcessR = $(".ProcessR");
        if (ProcessL.height() < ProcessR.height()) {
            var ProcessRH = ProcessR.height();
            ProcessL.height(ProcessRH + 10);
        }
    }
    widHei();


    //安全中心首页鼠标滑过效果
    function SecurityCenterIndex() {
        var SCOne = $(".SCOne");
        SCOne.bind({
            mouseover: function () {
                var $this = $(this);
                var SCOneDiv = $this.children("div");
                var SCOneC = $this.find(".SCOneC");
                var SCOneR = $this.find(".SCOneR");
                var SCPassWs = $this.find(".SCPassWs");
                SCOneC.removeClass("SCOneCn").addClass("SCOneCh");
                SCOneR.removeClass("SCOneRn").addClass("SCOneRh");
                
                if (SCOneC.find("img").css("display") == "none") {
                    if (SCOneDiv.hasClass("SCPassWsn")) {
                        SCPassWs.removeClass("SCPassWsn").addClass("SCPassWsh");
                        SCOneC.find("a").removeClass("Modify").addClass("Modifys").css("color", "#7abd54");
                    } else if (SCOneC.find("span").hasClass("Email")) {
                        SCOneC.find("span").removeClass("Email").addClass("Emails");
                        if (SCOneDiv.hasClass("Mark")) {
                            SCOneDiv.removeClass("SCOneLn").addClass("SCOneLh");
                        }
                        SCOneC.find("a").removeClass("Binding").addClass("Bindings").css("color", "#7abd54");
                    } else if (SCOneC.find("span").hasClass("Phon")) {
                        SCOneC.find("span").removeClass("Phon").addClass("Phons");
                        if (SCOneDiv.hasClass("Mark")) {
                            SCOneDiv.removeClass("SCOneLn").addClass("SCOneLh");
                        }
                        SCOneC.find("a").removeClass("Binding").addClass("Bindings").css("color", "#7abd54");
                    } else {
                        SCOneC.find("a").removeClass("Modify").addClass("Modifys").css("color", "#7abd54");
                    }
                } else if (SCOneC.find("img").css("display") == "block") {
                    SCOneC.find("a").removeClass("Modify").addClass("Modifys").css("color", "#7abd54");
                }
                
            },
            mouseout: function () {
                var $this_ = $(this);
                var SCOneDiv = $this_.children("div");
                var SCOneC = $this_.find(".SCOneC");
                var SCOneR = $this_.find(".SCOneR");
                var SCPassWs = $this_.find(".SCPassWs");
                SCOneC.removeClass("SCOneCh").addClass("SCOneCn");
                SCOneR.removeClass("SCOneRh").addClass("SCOneRn");
                
                if (SCOneC.find("img").css("display") == "none") {
                    if (SCOneDiv.hasClass("SCPassWsh")) {
                        SCPassWs.removeClass("SCPassWsh").addClass("SCPassWsn");
                        SCOneC.find("a").removeClass("Modifys").addClass("Modify").css("color", "#999");
                    } else if (SCOneC.find("span").hasClass("Emails")) {
                        SCOneC.find("span").removeClass("Emails").addClass("Email");
                        if (SCOneDiv.hasClass("Mark")) {
                            SCOneDiv.removeClass("SCOneLh").addClass("SCOneLn");
                        }
                        SCOneC.find("a").removeClass("Bindings").addClass("Binding").css("color", "#999");
                    } else if (SCOneC.find("span").hasClass("Phons")) {
                        SCOneC.find("span").removeClass("Phons").addClass("Phon");
                        if (SCOneDiv.hasClass("Mark")) {
                            SCOneDiv.removeClass("SCOneLh").addClass("SCOneLn");
                        }
                        SCOneC.find("a").removeClass("Bindings").addClass("Binding").css("color", "#999");
                    } else {
                        SCOneC.find("a").removeClass("Modifys").addClass("Modify").css("color", "#999");
                    }
                } else if (SCOneC.find("img").css("display") == "block") {
                    SCOneC.find("a").removeClass("Modifys").addClass("Modify").css("color", "#999");
                }
                
            }
        });
    }
    SecurityCenterIndex();




    //点击整体下拉选择
    /*--
    pullDown:下拉菜单的点击按钮
    PullMenu：下拉菜单列表内容
    TextId：输入框ID
    ClassNameOne：鼠标点击按钮后状态图的切换
    ClassNameTwo：鼠标点击按钮后状态图的切换
    --*/
    function TopBottoms(MBdOms, pullDown, PullMenu, TextId, ClassNameOne, ClassNameTwo) {
        var MBdOm = $(MBdOms);
        var xialaMenu = $(pullDown);
        var pjMation = $(PullMenu);
        var pjMationLnth = pjMation.find("a");
        var pjText = $(TextId);
        //alert(pjMationLnth.length);

        //点击事件
        xialaMenu.click(function () {
            var $this = $(this);
            if ($this.find("em").hasClass(ClassNameOne)) {
                $this.find("em").removeClass(ClassNameOne);
                $this.find("em").addClass(ClassNameTwo);
                pjText.focus();
                pjMation.slideDown(400, function () {
                    //alert(pjText.attr("value"));
                    pjMationLnth.bind("click", function () {
                        $this_ = $(this);
                        $this_.parent().siblings().find(TextId).attr("value", $this_.text());
                        $this.find("em").removeClass(ClassNameTwo);
                        $this.find("em").addClass(ClassNameOne);
                        pjMation.slideUp(400);
                    });
                });
            } else if ($this.find("em").hasClass(ClassNameTwo)) {
                $this.find("em").removeClass(ClassNameTwo);
                $this.find("em").addClass(ClassNameOne);
                pjText.blur();
                pjMation.slideUp(400);
            }
            
        }); 
        pjText.blur(function () {
            if (xialaMenu.find("em").hasClass(ClassNameTwo)) {
                xialaMenu.find("em").removeClass(ClassNameTwo);
                xialaMenu.find("em").addClass(ClassNameOne);
                pjMation.slideUp(400);
            }
            
        });
        
    }
    TopBottoms(".ChangeFMThree", "#xialaMenu", ".pjMation", "#pjText", "solid_b_btn", "solid_t_btn");
    TopBottoms(".ChangeFMFour", "#jyXiaLA", ".jyMation", "#jyText", "solid_b_btn", "solid_t_btn");
    TopBottoms(".xialaInformation", "#InformationBtn", ".xialaInformationM", "#InformationText", "solid_b_btn", "solid_t_btn");
    TopBottoms(".CPMainYZm", "#xialaMenus", ".pjMation", "#YanZ", "solid_b_btn", "solid_t_btn");
    TopBottoms(".MBdOm", "#xialaMenuOnes", ".pjMationOne", "#pjTextOnes", "solid_b_btn", "solid_t_btn");
    TopBottoms(".MBdOm", "#xialaMenuTwos", ".pjMationTwo", "#pjTextTwos", "solid_b_btn", "solid_t_btn");
    TopBottoms(".MBdOm", "#xialaMenuThrees", ".pjMationThree", "#pjTextThrees", "solid_b_btn", "solid_t_btn");
    TopBottoms(".MBdOms", "#xialaMenuFours", ".pjMationFour", "#pjTextFours", "solid_b_btn", "solid_t_btn");
    TopBottoms(".MBdOms", "#xialaMenuFives", ".pjMationFive", "#pjTextFives", "solid_b_btn", "solid_t_btn");
    TopBottoms(".MBdOms", "#xialaMenuSixs", ".pjMationSix", "#pjTextSixs", "solid_b_btn", "solid_t_btn");


    // 购物车提交页面产品块效果
    function ReferringOver() {
        var MListOneM = $(".MListOneM");  //每一个订单
        var MProduct = $(".MProduct"); //每一个产品
        var InputTop = $(".InputTop");  //头部全选按钮
        var InputFoot = $(".InputFoot"); //底部全选按钮
        var MListOneT = $(".MListOneT").find(".InputKuai"); //每一个订单的头部全选按钮
        
        //鼠标移入效果
        MProduct.mouseover(function(){
            var $thiss = $(this);
            var MProductMuch = $thiss.find(".MProductMuch");
            $thiss.css("backgroundColor", "#fcfffa");
            MProductMuch.find(".MProductMuchM").children("div").removeClass("dis_n").addClass("dis_b");
            MProductMuch.find(".MProductMuchM em").remove();
        });

        //鼠标移除效果
        MProduct.mouseout(function(){
            var $this_ = $(this);
            var MProductMuchO = $this_.find(".MProductMuch");
            if($this_.find(".Inputs").attr("checked")){
                $this_.css("backgroundColor", "#fcfffa");
                MProductMuchO.find(".MProductMuchM").children("div").removeClass("dis_b").addClass("dis_n");
                MProductMuchO.find(".MProductMuchM").append("<em>x&nbsp;1</em>");
            }else if($this_.find(".Inputs").attr("checked") == undefined){
                $this_.css("backgroundColor","#ffffff");
                MProductMuchO.find(".MProductMuchM").children("div").removeClass("dis_b").addClass("dis_n");
                MProductMuchO.find(".MProductMuchM").append("<em>x&nbsp;1</em>");
            }
        });

        //鼠标点击效果 Inputs
        MProduct.find("input.Inputs").click(function(){
            var $this_s = $(this);
            if($this_s.hasClass("checkeds")){
                $this_s.removeClass("checkeds");
                $this_s.removeAttr("checked");
                $this_s.parents(".MListOneM").siblings(".MListOneT").find(".InputKuai").removeClass("InputKuais").removeAttr("checked");
            }else{
                $this_s.addClass("checkeds");
                $this_s.attr({checked:"checked"});
                $this_s.parent(".MProduct").css("backgroundColor", "#fcfffa");
                var InputsLen = $this_s.parents(".MListOneM").find(".Inputs");
                //alert($this_s.parents(".MListOneM").find(".Inputs").length);
                InputsLen.each(function(i){
                    var InputKuaiC = $this_s.parents(".MListOneM").siblings(".MListOneT").find(".InputKuai");
                    if(InputsLen[i].className == "float_l Inputs checkeds"){
                        //alert(InputsLen[i]);
                        InputKuaiC.addClass("InputKuais").attr({ checked: "checked" });
                        return true;
                    }else{
                       InputKuaiC.removeClass("InputKuais").removeAttr("checked");
                       return false;
                    }
                }); 
            } 
        });
        
    }
    ReferringOver();


    //全选
    function allSelect(allSels){
        var allSel = $(allSels); 
        allSel.click(function(){
            if (allSel.hasClass("allSelect")) {
                $("input[name = 'all']").removeClass("allSelect").removeAttr("checked");
                $("input[name = 'kua']").removeClass("InputKuais").removeAttr("checked");
                $("input[name = 'ch']").removeClass("checkeds").removeAttr("checked");
            } else {
                $("input[name = 'all']").addClass("allSelect").attr({ checked: "checked" });
                $("input[name = 'kua']").addClass("InputKuais").attr({ checked: "checked" });
                $("input[name = 'ch']").addClass("checkeds").attr({ checked: "checked" });
            }
        });
        
    }
    allSelect("input.InputTop");
    allSelect("input.InputFoot");



    //选择一个店铺的所有商品
    function radioSelect() {
        var radioSelec = $("input[name = 'kua']");
        radioSelec.click(function () {
            var $this = $(this);
            if ($this.hasClass("InputKuais")) {
                $this.removeClass("InputKuais").removeAttr("checked");
                $this.parent(".MListOneT").siblings(".MListOneM").find("input[name = 'ch']").removeClass("checkeds").removeAttr("checked");
                $this.parent(".MListOneT").siblings(".MListOneM").find(".MProduct").css("backgroundColor", "#ffffff");
            } else {
                $this.addClass("InputKuais").attr({ checked: "checked" });
                $this.parent(".MListOneT").siblings(".MListOneM").find("input[name = 'ch']").addClass("checkeds").attr({ checked: "checked" });
                $this.parent(".MListOneT").siblings(".MListOneM").find(".MProduct").css("backgroundColor", "#fcfffa");
            }
        });
    }
    radioSelect();


    //产品评价页面的评价星级点击事件
    function pingJia() {
        $(".pingjia a").click(
            function () {
                var num = $(this).index();
                var len = $(this).index();
                var thats = $(this).parent(".pingjia").find("a");
                if ($(thats).eq(len).attr("class") == "EvaMCy") {
                    if ($(thats).eq(num).attr("class") == "EvaMCy") {
                        $(thats).removeClass();
                        for (var i = 0 ; i < num; i++) {
                            $(thats).eq(i).addClass("EvaMCy");
                        }
                    } else {
                        $(thats).removeClass();
                        for (var k = 0 ; k < len; k++) {
                            $(thats).eq(k).addClass("EvaMCy");
                        }
                    }
                } else {
                    $(thats).removeClass();
                    for (var j = 0 ; j < num; j++) {
                        $(thats).eq(j).addClass("EvaMCy");
                    }
                }
            }
        );
    }
    pingJia();




    //评价详情页面的评价内容高度随文字内容变化
    function EvaltionH(){
        var EveListMOne = $(".EveListMOne");
        //alert(EveListMOne[1]);
        EveListMOne.each(function (i) {
            var $this = $(this);
            var EveListML = $this.find(".EveListML");
            var EveListMR = $this.find(".EveListMR");
            if (EveListML.height() == EveListMR.height()) {
                EveListML.children("img.EveListMOnePic").css("marginTop", 0 + "px");
            } else if (EveListML.height() < EveListMR.height()) {
                EveListML.children("img.EveListMOnePic").css("marginTop", (EveListMR.height() - 236) / 2 + "px");
                var EveListMeva = EveListMR.find(".EveListMeva");
                EveListMeva.children("span").css("marginTop", (EveListMR.height() - 209) / 2 + "px");
                EveListMeva.children("h5").css("marginTop", (EveListMR.height() - 209) / 2 + "px");
                EveListMeva.children("b").css("top", (EveListMR.height() - 201) / 2 + "px");
            }
        });
    }
    EvaltionH();

});