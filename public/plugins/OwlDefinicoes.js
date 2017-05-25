$(document).ready(function () {
 $("#owl-demo").owlCarousel({
  navigation: true,
  pagination: true,
  navigationText: [
      "<span class='glyphicon glyphicon-chevron-left' aria-hidden='true' style='font-size:30pt;'></span>",
      "<span class='glyphicon glyphicon-chevron-right' aria-hidden='true' style='font-size:30pt;'></span>",
  ]
 });
 $(".toolTip").tooltip();
});