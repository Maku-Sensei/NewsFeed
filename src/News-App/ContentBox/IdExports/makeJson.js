const fs = require("fs");

// Read the JSON file line by line
const fileContents = fs.readFileSync("tvshowsIds.json", "utf-8").split("\n");

const jsonArray = [];

// Parse each line as a JSON object and add to the JSON array
for (const line of fileContents) {
  try {
    const jsonObject = JSON.parse(line.trim());
    jsonArray.push(jsonObject);
  } catch (error) {
    // Handle invalid JSON lines if necessary
    console.error(`Error parsing JSON: ${error.message}`);
  }
}

// Convert the JSON array to a string
const jsonArrayString = JSON.stringify(jsonArray, null, 2);

// Write the JSON array to a new file
fs.writeFileSync("outputTvshows.json", jsonArrayString, "utf-8");

console.log("JSON array created and saved to output.json");
