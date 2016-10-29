define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation'],
	function(Entity, V2, colors, RectEntity, graphics, Animation) {
		var jumpSpeed = 400;
		var gravity = .6;
		var speed = 100;

		function Player(pos, collider) {
			Entity.call(this);
			this.position = pos;
			this.img =  new RectEntity(Zero(), new V2(40, 80), colors.player);
			this.add(this.img);
			this.velocity = new V2(0,0);

			this.grounded = false;
			this.collider = collider(this);
		}

		Player.prototype = new Entity();

		Player.prototype.onUpdate = function(delta) {
			this.velocity.y += gravity * delta;
			var c = this.collider.move(this.velocity.prd(delta/1000));

			if(!this.grounded && c.y && this.velocity.y > 0)
				this.grounded = true;

			if(c.y) this.velocity.y = 0;
		};

		Player.prototype.down = function(key) {
			switch(key) {
				case 'left': this.velocity.x = -speed; break;
				case 'right': this.velocity.x = speed; break;
				case 'up': this.jump(); break;
				case 'space': this.jump(); break;
			}
		};

		Player.prototype.up = function(key) {
			switch(key) {
				case 'left':  case 'right': this.velocity.x = 0; break;
			}
		};

		Player.prototype.jump = function () {
			if(this.grounded) {
				this.grounded = false;
				this.velocity.y = -jumpSpeed;
			}
		};

		Player.prototype.fadeOut = function () {
			this.img.color = colors.shadow;
		};

		Player.prototype.fadeIn = function () {
			this.img.color = colors.player;
		};

		return Player;
	}
);