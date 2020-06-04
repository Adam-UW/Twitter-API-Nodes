const Twit = require('twit')
const config = require('./config')

var T = new Twit(config)


let stream = T.stream('user')

stream.on('follow', followed)

 

function followed(event){
    let name= event.source.name
    let screenName= event.source.screen_name
    tweetIt('@' + screenName + 'Thx for following me')
}








// tweet each 20 seconds
// setInterval(tweetIt, 1000*20)

// A function to POST a tweet
function tweetIt(txt){

    var random= Math.floor(Math.random()*100 +1) 
    let tweet={
       // status:`A random number  ${random}#codingjavascript from nodejs`
       status: txt
    }
    T.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response){
        if(err){
            console.log('Error occured')
        }
        console.log('POST is working..')
    }
}


let parms={
    q:'javascript',
    count: 5
}


T.get('search/tweets', parms, gotData)

function gotData(err, data, response){
    let tweets= data.statuses
    for(let i=0; i <tweets.length; i++)
        console.log(tweets[i].text)
}