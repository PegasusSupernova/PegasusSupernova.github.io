window.sr = ScrollReveal({ reset: true });
sr.reveal(".scroll", { duration: 500 });

$(".delay").hide();
setTimeout(function () {
  $(".delay").show();
}, 10000);
