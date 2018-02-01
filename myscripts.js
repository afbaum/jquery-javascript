$("a[href='#top']").click(function(){
  $("html, body").animate({scrollTop: 0}, "slow");
  return false;
});

$("button").click(function(){
   var p = $("p")
   p.animate({fontSize: '1em'}, "slow");
   p.animate({fontSize: '2em'}, "slow");
   p.animate({fontSize: '1em'}, "slow");
   p.animate({fontSize: '2em'}, "slow");
});
