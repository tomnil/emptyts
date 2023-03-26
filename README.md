# EmptyTS

This project is a simple starter for TypeScript with some good start settings.

:!: Note: Settings/this file is configured for use in Mac, you might need to modify slashes in order to make it work.

## Beginners tip

The code is checked in without `node_modules`, so before running the code execute:

```bash
npm install
```

## Starting the program

There are several ways to run the code.

### Inside vscode

* Press ctrl-shift-p and choose "Debug: Select and start debugging" (or press F5 in vscode)

### Directly running .ts from the terminal

Use one of the following (depends on what you like)

```bash
# Use tsc-wach (automatically attaches debugger)
# This one is my favourite :)
npm run tsc-watch

# Use nodemon (automatically attaches debugger)
npm run nodemon

# Or run node without watcher support
node --loader ts-node/esm ./src/index.ts

# .. or directly call ts-node-esm
./node_modules/.bin/ts-node-esm src/index.ts
```

### Compile to javascript and then run it

```bash
# To clean and rebuild
npm run rebuild

# To just build
npm run build

# To just build and watch for changes
npm run buildw

# To run tsc and launch transpiled result
tsc -b -v -w -i
node bin\index.js
```

## eslint

Eslint is configured, run linting by executing:

```bash
npm run eslint
```

Enjoy :)
