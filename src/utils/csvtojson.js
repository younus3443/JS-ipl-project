const fs = require('fs');
const path = require('path');

function csvParser(filePath) {

  const resolvedPath = path.resolve(filePath);
  const csvFile = fs.readFileSync(resolvedPath, "utf-8");

  const lines = csvFile.trim().split("\n");
  const headers = lines[0].split(",");

  let data = [];

  for (let index = 1; index < lines.length; index++) {
    const row = lines[index].split(",");
    let obj = {};

    headers.forEach((header, i) => {
      obj[header.trim()] = row[i].trim() ?? "";
    });
    data.push(obj);
    
  }
  return data;
}

module.exports = csvParser;