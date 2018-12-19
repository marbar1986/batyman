$(function() {
vph = $(window).height();
$(".cinema").css("height",`${vph}px`);

var clip;
var position = 350;

function startClip(){
  clip = setInterval ( () => {
    console.log(position)
$(".clip").css("background",`url("./images/movies_clip2.png")-${position}px 0px`);

if (position < 1750)
{ position = position + 350;}
else{
clearInterval(clip);
$(".clip").remove();
$(".stickman_city").css("display","block");
startStickman();
}
}, 1000 );
}

startClip();

var clip_broken;
var position2 = 350;

function startClip_broken(){
  clip_broken = setInterval ( () => {
$(".clip_broken").css("background",`url("./images/break_movie.png")-${position2}px 0px`);
if (position2 < 3850)
{ position2 = position2 + 350;}
else{
position2=350;
}
}, 100 );
}

startClip_broken();

var stickman;
var position3 = 100;
var position_count = 0;
function startStickman(){
  stickman = setInterval ( () => {
position_count++;
$(".stickman_picture").css("background",`url("./images/stickman_move_all1.png")-${position3}px 0px`);
$(".stickman_move").css("left",`${position_count}%`);
if(position_count == 40){
  clearInterval(stickman);
  startStickman_bat();
}
if(position_count == 86){
  clearInterval(stickman);
  $(".finish_text").css("display","block");
  $(".stickman_city").remove();
}
if (position3 < 400)
{ position3 = position3 + 100;}
else{
position3 =100;
}
}, 150 );
}

var stickman_bat;
var position4 = 100;
function startStickman_bat(){
  stickman_bat = setInterval ( () => {
$(".stickman_picture").css("background",`url("./images/bat/stickman_bat_all.png")-${position4}px 0px`);
if (position4 < 800){
  position4 = position4 + 100;
  if(position4 == 700){
    $(".broken_glass").css("display","block");
  }
}
if(position4 == 800){
  clearInterval(stickman_bat);
  startStickman();
}

}, 150 );
}

})
