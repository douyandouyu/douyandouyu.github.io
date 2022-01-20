function getWebRootPath() {
  var protocol = window.location.protocol,
    host = window.location.host;
  return -1 == host.indexOf(".xyz") &&
    -1 == host.indexOf(".top") &&
    -1 == host.indexOf(".com")
    ? protocol + "//" + host + "/kiwi"
    : protocol + "//" + host;
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
ROOT = getWebRootPath();
