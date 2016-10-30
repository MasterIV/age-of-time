define(['lib/scene', 'lib/map',  'core/game', 'geo/v2', 'scenes/play', 'basic/button', 'definition/colors', 'config/screen', 'basic/layout'],
	function(Scene, TiledMap, game, V2, PlayScene, Button, Colors, screen, Layout) {
		function LevelsScene() {
			Scene.call(this);

			var hLayout = new Layout.horizontal(Zero(), 20, 10);
			var vLayout = new Layout.vertical(Zero(), 20, 10);
			var count = 1;

			for(var i in TileMaps)
				(function( level ){
					vLayout.add( Button.create(new V2(0, 0), function() {
						game.scene = new PlayScene(level);
					}).rect(500, 60).text(level));

					if(++count > 9) {
						vLayout.align("center");
						hLayout.add(vLayout);
						vLayout = new Layout.vertical(Zero(), 20, 10);
						count = 1;
					}
				})(i);

			vLayout.align("center");
			hLayout.add(vLayout);
			hLayout.align("center");
			this.center(hLayout);
		}

		LevelsScene.prototype = new Scene();

		return LevelsScene;
	}
);