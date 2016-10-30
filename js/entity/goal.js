define(['basic/entity', 'geo/v2', 'config/colors', 'basic/image', 'core/graphic', 'lib/animation', 'core/game'],
	function(Entity, V2, colors, ImageEntity, graphics, Animation, game) {
		graphics.add('img/tiles/door.png');

		function Goal(pos, triggerObjects) {
			Entity.call(this, pos);
			this.add(new ImageEntity(new V2(0, -80), 'img/tiles/door.png'));
			this.triggerObjects = triggerObjects;
		}

		Goal.prototype = new Entity();

		Goal.prototype.onUpdate = function() {
			var r = this.relativeArea();
			for(var key in this.triggerObjects)
				if(this.triggerObjects[key] && r.collision(this.triggerObjects[key].relativeArea()))
					return this.win();
		};

		Goal.prototype.win = function() {
			var map = MapNames[++level];
			var PlayScene = require('scenes/play');
			if( map ) game.scene = new PlayScene(map);
			else game.scene = require('config/scenes').menu;
		};

		return Goal;
	}

);