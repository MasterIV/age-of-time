define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation'],
	function(Entity, V2, colors, RectEntity, graphics, Animation) {
		function Door(pos) {
			Entity.call(this, pos, new V2(40, 80));
			this.destroyed = false;
			this.add(new RectEntity(Zero(), this.size, colors.shadow));
		}

		Door.prototype = new Entity();

		Door.prototype.onUpdate = function() {
			this.entities[0].color = this.destroyed ? colors.default : colors.player;
		};

		Door.prototype.collision = function(entity, area) {
			if(this.destroyed) {
				return false;
			} else {
				return this.relativeArea().collision(area);
			}
		};

		return Door;
	}
);