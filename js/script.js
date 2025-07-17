$(document).ready(function () {
  setTimeout(function () {
    // *************************************************
    // ********* ** Title change on interval ***** *****
    // *************************************************
    $("#title-role").text("Competitive Programmer");
  }, 2000);

  // *************************************************
  // *************** Moving Section JS ***************
  // *************************************************
  $(".scroll-to-top").on("click", function () {
    $("html, body").scrollTop($("#hero").offset().top);
  });

  $(".scroll-to-hero").on("click", function () {
    $("html, body").scrollTop($("#hero").offset().top);
  });

  $(".scroll-to-about").on("click", function () {
    $("html, body").scrollTop($("#about").offset().top);
  });

  $(".scroll-to-skills").on("click", function () {
    $("html, body").scrollTop($("#skills").offset().top);
  });

  $(".scroll-to-project").on("click", function () {
    $("body, html").scrollTop($("#project").offset().top);
  });

  $(".scroll-to-journey").on("click", function () {
    $("body, html").scrollTop($("#journey").offset().top);
  });

  $(".scroll-to-contact").on("click", function () {
    $("body, html").scrollTop($("#contact").offset().top);
  });

  // *************************************************
  // ********* Stack button click on projects ********
  // *************************************************
  $(".project-stack").on("click", function () {
    const stackInfo = $(this).data("stack");
    const projectName = $(this).data("name");

    Swal.fire({
      title: projectName,
      html: stackInfo,
      confirmButtonText: "Close",
    });
  });

  // *************************************************
  // *********** Active Navbar Link on Click *********
  // *************************************************
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-nav .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // *************************************************
  // ************** Highlight Navbar Link ************
  // *************************************************
  $(window).on("scroll", function () {
    var scrollPos = $(document).scrollTop() + 100;
    $(".navbar-nav .nav-link").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $(".navbar-nav .nav-link").removeClass("active");
        currLink.addClass("active");
      }
    });
  });

  // *************************************************
  // ************ Animate Counters on Scroll *********
  // *************************************************
  let animated = false;
  $(window).on("scroll", function () {
    var journeyTop = $("#journey").offset().top - window.innerHeight + 100;
    if (!animated && $(window).scrollTop() > journeyTop) {
      $(".counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).data("count"),
            },
            {
              duration: 5000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
      animated = true;
    }
  });

  // *************************************************
  // *** OJ info add button using sweetAlert prompt **
  // *************************************************
  $(".oj-logo").on("click", function () {
    const judgeName = $(this).data("name");
    const judgeData = $(this).data("stack");
    const judgeLink = $(this).data("link");

    const linkButtonText = "Go to " + judgeName;

    Swal.fire({
      title: judgeName,
      html: judgeData,

      confirmButtonText: linkButtonText,
      showDenyButton: true,
      denyButtonText: "Close",
      denyButtonColor: "gray",

      timer: 7000,
      timerProgressBar: true,
      didOpen: (toast) => {
        $(toast).on("mouseenter", Swal.stopTimer);
        $(toast).on("mouseleave", Swal.resumeTimer);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(judgeLink, "_blank");
      }
    });
  });

  $("#others-oj-button").on("click", function () {
    const judgeName = $(this).data("name");
    const judgeData = $(this).data("details");

    Swal.fire({
      title: judgeName,
      html: judgeData,

      confirmButtonText: "Close",
      confirmButtonColor: "gray",

      timer: 7000,
      timerProgressBar: true,
      didOpen: (toast) => {
        $(toast).on("mouseenter", Swal.stopTimer);
        $(toast).on("mouseleave", Swal.resumeTimer);
      },
    });
  });
});
