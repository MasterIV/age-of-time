define([
	'basic/entity', 'basic/button', 'config/colors', 'geo/v2', 'core/graphic'
], function (
	Entity, Button, colors, V2, graphics
) {
	graphics.add('img/character_selection_adult.png');
	graphics.add('img/character_selection_adult_glow.png');
	graphics.add('img/character_selection_child.png');
	graphics.add('img/character_selection_child_glow.png');
	graphics.add('img/character_selection_old.png');
	graphics.add('img/character_selection_old_glow.png');

	function CharacterSelction() {
		Entity.call(this);
		var self = this;

		this.add(Button.create(new V2(40, 400), function() {
			self.select('y');
		}).img('img/character_selection_child.png').hoverImg('img/character_selection_child_glow.png'));

		this.add(Button.create(new V2(340, 400), function() {
			self.select('a');
		}).img('img/character_selection_adult.png').hoverImg('img/character_selection_adult_glow.png'));

		this.add(Button.create(new V2(640, 400), function() {
			self.select('e');
		}).img('img/character_selection_old.png').hoverImg('img/character_selection_old_glow.png'));
	}

	CharacterSelction.prototype = new Entity();

	CharacterSelction.prototype.select = function (character) {
		this.parent.remove(this);
		this.parent.selectCharacter(character);
	};

	return CharacterSelction;
});