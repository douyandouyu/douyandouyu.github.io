$(function () {
  function showQrCode() {
    var left;
    document.body.clientWidth < 1200 ||
      ((left = "https://www.bookmarkearth.com/download/app"),
      $("#qrcode").empty(),
      jQuery("#qrcode").qrcode({
        text: left,
        render: "canvas",
        width: 100,
        height: 100,
        typeNumber: -1,
        background: "#ffffff",
        foreground: "#000000",
      }),
      jQuery("#qrcode-2").qrcode({
        text: left,
        render: "canvas",
        width: 100,
        height: 100,
        typeNumber: -1,
        background: "#ffffff",
        foreground: "#000000",
      }),
      window.screen.height,
      (left = $("#play-box").offset().left - $("#left-box").width() - 20),
      console.log(150, left),
      $("#left-box").css({ left: left, top: 150 }));
  }
  (window.onresize = function () {
    showQrCode();
  }),
    showQrCode();
});
("");
