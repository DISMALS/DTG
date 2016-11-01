$(function () {

    //鼠标滑出效果
    (function () {
        var leftMenu = $('.leftMainDd');
        $(leftMenu).mouseleave(function () {
            $(this).animate({
                width: '130px',
                height: '34px',
                paddingLeft: '60px'
            }, 500);
        });
    })();


    //用户头像鼠标滑过效果
    (function filterBck() {
        var kuangPic = $('.kuangPic');
        $(kuangPic).mouseleave(function () {
            //alert('我执行了！');
            $('.TopLeftl > .filterBck').animate({
                backgroundColor: '#3a3a3a',
                filter: 'alpha(opacity = .0)',
                opacity: '0'

            }, 2000);
        });
    })();


    //鼠标点击下滑显示内容
    (function () {
        var shuaixuan = $("#shuaixuan");
        var MSearchRList = $("#MSearchRList");
        shuaixuan.click(function () {
            if (shuaixuan.hasClass('MSearchRBtn')) {
                shuaixuan.removeClass("MSearchRBtn");
                shuaixuan.addClass("MSearchRBtns");
                MSearchRList.show(300);
            } else {
                shuaixuan.removeClass("MSearchRBtns");
                shuaixuan.addClass("MSearchRBtn");
                MSearchRList.hide(300);
            }

        });
    })();


    //鼠标滑过显示订单详情
    (function () {
        var ddxqBtn = $(".ddxqBtn");
        ddxqBtn.mouseover(function () {
            $(this).css({
                width: "258px",
                height: "168px",
                marginLeft: "-66px"
            });
            $(this).siblings(".tanChuang").css("display", "block");
        }).mouseout(function () {
            $(this).css({
                width: "127px",
                height: "20px",
                marginLeft: "0px"
            });
            $(this).siblings(".tanChuang").css("display", "none");
        })
    })();


    //鼠标滑过我的订单页面订单状态导航效果
    (function () {
        var MMenu = $("#MMenu");
        var MMenuLi = MMenu.find("li");
        //alert(MMenuLi.className);
        MMenuLi.mouseover(function () {
            var $this = $(this);
            if ($this.hasClass("liNormal")) {
                $this.append("<b>");
                $("b").addClass("DLeft");
            }
        });
        MMenuLi.mouseout(function () {
            var $this_ = $(this);
            if ($this_.hasClass("liNormal")) {
                $(".DLeft").remove();
            }
        });
        MMenuLi.click(function () {
            var $this_s = $(this);
            $(".DLeft").remove();
        });
    })();


    //鼠标经过删除按钮显示
    (function () {
        var InformationMMOne = $(".InformationMMOne");
        InformationMMOne.mouseover(function () {
            $this = $(this);
            $this.find(".MTopRImgR").css("display", "block");
            $this.css("border", "1px solid #f4bcbc");
        });
        InformationMMOne.mouseout(function () {
            $this_ = $(this);
            $this_.find(".MTopRImgR").css("display", "none");
            $this_.css("border", "1px solid #e5e5e5");
        });
    })();


    //弹窗内容下拉选择项
    (function () {
        var popUpxl = $("#popUpxl");
        var qxBtnBs = $("#qxBtnB");
        var checkBox = $(".checkBox");
        var popUpText = $("#popUpText");
        popUpxl.bind("click", function () {
            if (qxBtnBs.hasClass("qxBtnB")) {
                var checkBoxOne = $(".checkBoxOne");
                qxBtnBs.removeClass("qxBtnB").addClass("qxBtnT");
                checkBox.slideDown(400);
                checkBoxOne.click(function () {
                    var $this = $(this);
                    var selectPic = $(".selectPic");
                    var thisSelectPic = $this.find(".selectPic");
                    if (thisSelectPic.hasClass("Blur")) {
                        qxBtnBs.removeClass("qxBtnT").addClass("qxBtnB");
                        thisSelectPic.removeClass("Blur").addClass("Focus");
                        popUpText.val($this.last("span").text()).css("color", "#666");
                        checkBox.slideUp(400);
                    }else if (selectPic.hasClass("Focus")) {
                        selectPic.removeClass("Focus").addClass("Blur");
                        $this_ = $(this);
                        var selectPic = $(".selectPic");
                        var this_SelectPic = $this_.find(".selectPic");

                        this_SelectPic.addClass("Focus");
                        popUpText.val($this_.last("span").text()).css("color", "#666");
                        checkBox.slideUp(400);
                    }
                });
            } else if (qxBtnBs.hasClass("qxBtnT")) {
                qxBtnBs.removeClass("qxBtnT").addClass("qxBtnB");
                checkBox.slideUp(400);
            }
        });

    })();




    //待收货页面选项卡切换功能
    function detailM() {
        var $tab_nav = $(".tab_nav div");
        $tab_nav.click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            var index = $tab_nav.index(this);
            $("div.tab_content > .wrap").eq(index).show().siblings().hide();
        });
    }
    detailM();



    //购物车提交鼠标滑过推荐产品效果
    function ShopCartAnimate(){
        var RecommendMOne =$(".RecommendMOne");
        RecommendMOne.bind({
            mouseover : function(){
                    $(this).removeClass("RecommendMOneBlur").addClass("RecommendMOneFocus");
            },
            mouseout : function(){
                    $(this).removeClass("RecommendMOneFocus").addClass("RecommendMOneBlur");
            }
        });
    }
    ShopCartAnimate();



    //购物车-确认页面地址选择鼠标滑过效果
    function ShopCartConfirm() {
        var AddressOne = $(".AddressOne");
        var AddressOneBss = $(".AddressOneBss");
        var AddressOneBr = $(".AddressOneBr");

        //点击选中
        AddressOne.children(".AddressOneT").find("a").click(function () {
            $this_s = $(this);
            if ($this_s.hasClass("gre")) {
                $this_s.removeClass("gre").addClass("gra");
                $this_s.parents(".AddressOne").removeClass("AddressOneA").addClass("AddressOneBs");
                $this_s.parent().siblings(".AddressOneM").find("p").removeClass("map").addClass("maps");
                $this_s.parent().siblings(".AddressOneM").find("p").removeClass("phon").addClass("phons");
                $this_s.parent().siblings(".AddressOneBss").find("em").removeClass("no").addClass("yes").css("display", "none");
            } else if ($this_s.hasClass("gra")) {
                $this_s.removeClass("gra").addClass("gre");
                $this_s.parents(".AddressOne").removeClass("AddressOneBs").addClass("AddressOneA");
                $this_s.parent().siblings(".AddressOneM").find("p.maps").removeClass("maps").addClass("map");
                $this_s.parent().siblings(".AddressOneM").find("p.phons").removeClass("phons").addClass("phon");
                $this_s.parent().siblings(".AddressOneBss").find("em").removeClass("yes").addClass("no").css("display", "block");
                if ($this_s.parents(".AddressOne").siblings(".AddressOne").children(".AddressOneT").find("a").hasClass("gre")) {
                    var Agre = $this_s.parents(".AddressOne").siblings().children(".AddressOneT").find("a");
                    Agre.removeClass("gre").addClass("gra");
                    Agre.parent(".AddressOneT").siblings(".AddressOneM").find("p.map").removeClass("map").addClass("maps");
                    Agre.parent(".AddressOneT").siblings(".AddressOneM").find("p.phon").removeClass("phon").addClass("phons");
                    Agre.parent(".AddressOneT").siblings(".AddressOneBss").find("em").removeClass("no").addClass("yes").css("display", "none");
                    $this_s.parents(".AddressOne").siblings().removeClass("AddressOneA").addClass("AddressOneBs");

                } else if ($this_s.parents(".AddressOne").siblings().children(".AddressOneT").find("a").hasClass("gra")) {
                    return false;
                }
            }
        });


        //鼠标滑过和移出
        AddressOne.bind({
            mouseover : function () {
                var $this = $(this);
                if($this.hasClass("AddressOneA")){
                    $this.find(".AddressOneBss").find("span").css("display", "block");
                } else if ($this.hasClass("AddressOneBs")) {
                    $this.removeClass("AddressOneBs").addClass("AddressOneAs");
                    $this.find(".AddressOneBss").find("span").css("display", "block");
                    $this.find(".AddressOneBss").find("em").css("display", "block").click(function () {
                        var $thisEm = $(this);
                        if ($thisEm.hasClass("yes")) {
                            $thisEm.parent().siblings(".AddressOneT").find("a").click();
                        } else {
                            return false;
                        }
                        
                    });
                }
            },
            mouseout: function () {
                var $this_ = $(this);
                if ($this_.hasClass("AddressOneA")) {
                    $this_.children(".AddressOneBss").find("span").css("display", "none");
                } else if ($this_.hasClass("AddressOneAs")) {
                    $this_.removeClass("AddressOneAs").addClass("AddressOneBs");
                    $this_.find(".AddressOneBss").find("span").css("display", "none");
                    $this_.find(".AddressOneBss").find("em").css("display","none");
                }
            }
        });
        
    }
    ShopCartConfirm();



    //购物车-确认页面鼠标点击选择配送的时间   SendTimeR
    function SendTimeClick() {
        var SendTimeRM = $(".SendTimeRM");
        SendTimeRM.bind("click", function () {
            $this = $(this);
            var SendTimeRMC = $this.find("div.SendTimeRMC");
            if ($this.children("div").hasClass("SendTimeRML")) {
                $this.children("div.SendTimeRML").removeClass("SendTimeRML").addClass("SendTimeRMLs");
                $this.children("div.SendTimeRMC").removeClass("borD").addClass("borDN");
                $this.children("div.SendTimeRMR").removeClass("SendTimeRMR").addClass("SendTimeRMRs");
            } if ($this.children("div").hasClass("SendTimeRMLs")) {
                var ParSib = $this.parents("a").siblings().find("div.SendTimeRM");
                if (ParSib.find("div").hasClass("SendTimeRML")) {
                    ParSib.find("div.SendTimeRML").removeClass("SendTimeRML").addClass("SendTimeRMLs");
                    ParSib.find("div.SendTimeRMC").removeClass("borD").addClass("borDN");
                    ParSib.find("div.SendTimeRMR").removeClass("SendTimeRMR").addClass("SendTimeRMRs");
                }
                $this.children("div.SendTimeRMLs").removeClass("SendTimeRMLs").addClass("SendTimeRML");
                $this.children("div.SendTimeRMC").removeClass("borDN").addClass("borD");
                $this.children("div.SendTimeRMRs").removeClass("SendTimeRMRs").addClass("SendTimeRMR");
                 
            }
            
        });
    }
    SendTimeClick();




    //买家留言框当失去焦点和获得焦点时的样式
    function giveTalk() {
        var giveTalkL = $(".giveTalkL");
        var textareaM = giveTalkL.find("textarea");
        textareaM.focus(function () {
            $this = $(this);
            $this.attr("placeholder", "留言最多不超过200个字符，超过了就输入不进去了，请斟酌再三后，再填写");
            $this.removeClass("hei");
            $this.parent(".giveTalkL").append("<b><pre id='wenzZO'>还可以输入</pre><em id='MuchText'>200</em>个字</b>");
            //判断输入文字的数量
            $this.keyup(check);
            $this.onpaste(check);


            //动态获取可输入文字的数量
            function check() {
                var str = $this.val();
                var len = strlen(str);
                var info = 200 - len;
                info = info + "";
                if (info.indexOf('.') > 0)
                    info = info.substring(0, info.indexOf('.'));
                if (len <= 200) {
                    $("#wenzZO").html("还可以输入");
                    $("#MuchText").html(info);
                } else {
                    info = info.substr(1)
                    $("#wenzZO").html("输入文字超出");
                    $("#MuchText").css('color', '#ff5656');
                    $("#MuchText").html(info);
                }
            }

            //正则匹配空格
            function trim(str) {
                return (str + '').replace(/(\s+)$/g, '').replace(/^\s+/g, '');
            }


            //获取输入的字数
            function strlen(str) {
                var str = trim(str);
                var len = 0;
                for (var i = 0; i < str.length; i++) {
                    len += str.charCodeAt(i) > 0 && str.charCodeAt(i) < 255 ? 0.5 : 1;
                }
                return len;
            }
        });
        textareaM.blur(function () {
            $this_ = $(this);
            $this.removeAttr("placeholder");
            $this.addClass("hei");
            $this.siblings("b").remove();
        });

        
    }
    giveTalk();





    //选择退款方式
    function RefundROne() {
        var RefundROnes = $(".RefundROne").find("a");
        RefundROnes.bind({
            click: function () {
                var $this_s = $(this);
                if ($this_s.hasClass("clickS")) {
                    return false;
                } else if ($this_s.hasClass("hoverbak")) {
                    $this_s.siblings("a").removeClass("clickS");
                    $this_s.removeClass("hoverbak").addClass("clickS");
                }
            },
            mouseover: function () {
                var $this_ = $(this);
                if ($this_.hasClass("clickS")) {
                    return false;
                } else {
                    $this_.addClass("hoverbak");
                }
            },
            mouseout: function () {
                var $this = $(this);
                if ($this.hasClass("hoverbak")) {
                    $this.removeClass("hoverbak");
                }
            }
        });
    }
    RefundROne();





    //退款退货——买家申请页面的退款原因下拉菜单
    function SeleMT() {
        var SeleMTs = $(".SeleMT");
        var SeleMm = $(".SeleMm");
        SeleMTs.bind("click", function () {
            var $this_ = $(this);
            if ($this_.find("em").hasClass("Bottom")) {
                $this_.find("em").removeClass("Bottom").addClass("Top");
                SeleMm.slideDown(400, function () {
                    SeleMm.find("a").click(function () {
                        var $this_s = $(this);
                        $this_.find("em").removeClass("Top").addClass("Bottom");
                        $this_.find("span").text($this_s.text());
                        $this_s.parent().slideUp(400);
                    });
                });

            } else if ($this_.find("em").hasClass("Top")) {
                $this_.find("em").removeClass("Top").addClass("Bottom");
                SeleMm.slideUp(400);
            }
        });
    }
    SeleMT();



    // 购物车的收货地址，鼠标滑过
    function ShopCartAddress() {
        var AddListM = $(".AddListM");
        AddListM.bind({
            mouseover: function () {
                var $this = $(this);
                if ($this.hasClass("AddListMh")) {
                    return false;
                } else if ($this.hasClass("AddListM")) {
                    $this.removeClass("AddListM").addClass("AddListMh");
                    $this.find(".AddListMIcon").addClass("AddListMIconGRA");
                }
            },
            mouseout: function () {
                var $this_ss = $(this);
                if ($this_ss.find(".AddListMIcon").hasClass("AddListMIconGRE")) {
                    return true;
                } else if ($this_ss.find(".AddListMIcon").hasClass("AddListMIconGRA")) {
                    $this_ss.removeClass("AddListMh").addClass("AddListM");
                    $this_ss.find(".AddListMIcon").removeClass("AddListMIconGRA");
                }
            }
        });

        //按钮点击事件  AddListMIcon
        var AddListMIcon = $(".AddListMIcon");
        AddListMIcon.click(function () {
            var $this_ = $(this);
            if ($this_.hasClass("AddListMIconGRA")) {
                $this_.parent(".AddListM").removeClass("AddListM").addClass("AddListMh");
                $this_.removeClass("AddListMIconGRA").addClass("AddListMIconGRE");
                var ParSib = $this_.parent().siblings("div.AddListMh");
                if (ParSib.hasClass("AddListMh")) {
                    ParSib.children("span.AddListMIcon").removeClass("AddListMIconGRE");
                    ParSib.removeClass("AddListMh").addClass("AddListM");
                }

            } else if ($this_.hasClass("AddListMIconGRE")) {
                $this_.removeClass("AddListMIconGRE").addClass("AddListMIconGRA");
            }
        });


    }
    ShopCartAddress();






    // 商品收藏页面鼠标滑过效果
    function CollectOneMy() {
        var CollectOne = $(".CollectOne");
        CollectOne.mouseover(function () {
            var $this = $(this);
            var CollectBC = $this.find("div.CollectB").children("div.CollectBGC");
            if ($this.find("b").css("display") == "none" && $this.find("b").hasClass("Gray")) {
                $this.find("b").css("display", "block");
                CollectBC.prev(".CollectBGL").removeClass("CollectBGL").addClass("CollectBGreL");
                CollectBC.removeClass("CollectBGC").addClass("CollectBGreC");
                CollectBC.next(".CollectBR").removeClass("CollectBR").addClass("CollectBGreR");
                CollectBC.find("a.Dele").css("display", "block").click(function () {
                    CollectBC.children("a.Dele").parents(".CollectOne").detach();
                });
                $this.find("div.CollectB").prev(".CollectOneMm").find("h3").css("color", "#ff5656");
            } else if ($this.find("b").css("display") == "block" && $this.find("b").hasClass("Green")) {
                CollectBC.prev(".CollectBGL").removeClass("CollectBGL").addClass("CollectBGreL");
                CollectBC.removeClass("CollectBGC").addClass("CollectBGreC");
                CollectBC.next(".CollectBR").removeClass("CollectBR").addClass("CollectBGreR");
            }
        });
        CollectOne.mouseout(function () {
            var $this_ = $(this);
            var CollectBCGre = $this_.find("div.CollectB").children("div.CollectBGreC");
            if ($this_.find("b").css("display") == "block" && $this_.find("b").hasClass("Gray")) {
                $this_.find("b").css("display", "none");
                CollectBCGre.prev(".CollectBGreL").removeClass("CollectBGreL").addClass("CollectBGL");
                CollectBCGre.removeClass("CollectBGreC").addClass("CollectBGC");
                CollectBCGre.next(".CollectBGreR").removeClass("CollectBGreR").addClass("CollectBR");
                CollectBCGre.find("a.Dele").css("display", "none");
                $this_.find("div.CollectB").prev(".CollectOneMm").find("h3").css("color", "#666666");
            }
        });

        //点击事件 CollectOneMm
        CollectOne.find("b").click(function () {
            var $this_B = $(this);
            var CollectBCB = $this_B.prev("div.CollectB").find("div.CollectBGreC");
            if ($this_B.hasClass("Gray")) {
                $this_B.removeClass("Gray").addClass("Green");
                CollectBCB.children("a.Dele").css("display", "block").click(function () {
                    CollectBCB.children("a.Dele").parents(".CollectOne").detach();
                });
            } else if ($this_B.hasClass("Green")) {
                $this_B.removeClass("Green").addClass("Gray");  
            }
            
        });
    }
    CollectOneMy();




    //店铺收藏页面鼠标滑过效果   
    function SailerOnesH() {
        var SailerOne = $(".SailerOne");
        SailerOne.mouseenter(function () {
            var $this = $(this);
            var thisSailL = $this.find(".IconPic");
            //alert(thisSailL[0].className);
            $this.removeClass(" SailerOneBJGra").addClass(" SailerOneBJGre");
            if(thisSailL.find("a").hasClass("gre")){
                // /alert(thisSailL.find("a").hasClass("gre"));
                thisSailL.find("a.gre").siblings("a").animate({
                    right:"0px"
                }, 200);
            }else if(thisSailL.find("a").hasClass("gra")){
                thisSailL.find("a.gra").animate({
                    right:"0px"
                }, 200);
            }
        });
        SailerOne.mouseleave(function () {
            var $this_s = $(this);
            var thisSailLs = $this_s.find(".IconPic");
            if (thisSailLs.children("a").hasClass("ToRightGre gre")) {
                if (thisSailLs.find("a").hasClass("gre")) {
                    thisSailLs.find("a.gre").siblings("a.gra").animate({
                        right: "-32px"
                    }, 200);
                } else if (thisSailLs.find("a").hasClass("gra")) {
                    thisSailLs.find("a.gra").animate({
                        right: "-32px"
                    }, 200);
                }
                $this_s.removeClass("SailerOneBJGra").addClass("SailerOneBJGre");
            } else {
                if (thisSailLs.find("a").hasClass("gre")) {
                    thisSailLs.find("a.gre").siblings("a.gra").animate({
                        right: "-32px"
                    }, 200);
                } else if (thisSailLs.find("a").hasClass("gra")) {
                    thisSailLs.find("a.gra").animate({
                        right: "-32px"
                    }, 200);
                }
                $this_s.removeClass("SailerOneBJGre").addClass("SailerOneBJGra");
            }
            

        });
    }
    SailerOnesH();


    //店铺收藏页面鼠标点击  IconPic ToRemoveGra gra
    function SailerOneClick() {
        var SailerOneClick = $(".SailerOne");
        SailerOneClick.find(".IconPic a").click(function () {
            var $this = $(this);
            if ($this.hasClass("ToTopGre gre")) {
                $this.removeClass("ToTopGre gre").addClass("ToTopGra gra").css("right", "0px");
            } else if ($this.hasClass("ToTopGra gra")) {
                $this.removeClass("ToTopGra gra").addClass("ToTopGre gre").css("right","0px");
            } else if ($this.hasClass("ToRightGra gra")) {
                $this.removeClass("ToRightGra gra").addClass("ToRightGre gre").css("right", "0px");
                SailerOneClick.removeClass("SailerOneBJGra").addClass("SailerOneBJGre");
            } else if ($this.hasClass("ToRightGre gre")) {
                $this.removeClass("ToRightGre gre").addClass("ToRightGra gra");
            } else if ($this.hasClass("ToRemoveGra gra")) {
                $this.parents("div.SailerOne").detach();
            }
        });
    }
    SailerOneClick();








    //添加收货地址关闭弹窗按钮点击事件AddresPopClose
    function AddresPopCloseCl() {
        var addAddress = $(".addAddress");
        var allPop = $(".allPop");
        var popTitle = $(".popTitle");
        addAddress.click(function () {
            allPop.css("display", "block");
            $(".PreserveMA").css("display", "block");
            popTitle.text("新增收货人信息");
            document.documentElement.style.overflow = "hidden";
        });
        $("a.AddresPopClose").click(function () {
            allPop.css("display", "none");
            $(".PreserveMA").css("display", "none");
            document.documentElement.style.overflow = "auto";
        });
        $(".BdSub").click(function () {
            allPop.css("display", "none");
            $(".PreserveMA").css("display", "none");
            document.documentElement.style.overflow = "auto";
        });
        $(".empty").click(function () {
            allPop.css("display", "block");
            $(".emptyImfomation").css("display", "block");
            popTitle.text("删除收货人信息");
            document.documentElement.style.overflow = "hidden";
            $(".sureEM").click(function () {
                allPop.css("display", "none");
                $(".emptyImfomation").css("display", "none");
                document.documentElement.style.overflow = "auto";
            });
            $(".noEM").click(function () {
                allPop.css("display", "none");
                $(".emptyImfomation").css("display", "none");
                document.documentElement.style.overflow = "auto";
            });
        });
    }
    AddresPopCloseCl();

    

});
