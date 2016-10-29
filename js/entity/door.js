define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation'],
	function(Entity, V2, colors, RectEntity, graphics, Animation) {
		function Door(pos) {
			Entity.call(this, pos, new V2(40, 80));
			this.isOpen = false;
			this.add(new RectEntity(Zero(), this.size, colors.shadow));
		}

		Door.prototype = new Entity();

		Door.prototype.onUpdate = function() {
			this.entities[0].color = this.isOpen ? colors.default : colors.player;
		};

		Door.prototype.setStatus = function(status) {
			this.isOpen = status;
		};

		Door.prototype.collision = function(entity, area) {
			if(this.isOpen) {
				return false;
			} else {
				return this.relativeArea().collision(area);
			}
		};

		return Door;
	}
);