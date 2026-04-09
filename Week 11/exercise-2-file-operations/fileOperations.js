const fs = require("fs");

const filePath = "sample.txt";
const initialContent = "Hello from Node.js file handling.\n";
const appendedContent = "This line was appended asynchronously.\n";

console.log("Starting file operations...");

fs.writeFile(filePath, initialContent, (writeError) => {
  if (writeError) {
    console.error("Error creating file:", writeError.message);
    return;
  }

  console.log("File created successfully.");

  fs.readFile(filePath, "utf8", (readError, dataAfterCreate) => {
    if (readError) {
      console.error("Error reading file after create:", readError.message);
      return;
    }

    console.log("File content after create:");
    console.log(dataAfterCreate);

    fs.appendFile(filePath, appendedContent, (appendError) => {
      if (appendError) {
        console.error("Error appending to file:", appendError.message);
        return;
      }

      console.log("Data appended successfully.");

      fs.readFile(filePath, "utf8", (secondReadError, dataAfterAppend) => {
        if (secondReadError) {
          console.error(
            "Error reading file after append:",
            secondReadError.message,
          );
          return;
        }

        console.log("File content after append:");
        console.log(dataAfterAppend);

        fs.unlink(filePath, (deleteError) => {
          if (deleteError) {
            console.error("Error deleting file:", deleteError.message);
            return;
          }

          console.log("File deleted successfully.");
          console.log("All file operations completed in async callback flow.");
        });
      });
    });
  });
});
