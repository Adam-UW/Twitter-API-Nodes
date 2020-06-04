const Twit = require('twit')
const config = require('./config')


var T = new Twit(config)

let parms={
    q:'javascript',
    count: 5
}

let tweet={
    status:"#codingjavascript from nodejs"
}

T.get('search/tweets', parms, gotData)
T.post('statuses/update', tweet, tweeted)

function tweeted(err, data, response){
    if(err){
        console.log('Error occured')
    }
    console.log('POST is working..')
}






function gotData(err, data, response){
    let tweets= data.statuses
    for(let i=0; i <tweets.length; i++)
        console.log(tweets[i].text)
}