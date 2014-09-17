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

function startVideoClock(){
	$('.carousel').carousel('pause');
	setTimeout(function(){
		$('.carousel').carousel('next');
	},16000);
	setTimeout(function(){
		$('.carousel').carousel('next');
	},33000)
	setTimeout(function(){
		$('.carousel').carousel('next');	
	},56000)
	setTimeout(function(){
		$('.carousel').carousel('next');		
	},72000)
	setTimeout(function(){
		$('.carousel').carousel('next');
		startVideoClock();
	},84000)
}

function mute(){
	$(".video").prop('muted', true);
}
