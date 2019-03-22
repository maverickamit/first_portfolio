$(".progress").each(function() {
  var data, progressHeight, color;
  data = $(this).attr("data");
  progressHeight = $(this).attr("progressHeight");
  color = $(this).attr("color");
  $(this).css("height", progressHeight);
  var barSpan = '<span class="bar"></span>';
  var valueSpan = '<span class="value"></span>';
  $(this).append(barSpan);
  $(this).append(valueSpan);
  $(this)
    .children(".bar")
    .css("width", data + "%");
  $(this)
    .children(".bar")
    .css("background-color", color);
  $(this)
    .children(".value")
    .html(data + "%");
});

$(".carousel").on("touchstart", function(event) {
  var xClick = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function(event) {
    var xMove = event.originalEvent.touches[0].pageX;
    if (Math.floor(xClick - xMove) > 5) {
      $(this).carousel("next");
    } else if (Math.floor(xClick - xMove) < -5) {
      $(this).carousel("prev");
    }
  });
  $(".carousel").on("touchend", function() {
    $(this).off("touchmove");
  });
});
