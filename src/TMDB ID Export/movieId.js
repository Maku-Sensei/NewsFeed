const zlib = require("zlib");
const fs = require("fs");

// Replace 'input.json.gz' with the path to your JSON.gz file
const gzFilePath = "./tv_series_ids_09_15_2023.json.gz";
const jsonFilePath = "./tvshowsIds.json"; // Output JSON file

const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream(gzFilePath);
const writeStream = fs.createWriteStream(jsonFilePath);

readStream.pipe(gunzip).pipe(writeStream);

// When the process is complete, you can proceed to read the JSON data.
writeStream.on("finish", () => {
  readJsonFile(jsonFilePath);
});

function readJsonFile(filePath) {
  // Now you can read the JSON file and work with its content.
  const jsonData = require(filePath); // Or use other methods like fs.readFileSync
  // jsonData contains the JSON objects from the decompressed file.
  console.log(jsonData);
}
