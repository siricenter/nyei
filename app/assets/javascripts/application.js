// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
//= require bootstrap

$(window).load(function x(){
    startVideoClock();
});

function startVideo(){
	 $('.active').children(".video")[0].play();
}

var number = 0;
function changeSlide(){
	var item = $(".active");
	var nextItem = item.next();
	var parent = item.parent();
	var firstItem = parent.children().first();
	var lastItem = parent.children().last();
	var prevItem = item.prev();
		
	item.removeClass("active");
	lastItem.removeClass('prev');
	item.addClass("prev");
	

	switch(number){
		case 0:

			nextItem.addClass('active');
			break;
		case 1:

			prevItem.removeClass('prev');
			nextItem.addClass('active');
			break;
		case 2:
			prevItem.removeClass('prev');
			nextItem.addClass('active');
			break;
		case 3:
			prevItem.removeClass('prev');
			nextItem.addClass('active');
			break;
		case 4:
			prevItem.removeClass('prev');
			firstItem.addClass('active');

			break;
	}
	number++;
	if(number > 4){
		number = 0;
	}
}

function stopVideo(){
	var item = $('.carousel-inner').children('.active').children('.video') 
 		item[0].currentTime = 0;
 		item[0].pause();
}


function startVideoClock(){
	$('.carousel').carousel('pause');
	startVideo();
	setTimeout(function(){
		stopVideo();
		changeSlide();
		startVideo();
	},15000);
	setTimeout(function(){
		stopVideo();
		changeSlide();
		startVideo();
	},32000)
	setTimeout(function(){
		stopVideo();
		changeSlide();
		startVideo();	
	},55000)
	setTimeout(function(){
		stopVideo();
		changeSlide();
		startVideo();		
	},71000)
	setTimeout(function(){
		stopVideo();
		changeSlide();
		startVideoClock();
	},83000)
}

function mute(){
	$(".video").prop('muted', true);
}
