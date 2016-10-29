define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation', 'core/sound'],
	function(Entity, V2, colors, RectEntity, graphics, Animation, snd) {
		graphics.add('img/tiles/Button_top_green.png');
		graphics.add('img/tiles/Button_top_blue.png');
		graphics.add('img/tiles/Button_top_red.png');
		graphics.add('img/tiles/Button_top_yellow.png');
		snd.add('snd/button.mp3');

		function PressurePlate(pos, color, triggerObjects) {
			Entity.call(this, pos, new V2(40, 40));
			this.img = graphics['img/tiles/Button_top_'+color+'.png'];
			this.triggerObjects = triggerObjects;
			this.targets = [];
			this.pressed = false;
		}

		PressurePlate.prototype = new Entity();

		PressurePlate.prototype.onUpdate = function() {
			var relativeArea = this.relativeArea();
			var before = this.pressed;
			this.pressed = false;
			for(var key in this.triggerObjects) {
				if(this.triggerObjects[key] && relativeArea.collision(this.triggerObjects[key].relativeArea())) {
					this.pressed = true;
					if(!before) snd.play('snd/button.mp3');
					break;
				}
			}

			this.dispatch(this.targets, 'setStatus', this.pressed);
		};

		PressurePlate.prototype.onDraw = function( ctx ) {
			if(!this.pressed)
				ctx.drawImage(this.img, 0, 0);
		};

		return PressurePlate;
	}

);