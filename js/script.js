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
});
