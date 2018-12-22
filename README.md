# node-modules-scan

[![Build Status](https://travis-ci.org/stfsy/node-modules-scan.svg)](https://travis-ci.org/stfsy/node-modules-scan)
[![Dependency Status](https://img.shields.io/david/stfsy/node-modules-scan.svg)](https://github.com/stfsy/node-modules-scan/blob/master/package.json)
[![DevDependency Status](https://img.shields.io/david/dev/stfsy/node-modules-scan.svg)](https://github.com/stfsy/node-modules-scan/blob/master/package.json)
[![Npm downloads](https://img.shields.io/npm/dm/modules-scan.svg)](https://www.npmjs.com/package/modules-scan)
[![Npm Version](https://img.shields.io/npm/v/modules-scan.svg)](https://www.npmjs.com/package/modules-scan)
[![Git tag](https://img.shields.io/github/tag/stfsy/node-modules-scan.svg)](https://github.com/stfsy/node-modules-scan/releases)
[![Github issues](https://img.shields.io/github/issues/stfsy/node-modules-scan.svg)](https://github.com/stfsy/node-modules-scan/issues)
[![License](https://img.shields.io/npm/l/modules-scan.svg)](https://github.com/stfsy/node-modules-scan/blob/master/LICENSE)

Utility library to search for Types/Classes/Subclasses in project folders.

## Example

```js
const requireType = require('scan-modules').byType
const BaseType = require(resolve('test/assets/base-info-contributor'))

// find all subclasses of base type and instantiate them
const contributors = requireType(".", BaseType, {excludeBaseType: true}).map(Constructor => new Constructor())

```

## Installation

```
npm install modules-scan --save
```

## Documentation

## License

This project is distributed under the MIT license.