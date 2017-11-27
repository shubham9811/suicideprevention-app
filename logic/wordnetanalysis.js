var wordnet = require('wordnet');
var sentiment =function(){
var input1=tweetSet[];
var input2=training_tweets[];

input1.parse();
input2.parse();
for(var i=0;i<input1.length;i++){
    console.log(input1[i]+":"+input2[i])
}
var List1 = indexing (training_tweets);
var List2= List(termOftweet);
var SemSim = 0;
var A = 0; 
var B = 0;
for(var i=0;i<List1.length;i++){
    var N = wordcount(term);
    for(var j=0;j<List2.length;j++){
    var R = wordcount(elem)
    A = A + N * R * Sim(term, elem);
    B = B + N * R; 
}
}
SemSim = A / B;
return (tweet, SemSim)
}