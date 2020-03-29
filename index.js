const format = require('./dateFormatter');

exports.psHelloHTTP = function psHelloHTTP(req, res) {
    res.status(200).send(format.formattedDate());
}

exports.psHelloPubSub = function psHelloPubSub(event, context) {
    console.log(`Hello PubSub ${format.formattedDate()}`);
}

exports.psHelloStorage = function psHelloStorage(event, context) {
    console.log(`Hello PubSub ${format.formattedDate()}`);
}