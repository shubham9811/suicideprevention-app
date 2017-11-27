//includes
var util = require('util'),
twitter = require('twitter'),
sentimentAnalysis = require('./sentimentAnalysis'),
db = require('diskdb');

db = db.connect('db', ['sentiments']);

//config 
// wordnetAnalysis=require('./wordnetanalys.js'),
var config = {
consumer_key: '6THhbbouKP6SnC1GUi2nF1C6j',
consumer_secret: 'II7gIZes0yhQHw0I2lhgXAoLRO1laj1uzIUGaSSS0ISK6Dporh',
access_token_key: '714168862590128128-nYlkIDLvU8hxixVIKmca2yw2NPT4jKL',
access_token_secret: '9uKRuQNPJQBYNDWnQzjgTdiizf6zGg4yKsyft4UMAFidw'
}

module.exports = function(text, callback) {
var twitterClient = new twitter(config);
var response = [], dbData = []; // to store the tweets and sentiment
twitterClient.search(text, function(data) {
  for (var i = 0; i < data.statuses.length; i++) {
    var resp = {};
    resp.tweet = data.statuses[i];
    resp.sentiment = sentimentAnalysis(data.statuses[i].text);
    dbData.push({
      "tweet" : resp.tweet.text,
      "score" : resp.sentiment.score
    });
    response.push(resp);
  };
  db.sentiments.save(dbData);
  callback(response);
});
}
