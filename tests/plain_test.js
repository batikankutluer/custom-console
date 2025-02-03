import CustomConsole from "../dist/esm/CustomConsole.mjs";
import chalk from "chalk";

let console = CustomConsole({ test: true });

console.log("Hello World!", chalk.green("Huh!!"));
console.error("Error!");
console.write("Write!");
