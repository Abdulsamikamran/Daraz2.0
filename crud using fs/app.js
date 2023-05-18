const { log } = require("console");
const fs = require("fs");

fs.mkdir("file1", (err) => {
  console.log("folder created");
});

fs.writeFile("./file1/data.txt", "name : abdul sami", (err) => {
  console.log("data appended");
});

fs.appendFile("./file1/data.txt", " age : 23, second name: kamran ", (err) => {
  console.log("data is appended");
});

fs.readFile("./file1/data.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.unlink("./file1/data.txt", (err) => {
  console.log("file deleted");
});

fs.rmdir("./file1", (err) => {
  console.log("folder deleted");
});
