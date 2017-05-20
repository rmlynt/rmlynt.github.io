var taglines = ["Data Driven Process Optimizations", "Design That Conveys Narrative", "Continuous Learning & Enhancement"]
var intervalCount = 0;
var projectScroll = 0;

function determineScroll() {
  var windowWidth = $(window).width();
  console.log(windowWidth);
  if (windowWidth > 1350) {
    largeScroll();
  }
  else if (windowWidth > 905) {
    mediumScroll();
  }
  else {
    smallScroll();
  }
}

function largeScroll() {
  if (projectScroll < 0) {
    projectScroll = 1;
  }
  else if (projectScroll > 1) {
    projectScroll = 0;
  }
  switch (projectScroll) {
    case 0:
      $("#project-four, #project-five, #project-six").fadeOut(100, function() {
        $(this).css("display", "none");
      });
      $("#project-one, #project-two, #project-three").fadeIn(100, function() {
        $(this).css("display", "inline-block");
      });
      break;
    case 1:
      $("#project-one, #project-two, #project-three").fadeOut(100, function() {
        $(this).css("display", "none");
      });
      $("#project-four, #project-five, #project-six").fadeIn(100, function() {
        $(this).css("display", "inline-block");
      });
      break;
  }
}

function mediumScroll() {
  if (projectScroll < 0) {
    projectScroll = 2;
  }
  else if (projectScroll > 2) {
    projectScroll = 0;
  }
  console.log(projectScroll);
  switch (projectScroll) {
    case 0:
      $("#project-one, #project-two").css("display", "inline-block");
      $("#project-three, #project-four, #project-five, #project-six").css("display", "none");
      break;
    case 1:
      $("#project-one, #project-two").css("display", "inline-block");
      $("#project-three, #project-four, #project-five, #project-six").css("display", "none");
      break;
    case 2:
      $("#project-five, #project-six").css("display", "inline-block");
      $("#project-one, #project-two, #project-three, #project-four").css("display", "none");
      break;
  }
}

$(document).ready(function() {

  //Cycle through taglines

  setInterval(function() {
    $("#tagline-h2").text(function() {
      intervalCount++;
      if (intervalCount > 2) {
        intervalCount = 0;
      }
      return taglines[intervalCount];
    });
  }, 5000);

  //Scroll to Contact section when Contact Me button is clicked

  $("#contact-btn").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#contact-section").offset().top - 120
    }, 500);
  });

  //Scroll to clicked button's section on Desktop Nav

  $(".nav-ul ul li a").on("click", function(e) {
    e.preventDefault();
    var location = "#" + $(this).attr('id');
    $('html, body').animate({
      scrollTop: $(location + "-section").offset().top - 120
    }, 500);
  });

  //Scroll to clicked button's section on Mobile Nav

  $(".mobile-nav-ul ul li").on("click", function(e) {
    e.preventDefault();
    var location = "#" + $(this).children().attr('id');
    $('html, body').animate({
      scrollTop: $(location + "-section").offset().top - 340
    }, 500);
  });

  //Toggle the Mobile Nav

  $(".nav-ul").on("click", function() {
    var windowWidth = $(window).width();
    if (windowWidth < 850) {
      $(".mobile-nav-ul").toggleClass("unhidden");
      $(".mobile-nav-spacer").toggleClass("unhidden");
    };
  })

  //Add/Remove Classes based off which section is shown
  // Needs to be rewritten eventually

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 2960) {
      $(".nav-ul ul #contact").addClass("nav-active");
      $(".nav-ul ul #resume").removeClass("nav-active");
      $(".nav-ul ul #header").removeClass("nav-active");
      $(".nav-ul ul #about").removeClass("nav-active");
      $(".nav-ul ul #projects").removeClass("nav-active");
      $(".mobile-nav-ul ul #contact").parent().addClass("mobile-nav-active");
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
      $(".nav-ul ul #contact").removeClass("nav-active");
      $(".mobile-nav-ul #resume").parent().addClass("mobile-nav-active");
      $(".mobile-nav-ul ul #header").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #contact").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #about").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #projects").parent().removeClass("mobile-nav-active");
    }
    else if (scroll >= 1480) {
      $(".nav-ul ul #projects").addClass("nav-active");
      $(".nav-ul ul #header").removeClass("nav-active");
      $(".nav-ul ul #about").removeClass("nav-active");
      $(".nav-ul ul #resume").removeClass("nav-active");
      $(".nav-ul ul #contact").removeClass("nav-active");
      $(".mobile-nav-ul ul #projects").parent().addClass("mobile-nav-active");
      $(".mobile-nav-ul ul #contact").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #header").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #about").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #resume").parent().removeClass("mobile-nav-active");
    }
    else if (scroll >= 740) {
      $(".nav-ul ul #about").addClass("nav-active");
      $(".nav-ul ul #header").removeClass("nav-active");
      $(".nav-ul ul #projects").removeClass("nav-active");
      $(".nav-ul ul #resume").removeClass("nav-active");
      $(".nav-ul ul #contact").removeClass("nav-active");
      $(".mobile-nav-ul ul #about").parent().addClass("mobile-nav-active");
      $(".mobile-nav-ul ul #contact").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #header").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #projects").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #resume").parent().removeClass("mobile-nav-active");
    }
    else if (scroll >= 0) {
      $(".nav-ul ul #header").addClass("nav-active");
      $(".nav-ul ul #about").removeClass("nav-active");
      $(".nav-ul ul #projects").removeClass("nav-active");
      $(".nav-ul ul #resume").removeClass("nav-active");
      $(".nav-ul ul #contact").removeClass("nav-active");
      $(".mobile-nav-ul ul #header").parent().addClass("mobile-nav-active");
      $(".mobile-nav-ul ul #contact").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #about").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #projects").parent().removeClass("mobile-nav-active");
      $(".mobile-nav-ul ul #resume").parent().removeClass("mobile-nav-active");
    }

  })

  $(".left-arrow").on("click", function() {
    projectScroll--;
    determineScroll();
  });

  $(".right-arrow").on("click", function() {
    projectScroll++;
    determineScroll();
  });

  //Contact Form Functionality

  $("#contact-form").submit(function(e) {
    var name = $("#inputName").val();
    var email = $("#inputEmail").val();
    var subject = $("#inputSubject").val();
    var message = $("#inputMessage").val();

    e.preventDefault();

    if (!name || !email || !subject || !message) {
      $(".notification-message-error").show(0).delay(3000).fadeOut(1000).hide(0);
    }

    else {
      $.ajax({
        url: "https://formspree.io/ryan.lynt@gmail.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
      });
      $(this).get(0).reset()
      $(".notification-message-success").show(0).delay(3000).fadeOut(1000).hide(0);
    }
    return false;
  });

});
