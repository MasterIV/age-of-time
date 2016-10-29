define(['definition/colors'], function(Colors) {
	return {
		default: new Colors('#000', '#FFF', '#555', '#DDD'),
		player: new Colors('red', 'orange'),
		shadow: new Colors('red', 'orange'),
		player_y: new Colors('red', 'orange'),
		player_a: new Colors('blue', '#A0A0FF'),
		player_e: new Colors('green', '#A0FFA0')
	};
});