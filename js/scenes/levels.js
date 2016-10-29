define(['lib/scene', 'lib/map', 'geo/v2', 'basic/scrollfield', 'basic/button', 'definition/colors', 'config/screen'],
	function(Scene, TiledMap, V2, ScrollfieldEntity, Button, Colors, screen) {
		function LevelsScene() {
			Scene.call(this);

			var scrollfield = new ScrollfieldEntity(Zero(), new V2(screen.w, screen.h), 0, new Colors('#AAA', '#AAA'), new Colors('#111', '#111'));
			this.add(scrollfield);

			var level1 = Button.create(new V2(0, 0), function() { console.log("level 1"); }).rect(screen.w - 20, 200).text("Level 1");
			var level2 = Button.create(new V2(0, 0), function() { console.log("level 2"); }).rect(screen.w - 20, 200).text("Level 2");
			var level3 = Button.create(new V2(0, 0), function() { console.log("level 3"); }).rect(screen.w - 20, 200).text("Level 3");
			var level4 = Button.create(new V2(0, 0), function() { console.log("level 4"); }).rect(screen.w - 20, 200).text("Level 4");
			scrollfield.add(level1);
			scrollfield.add(level2);
			scrollfield.add(level3);
			scrollfield.add(level4);
		}

		LevelsScene.prototype = new Scene();

		return LevelsScene;
	}
);