$(document).ready(function () {
  /*For sticky navigations*/

  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offcet: "60px;",
    }
  );

  $(".js--wp-1").waypoint(function (direction) {
    $(".js--wp-1").addClass("animated fadeIn");
  });

  $(".mobile-nav-icon").click(function () {
    var nav = $(".js--main-nav");
    nav.slideToggle(200);
    var icon = $("#reorder-three-outline");
    icon.attr("name", function (index, attr) {
      return attr === "reorder-three-outline"
        ? "close-outline"
        : "reorder-three-outline";
    });
  });

  //   /*Scroll on buttons*/
  //   $(".js--scroll-to-plans").click(function () {
  //     $("html, body").animate(
  //       { scrollTop: $(".js--section-plans").offset().top },
  //       1000
  //     );
  //   });

  //   $(".js--scroll-to-start").click(function () {
  //     console.log(2);
  //     $("html, body").animate(
  //       { scrollTop: $(".js--section-features").offset().top },
  //       1000
  //     );
  //   });
});
