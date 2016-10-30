define(['require', 'basic/button', 'core/graphic', 'core/game', 'geo/v2', 'transitions/slideinleft', 'transitions/slideinright', 'definition/easing'],
	function(require, Button, graphics, game, V2, SlideInLeftTransition, SlideInRightTransition, Easing) {
		graphics.add('img/button_back.png');

		function BackButton(scene, dir) {
			return Button.create(new V2(10, 10), function() {
				if(dir) game.scene = new SlideInRightTransition(require('config/scenes')[scene], 1000, Easing.OUTQUAD);
				else game.scene = new SlideInLeftTransition(require('config/scenes')[scene], 1000, Easing.OUTQUAD);
			}).img('img/button_back.png');
		}

		return BackButton;
	}
);