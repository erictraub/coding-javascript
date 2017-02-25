app.controller('HomeController', function($scope, HomeFactory) {
	var vidHeight;
	formatNavColor();
	setOverlayHeight();
	openVidModal();
	$scope.showVideos = true;
	$scope.showCourses = true;
	$scope.emailAddress = '';
	console.clear();
	console.log('%cGo to "codingjavascript.com/learn" ... you\'ll love it!', "color:blue; background:white; font-size: 14pt");

	$scope.videos = [
		{title: 'Learning Data Structures In JavaScript From Scratch Intro', image: "url('/assets/courseIntroImg.png')", videoLink: 'https://www.youtube.com/watch?v=dHO7tKgsBLg'},
		{title: 'What are Data Structures and Why are They Important?', image: "url('/assets/whatAreDSImg.png')", videoLink: 'https://www.youtube.com/watch?v=d9lTfx1yeEA'},
		{title: 'Introduction to Linked Lists', image: "url('/assets/llIntroImg.png')", videoLink: 'https://www.youtube.com/watch?v=LUmyGNr13_g'},
		{title: 'Linked List Performance', image: "url('/assets/llPerformanceImg.png')", videoLink: 'https://www.youtube.com/watch?v=Qo7HZ-21rRs'},
		{title: 'Introduction to Binary Search Trees', image: "url('/assets/bstIntroImg.png')", videoLink: 'https://www.youtube.com/watch?v=4eYkhY9k3MU'},
		{title: 'Binary Search Tree Performance', image: "url('/assets/bstPerformanceImg.png')", videoLink: 'https://www.youtube.com/watch?v=7WZQ08QOrQ4'},
		{title: 'Introduction to Hash Tables', image: "url('/assets/htIntroImg.png')", videoLink: 'https://www.youtube.com/watch?v=eOa_OL4rEl0'},
		{title: 'Hash Table Performance', image: "url('/assets/htPerformanceImg.png')", videoLink: 'https://www.youtube.com/watch?v=8dwGgADzXrk'},
		{title: 'Time Complexity of Algorithms', image: "url('/assets/bigOimg.png')", videoLink: 'https://www.youtube.com/watch?v=GhFmRmCK2Ck'},
		{title: 'Introduction to Recursion', image: "url('/assets/recursionImg.png')", videoLink: 'https://www.youtube.com/watch?v=xe_Mp_8CR_0'},
		{title: 'Introduction to the Prototype Object', image: "url('/assets/prototypeImg.png')", videoLink: 'https://www.youtube.com/watch?v=R8tKG8p9UyE'},
		{title: 'Introduction to the Call Stack', image: "url('/assets/callStackImg.png')", videoLink: 'https://www.youtube.com/watch?v=w7QWQlkLY_s'},
		{title: 'Introduction to Constructor Functions', image: "url('/assets/cfThisImg.png')", videoLink: 'https://www.youtube.com/watch?v=TR7Y0-1MbaE'},
	];

	function formatNavColor() {
		var navBar = $('.nav-bar-static');
		$(window).scroll(function(){
	        var scrollHeight = $(document).scrollTop();
	        if (scrollHeight > 100) {
	        	$('.nav-bar-static').addClass('is-scroll-nav');
	        	$('.nav-item').addClass('is-scroll-nav-item');
	        }
	        else {
	        	$('.nav-bar-static').removeClass('is-scroll-nav');
	        	$('.nav-item').removeClass('is-scroll-nav-item');
	        }
	    });
	};

	function setOverlayHeight() {
		vidHeight = $('#header-video').height();
		$('.overlay').css('height', vidHeight);
		$('.video-container ').css('height', vidHeight);
	};

	$scope.chooseSection = function(option) {
		var headerImgHeight = $('.header-img').height();
		if (option === 'videos') {
			$scope.showCourses = false;
			$scope.showVideos = true;
		}
		else if (option === 'courses') {
			$scope.showVideos = false;
			$scope.showCourses = true;
		}
		// $("html, body").animate({ scrollTop: vidHeight - 39 + "px" });  // for video header
		$("html, body").animate({ scrollTop: headerImgHeight - 39 + "px" });
	};

	$scope.onArrowClick = function() {
		var headerImgHeight = $('.header-img').height();
		$("html, body").animate({ scrollTop: headerImgHeight - 39 + "px" });
	}

	function openVidModal() {
		setTimeout(() => {
			$('.popup-youtube').magnificPopup({
		        disableOn: 700,
		        type: 'iframe',
		        mainClass: 'mfp-fade',
		        removalDelay: 160,
		        preloader: false,
		        fixedContentPos: false,
		        iframe: {
		        markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		            '<div class="mfp-title"><a href="https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/?couponCode=CODINGJS1" target="_blank" class="mfp-title-text">Take the course here!</a></div>' +
		          '</div>',
			    patterns: {
			      dailymotion: {
			       
			        index: 'dailymotion.com',
			        
			        id: function(url) {        
			            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
			            if (m !== null) {
			                if(m[4] !== undefined) {
			                  
			                    return m[4];
			                }
			                return m[2];
			            }
			            return null;
			        },
			        
			        src: 'http://www.dailymotion.com/embed/video/%id%'
			        
			      }
			    }
			  }
		    });
		}, 1000);
	};

	$scope.openSubscribeModal = function() {
		$('#myModal').modal();
	};

	$scope.goToCourse = function() {
		var win = window.open('https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/?couponCode=CODINGJS3', '_blank');
		win.focus();
	};

	$scope.submitEmail = function() {
		if (!$scope.emailAddress.length) return;
		HomeFactory.createNewEmail($scope.emailAddress)
			.then(function(data) {
				$scope.emailAddress = '';
				$('#myModal').modal('hide');
				setTimeout(function() {
					$('.confirm-div-container').fadeIn(600);
				}, 200);
				setTimeout(function() {
					$('.confirm-div-container').fadeOut(1000);
				}, 2800);
			});
	};

});





