define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation'],
	function(Entity, V2, colors, RectEntity, graphics, Animation) {

		function Door(pos) {
			Entity.call(this);
			this.position = pos;
			this.isOpen = false;
			this.add(new RectEntity(Zero(), new V2(40, 80), colors.shadow));
		}

		Door.prototype = new Entity();

		Door.prototype.onUpdate = function() {
			this.entities[0].color = this.isOpen ? colors.default : colors.player;
		}

		Door.prototype.relativeArea = function() {
			if(this.isOpen) {
				return { collision: function(){ return false; } }
			} else {
				return Entity.prototype.relativeArea.call(this);
			}
		}

		return Door;
	}
);