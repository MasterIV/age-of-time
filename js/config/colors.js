define(['definition/colors'], function(Colors) {
	return {
		default: new Colors('#000', '#FFF', '#555', '#DDD'),
		player: new Colors('red', 'orange'),
		shadow: new Colors('rgba(255,0,0,.5)', 'rgba(255,165,0,.5)')
	};
});