var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: "61152bd21edb4a1e9b41dad8ff7a1bec",
    secret: "96def4b1d4ee4400b1a4722f7de4fc0c"
  });

  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }else{
        console.log(data);
    var songResp = data.tracks.items;

          for (var i = 0; i < songResp.length; i++) {
    
             console.log(("Artist: " + songResp[i].artists[0].name));
        console.log(("Song title: " + songResp[i].name));
          }
        }

  });


