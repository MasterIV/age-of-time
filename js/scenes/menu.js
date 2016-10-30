var level;

define(['lib/scene', 'basic/button', 'core/game', 'geo/v2', 'transitions/slideinright', 'transitions/slideinleft', 'basic/morph', 'definition/easing', 'basic/layout', 'scenes/play', 'core/graphic', 'core/sound'],
	function(Scene, Button, game, V2, SlideInRightTransition, SlideInLeftTransition, Morph, Easing, Layout, PlayScene, graphics, snd) {
		graphics.add('img/main-screen-bg.jpg');
		graphics.add('img/credits_normal.png');
		graphics.add('img/credits_glow.png');
		graphics.add('img/level_normal.png');
		graphics.add('img/level_glow.png');
		graphics.add('img/play_normal.png');
		graphics.add('img/play_glow.png');
		graphics.add('img/clear.png');
		graphics.add('img/button_fullscreen.png');
		snd.add('snd/wilhelm.mp3');

		function MenuScene() {
			Scene.call(this);

			this.bg = 'img/main-screen-bg.jpg';

			var levelButton = Button.create(new V2(302, 310), function() {
				require('config/scenes').levels.updateProgress();
				game.scene = new SlideInRightTransition(require('config/scenes').levels, 1000, Easing.OUTQUAD);
			}).img('img/level_normal.png').hoverImg('img/level_glow.png');

			var playButton = Button.create(new V2(548, 291), function() {
				level = 0;
				game.scene = new PlayScene(MapNames[level]);
			}).img('img/play_normal.png').hoverImg('img/play_glow.png');

			var creditsButton = Button.create(new V2(755, 305), function() {
				game.scene = new SlideInLeftTransition(require('config/scenes').credits, 1000, Easing.OUTQUAD);
			}).img('img/credits_normal.png').hoverImg('img/credits_glow.png');

			var screamButton = Button.create(new V2(606, 611), function() {
				snd.play('snd/wilhelm.mp3');
			}).img('img/clear.png');

			var fullscreenButton = Button.create(new V2(1165, 20), function(){
				if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
					if (document.body.requestFullscreen) {
						document.body.requestFullscreen();
					} else if (document.body.msRequestFullscreen) {
						document.body.msRequestFullscreen();
					} else if (document.body.mozRequestFullScreen) {
						document.body.mozRequestFullScreen();
					} else if (document.body.webkitRequestFullscreen) {
						document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
					}
				} else {
					if (document.exitFullscreen) {
						document.exitFullscreen();
					} else if (document.msExitFullscreen) {
						document.msExitFullscreen();
					} else if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					} else if (document.webkitExitFullscreen) {
						document.webkitExitFullscreen();
					}
				}
			}).img('img/button_fullscreen.png');

			this.add(levelButton);
			this.add(playButton);
			this.add(creditsButton);
			this.add(screamButton);
			this.add(fullscreenButton);

/*			var playButton = Button.create(new V2(0, 680), function() {
				level = 0;
				game.scene = new PlayScene(MapNames[level]);
			}).rect(280, 80).text("Play");

			var creditsButton = Button.create(new V2(0, 680), function() { game.scene = new SlideInRightTransition(require('config/scenes').credits, 1000, Easing.OUTQUAD); }).rect(360, 80).text("Credits");
			var helpButton = Button.create(new V2(0, 680), function() { game.scene = require('config/scenes').help; }).rect(300, 80).text("Help");
			var levelsButton = Button.create(new V2(0, 680), function() { game.scene = require('config/scenes').levels; }).rect(300, 80).text("Levels");

			var vLayout = new Layout.vertical(new V2(0, 20), 20, 50);
			vLayout.add(playButton);
			vLayout.add(levelsButton);
			vLayout.add(creditsButton);
			vLayout.add(helpButton);
			vLayout.align("center");
			this.center(vLayout);*/

			//var easing = Easing.OUTELASTIC;
			//var self = this;

			//playButton.add(new Morph({ position: { y: 100 } }, 1500, easing));
			//creditsButton.add(new Morph({ position: { y: 250 } }, 1500, easing));
			//helpButton.add(new Morph({ position: { y: 400 } }, 1500, easing));
		}

		MenuScene.prototype = new Scene();

		return MenuScene;
	}
);
