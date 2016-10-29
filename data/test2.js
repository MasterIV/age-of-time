(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("test2",
{ "height":18,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 12, 12, 12, 12, 12, 12, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 13, 13, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 13, 13, 13, 13, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 13, 13, 13, 13, 13, 13, 13, 13, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 13, 13, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 12, 9, 0, 0, 14, 13, 13, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 8, 0, 0, 0, 10, 9, 0, 0, 0, 14, 13, 13, 11, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 3, 3, 3, 3, 9, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 4, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
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
                 "height":33,
                 "id":1,
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
                 "width":34,
                 "x":43,
                 "y":82
                }, 
                {
                 "height":33,
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
                 "width":34,
                 "x":802,
                 "y":604.5
                }, 
                {
                 "height":33,
                 "id":3,
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
                 "width":34,
                 "x":1204,
                 "y":604.5
                }, 
                {
                 "height":72,
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
                 "width":32,
                 "x":885,
                 "y":83
                }, 
                {
                 "height":72,
                 "id":6,
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
                 "width":32,
                 "x":85,
                 "y":445
                }, 
                {
                 "height":35,
                 "id":7,
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
                 "width":32,
                 "x":725,
                 "y":603
                }, 
                {
                 "height":35,
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
                 "width":32,
                 "x":925,
                 "y":602.5
                }, 
                {
                 "height":66,
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
                 "width":30,
                 "x":5,
                 "y":448
                }, 
                {
                 "height":29,
                 "id":10,
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
                 "width":32,
                 "x":564,
                 "y":45
                }, 
                {
                 "height":29,
                 "id":11,
                 "name":"",
                 "properties":
                    {
                     "character":"o",
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
                 "width":32,
                 "x":1204,
                 "y":126.5
                }, 
                {
                 "height":29,
                 "id":12,
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
                 "width":32,
                 "x":483,
                 "y":606.5
                }, 
                {
                 "height":73,
                 "id":13,
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
                 "width":33,
                 "x":1084,
                 "y":84
                }, 
                {
                 "height":73,
                 "id":14,
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
                 "width":33,
                 "x":242.5,
                 "y":563.5
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }],
 "nextobjectid":15,
 "orientation":"orthogonal",
 "properties":
    {
     "time":10000
    },
 "propertytypes":
    {
     "time":"int"
    },
 "renderorder":"right-down",
 "tileheight":40,
 "tilesets":[
        {
         "columns":4,
         "firstgid":1,
         "image":"..\/img\/tiles\/tileset-complete40x40.png",
         "imageheight":280,
         "imagewidth":160,
         "margin":0,
         "name":"tileset-complete40x40",
         "spacing":0,
         "tilecount":28,
         "tileheight":40,
         "tilewidth":40
        }],
 "tilewidth":40,
 "version":1,
 "width":32
});