import $ from 'jquery';
var video = $('.video__video video');
$('video, .video__pause-play').on('click',function() {
  if (video[0].paused) {
    $('.js-hero').css('display', 'none');
    $('.video__pause-play').hide('slow');
    $('.icon-pause-play').hide('slow');
    $('.video__currentTime').hide();
    $('.video__pause').hide();
    video[0].play();
  } else {
    video[0].pause();
    $('.js-hero').css('display', 'none');
    $('.video__pause-play').show('slow');
    $('.icon-pause-play').show('slow');
    $('.video__currentTime').show();
    $('.video__pause').show();
  }
  return false;
});

video.on('timeupdate', function() {
  $('.video__currentTime').text(timeFormat(video[0].currentTime));
});

video.on('loadedmetadata', function() {
  $('.video__duration').text(timeFormat(video[0].duration));
  console.log('.video__duration');
});
 
video.on('timeupdate', function() {
  var currentPos = Math.round(video[0].currentTime);
  var maxduration = Math.round(video[0].duration);
  var percentage = 100 * currentPos / maxduration;
  $('.video__progressBar span').css('width', percentage +'%');
  // console.log(currentPos);
});



var timeFormat = function(seconds) {
  var m = Math.floor(seconds/60)<10 ? '0'+Math.floor(seconds/60) : Math.floor(seconds/60);
  var s = Math.floor(seconds-(m*60))<10 ? '0'+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
  return m+':'+s;
};
