# Additional Information for Personality Insights Traits
![last-release](https://img.shields.io/github/tag/personality-insights/trait-info.svg)
[![npm-version](https://img.shields.io/npm/v/personality-trait-info.svg)](https://www.npmjs.com/package/personality-trait-info)
[![npm-license](https://img.shields.io/npm/l/personality-trait-info.svg)](https://www.npmjs.com/package/personality-trait-info)
[![Build Status](https://travis-ci.org/personality-insights/trait-info.svg?branch=master)](https://travis-ci.org/personality-insights/trait-info)
[![codecov.io](https://codecov.io/github/personality-insights/trait-info/coverage.svg?branch=master)](https://codecov.io/github/personality-insights/trait-info?branch=master)
[![npm-downloads](https://img.shields.io/npm/dm/personality-trait-info.svg)](https://www.npmjs.com/package/personality-trait-info)

Obtain descriptions for Personality Insights' traits.

## Getting Started

1. Require and instance `personality-trait-info` component

  ```JavaScript
  const PersonalityTraitInfo = require('personality-trait-info');
  const traitInfo = new PersonalityTraitInfo({ locale: 'es' });
  ```

2. Get your trait information

  ```JavaScript
  const opennessDescription  = traitInfo.description('Openness');
  const opennessName  = traitInfo.name('Structure');
  const opennessInfo  = traitInfo.info('Hedonism');
  ```

3. Render descriptions somewhere! Try rendering them as cards!

See the complete [example code][example_code] or [try it live][live_example]

## More Features

There are more features available such as:

- Including the component as a browser script. Component will be exported as the
global variable `PersonalityTraitInfo`.

- Formatting information in html or markdown optionally!
```JavaScript
const traitInfo   = new PersonalityTraitInfo({ format:'html' });
const hedonismDescription = traitInfo.description('Hedonism');
```

## API Methods

The available methods are the following ones:
  - `constructor :: (Options) -> PersonalityTraitDescriptions` - Obtain an instance of `PersonalityTraitDescriptions`.
  - `description :: (TraitID) -> String` - Obtain description for the given `TraitID`.
  - `name :: (TraitID) -> String` - Obtain the name for the given `TraitID`.
  - `info :: (TraitID) -> TraitInfo` - Obtain the `TraitInfo` for the given `TraitID`.

Definitions:
 - `TraitID` is a `String` ID from IBM Watson Personality Insights traits.
 - `TraitInfo` is an `Object` with fields:
  - `id` - The `TraitID`.
  - `name` - The name of the trait.
  - `description` - The description of the trait.
 - `Options` are options for the trait descriptions component. Available options are:
   - `locale` - A `String` with the locale used to generate the labels.
   - `format` - A `String` with format. Available formats are `["plain", "html", "markdown"]`.

 [example_code]: https://github.com/personality-insights/trait-info/blob/master/examples/example.html
 [live_example]: https://rawgit.com/personality-insights/trait-info/master/examples/example.html
