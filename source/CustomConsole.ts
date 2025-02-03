import chalk from "chalk";

class CustomConsole {
  private static test_mode: boolean;

  constructor({ test = true }: { test?: boolean } = {}) {
    CustomConsole.test_mode = test && process.env.NODE_ENV !== "test";
  }

  log(...message: any[]): void {
    CustomConsole.test_mode && this.write(chalk.gray("[Log]"), ...message);
  }

  error(...message: any[]): void {
    CustomConsole.test_mode && this.write(chalk.red("[Error]"), ...message);
  }

  write(...message: any[]): void {
    console.log(chalk.whiteBright(...message));
  }
}

export default ({ test = true }: { test?: boolean } = {}): CustomConsole =>
  new CustomConsole({ test });
