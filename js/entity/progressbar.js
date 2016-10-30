define([
	'basic/entity', 'basic/button', 'geo/v2', 'core/graphic', 'basic/partialimage'
], function (
	Entity, Button, V2, graphics, PartialImage
) {
	graphics.add('img/timeline.png');
	graphics.add('img/timeline_full.png');

	function Progressbar( pos ) {
		Entity.call(this, pos);
		var self = this;

		var bar = Button.create(new V2(850, 20), function() {
			self.setProgress(1);
			self.parent.delta = self.parent.duration;
		}).img('img/timeline.png');
		this.add(bar);

		this.progressImage = new PartialImage(new V2(850, 20), 'img/timeline_full.png', 1, 0);
		this.add(this.progressImage);

		this.setProgress(0);
	}

	Progressbar.prototype = new Entity();

	Progressbar.prototype.onUpdate = function() {
		var progress = this.parent.delta / this.parent.duration;
		if(this.parent.player) this.setProgress(progress);
	};

	Progressbar.prototype.setProgress = function(progress) {
		this.progressImage.percent = 0.07 + progress * 0.88;
	};

	return Progressbar;
});