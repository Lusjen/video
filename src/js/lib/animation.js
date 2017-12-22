import $ from 'jquery';
import { TimelineMax } from 'gsap';

$('.js-play').on('click', function() {
  $('.video video')[0].play();
  $('.js-play').unbind('mouseout');
  $('.js-play').unbind('mouseover');
  var tl = new TimelineMax;
 
  tl
    .to('video', 0.1, {x:'0%'})
    .to('.js-play', 0, {opacity:0})
    .to('.hero__view', 0.5, {opacity:0})
    .to('.video__overlay', 0.5, {autoAlpha: 0})
    .to('.h1', 0.5, {opacity:0,y:-30})
    .to('.video__block-overlay-right', 0.5, {x:'70%'})
    .to('.video__block-overlay-left', 0.5, {x:'-70%'}, '-=0.5')
    .to('.js-cross1', 0.4, {rotation:'45'})
    .to('.js-cross2', 0.4, {rotation:'-45'}, '-=0.4');
    
});


$('.js-cross').on('click', function() {
  var tl = new TimelineMax;
  $('.js-play').bind('mouseout', function() {
    var tl = new TimelineMax;

    tl
      .to('video', 1, {x:'5%'})
      .to('.video__block-overlay-right', 1, {x:'0%'})
      .to('.video__block-overlay-left', 1, {x:'0%'}, '-=1')
      .to('.js-play', 1, {scale: 1});
  });

  $('.js-play').bind('mouseover', function() {
    var tl = new TimelineMax;

    tl
      .to('video', 1, {x:'0%'})
      .to('.video__block-overlay-right', 0.25, {x:'10%'})
      .to('.video__block-overlay-left', 0.25, {x:'-10%'}, '-=0.25')
      .to('.js-play', 1, {scale:'1.6'});
  });

  tl
    .to('.hero__view', 0.5, {opacity:1})
    .fromTo('.h1', 0.5, {autoAlpha:0, y:-10}, {autoAlpha:1, y:10})
    .to('.js-cross1', 0.4, {rotation:0})
    .to('.js-cross2', 0.4, {rotation:0}, '-=0.4')
    .to('.js-play', 0, {opacity:1})
    .to('.video__block-overlay-right', 0.5, {x:'10%'})
    .to('.video__block-overlay-left', 0.5, {x:'-10%'}, '-=0.5');

});


$('.js-play').bind('mouseover', function() {
  var tl = new TimelineMax();
  tl
    .to('video', 1, {x:'-3%'})
    .to('.video__block-overlay-right', 0.25, {x:'10%'})
    .to('.video__block-overlay-left', 0.25, {x:'-10%'}, '-=0.25')
    .to('.js-play', 0.25, {scale:'1.6'});
  // .staggerTo(['.video__block-overlay-right', '.video__block-overlay-left'], 0.25, {x:0.25});
});
$('.js-play').bind('mouseout', function() {
  var tl = new TimelineMax;
  tl
    .to('video', 1, {x:'3%'})
    .to('.video__block-overlay-right', 1, {x:'0%'})
    .to('.video__block-overlay-left', 1, {x:'0%'}, '-=1')
    .to('.js-play', 0.5, {scale:1});
});
