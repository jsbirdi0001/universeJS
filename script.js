
$(".container").mousemove(function(event){
	console.log(event.pageX + " " + event.pageY);
	for(var i = 0 ; i< 2 ; i++){
    var padding = Math.floor(Math.random() * 3);
    var rotation = Math.floor(Math.random() * 1080) ;
    var left = Math.floor(Math.random() * 100);
    var top = Math.floor(Math.random() * 100);
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var borderRadius = Math.floor(Math.random*50);
    var color = "rgb(" +r+"," +g+"," +b +")";

    $('<div class="particle"></div>').appendTo('.container').css({
      "top" : event.pageY,
      "left" : event.pageX,
      "padding" : padding,
      "transform" : "rotate("+ rotation +"deg)",
      "background" : "white",
      "borderRadius" :  "50" + "%",
      "boxShadow" : "0 0" + padding + "white"
    }).animate({
    	marginLeft: Math.floor(Math.random()* 200) - 99 + "%",
      marginTop: Math.floor(Math.random()*200) - 99 + "%",
      padding: Math.floor(Math.random()* 3) + "px",
      transform : "rotate("+ rotation +"deg)"
    }, 50000).animate({
      marginLeft: Math.floor(Math.random()* 200) - 99 + "%",
      marginTop: Math.floor(Math.random()*200) - 99 + "%",
      padding: Math.floor(Math.random()* 3) + "px",
      transform : "rotate("+ rotation +"deg)"
    }, 50000)
  }
})

$(document).on("keypress", function(event){
	if(event.which == 32){
  	$(".particle").animate({
    	left: Math.floor(Math.random()*100) + "%",
      top: Math.floor(Math.random()*100) + "%",
      margin: "0px"
    }, 5000)
  }
})

$(document).mousemove(function(event){
  $(".cursor").css({
    left: event.pageX,
    top: event.pageY
  })
})