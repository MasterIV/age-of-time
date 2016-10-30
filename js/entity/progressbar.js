define([
	'basic/entity', 'basic/button', 'geo/v2', 'core/graphic', 'basic/partialimage', 'definition/easing', 'basic/morph'
], function (
	Entity, Button, V2, graphics, PartialImage, EASING, Morph
) {
	graphics.add('img/timeline.png');
	graphics.add('img/timeline_full.png');

	function Progressbar( pos ) {
		Entity.call(this, pos);
		var self = this;

		this.topPosition = 730;
		this.add(new Morph({topPosition: 621}, 1000, EASING.INOUTCUBIC));

		this.bar = Button.create(new V2(436, this.topPosition), function() {
			self.setProgress(1);
			self.parent.delta = self.parent.duration;
		}).img('img/timeline.png');
		this.add(this.bar);

		this.progressImage = new PartialImage(new V2(436, this.topPosition), 'img/timeline_full.png', 1, 0);
		this.add(this.progressImage);

		this.setProgress(0);
	}

	Progressbar.prototype = new Entity();

	Progressbar.prototype.onUpdate = function() {
		this.bar.position.y = this.topPosition;
		this.progressImage.position.y = this.topPosition;
		var progress = this.parent.delta / this.parent.duration;
		if(this.parent.player) this.setProgress(progress);
	};

	Progressbar.prototype.setProgress = function(progress) {
		this.progressImage.percent = 0.07 + progress * 0.88;
	};

	return Progressbar;
});