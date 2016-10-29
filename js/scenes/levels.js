define(['lib/scene', 'lib/map',  'core/game', 'geo/v2', 'scenes/play', 'basic/button', 'definition/colors', 'config/screen', 'basic/layout'],
	function(Scene, TiledMap, game, V2, PlayScene, Button, Colors, screen, Layout) {
		function LevelsScene() {
			Scene.call(this);

			var vLayout = new Layout.vertical(new V2(0, 20), 20, 50);

			for(var i in TileMaps)
				(function( level ){
					vLayout.add( Button.create(new V2(0, 0), function() {
						game.scene = new PlayScene(level);
					}).rect(600, 80).text(level));
				})(i);

			vLayout.align("center");
			this.center(vLayout);
		}

		LevelsScene.prototype = new Scene();

		return LevelsScene;
	}
);