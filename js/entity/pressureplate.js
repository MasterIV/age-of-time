define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation'],
	function(Entity, V2, colors, RectEntity, graphics, Animation) {

		function PressurePlate(pos, triggerObjects) {
			Entity.call(this, pos);
			this.add(new RectEntity(Zero(), new V2(40, 40), colors.shadow));
			this.triggerObjects = triggerObjects;
			this.targets = [];
		}

		PressurePlate.prototype = new Entity();

		PressurePlate.prototype.onUpdate = function() {
			var relativeArea = this.relativeArea();
			var collides = false;
			for(var key in this.triggerObjects) {
				if(this.triggerObjects[key] && relativeArea.collision(this.triggerObjects[key].relativeArea())) {
					collides = true;
				}
			}

			this.dispatch(this.targets, 'setStatus', collides);
		};

		return PressurePlate;
	}

);