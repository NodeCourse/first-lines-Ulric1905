const fs = require('fs');
setInterval(write, 1000);




function write() {
    actual = Date.now()
    console.log( actual);

    fs.appendFileSync('message.txt', actual + "\n");
}