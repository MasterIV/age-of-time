define(['lib/scene', 'entity/back', 'entity/levelcomplete'],
		function(Scene, BackButton, lc) {

			function HelpScene() {
				Scene.call(this);
				this.center(BackButton('menu'));

				this.center(new lc(3, function() { alert("hilfe"); }));
			}

			HelpScene.prototype = new Scene();

			return HelpScene;
		}
);