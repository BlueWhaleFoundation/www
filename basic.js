//////////////////// ver 4.0 ///////////////////////

// 스크롤 텍스트
$(window).scroll(function() {
  var winTop = $(window).scrollTop(); //스크롤의 현재 위치
  var whatwedo = winTop + 1000;

  // $(".sa_history h2").css({
  //   transform: "translateX( -" + whatwedo / 3 + "px)"
  // });
});

// 스크롤 이벤트
$(window).scroll(function() {
  var winTop = $(window).scrollTop(); // 스크롤 현재 위치
  var docHeight = $(document).height(); // 문서 높이 고정
  var winHeight = window.innerHeight; // 윈도우창 높이 가변
  var windowWidth = $(window).width(); // 윈도우창 넓이 (반응형)

  var winBottom = winTop + winHeight; // 스크롤 bottom

  var mainVisualH = $(".main_visual").outerHeight();
  var mainVisualHm = $(".main_visual_m").outerHeight();
  var saCubeH = $(".sa_cube").outerHeight();
  var saKeyH = $(".sa_key").outerHeight();
  var listhistory01 = $(".history_list .history01").outerHeight();
  var listhistory02 = $(".history_list .history02").outerHeight();

  // 높이값 이벤트
  // effect css
  var heightEffect = {
    transform: "translate(0, 0)",
    opacity: "1"
  };

  // 히스토리 내려오게
  if (winTop + 400 > mainVisualH + saCubeH + saKeyH) {
    $(".history_list .history01 .timeline h3").css(heightEffect);
    $(".history_list .history01 .history_img_wrap").css(heightEffect);
    $(".history_list .history01 .history_txt_wrap").css(heightEffect);
  }
  if (winTop + 400 > mainVisualH + saCubeH + saKeyH + listhistory01) {
    $(".history_list .history02 .timeline h3").css(heightEffect);
    $(".history_list .history02 .history_img_wrap").css(heightEffect);
    $(".history_list .history02 .history_txt_wrap").css(heightEffect);
  }
  if (winTop + 600 > mainVisualH + saCubeH + saKeyH + listhistory01 + listhistory02) {
    $(".history_list .history03 .history_img_wrap").css(heightEffect);
    $(".history_list .history03 .history_txt_wrap").css(heightEffect);
  }

  // 순서대로 나오기 위한 배열. 높이값
  var saKeyH = new Array();

  for (var i = 0; $(".sa_key_area li").length > i; i++) {
    saKeyH[i] = [$(".sa_key_area li:nth-child(" + (i + 1) + ")").outerHeight()];
  }

  for (var i = 0; $(".sa_key_area li").length > i; i++) {
    var saKeyHSum = 0;
    for (var j = 0; j < i; j++) {
      saKeyHSum = saKeyHSum + parseInt(saKeyH[j]);
    }

    if (windowWidth < 768) {
      if (winTop + 700 >= mainVisualHm + saCubeH + saKeyHSum) {
        $(".sa_key_area li:nth-child(" + (i + 1) + ")").css(heightEffect);
        $(".sa_key_area li:nth-child(" + (i + 1) + ") h3").css(heightEffect);
        $(".sa_key_area li:nth-child(" + (i + 1) + ") p").css(heightEffect);
      }
    } else {
      if (winTop + 700 >= mainVisualH + saCubeH + saKeyHSum) {
        $(".sa_key_area li:nth-child(" + (i + 1) + ")").css(heightEffect);
        $(".sa_key_area li:nth-child(" + (i + 1) + ") h3").css(heightEffect);
        $(".sa_key_area li:nth-child(" + (i + 1) + ") p").css(heightEffect);
      }
    }
  }

  // 히스토리 이미지영역의 패딩값
  // var historyImgPadding =
  //   window.innerHeight / 2 - $(".history_wrap .history_img_area").height() / 2;

  // $(".history_wrap .history_txt, .history_img_area").css({
  //   paddingTop: historyImgPadding
  // });

  // 히스토리 텍스트영역의 패딩bottom 값
  for (var i = 1; 4 > i; i++) {
    var historyTxtPadding =
      ($(`.history_wrap .history0${i} .history_img_area img`).height() -
        ($(`.history_wrap .history0${i} .history_txt_area .tit`).height() +
          40 +
          $(`.history_wrap .history0${i} .history_txt_area .txt`).height())) /
      2;

    // $(`.history_wrap .history0${i} .history_txt_area .txt`).css({
    //   paddingBottom: historyTxtPadding
    // });
  }

  // 모바일 히스토리 이미지 top
  for (var i = 1; 4 > i; i++) {
    var historyImgPadding = $(`.history_list_m .history0${i} .history_txt_wrap`).height() + 40;

    $(`.history_list_m .history0${i} .history_img_wrap`).css({
      top: historyImgPadding
    });
  }

  var windowHalf = winHeight / 2;

  var productOp =
    $(".main_visual").outerHeight() +
    $(".sa_wrap").outerHeight() +
    $(".sa_history").outerHeight() +
    $(".bw_dan_wrap").outerHeight() +
    $(".bw_newsletter").outerHeight() +
    $(".bw_vision").outerHeight();

  if (winTop + 500 >= productOp) {
    $(".product_sa").css({ opacity: "1" });
  }
  var productOp2 =
    $(".main_visual").outerHeight() +
    $(".sa_wrap").outerHeight() +
    $(".sa_history").outerHeight() +
    $(".bw_dan_wrap").outerHeight() +
    $(".bw_newsletter").outerHeight() +
    $(".bw_vision").outerHeight() +
    $(".product_sa").outerHeight();

  if (winTop + 500 >= productOp2) {
    $(".product_spalsh").css({ opacity: "1" });
  }
  var productOp3 =
    $(".main_visual").outerHeight() +
    $(".sa_wrap").outerHeight() +
    $(".sa_history").outerHeight() +
    $(".bw_dan_wrap").outerHeight() +
    $(".bw_newsletter").outerHeight() +
    $(".bw_vision").outerHeight() +
    $(".product_sa").outerHeight() +
    $(".product_spalsh").outerHeight();

  if (winTop + 500 >= productOp3) {
    $(".product_talket").css({ opacity: "1" });
  }

  if (windowWidth < 768) {
    $(".product_talket, .product_sa, .product_spalsh").css({ opacity: "1" });
  }
});

// 스크롤 opacity

window.addEventListener("scroll", function() {
  var winHeight = window.innerHeight; // 윈도우창 높이 가변
  var windowWidth = $(window).width(); // 윈도우창 넓이 (반응형)

  var currScrollPos2 =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  var visionOpacity =
    $(".main_visual").outerHeight() +
    $(".sa_wrap").outerHeight() +
    $(".sa_history").outerHeight() +
    $(".bw_dan_wrap").outerHeight() +
    $(".bw_newsletter").outerHeight();
  var visionOpacitym =
    $(".main_visual_m").outerHeight() +
    $(".sa_wrap").outerHeight() +
    $(".sa_history").outerHeight() +
    $(".bw_dan_wrap").outerHeight() +
    $(".bw_newsletter").outerHeight();

  if (windowWidth < 768) {
    if (currScrollPos2 > visionOpacitym) {
      $(".bw_vision .bg").css({
        opacity: (currScrollPos2 / visionOpacitym + -1) * 30
      });
    }
  } else {
    if (currScrollPos2 > visionOpacity) {
      $(".bw_vision .bg").css({
        opacity: (currScrollPos2 / visionOpacity + -1) * 30
      });
    }
  }

  $(window).resize(function() {
    if (windowWidth < 768) {
      if (currScrollPos2 > visionOpacitym) {
        $(".bw_vision .bg").css({
          opacity: (currScrollPos2 / visionOpacity + -1) * 30
        });
      }
    } else {
      if (currScrollPos2 > visionOpacity) {
        $(".bw_vision .bg").css({
          opacity: (currScrollPos2 / visionOpacity + -1) * 30
        });
      }
    }
  });
});

$(function() {
  $(".close").click(function() {
    $(".popup").css({ display: "none" });
  });

  $(".lang_kor").click(function(){
    console.log('lang_kor click')
    $(".popup").css({ display: "block" });

    $(".popup_img_en").css({"display":"none"});
    $(".popup_img_ko").css({"display":"block"});

    $(".news_un a").attr("href", "https://youtu.be/80e2KVZ6b4Q");
    
    $(".main_txt_cell h2").addClass("kor_font");
  });

  $(".lang_eng").click(function(){
    console.log('lang_eng click')
    $(".popup").css({ display: "block" });

    $(".popup_img_en").css({"display":"block"});
    $(".popup_img_ko").css({"display":"none"});

    $(".news_un a").attr("href", "https://www.facebook.com/424120634710784/posts/758441957945315?sfns=mo");

    $(".main_txt_cell h2").removeClass("kor_font");
  });

  // 모바일 gnb 클릭이벤트

  $(".ham_wrap").click(function() {
    $(".header_m .gnb_menu").toggleClass("gnb_slide");
    $("body").toggleClass("bodyScroll");
    // $(".ham_wrap .bar").toggleClass("ㄴ");
    $(".ham_wrap .bar:eq(0)").toggleClass("bar_01");
    $(".ham_wrap .bar:eq(1)").toggleClass("bar_02");
    $(".ham_wrap .bar:eq(2)").toggleClass("bar_03");
  });
  $(".header_m .gnb_menu a, .header_m .gnb_menu button").click(function() {
    $(".header_m .gnb_menu").removeClass("gnb_slide");
    $("body").removeClass("bodyScroll");
    $(".ham_wrap .bar:eq(0)").removeClass("bar_01");
    $(".ham_wrap .bar:eq(1)").removeClass("bar_02");
    $(".ham_wrap .bar:eq(2)").removeClass("bar_03");
  });

  // 영문 한글 변환시 메인 타이틀 폰트변경
  // $(".lang_kor").click(function() {
  //   $(".main_txt_cell h2").addClass("kor_font");
  // });
  // $(".lang_eng").click(function() {
  //   $(".main_txt_cell h2").removeClass("kor_font");
  // });

  // 메뉴 클릭시 부드럽게.
  $(".gnb_menu li a").click(function() {
    console.log('gnb_menu li a click function')
//    var gnb_menu = $($(this).attr("data-target")).offset().top;
    var gnb_menu = $($(this).attr("data-target")).offset();

    $("html, body").animate({ scrollTop: gnb_menu }, 2050);
  });

  //
  var visionImgH = $(".vision_img img").height();
  var winHeight = window.innerHeight; // 윈도우창 높이 가변
  var visionImgPadding = (winHeight - visionImgH) / 2;
  var visionImgPaddingM = (winHeight - 364) / 2;
  var windowWidth = $(window).width();

  $(".vision_img .bg").css({ height: visionImgH });
  $(".vision_img").css({ paddingTop: visionImgPadding });

  if (windowWidth < 768) {
    $(".vision_img").css({ paddingTop: visionImgPaddingM });
  } else {
    $(".vision_img").css({ paddingTop: visionImgPadding });
  }

  $(window).resize(function() {
    var visionImgH = $(".vision_img img").height();
    var winHeight = window.innerHeight; // 윈도우창 높이 가변
    var visionImgPadding = (winHeight - visionImgH) / 2;

    $(".vision_img .bg").css({ height: visionImgH });
    if (windowWidth < 768) {
      $(".vision_img").css({ paddingTop: visionImgPaddingM });
    } else {
      $(".vision_img").css({ paddingTop: visionImgPadding });
    }
  });

  // history 텍스트 패딩값 들어가라!
  var winHeight = window.innerHeight; // 윈도우창 높이 가변
  var historyTxtH01 = $(".history_list_m .history01 .history_txt_wrap").height();
  var historyTxtH02 = $(".history_list_m .history02 .history_txt_wrap").height();
  var historyTxtH03 = $(".history_list_m .history03 .history_txt_wrap").height();
  var windowWidth = $(window).width();

  var text01padding = (winHeight - historyTxtH01) / 2;
  var text02padding = (winHeight - historyTxtH02) / 2;
  var text03padding = (winHeight - historyTxtH03) / 2;

  $(window).resize(function() {
    if (windowWidth < 768) {
      $(".history_list_m .history01 .history_txt_wrap").css({
        paddingTop: text01padding
      });
      $(".history_list_m .history02 .history_txt_wrap").css({
        paddingTop: text01padding
      });
      $(".history_list_m .history03 .history_txt_wrap").css({
        paddingTop: text01padding
      });
    }
  });

  if (windowWidth < 768) {
    $(".history_list_m .history01 .history_txt_wrap").css({
      paddingTop: text01padding
    });
    $(".history_list_m .history02 .history_txt_wrap").css({
      paddingTop: text01padding
    });
    $(".history_list_m .history03 .history_txt_wrap").css({
      paddingTop: text01padding
    });
  }
});
