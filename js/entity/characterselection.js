define([
	'basic/entity',
	'basic/button',
	'config/colors',
	'geo/v2',
	'core/graphic',
	'basic/layout',
	'config/screen',
	'basic/morph',
	'definition/easing',
	'entity/back'
], function (
	Entity, Button, colors, V2, graphics, Layout, screen, Morph, EASING, Back
) {
	graphics.add('img/character_selection_adult.png');
	graphics.add('img/character_selection_adult_glow.png');
	graphics.add('img/character_selection_child.png');
	graphics.add('img/character_selection_child_glow.png');
	graphics.add('img/character_selection_old.png');
	graphics.add('img/character_selection_old_glow.png');

	function CharacterSelction( data ) {
		Entity.call(this, Zero(), new V2(screen.w, screen.h));
		var self = this;

		this.backgroundOpacity = 0;
		this.hLayout = new Layout.horizontal(new V2(0,-360), 20, 10);
		
		this.add(new Morph({backgroundOpacity: .7}, 2000, EASING.INCUBIC, function(){
			self.add(new Morph({hLayout: {position: {y: 180}}}, 1600, EASING.OUTELASTIC));
			self.add(new Back('levels'));
		}));
			

		if(!data.y)
			this.hLayout.add(Button.create(new V2(40, 400), function() {
				self.select('y');
			}).img('img/character_selection_child.png').hoverImg('img/character_selection_child_glow.png'));

		if(!data.a)
			this.hLayout.add(Button.create(new V2(340, 400), function() {
				self.select('a');
			}).img('img/character_selection_adult.png').hoverImg('img/character_selection_adult_glow.png'));

		if(!data.e)
			this.hLayout.add(Button.create(new V2(640, 400), function() {
				self.select('e');
			}).img('img/character_selection_old.png').hoverImg('img/character_selection_old_glow.png'));

		this.hLayout.align("center");
		this.center(this.hLayout);
	}

	CharacterSelction.prototype = new Entity();

	CharacterSelction.prototype.select = function (character) {
		this.parent.remove(this);
		this.parent.selectCharacter(character);
	};

	CharacterSelction.prototype.onDraw = function (ctx) {
		ctx.fillStyle = 'rgba(0,0,0,'+ this.backgroundOpacity +')';
		ctx.fillRect(0,0,this.size.x, this.size.y);
	};


	return CharacterSelction;
});