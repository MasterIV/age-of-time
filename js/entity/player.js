define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation', 'lib/velociraptor', 'core/graphic'],
	function(Entity, V2, colors, RectEntity, graphics, Animation, Velociraptor, graphics) {

		graphics.add('img/adult_spritesheet_40x40.png');
		graphics.add('img/child_spritesheet_40x40.png');

		function Player(pos, collider, character) {
			Entity.call(this, pos);
			this.character = character;
			this.velocity = new V2(0,0);

			switch(character) {
				case 'y': this.img =  new Animation('img/child_spritesheet_40x40.png', new V2(-20,-40), new V2(8, 3), 100, true); this.size = new V2(40, 40); break;
				case 'a': this.img =  new Animation('img/adult_spritesheet_40x40.png', new V2(-20,-10), new V2(8, 3), 100, true); this.size = new V2(40, 70); break;
				case 'e': this.img =  new RectEntity(Zero(), new V2(40, 70), colors.player_e); this.size = new V2(40, 70); break;
			}

			this.add(this.img);

			this.leftDown = false;
			this.rightDown = false;

			this.grounded = false;
			this.collider = collider(this);

			this.isWalking = false;
			this.isJumping = false;

			this.velociraptor = new Velociraptor();
			if(character == 'a')
				this.velociraptor.maxJumpSpeed *= 1.5;
		}

		Player.prototype = new Entity();

		Player.prototype.onUpdate = function(delta) {
			this.velociraptor.move(this, delta);
			var c = this.collider.move(this.velocity.prd(delta/1000));

			if(this.velocity.y > 0)
				this.grounded = c.y;

			if(c.y) this.velocity.y = 0;
			if(c.x) this.velocity.x = 0;

			if (this.character == 'e') return;

			if (!this.grounded) {
				if (!this.isJumping) {
					this.isWalking = false;
					this.img.state = 2;
				}
			} else if (this.velocity.x != 0) {
				if (this.grounded && !this.isWalking) {
					this.isWalking = true;
					this.img.state = 1;
				}
			} else if(this.isWalking) {
				this.isWalking = false;
				this.img.state = 0;
			}
			if (this.isWalking || this.isJumping) {
				if (this.velocity.x < 0)
					this.img.flip = -1;
				else
					this.img.flip = 1;
			}
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
				this.velociraptor.jump(this);
			}
		};

		Player.prototype.stop = function () {
			this.leftDown = false;
			this.rightDown = false;
		};

		Player.prototype.fadeOut = function () {
			this.img.alpha = .5;
		};

		Player.prototype.fadeIn = function () {
			this.img.alpha = 1;
		};

/*		Player.prototype.onDraw = function (ctx) {
			ctx.strokeRect(0,0, 40,80);
		}*/

		return Player;
	}
);