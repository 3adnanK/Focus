var audioSrc = [
"sounds/fire.mp3",
"sounds/birds.mp3",
"sounds/ocean_waves.mp3",
"sounds/raining.mp3",
"sounds/thunder.mp3",
"sounds/night.mp3"
]

var page_background_colors = [
  ["#B61116", "#239ED8", "#516CB4", "#FBAE14", "#FBC60D"],
  ["#FF3D60", "#C1E88F", "#FFFD98", "#40D6A6", "#BDE4A7"],
  ["#FF3D60", "#E0DBB8", "#3B474F", "#226F54", "#87C38F"]
]

setInterval(function() {
  $('body').css({
    "background-color": page_background_colors[
    parseInt(Math.random() * page_background_colors.length)
    ][parseInt(Math.random() * 5)]
  })
}, 10000);

let fire = new Audio(audioSrc[0]);
fire.loop = true;
fire.preload = "auto";

let birds = new Audio(audioSrc[1]);
birds.loop = true;
birds.preload = "auto";

let waves = new Audio(audioSrc[2]);
waves.loop = true;
waves.preload = "auto";

let raine = new Audio(audioSrc[3]);
raine.loop = true;
raine.preload = "auto";

let thunder = new Audio(audioSrc[4]);
thunder.loop = true;
thunder.preload = "auto";

let night = new Audio(audioSrc[5]);
night.loop = true;
night.preload = "auto";

$('.volume').change(function() {

  switch ($(this).attr("id")) {
    case "birds_volume":
      birds.volume = $(this).val() / 100;
      break;
    case "waves_volume":
      waves.volume = $(this).val() / 100;
      break;
    case "raine_volume":
      raine.volume = $(this).val() / 100;
      break;
    case "fire_volume":
      fire.volume = $(this).val() / 100;
      break;
    case "thunder_volume":
      thunder.volume = $(this).val() / 100;
      break;
    case "night_volume":
      night.volume = $(this).val() / 100;
      break;
    default:
      break;
  }

});

$('.sound_btn').click(function() {
  let elem = $(this);

  if (elem.css("opacity") < 1.0) {
    elem.css("opacity", 1.0);
  } else {
    elem.css("opacity", 0.4);
  }

  switch (elem.attr("id")) {
    case "birds":

      if(birds.paused) {
        birds.play();
      }else {
        birds.currentTime = 0;
        birds.pause();
      }

      break;
    case "waves":

      if(waves.paused) {
        waves.play();
      }else {
        waves.currentTime = 0;
        waves.pause();
      }

      break;
    case "fire":

      if(fire.paused) {
        fire.play();
      }else {
        fire.currentTime = 0;
        fire.pause();
      }

      break;
    case "raine":

      if(raine.paused) {
        raine.play();
      }else {
        raine.currentTime = 0;
        raine.pause();
      }

      break;
    case "thunder":

      if(thunder.paused) {
        thunder.play();
      }else {
        thunder.currentTime = 0;
        thunder.pause();
      }

      break;
    case "night":

      if(night.paused) {
        night.play();
      }else {
        night.currentTime = 0;
        night.pause();
      }

      break;
    default:
      break;
  }
});
