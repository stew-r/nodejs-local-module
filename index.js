var myModule = require('mymodule');

exports.helloWorld = (req, res) => {
    myModule.run();
    res.send('Hello, World');
}
