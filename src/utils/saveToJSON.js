const path = require("path");
const fs = require("fs-extra");

function saveToJSON(data, fileName) {
  try {
    if (!fileName || typeof fileName !== "string") {
      throw new TypeError("fileName must be a non-empty string.");
    }
    if (data === null || typeof data !== "object") {
      throw new TypeError("data must be a valid object or array.");
    }
    const outputDir = path.join(__dirname, "../public/output");
    const outputPath = path.join(outputDir, `${fileName}.json`);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const jsonString = JSON.stringify(data, null, 2);

    fs.writeFileSync(outputPath, jsonString, "utf8");
    console.log(`Saved JSON to ${outputPath}`);
    
  } catch (error) {
    console.error("Error saving JSON: ", error);
  }
}

module.exports = saveToJSON;
