const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "django",
				weight: 12
			}, {
				text: "css3",
				weight: 9
			}, {
				text: "python",
				weight: 12
			}, {
				text: "jquery",
				weight: 10
			}, {
				text: "programming",
				weight: 11
			}, {
				text: "javascript",
				weight: 10
			}, {
				text: "bootstrap",
				weight: 10
			}, {
				text: "sachin",
				weight: 15
			}, {
				text: "pycharm",
				weight: 9
			}, {
				text: "html",
				weight: 9
			}, {
				text: "REST APIs",
				weight: 10
			}, {
				text: "Wordpress",
				weight: 8
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "solve problems.", //"also teach programming to people."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
