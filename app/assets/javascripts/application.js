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


$(window).load(function(){
	var date = new Date();
	var hour = date.getHours();
	if(hour < 19 && hour > 7){
		$(".video").attr('src','landing-day.mp4');
	}
	else{
		$(".video").attr('src','http://www.galleries.evancaldwell.com/videos/homePage_webmhd.webm');
	}
});