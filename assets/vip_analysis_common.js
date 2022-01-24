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
