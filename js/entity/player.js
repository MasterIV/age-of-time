define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation', 'lib/velociraptor', 'core/graphic'],
	function(Entity, V2, colors, RectEntity, graphics, Animation, Velociraptor, graphics) {

		graphics.add('img/adult_spritesheet_120x120.png');
		graphics.add('img/child_spritesheet_120x120.png');
		graphics.add('img/old_spritesheet_120x120.png');
		graphics.add('img/old_spritesheet_120x120_ghost.png');
		graphics.add('img/adult_spritesheet_120x120_ghost.png');
		graphics.add('img/child_spritesheet_120x120_ghost.png');

		function Player(pos, collider, character) {
			Entity.call(this, pos);
			this.character = character;
			this.velocity = new V2(0,0);

			switch(character) {
				case 'y':
					this.img_string = 'img/child_spritesheet_120x120';
					this.img =  new Animation('img/child_spritesheet_120x120.png', new V2(-40,-40), new V2(8, 3), 100, true);
					this.size = new V2(40, 80);
					break;
				case 'a':
					this.img_string = 'img/adult_spritesheet_120x120';
					this.img =  new Animation('img/adult_spritesheet_120x120.png', new V2(-40,-10), new V2(8, 3), 100, true);
					this.size = new V2(40, 110);
					break;
				case 'e':
					this.img_string = 'img/old_spritesheet_120x120';
					this.img =  new Animation('img/old_spritesheet_120x120.png', new V2(-30,-10), new V2(8, 4), 100, true);
					this.size = new V2(60, 110);
					break;
			}

			this.add(this.img);

			this.leftDown = false;
			this.rightDown = false;
			this.upDown = false;

			this.grounded = false;
			this.ghost = false;
			this.collider = collider(this);
			this.hitting = 0;

			this.isWalking = false;
			this.isJumping = false;

			this.velociraptor = new Velociraptor();
			if(character == 'a') {
				this.velociraptor.maxJumpSpeed *= 1.5;
			}
		}

		Player.prototype = new Entity();

		Player.prototype.onUpdate = function(delta) {
			this.velociraptor.move(this, delta);
			var c = this.collider.move(this.velocity.prd(delta/1000));

			if(this.velocity.y > 0)
				this.grounded = c.y;

			if(c.y) this.velocity.y = 0;
			if(c.x) this.velocity.x = 0;

			if (!this.grounded) {
				if (!this.isJumping) {
					this.isWalking = false;
					this.isJumping = true;
					this.img.state = 2;
				}
			} else if (this.velocity.x != 0) {
				if (this.grounded && !this.isWalking) {
					this.isWalking = true;
					this.img.state = 1;
				}
			} else if(this.isWalking || this.isJumping) {
				this.isWalking = false;
				this.isJumping = false;
				this.img.state = 0;
			}

			if (this.isWalking || this.isJumping) {
				if (this.velocity.x < 0) {
					this.img.flip = -1;
				}
				else if (this.velocity.x > 0) {
					this.img.flip = 1;
				}
			}

			if(this.hitting > 0 && this.character == 'e') {
				if(this.img.state != 3)
					this.oldstate = this.img.state;

				this.img.state = 3;
				this.hitting -= delta;

				if(this.hitting < 1) {
					this.img.state = this.oldstate;
					this.img.duration = 100;
				}
			}
		};

		Player.prototype.hit = function () {
			this.hitting = 390;
			this.img.anitime = 0;
			this.img.duration = 50;
		};

		Player.prototype.down = function(key) {
			switch(key) {
				case 'left': this.leftDown = true; break;
				case 'right': this.rightDown = true; break;
				case 'up':
				case 'space': this.upDown = true; this.jump(); break;
			}
		};

		Player.prototype.up = function(key) {
			switch(key) {
				case 'left': this.leftDown = false; break;
				case 'right': this.rightDown = false; break;
				case 'up':
				case 'space': this.upDown = false; break;
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
			this.ghost = true;
		};

		Player.prototype.fadeIn = function () {
			this.img.alpha = 1;
			this.ghost = false;
		};

		Player.prototype.onDraw = function (ctx) {
		// 	ctx.strokeStyle = 'white';
		// 	ctx.strokeRect(0, 0, this.size.x, this.size.y);
			if (this.ghost) {
				this.img.img = graphics[this.img_string + '_ghost.png'];
			} else {
				this.img.img = graphics[this.img_string + '.png'];
			}
		};

		return Player;
	}
);