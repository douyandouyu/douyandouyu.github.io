var $url = $("#film-play-url"),
$urlMobile = $("#film-play-url-mobile"),
isPC = IsPC();

function getCurrentVideoUrl() {
var queryUrl = getQueryVariable("url")
if (queryUrl) {
  isPC ? $url.val(queryUrl) :  $urlMobile.val(queryUrl)
  return queryUrl
} else{
  return (isPC ? $url : $urlMobile).val();
}
}
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
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
function playBtnClick() {
  otherWebsiteUrl = getCurrentVideoUrl();
    otherWebsiteUrl = otherWebsiteUrl.replace(/\s*/g, "");
    let playUrl = $("#link-choice").val() + otherWebsiteUrl;
    $("#palyer-iframe").attr("src", playUrl);
}

$(function () {
  $(document).ready(function () {
    getCurrentVideoUrl()
    var topValue = $(window).height(),
      palyerIframeHeight = 0.7 * topValue,
      topValue = 0.04 * topValue;
    $("#palyer-iframe").height(palyerIframeHeight),
      $("#play-box").css("top", topValue);
  })
  if (getQueryVariable("url")) {
    document.querySelector('#play-btn').click()
    playBtnClick()
  }
});
