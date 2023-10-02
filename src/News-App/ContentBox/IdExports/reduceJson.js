const fs = require("fs");

const path = "outputTvshows";
// Read the existing JSON file
const rawData = fs.readFileSync(`${path}.json`);
const jsonData = JSON.parse(rawData);

// Filter objects with popularity greater than or equal to 30
const filteredData = jsonData.filter((item) => item.popularity >= 30);

// Write the filtered data to a new JSON file
fs.writeFileSync(`filtered${path}.json`, JSON.stringify(filteredData, null, 2));

console.log(`Filtered data written to filtered${path}.json`);
