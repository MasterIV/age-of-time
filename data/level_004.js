(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("level_003",
{ "height":18,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 12, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 8, 0, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 15, 3, 4, 0, 0, 0, 0, 0, 0, 0, 2, 12, 12, 12, 3, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 0, 0, 0, 0, 0, 14, 13, 13, 13, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 1, 8, 0, 0, 0, 0, 7, 8, 0, 7, 1, 8, 0, 0, 0, 0, 7, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 16, 11, 0, 0, 0, 10, 9, 0, 10, 12, 4, 0, 0, 0, 0, 2, 12, 12, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 0, 10, 9, 0, 0, 0, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 0, 10, 9, 0, 0, 0, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 0, 15, 16, 1, 1, 1, 1, 1, 1, 15, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 16, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
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
                 "height":29,
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
                 "x":725,
                 "y":244
                }, 
                {
                 "height":27,
                 "id":2,
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
                 "x":1244.5,
                 "y":125.5
                }, 
                {
                 "height":28,
                 "id":3,
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
                 "width":31,
                 "x":322,
                 "y":165
                }, 
                {
                 "height":110,
                 "id":4,
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
                 "x":449.5,
                 "y":85.5
                }, 
                {
                 "height":29,
                 "id":5,
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
                 "x":45.5,
                 "y":404.5
                }, 
                {
                 "height":29,
                 "id":6,
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
                 "x":921.5,
                 "y":362.5
                }, 
                {
                 "height":27,
                 "id":7,
                 "name":"",
                 "properties":
                    {
                     "color":"red",
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
                 "x":446.5,
                 "y":608.5
                }, 
                {
                 "height":110,
                 "id":8,
                 "name":"",
                 "properties":
                    {
                     "color":"red",
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
                 "x":1162.5,
                 "y":45
                }, 
                {
                 "height":96,
                 "id":9,
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
                 "width":25,
                 "x":368,
                 "y":374
                }, 
                {
                 "height":96,
                 "id":10,
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
                 "width":25,
                 "x":405.5,
                 "y":98
                }, 
                {
                 "height":110,
                 "id":11,
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
                 "x":925.5,
                 "y":525
                }, 
                {
                 "height":27,
                 "id":12,
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
                 "x":1245.5,
                 "y":604.5
                }, 
                {
                 "height":21,
                 "id":14,
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
                 "y":290.5
                }, 
                {
                 "height":21,
                 "id":15,
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
                 "x":603,
                 "y":127.5
                }, 
                {
                 "height":21,
                 "id":16,
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
                 "x":85,
                 "y":570.5
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "name":"deko",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }],
 "nextobjectid":17,
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
         "columns":4,
         "firstgid":49,
         "image":"..\/img\/tiles\/fg_assets.png",
         "imageheight":160,
         "imagewidth":320,
         "margin":0,
         "name":"fg_assets",
         "spacing":0,
         "tilecount":8,
         "tileheight":80,
         "tilewidth":80
        }],
 "tilewidth":40,
 "version":1,
 "width":32
});