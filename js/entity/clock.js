define([
		'basic/entity',
		'geo/v2',
		'config/colors',
		'basic/image',
		'core/graphic',
		'lib/animation',
		'core/game',
		'lib/persistentstorage',
		'core/sound'],
	function(Entity, V2, colors, ImageEntity, graphics, Animation, game, storage, snd) {
		graphics.add('img/tiles/collectible_clock.png');
		snd.add('snd/clock.mp3');

		function Clock(pos, triggerObjects) {
			Entity.call(this, pos);
			this.add(new ImageEntity(Zero(), 'img/tiles/collectible_clock.png'));
			this.triggerObjects = triggerObjects;
		}

		Clock.prototype = new Entity();

		Clock.prototype.onUpdate = function() {
			if(this.destroyed) return;
			var r = this.relativeArea();
			for(var key in this.triggerObjects)
				if(this.triggerObjects[key] && r.collision(this.triggerObjects[key].relativeArea()))
					return this.collect();
		};

		Clock.prototype.draw = function(ctx) {
			if(this.destroyed) return;
			Entity.prototype.draw.call(this, ctx);
		};

		Clock.prototype.reset = function() {
			this.destroyed = false;
		};

		Clock.prototype.collect = function() {
			game.scene.clocks++;
			this.destroyed = true;
			snd.play('snd/clock.mp3');
		};

		return Clock;
	}

);