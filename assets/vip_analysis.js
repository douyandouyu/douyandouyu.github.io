function IsPC() {
  for (
    var userAgentInfo = navigator.userAgent,
      Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod",
      ],
      flag = !0,
      v = 0;
    v < Agents.length;
    v++
  )
    if (0 < userAgentInfo.indexOf(Agents[v])) {
      flag = !1;
      break;
    }
  return flag;
}

$(function () {
  var $url = $("#film-play-url"),
    $urlMobile = $("#film-play-url-mobile"),
    isPC = IsPC();
  function getCurrentVideoUrl() {
    return (isPC ? $url : $urlMobile).val();
  }
  $(document).ready(function () {
    var topValue = $(window).height(),
      palyerIframeHeight = 0.7 * topValue,
      topValue = 0.04 * topValue;
    $("#palyer-iframe").height(palyerIframeHeight),
      $("#play-box").css("top", topValue);
  }),
    $("#play-btn").on("click", function () {
        otherWebsiteUrl = getCurrentVideoUrl();
      otherWebsiteUrl &&
        ((otherWebsiteUrl = otherWebsiteUrl.replace(/\s*/g, "")),
        (playUrl = $("#link-choice").val() + otherWebsiteUrl),
        $("#palyer-iframe").attr("src", playUrl)
       );
    });
});
