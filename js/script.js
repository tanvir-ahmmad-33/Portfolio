$(document).ready(function () {
  $(".project-stack").on("click", function () {
    const stackInfo = $(this).data("stack");
    const projectName = $(this).data("name");

    Swal.fire({
      title: projectName,
      html: stackInfo,
      confirmButtonText: "Close",
    });
  });

  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-nav .nav-link").removeClass("active");
    $(this).addClass("active");
  });

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
