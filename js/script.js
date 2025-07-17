$(document).ready(function () {
  setTimeout(function () {
    $("#title-role").text("Competitive Programmer");
  }, 2000);

  // *************************************************
  // *************** Moving Section JS ***************
  // *************************************************
  $(".scroll-to").on("click", function () {
    let target = $(this).data("target");
    $("html, body").animate({ scrollTop: $(target).offset().top }, 0);
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
      var target = currLink.data("target");

      var refElement = $(target);

      if (refElement.length) {
        var refTop = refElement.offset().top;
        var refBottom = refTop + refElement.outerHeight();

        if (refTop <= scrollPos && refBottom > scrollPos) {
          $(".navbar-nav .nav-link").removeClass("active");
          currLink.addClass("active");
        }
      }
    });
  });

  // *************************************************
  // ******** Journey box update on scrolling ********
  // *************************************************
  $(document).ready(function () {
    function animateCounters() {
      $(".counter").each(function () {
        var $this = $(this);
        if (!$this.hasClass("animated")) {
          var countTo = $this.data("count");

          $({ countNum: $this.text() }).animate(
            { countNum: countTo },
            {
              duration: 5000,
              easing: "swing",
              step: function () {
                $this.text(Math.ceil(this.countNum));
              },
              complete: function () {
                $this.text(countTo);
                $this.addClass("animated");
              },
            }
          );
        }
      });
    }

    $(window).on("scroll", function () {
      var scrollPos = $(document).scrollTop() + $(window).height();
      var journeyTop = $("#journey").offset().top;
      var journeyBottom = journeyTop + $("#journey").outerHeight();

      if (journeyTop <= scrollPos && journeyBottom > scrollPos) {
        animateCounters();
      }
    });

    $(window).trigger("scroll");
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
