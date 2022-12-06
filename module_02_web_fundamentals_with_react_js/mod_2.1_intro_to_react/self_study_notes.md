# What is NPM and package.json file?

npm is the package manager for the Node JavaScript platform. 

It puts modules in place so that node can find them, and manages dependency conflicts intelligently.

It is extremely configurable to support a variety of use cases. Most commonly, you use it to publish, discover, install, and develop node programs.

Run `npm help` to get a list of available commands.

npm consists of three distinct components:
- the [website](https://npmjs.com/)
- the [Command Line Interface (CLI)](https://docs.npmjs.com/cli/npm)
- the [registry](https://docs.npmjs.com/misc/registry)

npm can be used to:
- Adapt packages of code for your apps, or incorporate packages as they are.
- Download standalone tools you can use right away.
- Run packages without downloading using npx.
- Share code with any npm user, anywhere.
- Restrict code to specific developers.
- Create organizations to coordinate package maintenance, coding, and developers.
- Form virtual teams by using organizations.
- Manage multiple versions of code and code dependencies.
- Update applications easily when underlying code is updated.
- Discover multiple ways to solve the same puzzle.
- Find other developers who are working on similar problems and projects.

A package is a file or directory that is described by a `package.json` file. A package must contain a `package.json` file in order to be published to the npm registry.

Packages can be unscoped or scoped to a user or organization, and scoped packages can be private or public.

A package is any of the following:

- a) A folder containing a program described by a `package.json` file.
- b) A gzipped tarball containing (a).
- c) A URL that resolves to (b).
- d) A `<name>@<version>` that is published on the registry with (c).
- e) A `<name>@<tag>` that points to (d).
- f) A `<name>` that has a latest tag satisfying (e).
- g) A `git` url that, when cloned, results in (a).

A module is any file or directory in the `node_modules` directory that can be loaded by the Node.js `require()` function.

To be loaded by the Node.js `require()` function, a module must be one of the following:

- A folder with a `package.json` file containing a `"main"` field.
- A JavaScript file.

**Note:** Since modules are not required to have a `package.json` file, not all modules are packages. Only modules that have a `package.json` file are also packages.
In the context of a Node program, the module is also the thing that was loaded from a file. 

You can add a package.json file to your package to make it easy for others to manage and install. Packages published to the registry must contain a package.json file.

A package.json file:

- lists the packages your project depends on
- specifies versions of a package that your project can use using semantic versioning rules
- makes your build reproducible, and therefore easier to share with other developers

Note: To make your package easier to find on the npm website, we recommend including a custom - description in your package.json file.

Virtual DOM

DOM stands for document object model. It is mainly used to create Nodes using Javascript. It is the heart of modern interactive web.

In every Javascript DOM there is a corresponding Virtual DOM. It is an object that is identical to the JS object. It is simply a representation of a JS DOM object. It has the same power, properties and methods as the DOM object.

Manipulating a virtual DOM is faster than the actual DOM.




