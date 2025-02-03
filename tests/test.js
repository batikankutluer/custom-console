"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const CustomConsole_1 = __importDefault(require("../source/CustomConsole"));
let console = (0, CustomConsole_1.default)({ test: true });
console.log("Hello World!", chalk_1.default.green("Huh!!"));
console.error("Error!");
console.write("Write!");
