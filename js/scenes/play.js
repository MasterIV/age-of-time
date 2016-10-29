define(['lib/scene', 'entity/player', 'lib/map', 'lib/viewport', 'basic/rect', 'config/colors', 'geo/v2', 'lib/gridcollider'],
		function(Scene, Player, TiledMap, ViewPort, RectEntity, colors, V2, GridCollider ) {
			function PlayScene() {
				Scene.call(this);

				var map = new TiledMap('map');
				var viewport = new ViewPort(true);
				var obstacle = new RectEntity(new V2(80, 400), new V2(40, 80), colors.default);
				var player = new Player(new V2(500, 500), GridCollider.factory(map, [obstacle]));

				viewport.add(map.render());
				viewport.add(player);
				viewport.add(obstacle);
				viewport.follow(player);

				this.add(viewport);
				this.keyAware.push(player);
			}

			PlayScene.prototype = new Scene();

			return PlayScene;
		}
);