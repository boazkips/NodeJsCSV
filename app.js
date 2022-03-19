var fs = require('fs').promises;
var parse = require('csv-parse/lib/sync');
(async function () {
    const fileContent = await fs.readFile(__dirname+'/data.csv');
    const records = parse(fileContent, {rows: true});
    console.log(records)
})();