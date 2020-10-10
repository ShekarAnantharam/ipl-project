const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const ExtraRunsConcededIn2016 = require("./ipl/extraRunsConcededIn2016");
const TopEconomicalBowlers2015 = require("./ipl/TopEconomicalBowlers2015");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH2 = "./public/data2.json";
const JSON_OUTPUT_FILE_PATH3 = "./public/data3.json";
const JSON_OUTPUT_FILE_PATH4 = "./public/data4.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result = matchesPlayedPerYear(matches);
      saveMatchesPlayedPerYear(result);
      let result2 = matchesWonByEachTeam(matches);
      saveMatchesWonByEachTeam(result2);
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          
        let result3 = ExtraRunsConcededIn2016(deliveries,matches);
        saveExtraRunsConcededIn2016(result3);
        let result4 = TopEconomicalBowlers2015(deliveries,matches);
        saveTopEconomicalBowlers2015(result4);
    });
    });
}

function saveMatchesWonByEachTeam(result) {
  const jsonData = {
    matchesWonByEachTeam: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH2, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
function saveExtraRunsConcededIn2016(result) {
  const jsonData = {
    ExtraRunsConcededIn2016: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH3, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
function saveTopEconomicalBowlers2015(result) {
  const jsonData = {
    TopEconomicalBowlers2015: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH4, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}


main();
