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
});
