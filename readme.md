# Custom Console

A new way to use console.

## [TR]

### Custom Console nedir?

- Custom Console, konsolunuzda renkli ve formatlanmış yazıları yazdırır.
- Custom Console'un en önceki özelliği, test modunda write işlevi dışında konsola bir yazı yazdırmamasıdır.

### Custom Console nasıl kullanılır?

- Custom Console'ı kullanmak için `npm install @batikankutluer/custom-console` komutunu kullanın.
- Ardından `import CustomConsole from "@batikankutluer/custom-console"` olarak kullanın ve `const console = CustomConsole({test: false})`.
- veya `const console = require("@batikankutluer/custom-console")({test: false})` olarak kullanın.

## [EN]

### Custom Console

- Custom Console prints colored and formatted text in your console.
- The most important feature of Custom Console is that it does not print anything to the console except for the write function in test mode.

### How to use Custom Console?

- To use Custom Console, use the `npm install @batikankutluer/custom-console` command.
- Then use `import CustomConsole from "@batikankutluer/custom-console"` and `const console = CustomConsole({test: false})`.
- or `const console = require("@batikankutluer/custom-console")({test: false})`.
