define([
	'basic/entity', 'basic/button', 'config/colors', 'geo/v2'
], function (
	Entity, Button, colors, V2
) {
	function CharacterSelction() {
		Entity.call(this);
		var self = this;

		this.add(Button.create(new V2(100, 300), function() {
			self.select('y');
		}).rect(100, 100, colors.default).text('Y'));

		this.add(Button.create(new V2(300, 300), function() {
			self.select('A');
		}).rect(100, 100, colors.default).text('A'));

		this.add(Button.create(new V2(500, 300), function() {
			self.select('E');
		}).rect(100, 100, colors.default).text('E'));
	}

	CharacterSelction.prototype = new Entity();

	CharacterSelction.prototype.select = function (character) {
		this.parent.remove(this);
		this.parent.selectCharacter(character);
	};

	return CharacterSelction;
});