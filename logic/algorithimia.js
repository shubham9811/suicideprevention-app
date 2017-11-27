
var algorithimia = require('algorithimi');
var trainedData = require('./traiining2.js');
module.exports = function(text) {
    var input = {
        "document": "I really like Algorithmia!"
       };
       Algorithmia.client("s0yhQHw0I2lhgXAoLRO1laj1uzIUGaSSS0IS")//API KEY
          .algo("nlp/SentimentAnalysis/1.0.4")
          .pipe(input)
          .then(function(response) {
              console.log(response.get());
          });

    return algorithimia(text, trainedData);
}
