import $ from 'jquery';
import { TimelineMax } from 'gsap';

var tl = new TimelineMax;
tl
  .fromTo('.h1', 1, {y:-40,opacity:0}, {y:0,opacity:1});

$('.js-hero').on('click', function() { 
  $('.js-hero').unbind('mouseleave');
  $('.js-hero').unbind('mouseenter');
  var tl = new TimelineMax; 
  tl
    .fromTo('.js-cross-top', 0.3,{y:0}, {y:10},0)
    .fromTo('video', 1, {x:'-47%'}, {x:'-50%',y:'-50%'},0)
    .to('.icon-play', 0.6, {scale:0},0)
    .to('.hero__icon-click', 0.5, {opacity:1,scale:1},0)
    .to('.hero__view', 0.5, {opacity:0},0)
    .to('.video__overlay', 1, {autoAlpha: 0},0)
    .to('.h1', 0.5, {opacity:0,y:-30},0)
    .to('.hero', 0.5, {display:'none'},0)
    .to('.video__block-overlay-right', 1, {x:'70%'},0)
    .to('.video__block-overlay-left', 1, {x:'-70%'},0)
    .fromTo('.video__controls', 0.3, {opacity:0,y:60}, {opacity:1,y:0})
    .to('.js-cross-top', 0.4, {rotation:'45'},0.5)
    .to('.js-cross-bottom', 0.4, {rotation:'-45'},0.5);
  $('video')[0].play(); 
});


$('.js-cross').on('click', function() {
  var tl = new TimelineMax;
  $('.video__pause-play').hide('slow');

  $('.js-hero').bind('mouseenter', function() {
    var tl = new TimelineMax;
    tl
      .to('video', 0.25, {x:'-50%'},0)
      .to('.video__block-overlay-right', 0.25, {x:'5%'},0)
      .to('.video__block-overlay-left', 0.25, {x:'-5%'},0);
  });
  $('.js-hero').bind('mouseleave', function() {
    var tl = new TimelineMax;
    tl
      .to('video', 0.25, {x:'-47%'},0)
      .to('.video__block-overlay-right', 0.25, {x:'-5%'},0)
      .to('.video__block-overlay-left', 0.25, {x:'5%'},0);
  });
  tl 
    .to('.video__controls', 0.3, {opacity:0,y:30},0)
    .fromTo('video', 0.8, {x:'-50%'}, {x:'-47%'},0)  
    .to('.hero', 0, {display:'block'},0)
    .to('.hero__view', 1, {opacity:1},0)
    .fromTo('.h1', 1, {autoAlpha:0, y:-10}, {autoAlpha:1, y:10},0)
    .to('.js-cross-top', 0.4, {rotation:0},0)
    .to('.js-cross-bottom', 0.4, {rotation:0},0)
    .to('.js-cross-top',0.3,{y:0},0.5)
    .to('.js-cross-bottom',0.3,{y:0},0.5)
    .to('.video__block-overlay-right', 1.5, {x:'-5%'},0)
    .to('.video__block-overlay-left', 1.5, {x:'5%'}, '-=1.5')
    .to('.icon-play', 0.5, {scale:1},0)
    .to('.hero__icon-click', 0.5, {opacity:0,scale:0},0);
});


$('.js-hero').bind('mouseenter', function() {
  var tl = new TimelineMax();
  tl
    .to('video', 0.25, {x:'-50%'},0)
    .to('.video__block-overlay-right', 0.25, {x:'5%'},0)
    .to('.video__block-overlay-left', 0.25, {x:'-5%'},0);
});
$('.js-hero').bind('mouseleave', function() {
  var tl = new TimelineMax;
  tl
    .to('video', 0.25, {x:'-47%'},0)
    .to('.video__block-overlay-right', 0.25, {x:'0%'},0)
    .to('.video__block-overlay-left', 0.25, {x:'0%'},0);
});
