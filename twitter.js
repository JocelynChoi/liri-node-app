var Twitter = require('twitter');
var fs = require("fs");
var client = new Twitter({
  consumer_key: "Z00w0KwHw0pyNJWIsjAf9oA7V",
  consumer_secret: "Rsgo24K3swfxpNMC6qEYFvkOm4up45G15p1ULEVJxiFeQayOUN",
  access_token_key: "450222947-RIjwOEf0F017on7YBIpIab9oDTRA9jWSdcsid7TA",
  access_token_secret: "jbYRCUXyjSUnjyYxAQN6RT2sVL1E6xpEcGBVmjqELcN0Q"
});
var params = {screen_name: 'jocelynchoi1', count: 3};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error){
        console.log("\n-------------- error --------------\n");
    }else {
    for (i = 0; i < tweets.length; i++) {
        console.log(i + 1 + ". Jocelyn's Newest Tweets: ", tweets[i].text);
  };
 }
});


