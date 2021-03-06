(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("level_001",
{ "height":18,
 "layers":[
        {
         "data":[93, 94, 0, 50, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 101, 102, 0, 50, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 8, 0, 0, 0, 0, 0, 0, 0, 41, 41, 41, 55, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 43, 43, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 12, 12, 9, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 12, 12, 9, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 12, 12, 9, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 12, 12, 9, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
         "height":18,
         "name":"Ground",
         "opacity":1,
         "properties":
            {
             "collision":true
            },
         "propertytypes":
            {
             "collision":"bool"
            },
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "height":18,
         "name":"Objects",
         "objects":[
                {
                 "height":27,
                 "id":1,
                 "name":"",
                 "properties":
                    {
                     "character":"a",
                     "type":"spawn"
                    },
                 "propertytypes":
                    {
                     "character":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":31,
                 "x":82.75,
                 "y":566.25
                }, 
                {
                 "height":27,
                 "id":2,
                 "name":"",
                 "properties":
                    {
                     "character":"e",
                     "type":"spawn"
                    },
                 "propertytypes":
                    {
                     "character":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":31,
                 "x":83.25,
                 "y":565.75
                }, 
                {
                 "height":27,
                 "id":3,
                 "name":"",
                 "properties":
                    {
                     "character":"y",
                     "type":"spawn"
                    },
                 "propertytypes":
                    {
                     "character":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":31,
                 "x":85.75,
                 "y":567.25
                }, 
                {
                 "height":101,
                 "id":4,
                 "name":"",
                 "properties":
                    {
                     "type":"destructible"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":24,
                 "x":528,
                 "y":529
                }, 
                {
                 "height":101,
                 "id":5,
                 "name":"",
                 "properties":
                    {
                     "color":"blue",
                     "type":"door"
                    },
                 "propertytypes":
                    {
                     "color":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":27,
                 "x":406,
                 "y":528
                }, 
                {
                 "height":27,
                 "id":6,
                 "name":"",
                 "properties":
                    {
                     "color":"blue",
                     "type":"button"
                    },
                 "propertytypes":
                    {
                     "color":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":27,
                 "x":725,
                 "y":605
                }, 
                {
                 "height":27,
                 "id":7,
                 "name":"",
                 "properties":
                    {
                     "color":"green",
                     "type":"button"
                    },
                 "propertytypes":
                    {
                     "color":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":27,
                 "x":486.5,
                 "y":243.5
                }, 
                {
                 "height":65,
                 "id":8,
                 "name":"",
                 "properties":
                    {
                     "color":"green",
                     "type":"door"
                    },
                 "propertytypes":
                    {
                     "color":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":27,
                 "x":887.5,
                 "y":567.5
                }, 
                {
                 "height":28,
                 "id":9,
                 "name":"",
                 "properties":
                    {
                     "type":"goal"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":27,
                 "x":1167,
                 "y":606
                }, 
                {
                 "height":21,
                 "id":10,
                 "name":"",
                 "properties":
                    {
                     "type":"clock"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":26,
                 "x":1086,
                 "y":449.5
                }, 
                {
                 "height":21,
                 "id":11,
                 "name":"",
                 "properties":
                    {
                     "type":"clock"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":26,
                 "x":486,
                 "y":566.5
                }, 
                {
                 "height":21,
                 "id":12,
                 "name":"",
                 "properties":
                    {
                     "type":"clock"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":26,
                 "x":447,
                 "y":206.5
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77, 0, 0, 0, 0, 33, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "name":"deko",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }],
 "nextobjectid":13,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tileheight":40,
 "tilesets":[
        {
         "columns":4,
         "firstgid":1,
         "image":"..\/img\/tiles\/tileset-complete40x40.png",
         "imageheight":320,
         "imagewidth":160,
         "margin":0,
         "name":"tileset-complete40x40",
         "spacing":0,
         "tilecount":32,
         "tileheight":40,
         "tilewidth":40
        }, 
        {
         "columns":4,
         "firstgid":33,
         "image":"..\/img\/tiles\/fg_assets.png",
         "imageheight":160,
         "imagewidth":320,
         "margin":0,
         "name":"fg_assets",
         "spacing":0,
         "tilecount":8,
         "tileheight":80,
         "tilewidth":80
        }, 
        {
         "columns":4,
         "firstgid":41,
         "image":"..\/img\/tiles\/tileset-complete40x40.png",
         "imageheight":320,
         "imagewidth":160,
         "margin":0,
         "name":"tileset-complete40x40",
         "spacing":0,
         "tilecount":32,
         "tileheight":40,
         "tilewidth":40
        }, 
        {
         "columns":4,
         "firstgid":73,
         "image":"..\/img\/tiles\/fg_assets_40x40.png",
         "imageheight":160,
         "imagewidth":160,
         "margin":0,
         "name":"fg_assets_40x40",
         "spacing":0,
         "tilecount":16,
         "tileheight":40,
         "tilewidth":40
        }, 
        {
         "columns":8,
         "firstgid":89,
         "image":"..\/img\/tiles\/fg_assets.png",
         "imageheight":160,
         "imagewidth":320,
         "margin":0,
         "name":"fg_assets",
         "spacing":0,
         "tilecount":32,
         "tileheight":40,
         "tilewidth":40
        }],
 "tilewidth":40,
 "version":1,
 "width":32
});