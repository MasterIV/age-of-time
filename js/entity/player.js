define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation'],
	function(Entity, V2, colors, RectEntity, graphics, Animation) {
		var jumpSpeed = 400;
		var acceleration = .3;
		var deceleration = .5;
		var gravity = .6;
		var speed = 200;

		function Player(pos, collider) {
			Entity.call(this);
			this.position = pos;
			this.img =  new RectEntity(Zero(), new V2(40, 80), colors.player);
			this.add(this.img);
			this.velocity = new V2(0,0);

			this.leftDown = false;
			this.rightDown = false;

			this.acceleration = acceleration;
			this.deceleration = deceleration;

			this.grounded = false;
			this.collider = collider(this);
		}

		Player.prototype = new Entity();

		Player.prototype.onUpdate = function(delta) {

			if (this.leftDown) {
				if (!this.rightDown) {
					if (this.velocity.x > 0)
						this.velocity.x = Math.max(-speed, this.velocity.x - this.deceleration * delta);
					else
						this.velocity.x = Math.max(-speed, this.velocity.x - this.acceleration * delta);
				} else {
					if (this.velocity.x > 0)
						this.velocity.x = Math.max(0, this.velocity.x - this.deceleration * delta);
					else
						this.velocity.x = Math.min(0, this.velocity.x + this.deceleration * delta);
				}
			} else if (this.rightDown) {
				if (this.velocity.x < 0)
					this.velocity.x = Math.min(speed, this.velocity.x + this.deceleration * delta);
				else
					this.velocity.x = Math.min(speed, this.velocity.x + this.acceleration * delta);
			} else {
				if (this.velocity.x > 0)
					this.velocity.x = Math.max(0, this.velocity.x - this.acceleration * delta);
				if (this.velocity.x < 0)
					this.velocity.x = Math.min(0, this.velocity.x + this.acceleration * delta);
			}

			this.velocity.y += gravity * delta;

			var c = this.collider.move(this.velocity.prd(delta/1000));

			if(!this.grounded && c.y && this.velocity.y > 0)
				this.grounded = true;

			if(c.y) this.velocity.y = 0;
		};

		Player.prototype.down = function(key) {
			switch(key) {
				// case 'left': this.velocity.x = -speed; break;
				// case 'right': this.velocity.x = speed; break;
				case 'left': this.leftDown = true; break;
				case 'right': this.rightDown = true; break;
				case 'up': this.jump(); break;
				case 'space': this.jump(); break;
			}
		};

		Player.prototype.up = function(key) {
			switch(key) {
				//case 'left':  case 'right': this.velocity.x = 0; break;
				case 'left': this.leftDown = false; break;
				case 'right': this.rightDown = false; break;
			}
		};

		Player.prototype.jump = function () {
			if(this.grounded) {
				this.grounded = false;
				this.velocity.y = -jumpSpeed;
			}
		};

		Player.prototype.stop = function () {
			this.leftDown = false;
			this.rightDown = false;
		}

		Player.prototype.fadeOut = function () {
			this.img.color = colors.shadow;
		};

		Player.prototype.fadeIn = function () {
			this.img.color = colors.player;
		};

		return Player;
	}
);