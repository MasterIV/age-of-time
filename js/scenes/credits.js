define(['lib/scene', 'entity/back', 'basic/text', 'geo/v2', 'basic/image', 'core/graphic'],
		function(Scene, BackButton, TextEntity, V2, Image, graphics) {
			graphics.add('img/main-screen-bg.jpg');

			function CreditsScene() {
				Scene.call(this);
				this.add(new Image(new V2(0, 0), 'img/main-screen-bg.jpg'));
				this.add(BackButton('menu', 'right'));
			}

			CreditsScene.prototype = new Scene();

			return CreditsScene;
		}
);