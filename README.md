# Additional Information for Personality Insights Traits
![last-release](https://img.shields.io/github/tag/personality-insights/trait-info.svg)
[![npm-version](https://img.shields.io/npm/v/personality-trait-info.svg)](https://www.npmjs.com/package/personality-trait-info)
[![npm-license](https://img.shields.io/npm/l/personality-trait-info.svg)](https://www.npmjs.com/package/personality-trait-info)
[![Build Status](https://travis-ci.org/personality-insights/trait-info.svg?branch=master)](https://travis-ci.org/personality-insights/trait-info)
[![codecov.io](https://codecov.io/github/personality-insights/trait-info/coverage.svg?branch=master)](https://codecov.io/github/personality-insights/trait-info?branch=master)
[![npm-downloads](https://img.shields.io/npm/dm/personality-trait-info.svg)](https://www.npmjs.com/package/personality-trait-info)

Obtain descriptions for Personality Insights' traits.

## Installation

```sh
$ npm install personality-trait-info
```

## Usage

```JavaScript
  var PersonalityTraitInfo = require('personality-trait-info');

  // version refers to the version of Watson Personality Insights to use, v2 or v3
  var traitInfo = new PersonalityTraitInfo({ locale: 'es', version: 'v3' });

  // retrieve the trait description, name and info for a specified trait id (e.g., 'big5_agreeableness')
  var big5AgreeablenessName  = traitInfo.name('big5_agreeableness');
  var big5AgreeablenessDescription  = traitInfo.description('big5_agreeableness');
  var big5AgreeablenessInfo  = traitInfo.info('big5_agreeableness');

  console.log('The trait information for trait id big5_agreeableness is: \n' +
  'name: ' + big5AgreeablenessName + ' description: ' + big5AgreeablenessDescription +
  ' info: ' + big5AgreeablenessInfo);
  ```

## License

  This library is licensed under Apache 2.0. Full license text is
  available in [LICENSE](LICENSE).

## Changelog

  __12-01-2016__
   * Added v3 descriptions

## More Features???

There are more features available such as:

- Including the component as a browser script. Component will be exported as the
global variable `PersonalityTraitInfo`.

- Formatting information in html or markdown optionally!
```JavaScript
const traitInfo   = new PersonalityTraitInfo({ format:'html' });
const hedonismDescription = traitInfo.description('Hedonism');
```
