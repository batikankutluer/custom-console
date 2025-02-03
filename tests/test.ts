import chalk from "chalk";
import CustomConsole from "../source/CustomConsole.ts";

const console = CustomConsole({ test: true });

console.log("Hello World!", chalk.green("Huh!!"));
console.error("Error!");
console.write("Write!");
