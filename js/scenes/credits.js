define(['lib/scene', 'entity/back', 'basic/text', 'geo/v2', 'basic/image', 'core/graphic'],
		function(Scene, BackButton, TextEntity, V2, Image, graphics) {
			graphics.add('img/credits.jpg');

			function CreditsScene() {
				Scene.call(this);
				this.bg = 'img/credits.jpg';
				this.add(BackButton('menu', 'right'));
			}

			CreditsScene.prototype = new Scene();

			return CreditsScene;
		}
);