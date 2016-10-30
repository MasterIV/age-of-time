define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation', 'core/game'],
	function(Entity, V2, colors, RectEntity, graphics, Animation, game) {
		function Goal(pos, triggerObjects) {
			Entity.call(this, pos);
			this.add(new RectEntity(Zero(), new V2(40, 40), colors.shadow));
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