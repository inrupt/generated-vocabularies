# RDF vocabulary artifacts

**NOTE**: This repository hosts **generated code** for educational purposes only.
Please do not open PRs on this repository. The generator used to generate these
files will be available soon.

# Installation and testing

## Prerequisites

In order to install and test these artifacts, you will need:
- Node v12 or higher.

## Build and run

The following example demonstrates the usage of `@inrupt/lit-generated-vocab-common`.
It can be adapted to the other artifacts available in the repository by changing
the directory, and picking a term from a vocabulary bundled in the target artifact.

```bash
cd lit-generated-vocab-common/TypeScript
npm install
npm run build
```

To test the generated artifact, place the following code in the folder where you
just ran the `build` command, e.g. in a `test.js` file:

```javascript
const { AS } = require("./dist/index");
console.log(`The English label for the term [${AS.Activity.value}] is: "${AS.Activity.label.value}".`);
```

Running `node test.js` should print:

`The English label for the term [https://www.w3.org/ns/activitystreams#Activity] is: "Activity".`

## Find out more

Configuration files describing how the artifacts shown is this repository are available
in the following repositories:

- https://github.com/inrupt/lit-rdf-vocab
- https://github.com/inrupt/solid-rdf-vocab
