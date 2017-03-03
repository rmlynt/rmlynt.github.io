$(document).ready(function() {

  $("#contact-btn").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#contact-section").offset().top - 120
    }, 500);
  });

  $(".nav-ul ul li a").on("click", function() {
    var location = "#" + $(this).attr('id');
    if (location == "#thoughts") {}
    else {
      $('html, body').animate({
        scrollTop: $(location + "-section").offset().top - 120
      }, 500);
    }
  });

  $(".mobile-nav-ul ul li").on("click", function() {
    var location = "#" + $(this).children().attr('id');
    if (location == "#thoughts") {}
    else {
      $('html, body').animate({
        scrollTop: $(location + "-section").offset().top - 340
      }, 500);
    }
  });

  $(".nav-ul").on("click", function() {
    var windowWidth = $(window).width();
    if (windowWidth < 850) {
      $(".mobile-nav-ul").toggleClass("unhidden");
      $(".mobile-nav-spacer").toggleClass("unhidden");
    };
  })

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 2960) {
      $(".nav-ul ul #resume").removeClass("nav-active");
      $(".nav-ul ul #header").removeClass("nav-active");
      $(".nav-ul ul #about").removeClass("nav-active");
      $(".nav-ul ul #projects").removeClass("nav-active");
      $(".mobile-nav-ul #resume").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #header").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #about").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #projects").parent().removeClass("mobile-nav-active");
    }
    else if (scroll >= 2220) {
      $(".nav-ul ul #resume").addClass("nav-active");
      $(".nav-ul ul #header").removeClass("nav-active");
      $(".nav-ul ul #about").removeClass("nav-active");
      $(".nav-ul ul #projects").removeClass("nav-active");
      $(".mobile-nav-ul #resume").parent().addClass("mobile-nav-active");
      $(".mobile-nav-ul ul #header").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #about").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #projects").parent().removeClass("mobile-nav-active");
    }
    else if (scroll >= 1480) {
      $(".nav-ul ul #projects").addClass("nav-active");
      $(".nav-ul ul #header").removeClass("nav-active");
      $(".nav-ul ul #about").removeClass("nav-active");
      $(".nav-ul ul #resume").removeClass("nav-active");
      $(".mobile-nav-ul ul #projects").parent().addClass("mobile-nav-active");
      $(".mobile-nav-ul ul #header").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #about").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #resume").parent().removeClass("mobile-nav-active");
    }
    else if (scroll >= 740) {
      $(".nav-ul ul #about").addClass("nav-active");
      $(".nav-ul ul #header").removeClass("nav-active");
      $(".nav-ul ul #projects").removeClass("nav-active");
      $(".nav-ul ul #resume").removeClass("nav-active");
      $(".mobile-nav-ul ul #about").parent().addClass("mobile-nav-active");
      $(".mobile-nav-ul ul #header").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #projects").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #resume").parent().removeClass("mobile-nav-active");
    }
    else if (scroll >= 0) {
      $(".nav-ul ul #header").addClass("nav-active");
      $(".nav-ul ul #about").removeClass("nav-active");
      $(".nav-ul ul #projects").removeClass("nav-active");
      $(".nav-ul ul #resume").removeClass("nav-active");
      $(".mobile-nav-ul ul #header").parent().addClass("mobile-nav-active");
      $(".mobile-nav-ul ul #about").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #projects").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #resume").parent().removeClass("mobile-nav-active");
    }

  })


});
