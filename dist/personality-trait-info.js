(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PersonalityTraitInfo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = require('./lib/personality-trait-info');

},{"./lib/personality-trait-info":2}],2:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Names = require('personality-trait-names');
var Descriptions = require('personality-trait-descriptions');
var _ = require('underscore');
var extend = _.extend;

module.exports = function () {
  function _class(options) {
    _classCallCheck(this, _class);

    this._names = new Names(options);
    this._descriptions = new Descriptions(options);
  }

  _createClass(_class, [{
    key: 'description',
    value: function description(traitId) {
      return this._descriptions.description(traitId);
    }
  }, {
    key: 'name',
    value: function name(traitId) {
      return this._names.name(traitId);
    }
  }, {
    key: 'names',
    value: function names(traitId) {
      return this._names.names(traitId);
    }
  }, {
    key: 'info',
    value: function info(traitId) {
      return {
        id: traitId,
        name: this.name(traitId),
        description: this.description(traitId)
      };
    }
  }]);

  return _class;
}();

},{"personality-trait-descriptions":3,"personality-trait-names":12,"underscore":21}],3:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = require('./lib/personality-trait-descriptions');

},{"./lib/personality-trait-descriptions":7}],4:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  'en': require('./en')
};

},{"./en":5}],5:[function(require,module,exports){
'use strict';
/*
 * Copyright 2015-2016 IBM Corp. All Rights Reserved.
#
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
#
 *      http://www.apache.org/licenses/LICENSE-2.0
#
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = {

  big5: {
    'Openness': 'Openness to experience. Higher: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.\nLower: Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.',
    'Conscientiousness': 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.',
    'Extraversion': 'Higher: More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves.\nLower: Needs less stimulation and are more independent of their social world. It does not mean they are shy, un-friendly, or antisocial.',
    'Agreeableness': 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.',
    'Neuroticism': '**This demo cannot diagnose a mental illness.** Higher: More likely to have negative emotions or get upset. It could mean they are going through a tough time.\nLower: More calm and less likely to get upset. It does not mean they are positive, or happy people.',
    'Adventurousness': 'Eagerness to trying new activities and experiencing new things.',
    'Artistic interests': 'Appreciation for art and beauty, both man-made and in nature.',
    'Emotionality': 'Emotional availability; awareness of own feelings.',
    'Imagination': 'Openness to creating an inner world of fantasy.',
    'Intellect': 'Intellectual curiosity; openness to new ideas.',
    'Liberalism': 'Openness to re-examine own values and traditions; readiness to challenge authority.',
    'Achievement striving': 'The need for personal achievement and sense of direction.',
    'Cautiousness': 'Tendency to think things through before acting or speaking.',
    'Dutifulness': 'Sense of duty; amount of emphasis placed on fulfilling obligations.',
    'Orderliness': 'Personal organization, tidiness, neatness.',
    'Self-discipline': 'Will-power; the capacity to begin tasks and follow through to completion in spite of boredom or distractions.',
    'Self-efficacy': 'Belief in one\'s own competence.',
    'Activity level': 'Pace of living; level of busyness.',
    'Assertiveness': 'Forcefulness of expression; pursuit of leadership and social ascendancy; desire to direct the activities of others.',
    'Cheerfulness': 'Tendency to experience or express positive emotions.',
    'Excitement-seeking': 'A need for environmental stimulation.',
    'Friendliness': 'Interest in and friendliness towards others; socially confident.',
    'Gregariousness': 'Fondness for the company of others; sociability.',
    'Altruism': 'Active and genuine concern for the welfare of others.',
    'Cooperation': 'Dislike of confrontations. Responding to interpersonal conflict with a willingness to compromise.',
    'Modesty': 'Tendency to be unassuming and play down own achievements; humility.',
    'Morality': 'Frank and genuine in expression; candid, blunt.',
    'Sympathy': 'Attitude of compassion for others; kindness.',
    'Trust': 'Level of belief in the sincerity and good intentions of others.',
    'Anger': 'Tendency to experience–but not necessarily express–anger or frustration.',
    'Anxiety': 'Tendency to dwell on difficulty or troubles; easily experience unease or concern.',
    'Depression': 'Normal tendency to experience feelings of guilt, sadness, hopelessness, or loneliness. **This demo cannot diagnose a mental illness.**',
    'Immoderation': 'Tendency to act on cravings and urges rather over resisting them or delaying gratification.',
    'Self-consciousness': 'Concern with rejection, embarrassment; shyness.',
    'Vulnerability': 'Difficulty in coping with stress or pressure in difficult situations.'
  },

  needs: {
    'Structure': 'A need for organization, planning, and things that have a clear purpose.',
    'Stability': 'A need for the sensible, tried and tested, with a good track record and a known history.',
    'Self-expression': 'A desire to discover and assert one\'s identity.',
    'Practicality': 'A desire for getting the job done, skill, and efficiency.',
    'Love': 'Social contact, whether one-to-one or one-to-many.',
    'Liberty': 'A need to escape, a desire for new experiences, new things.',
    'Ideal': 'A desire to satisfy one\'s idea of perfection in a lifestyle or experience, oftentimes seen as pursuing a sense of community.',
    'Harmony': 'A need to appreciate or please other people, their viewpoints, and feelings.',
    'Excitement': 'A need to pursue experiences or lead a lifestyle that arouses enthusiasm and eagerness.',
    'Curiosity': 'A need to pursue experiences that foster learning, exploration, and growth.',
    'Closeness': 'A need to nurture or be nurtured; a feeling of belonging.',
    'Challenge': 'A desire to achieve, succeed, compete, or pursue experiences that test one\'s abilities.'
  },

  values: {
    'Conservation': 'Respect, commitment, and acceptance of the customs and ideas that one\'s culture and/or religion provides.',
    'Openness to change': 'Excitement, novelty, and challenge in life.',
    'Hedonism': 'Pleasure or sensuous gratification for oneself.',
    'Self-enhancement': 'Personal success through demonstrating competence according to social standards.',
    'Self-transcendence': 'Preserving and enhancing the welfare of those with whom one is in frequent personal contact.'
  }
};

},{}],6:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('underscore'),
    contains = _.contains,
    extend = _.extend,
    keys = _.keys;

var dictionaries = require('./dictionaries');

var I18nData = function () {
  function I18nData(locale) {
    _classCallCheck(this, I18nData);

    this._locale = contains(keys(dictionaries), locale) ? locale : 'en';
    this._dictionary = dictionaries[this._locale];
  }

  _createClass(I18nData, [{
    key: 'data',
    value: function data() {
      var _this = this;

      return keys(this._dictionary).reduce(function (res, k) {
        return extend(res, _this._dictionary[k]);
      }, {});
    }
  }]);

  return I18nData;
}();

module.exports = I18nData;

},{"./dictionaries":4,"underscore":11}],7:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var I18nData = require('./i18n');
var format = require('./utilities/format-text');
var _ = require('underscore'),
    extend = _.extend,
    pick = _.pick;

module.exports = function () {
  function _class(options) {
    _classCallCheck(this, _class);

    this._options = extend(this.defaultOptions(), pick(options, 'locale', 'format'));
    this._i18n = new I18nData(this._options.locale);
    this._descriptions = this._i18n.data();
  }

  _createClass(_class, [{
    key: 'defaultOptions',
    value: function defaultOptions() {
      return {
        locale: 'en',
        format: 'plain'
      };
    }
  }, {
    key: 'description',
    value: function description(traitId) {
      return format(this._descriptions[traitId], this._options);
    }
  }]);

  return _class;
}();

},{"./i18n":6,"./utilities/format-text":8,"underscore":11}],8:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var marked = require('marked');
var unmarked = require('remove-markdown');

function formatText(text, options) {
  var formatters = {
    plain: function plain(text) {
      return unmarked(text).replace(' How did we get this?', '');
    },
    html: function html(text) {
      return marked(text);
    },
    markdown: function markdown(text) {
      return text;
    }
  };

  var format = formatters[options.format];
  return format(text);
}

module.exports = formatText;

},{"marked":9,"remove-markdown":10}],9:[function(require,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function () {

  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: noop,
    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
    nptable: noop,
    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
    blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
    table: noop,
    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
    text: /^[^\n]+/
  };

  block.bullet = /(?:[*+-]|\d+\.)/;
  block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
  block.item = replace(block.item, 'gm')(/bull/g, block.bullet)();

  block.list = replace(block.list)(/bull/g, block.bullet)('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def', '\\n+(?=' + block.def.source + ')')();

  block.blockquote = replace(block.blockquote)('def', block.def)();

  block._tag = '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

  block.html = replace(block.html)('comment', /<!--[\s\S]*?-->/)('closed', /<(tag)[\s\S]+?<\/\1>/)('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();

  block.paragraph = replace(block.paragraph)('hr', block.hr)('heading', block.heading)('lheading', block.lheading)('blockquote', block.blockquote)('tag', '<' + block._tag)('def', block.def)();

  /**
   * Normal Block Grammar
   */

  block.normal = merge({}, block);

  /**
   * GFM Block Grammar
   */

  block.gfm = merge({}, block.normal, {
    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
    paragraph: /^/,
    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
  });

  block.gfm.paragraph = replace(block.paragraph)('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|')();

  /**
   * GFM + Tables Block Grammar
   */

  block.tables = merge({}, block.gfm, {
    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
  });

  /**
   * Block Lexer
   */

  function Lexer(options) {
    this.tokens = [];
    this.tokens.links = {};
    this.options = options || marked.defaults;
    this.rules = block.normal;

    if (this.options.gfm) {
      if (this.options.tables) {
        this.rules = block.tables;
      } else {
        this.rules = block.gfm;
      }
    }
  }

  /**
   * Expose Block Rules
   */

  Lexer.rules = block;

  /**
   * Static Lex Method
   */

  Lexer.lex = function (src, options) {
    var lexer = new Lexer(options);
    return lexer.lex(src);
  };

  /**
   * Preprocessing
   */

  Lexer.prototype.lex = function (src) {
    src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');

    return this.token(src, true);
  };

  /**
   * Lexing
   */

  Lexer.prototype.token = function (src, top, bq) {
    var src = src.replace(/^ +$/gm, ''),
        next,
        loose,
        cap,
        bull,
        b,
        item,
        space,
        i,
        l;

    while (src) {
      // newline
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[0].length > 1) {
          this.tokens.push({
            type: 'space'
          });
        }
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        cap = cap[0].replace(/^ {4}/gm, '');
        this.tokens.push({
          type: 'code',
          text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap
        });
        continue;
      }

      // fences (gfm)
      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'code',
          lang: cap[2],
          text: cap[3] || ''
        });
        continue;
      }

      // heading
      if (cap = this.rules.heading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[1].length,
          text: cap[2]
        });
        continue;
      }

      // table no leading pipe (gfm)
      if (top && (cap = this.rules.nptable.exec(src))) {
        src = src.substring(cap[0].length);

        item = {
          type: 'table',
          header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3].replace(/\n$/, '').split('\n')
        };

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].split(/ *\| */);
        }

        this.tokens.push(item);

        continue;
      }

      // lheading
      if (cap = this.rules.lheading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[2] === '=' ? 1 : 2,
          text: cap[1]
        });
        continue;
      }

      // hr
      if (cap = this.rules.hr.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'hr'
        });
        continue;
      }

      // blockquote
      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);

        this.tokens.push({
          type: 'blockquote_start'
        });

        cap = cap[0].replace(/^ *> ?/gm, '');

        // Pass `top` to keep the current
        // "toplevel" state. This is exactly
        // how markdown.pl works.
        this.token(cap, top, true);

        this.tokens.push({
          type: 'blockquote_end'
        });

        continue;
      }

      // list
      if (cap = this.rules.list.exec(src)) {
        src = src.substring(cap[0].length);
        bull = cap[2];

        this.tokens.push({
          type: 'list_start',
          ordered: bull.length > 1
        });

        // Get each top-level item.
        cap = cap[0].match(this.rules.item);

        next = false;
        l = cap.length;
        i = 0;

        for (; i < l; i++) {
          item = cap[i];

          // Remove the list item's bullet
          // so it is seen as the next token.
          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) +/, '');

          // Outdent whatever the
          // list item contains. Hacky.
          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          }

          // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.
          if (this.options.smartLists && i !== l - 1) {
            b = block.bullet.exec(cap[i + 1])[0];
            if (bull !== b && !(bull.length > 1 && b.length > 1)) {
              src = cap.slice(i + 1).join('\n') + src;
              i = l - 1;
            }
          }

          // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.
          loose = next || /\n\n(?!\s*$)/.test(item);
          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          this.tokens.push({
            type: loose ? 'loose_item_start' : 'list_item_start'
          });

          // Recurse.
          this.token(item, false, bq);

          this.tokens.push({
            type: 'list_item_end'
          });
        }

        this.tokens.push({
          type: 'list_end'
        });

        continue;
      }

      // html
      if (cap = this.rules.html.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: this.options.sanitize ? 'paragraph' : 'html',
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0]
        });
        continue;
      }

      // def
      if (!bq && top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.links[cap[1].toLowerCase()] = {
          href: cap[2],
          title: cap[3]
        };
        continue;
      }

      // table (gfm)
      if (top && (cap = this.rules.table.exec(src))) {
        src = src.substring(cap[0].length);

        item = {
          type: 'table',
          header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
        };

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
        }

        this.tokens.push(item);

        continue;
      }

      // top-level paragraph
      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'paragraph',
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        });
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'text',
          text: cap[0]
        });
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return this.tokens;
  };

  /**
   * Inline-Level Grammar
   */

  var inline = {
    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
    autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
    url: noop,
    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
    link: /^!?\[(inside)\]\(href\)/,
    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
    em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
    code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    br: /^ {2,}\n(?!\s*$)/,
    del: noop,
    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
  };

  inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
  inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

  inline.link = replace(inline.link)('inside', inline._inside)('href', inline._href)();

  inline.reflink = replace(inline.reflink)('inside', inline._inside)();

  /**
   * Normal Inline Grammar
   */

  inline.normal = merge({}, inline);

  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
  });

  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge({}, inline.normal, {
    escape: replace(inline.escape)('])', '~|])')(),
    url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    del: /^~~(?=\S)([\s\S]*?\S)~~/,
    text: replace(inline.text)(']|', '~]|')('|', '|https?://|')()
  });

  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge({}, inline.gfm, {
    br: replace(inline.br)('{2,}', '*')(),
    text: replace(inline.gfm.text)('{2,}', '*')()
  });

  /**
   * Inline Lexer & Compiler
   */

  function InlineLexer(links, options) {
    this.options = options || marked.defaults;
    this.links = links;
    this.rules = inline.normal;
    this.renderer = this.options.renderer || new Renderer();
    this.renderer.options = this.options;

    if (!this.links) {
      throw new Error('Tokens array requires a `links` property.');
    }

    if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline.breaks;
      } else {
        this.rules = inline.gfm;
      }
    } else if (this.options.pedantic) {
      this.rules = inline.pedantic;
    }
  }

  /**
   * Expose Inline Rules
   */

  InlineLexer.rules = inline;

  /**
   * Static Lexing/Compiling Method
   */

  InlineLexer.output = function (src, links, options) {
    var inline = new InlineLexer(links, options);
    return inline.output(src);
  };

  /**
   * Lexing/Compiling
   */

  InlineLexer.prototype.output = function (src) {
    var out = '',
        link,
        text,
        href,
        cap;

    while (src) {
      // escape
      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += cap[1];
        continue;
      }

      // autolink
      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[2] === '@') {
          text = cap[1].charAt(6) === ':' ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
          href = this.mangle('mailto:') + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }
        out += this.renderer.link(href, null, text);
        continue;
      }

      // url (gfm)
      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        src = src.substring(cap[0].length);
        text = escape(cap[1]);
        href = text;
        out += this.renderer.link(href, null, text);
        continue;
      }

      // tag
      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }
        src = src.substring(cap[0].length);
        out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
        continue;
      }

      // link
      if (cap = this.rules.link.exec(src)) {
        src = src.substring(cap[0].length);
        this.inLink = true;
        out += this.outputLink(cap, {
          href: cap[2],
          title: cap[3]
        });
        this.inLink = false;
        continue;
      }

      // reflink, nolink
      if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = this.links[link.toLowerCase()];
        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }
        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      }

      // strong
      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.strong(this.output(cap[2] || cap[1]));
        continue;
      }

      // em
      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.em(this.output(cap[2] || cap[1]));
        continue;
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.codespan(escape(cap[2], true));
        continue;
      }

      // br
      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.br();
        continue;
      }

      // del (gfm)
      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.del(this.output(cap[1]));
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.text(escape(this.smartypants(cap[0])));
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return out;
  };

  /**
   * Compile Link
   */

  InlineLexer.prototype.outputLink = function (cap, link) {
    var href = escape(link.href),
        title = link.title ? escape(link.title) : null;

    return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
  };

  /**
   * Smartypants Transformations
   */

  InlineLexer.prototype.smartypants = function (text) {
    if (!this.options.smartypants) return text;
    return text
    // em-dashes
    .replace(/---/g, '—')
    // en-dashes
    .replace(/--/g, '–')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
    // closing singles & apostrophes
    .replace(/'/g, '’')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
    // closing doubles
    .replace(/"/g, '”')
    // ellipses
    .replace(/\.{3}/g, '…');
  };

  /**
   * Mangle Links
   */

  InlineLexer.prototype.mangle = function (text) {
    if (!this.options.mangle) return text;
    var out = '',
        l = text.length,
        i = 0,
        ch;

    for (; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }
      out += '&#' + ch + ';';
    }

    return out;
  };

  /**
   * Renderer
   */

  function Renderer(options) {
    this.options = options || {};
  }

  Renderer.prototype.code = function (code, lang, escaped) {
    if (this.options.highlight) {
      var out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    if (!lang) {
      return '<pre><code>' + (escaped ? code : escape(code, true)) + '\n</code></pre>';
    }

    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '\n</code></pre>\n';
  };

  Renderer.prototype.blockquote = function (quote) {
    return '<blockquote>\n' + quote + '</blockquote>\n';
  };

  Renderer.prototype.html = function (html) {
    return html;
  };

  Renderer.prototype.heading = function (text, level, raw) {
    return '<h' + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n';
  };

  Renderer.prototype.hr = function () {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  };

  Renderer.prototype.list = function (body, ordered) {
    var type = ordered ? 'ol' : 'ul';
    return '<' + type + '>\n' + body + '</' + type + '>\n';
  };

  Renderer.prototype.listitem = function (text) {
    return '<li>' + text + '</li>\n';
  };

  Renderer.prototype.paragraph = function (text) {
    return '<p>' + text + '</p>\n';
  };

  Renderer.prototype.table = function (header, body) {
    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + '<tbody>\n' + body + '</tbody>\n' + '</table>\n';
  };

  Renderer.prototype.tablerow = function (content) {
    return '<tr>\n' + content + '</tr>\n';
  };

  Renderer.prototype.tablecell = function (content, flags) {
    var type = flags.header ? 'th' : 'td';
    var tag = flags.align ? '<' + type + ' style="text-align:' + flags.align + '">' : '<' + type + '>';
    return tag + content + '</' + type + '>\n';
  };

  // span level renderer
  Renderer.prototype.strong = function (text) {
    return '<strong>' + text + '</strong>';
  };

  Renderer.prototype.em = function (text) {
    return '<em>' + text + '</em>';
  };

  Renderer.prototype.codespan = function (text) {
    return '<code>' + text + '</code>';
  };

  Renderer.prototype.br = function () {
    return this.options.xhtml ? '<br/>' : '<br>';
  };

  Renderer.prototype.del = function (text) {
    return '<del>' + text + '</del>';
  };

  Renderer.prototype.link = function (href, title, text) {
    if (this.options.sanitize) {
      try {
        var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
      } catch (e) {
        return '';
      }
      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
        return '';
      }
    }
    var out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  };

  Renderer.prototype.image = function (href, title, text) {
    var out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  };

  Renderer.prototype.text = function (text) {
    return text;
  };

  /**
   * Parsing & Compiling
   */

  function Parser(options) {
    this.tokens = [];
    this.token = null;
    this.options = options || marked.defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
  }

  /**
   * Static Parse Method
   */

  Parser.parse = function (src, options, renderer) {
    var parser = new Parser(options, renderer);
    return parser.parse(src);
  };

  /**
   * Parse Loop
   */

  Parser.prototype.parse = function (src) {
    this.inline = new InlineLexer(src.links, this.options, this.renderer);
    this.tokens = src.reverse();

    var out = '';
    while (this.next()) {
      out += this.tok();
    }

    return out;
  };

  /**
   * Next Token
   */

  Parser.prototype.next = function () {
    return this.token = this.tokens.pop();
  };

  /**
   * Preview Next Token
   */

  Parser.prototype.peek = function () {
    return this.tokens[this.tokens.length - 1] || 0;
  };

  /**
   * Parse Text Tokens
   */

  Parser.prototype.parseText = function () {
    var body = this.token.text;

    while (this.peek().type === 'text') {
      body += '\n' + this.next().text;
    }

    return this.inline.output(body);
  };

  /**
   * Parse Current Token
   */

  Parser.prototype.tok = function () {
    switch (this.token.type) {
      case 'space':
        {
          return '';
        }
      case 'hr':
        {
          return this.renderer.hr();
        }
      case 'heading':
        {
          return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
        }
      case 'code':
        {
          return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
        }
      case 'table':
        {
          var header = '',
              body = '',
              i,
              row,
              cell,
              flags,
              j;

          // header
          cell = '';
          for (i = 0; i < this.token.header.length; i++) {
            flags = { header: true, align: this.token.align[i] };
            cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), { header: true, align: this.token.align[i] });
          }
          header += this.renderer.tablerow(cell);

          for (i = 0; i < this.token.cells.length; i++) {
            row = this.token.cells[i];

            cell = '';
            for (j = 0; j < row.length; j++) {
              cell += this.renderer.tablecell(this.inline.output(row[j]), { header: false, align: this.token.align[j] });
            }

            body += this.renderer.tablerow(cell);
          }
          return this.renderer.table(header, body);
        }
      case 'blockquote_start':
        {
          var body = '';

          while (this.next().type !== 'blockquote_end') {
            body += this.tok();
          }

          return this.renderer.blockquote(body);
        }
      case 'list_start':
        {
          var body = '',
              ordered = this.token.ordered;

          while (this.next().type !== 'list_end') {
            body += this.tok();
          }

          return this.renderer.list(body, ordered);
        }
      case 'list_item_start':
        {
          var body = '';

          while (this.next().type !== 'list_item_end') {
            body += this.token.type === 'text' ? this.parseText() : this.tok();
          }

          return this.renderer.listitem(body);
        }
      case 'loose_item_start':
        {
          var body = '';

          while (this.next().type !== 'list_item_end') {
            body += this.tok();
          }

          return this.renderer.listitem(body);
        }
      case 'html':
        {
          var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
          return this.renderer.html(html);
        }
      case 'paragraph':
        {
          return this.renderer.paragraph(this.inline.output(this.token.text));
        }
      case 'text':
        {
          return this.renderer.paragraph(this.parseText());
        }
    }
  };

  /**
   * Helpers
   */

  function escape(html, encode) {
    return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function unescape(html) {
    return html.replace(/&([#\w]+);/g, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';
      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }
      return '';
    });
  }

  function replace(regex, opt) {
    regex = regex.source;
    opt = opt || '';
    return function self(name, val) {
      if (!name) return new RegExp(regex, opt);
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return self;
    };
  }

  function noop() {}
  noop.exec = noop;

  function merge(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];
      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  /**
   * Marked
   */

  function marked(src, opt, callback) {
    if (callback || typeof opt === 'function') {
      if (!callback) {
        callback = opt;
        opt = null;
      }

      opt = merge({}, marked.defaults, opt || {});

      var highlight = opt.highlight,
          tokens,
          pending,
          i = 0;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      pending = tokens.length;

      var done = function done(err) {
        if (err) {
          opt.highlight = highlight;
          return callback(err);
        }

        var out;

        try {
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }

        opt.highlight = highlight;

        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;

      if (!pending) return done();

      for (; i < tokens.length; i++) {
        (function (token) {
          if (token.type !== 'code') {
            return --pending || done();
          }
          return highlight(token.text, token.lang, function (err, code) {
            if (err) return done(err);
            if (code == null || code === token.text) {
              return --pending || done();
            }
            token.text = code;
            token.escaped = true;
            --pending || done();
          });
        })(tokens[i]);
      }

      return;
    }
    try {
      if (opt) opt = merge({}, marked.defaults, opt);
      return Parser.parse(Lexer.lex(src, opt), opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/chjj/marked.';
      if ((opt || marked.defaults).silent) {
        return '<p>An error occured:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }
      throw e;
    }
  }

  /**
   * Options
   */

  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    return marked;
  };

  marked.defaults = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    sanitizer: null,
    mangle: true,
    smartLists: false,
    silent: false,
    highlight: null,
    langPrefix: 'lang-',
    smartypants: false,
    headerPrefix: '',
    renderer: new Renderer(),
    xhtml: false
  };

  /**
   * Expose
   */

  marked.Parser = Parser;
  marked.parser = Parser.parse;

  marked.Renderer = Renderer;

  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;

  marked.InlineLexer = InlineLexer;
  marked.inlineLexer = InlineLexer.output;

  marked.parse = marked;

  if (typeof module !== 'undefined' && (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = marked;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return marked;
    });
  } else {
    this.marked = marked;
  }
}).call(function () {
  return this || (typeof window !== 'undefined' ? window : global);
}());

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function (md, options) {
  options = options || {};
  options.stripListLeaders = options.hasOwnProperty('stripListLeaders') ? options.stripListLeaders : true;
  options.gfm = options.hasOwnProperty('gfm') ? options.gfm : true;

  var output = md;
  try {
    if (options.stripListLeaders) {
      output = output.replace(/^([\s\t]*)([\*\-\+]|\d\.)\s+/gm, '$1');
    }
    if (options.gfm) {
      output = output
      // Header
      .replace(/\n={2,}/g, '\n')
      // Strikethrough
      .replace(/~~/g, '')
      // Fenced codeblocks
      .replace(/`{3}.*\n/g, '');
    }
    output = output
    // Remove HTML tags
    .replace(/<(.*?)>/g, '$1')
    // Remove setext-style headers
    .replace(/^[=\-]{2,}\s*$/g, '')
    // Remove footnotes?
    .replace(/\[\^.+?\](\: .*?$)?/g, '').replace(/\s{0,2}\[.*?\]: .*?$/g, '')
    // Remove images
    .replace(/\!\[.*?\][\[\(].*?[\]\)]/g, '')
    // Remove inline links
    .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1')
    // Remove Blockquotes
    .replace(/>/g, '')
    // Remove reference-style links?
    .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
    // Remove atx-style headers
    .replace(/^\#{1,6}\s*([^#]*)\s*(\#{1,6})?/gm, '$1').replace(/([\*_]{1,3})(\S.*?\S)\1/g, '$2').replace(/(`{3,})(.*?)\1/gm, '$2').replace(/^-{3,}\s*$/g, '').replace(/`(.+?)`/g, '$1').replace(/\n{2,}/g, '\n\n');
  } catch (e) {
    console.error(e);
    return md;
  }
  return output;
};

},{}],11:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function () {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype,
      ObjProto = Object.prototype,
      FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeBind = FuncProto.bind,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function Ctor() {};

  // Create a safe reference to the Underscore object for use below.
  var _ = function _(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function optimizeCb(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1:
        return function (value) {
          return func.call(context, value);
        };
      case 2:
        return function (value, other) {
          return func.call(context, value, other);
        };
      case 3:
        return function (value, index, collection) {
          return func.call(context, value, index, collection);
        };
      case 4:
        return function (accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }
    return function () {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function cb(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function (value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
    return function (obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function baseCreate(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor();
    Ctor.prototype = null;
    return result;
  };

  var property = function property(key) {
    return function (obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function isArrayLike(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function (obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function (obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function (obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function (obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function (value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function (obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function (obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function (value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function (obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function (obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function (obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function (obj, iteratee, context) {
    var result = -Infinity,
        lastComputed = -Infinity,
        value,
        computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function (value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function (obj, iteratee, context) {
    var result = Infinity,
        lastComputed = Infinity,
        value,
        computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function (value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function (obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function (obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function (value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function (left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function group(behavior) {
    return function (obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function (value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function (result, value, key) {
    if (_.has(result, key)) result[key].push(value);else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function (result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function (result, value, key) {
    if (_.has(result, key)) result[key]++;else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function (obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function (obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [],
        fail = [];
    _.each(obj, function (value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function (array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function (array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function (array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function (array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function (array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function flatten(input, shallow, strict, startIndex) {
    var output = [],
        idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0,
            len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function (array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function (array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function (array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function () {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function (array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function (array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function (value) {
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function () {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function (array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function (list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function (array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function (array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0,
        high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function (array, item, idx) {
      var i = 0,
          length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function (start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function (func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function bound() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function (func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function bound() {
      var position = 0,
          length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) {
        args.push(arguments[position++]);
      }return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function (obj) {
    var i,
        length = arguments.length,
        key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function (func, hasher) {
    var memoize = function memoize(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function (func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function () {
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function later() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function () {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function later() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function () {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function (func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function (predicate) {
    return function () {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function () {
    var args = arguments;
    var start = args.length - 1;
    return function () {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) {
        result = args[i].call(this, result);
      }return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function (times, func) {
    return function () {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function (times, func) {
    var memo;
    return function () {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function (obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) {
      if (_.has(obj, key)) keys.push(key);
    } // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function (obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) {
      keys.push(key);
    } // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function (obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {},
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function (obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function (obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function (obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj),
        key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function (object, oiteratee, context) {
    var result = {},
        obj = object,
        iteratee,
        keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function iteratee(value, key, obj) {
        return key in obj;
      };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

  // Return a copy of the object without the blacklisted properties.
  _.omit = function (obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function iteratee(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function (prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function (obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function (obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function (object, attrs) {
    var keys = _.keys(attrs),
        length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor,
          bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a),
          key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function (a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function (obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function (obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function (obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function (obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
    _['is' + name] = function (obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function (obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) != 'object') {
    _.isFunction = function (obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function (obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function (obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function (obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function (obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function (obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function (obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function () {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function (value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function (value) {
    return function () {
      return value;
    };
  };

  _.noop = function () {};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function (obj) {
    return obj == null ? function () {} : function (key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function (attrs) {
    attrs = _.extendOwn({}, attrs);
    return function (obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function (n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) {
      accum[i] = iteratee(i);
    }return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function (min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function () {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function createEscaper(map) {
    var escaper = function escaper(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function (string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function (object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function (prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function escapeChar(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function (text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function template(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function (obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function result(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function () {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
    var method = ArrayProto[name];
    _.prototype[name] = function () {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function (name) {
    var method = ArrayProto[name];
    _.prototype[name] = function () {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function () {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function () {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function () {
      return _;
    });
  }
}).call(undefined);

},{}],12:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = require('./lib/personality-trait-names');

},{"./lib/personality-trait-names":17}],13:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  'en': require('./en'),
  'es': require('./es')
};

},{"./en":14,"./es":15}],14:[function(require,module,exports){
'use strict';
/*
 * Copyright 2015-2016 IBM Corp. All Rights Reserved.
#
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
#
 *      http://www.apache.org/licenses/LICENSE-2.0
#
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../locales/en');

},{"../../locales/en":18}],15:[function(require,module,exports){
'use strict';
/*
 * Copyright 2015-2016 IBM Corp. All Rights Reserved.
#
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
#
 *      http://www.apache.org/licenses/LICENSE-2.0
#
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../locales/es');

},{"../../locales/es":19}],16:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('underscore'),
    contains = _.contains,
    extend = _.extend,
    keys = _.keys;

var dictionaries = require('./dictionaries');

var I18nData = function () {
  function I18nData(locale) {
    _classCallCheck(this, I18nData);

    this._locale = contains(keys(dictionaries), locale) ? locale : 'en';
    this._dictionary = dictionaries[this._locale];
  }

  _createClass(I18nData, [{
    key: 'data',
    value: function data() {
      return extend({}, this._dictionary);
    }
  }]);

  return I18nData;
}();

module.exports = I18nData;

},{"./dictionaries":13,"underscore":20}],17:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('underscore'),
    extend = _.extend,
    pick = _.pick,
    pairs = _.pairs;

var I18nData = require('./i18n');

module.exports = function () {
  function _class(options) {
    _classCallCheck(this, _class);

    this._options = extend(this.defaultOptions(), pick(options, 'locale'));
    this._i18n = new I18nData(this._options.locale);
    this._data = this._i18n.data();
  }

  _createClass(_class, [{
    key: 'defaultOptions',
    value: function defaultOptions() {
      return {
        locale: 'en'
      };
    }
  }, {
    key: 'name',
    value: function name(traitId) {
      return this._data[traitId];
    }
  }, {
    key: 'names',
    value: function names() {
      return pairs(this._data).map(function (p) {
        return p[1];
      });
    }
  }]);

  return _class;
}();

},{"./i18n":16,"underscore":20}],18:[function(require,module,exports){
module.exports={
  "Agreeableness" : "Agreeableness",
  "Altruism" : "Altruism",
  "Cooperation" : "Cooperation",
  "Modesty" : "Modesty",
  "Morality" : "Uncompromising",
  "Sympathy" : "Sympathy",
  "Trust" : "Trust",
  "Conscientiousness" : "Conscientiousness",
  "Achievement striving" : "Achievement striving",
  "Cautiousness" : "Cautiousness",
  "Dutifulness" : "Dutifulness",
  "Orderliness" : "Orderliness",
  "Self-discipline" : "Self-discipline",
  "Self-efficacy" : "Self-efficacy",
  "Extraversion" : "Extraversion",
  "Activity level" : "Activity level",
  "Assertiveness" : "Assertiveness",
  "Cheerfulness" : "Cheerfulness",
  "Excitement-seeking" : "Excitement-seeking",
  "Friendliness" : "Outgoing",
  "Gregariousness" : "Gregariousness",
  "Neuroticism" : "Emotional range",
  "Anger" : "Fiery",
  "Anxiety" : "Prone to worry",
  "Depression" : "Melancholy",
  "Immoderation" : "Immoderation",
  "Self-consciousness" : "Self-consciousness",
  "Vulnerability" : "Susceptible to stress",
  "Openness" : "Openness",
  "Adventurousness" : "Adventurousness",
  "Artistic interests" : "Artistic interests",
  "Emotionality" : "Emotionality",
  "Imagination" : "Imagination",
  "Intellect" : "Intellect",
  "Liberalism" : "Authority-challenging",

  "Liberty" : "Liberty",
  "Ideal" : "Ideal",
  "Love" : "Love",
  "Practicality" : "Practicality",
  "Self-expression" : "Self-expression",
  "Stability" : "Stability",
  "Structure" : "Structure",
  "Challenge" : "Challenge",
  "Closeness" : "Closeness",
  "Curiosity" : "Curiosity",
  "Excitement" : "Excitement",
  "Harmony" : "Harmony",

  "Conservation" : "Conservation",
  "Hedonism" : "Hedonism",
  "Openness to change" : "Openness to change",
  "Self-enhancement" : "Self-enhancement",
  "Self-transcendence" : "Self-transcendence"
}

},{}],19:[function(require,module,exports){
module.exports={
  "Agreeableness" : "Amabilidad",
  "Altruism" : "Altruismo",
  "Cooperation" : "Cooperaci\u00f3n",
  "Modesty" : "Modestia",
  "Morality" : "Intransigencia",
  "Sympathy" : "Compasi\u00f3n",
  "Trust" : "Confianza",
  "Conscientiousness" : "Responsabilidad",
  "Achievement striving" : "Necesidad de \u00e9xito",
  "Cautiousness" : "Cautela",
  "Dutifulness" : "Obediencia",
  "Orderliness" : "Disciplina",
  "Self-discipline" : "Autodisciplina",
  "Self-efficacy" : "Autoeficacia",
  "Extraversion" : "Extroversi\u00f3n",
  "Activity level" : "Nivel de actividad",
  "Assertiveness" : "Seguridad en uno mismo",
  "Cheerfulness" : "Alegr\u00eda",
  "Excitement-seeking" : "B\u00fasqueda de emociones",
  "Friendliness" : "Simpat\u00eda",
  "Gregariousness" : "Sociabilidad",
  "Neuroticism" : "Rango emocional",
  "Anger" : "Vehemencia",
  "Anxiety" : "Tendencia a la preocupaci\u00f3n",
  "Depression" : "Melancol\u00eda",
  "Immoderation" : "Desmesura",
  "Self-consciousness" : "Timidez",
  "Vulnerability" : "Susceptibilidad a la tensi\u00f3n",
  "Openness" : "Apertura a experiencias",
  "Adventurousness" : "Audacia",
  "Artistic interests" : "Intereses art\u00edsticos",
  "Emotionality" : "Emocionalidad",
  "Imagination" : "Imaginaci\u00f3n",
  "Intellect" : "Intelecto",
  "Liberalism" : "Desaf\u00edo a la autoridad",

  "Liberty" : "Libertad",
  "Ideal" : "Ideal",
  "Love" : "Amor",
  "Practicality" : "Practicidad",
  "Self-expression" : "Autoexpresi\u00f3n",
  "Stability" : "Estabilidad",
  "Structure" : "Estructura",
  "Challenge" : "Desaf\u00edo",
  "Closeness" : "Familiaridad",
  "Curiosity" : "Curiosidad",
  "Excitement" : "Entusiasmo",
  "Harmony" : "Armon\u00eda",

  "Conservation" : "Conservaci\u00f3n",
  "Hedonism" : "Hedonismo",
  "Openness to change" : "Apertura al cambio",
  "Self-enhancement" : "Superaci\u00f3n personal",
  "Self-transcendence" : "Autotranscendencia"
}

},{}],20:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],21:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9wZXJzb25hbGl0eS10cmFpdC1pbmZvLmpzIiwibm9kZV9tb2R1bGVzL3BlcnNvbmFsaXR5LXRyYWl0LWRlc2NyaXB0aW9ucy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wZXJzb25hbGl0eS10cmFpdC1kZXNjcmlwdGlvbnMvbGliL2kxOG4vZGljdGlvbmFyaWVzLmpzIiwibm9kZV9tb2R1bGVzL3BlcnNvbmFsaXR5LXRyYWl0LWRlc2NyaXB0aW9ucy9saWIvaTE4bi9lbi5qcyIsIm5vZGVfbW9kdWxlcy9wZXJzb25hbGl0eS10cmFpdC1kZXNjcmlwdGlvbnMvbGliL2kxOG4vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcGVyc29uYWxpdHktdHJhaXQtZGVzY3JpcHRpb25zL2xpYi9wZXJzb25hbGl0eS10cmFpdC1kZXNjcmlwdGlvbnMuanMiLCJub2RlX21vZHVsZXMvcGVyc29uYWxpdHktdHJhaXQtZGVzY3JpcHRpb25zL2xpYi91dGlsaXRpZXMvZm9ybWF0LXRleHQuanMiLCJub2RlX21vZHVsZXMvcGVyc29uYWxpdHktdHJhaXQtZGVzY3JpcHRpb25zL25vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5qcyIsIm5vZGVfbW9kdWxlcy9wZXJzb25hbGl0eS10cmFpdC1kZXNjcmlwdGlvbnMvbm9kZV9tb2R1bGVzL3JlbW92ZS1tYXJrZG93bi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wZXJzb25hbGl0eS10cmFpdC1kZXNjcmlwdGlvbnMvbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9wZXJzb25hbGl0eS10cmFpdC1uYW1lcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wZXJzb25hbGl0eS10cmFpdC1uYW1lcy9saWIvaTE4bi9kaWN0aW9uYXJpZXMuanMiLCJub2RlX21vZHVsZXMvcGVyc29uYWxpdHktdHJhaXQtbmFtZXMvbGliL2kxOG4vZW4uanMiLCJub2RlX21vZHVsZXMvcGVyc29uYWxpdHktdHJhaXQtbmFtZXMvbGliL2kxOG4vZXMuanMiLCJub2RlX21vZHVsZXMvcGVyc29uYWxpdHktdHJhaXQtbmFtZXMvbGliL2kxOG4vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcGVyc29uYWxpdHktdHJhaXQtbmFtZXMvbGliL3BlcnNvbmFsaXR5LXRyYWl0LW5hbWVzLmpzIiwibm9kZV9tb2R1bGVzL3BlcnNvbmFsaXR5LXRyYWl0LW5hbWVzL2xvY2FsZXMvZW4uanNvbiIsIm5vZGVfbW9kdWxlcy9wZXJzb25hbGl0eS10cmFpdC1uYW1lcy9sb2NhbGVzL2VzLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0JBOztBQUdBLE9BQU8sT0FBUCxHQUFpQixRQUFRLDhCQUFSLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLHlCQUFSLENBQWQ7QUFDQSxJQUFNLGVBQWUsUUFBUSxnQ0FBUixDQUFyQjtBQUNBLElBQU0sSUFBSSxRQUFRLFlBQVIsQ0FBVjtBQUNBLElBQU0sU0FBUyxFQUFFLE1BQWpCOztBQUdBLE9BQU8sT0FBUDtBQUVFLGtCQUFZLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBSyxNQUFMLEdBQWMsSUFBSSxLQUFKLENBQVUsT0FBVixDQUFkO0FBQ0EsU0FBSyxhQUFMLEdBQXFCLElBQUksWUFBSixDQUFpQixPQUFqQixDQUFyQjtBQUNEOztBQUxIO0FBQUE7QUFBQSxnQ0FPYyxPQVBkLEVBT3VCO0FBQ25CLGFBQU8sS0FBSyxhQUFMLENBQW1CLFdBQW5CLENBQStCLE9BQS9CLENBQVA7QUFDRDtBQVRIO0FBQUE7QUFBQSx5QkFXTyxPQVhQLEVBV2dCO0FBQ1osYUFBTyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLE9BQWpCLENBQVA7QUFDRDtBQWJIO0FBQUE7QUFBQSwwQkFlUSxPQWZS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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IElCTSBDb3JwLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcGVyc29uYWxpdHktdHJhaXQtaW5mbycpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBJQk0gQ29ycC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgTmFtZXMgPSByZXF1aXJlKCdwZXJzb25hbGl0eS10cmFpdC1uYW1lcycpO1xuY29uc3QgRGVzY3JpcHRpb25zID0gcmVxdWlyZSgncGVyc29uYWxpdHktdHJhaXQtZGVzY3JpcHRpb25zJyk7XG5jb25zdCBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuY29uc3QgZXh0ZW5kID0gXy5leHRlbmQ7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuX25hbWVzID0gbmV3IE5hbWVzKG9wdGlvbnMpO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9ucyA9IG5ldyBEZXNjcmlwdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBkZXNjcmlwdGlvbih0cmFpdElkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9ucy5kZXNjcmlwdGlvbih0cmFpdElkKTtcbiAgfVxuXG4gIG5hbWUodHJhaXRJZCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lcy5uYW1lKHRyYWl0SWQpO1xuICB9XG5cbiAgbmFtZXModHJhaXRJZCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lcy5uYW1lcyh0cmFpdElkKTtcbiAgfVxuXG4gIGluZm8odHJhaXRJZCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZCA6IHRyYWl0SWQsXG4gICAgICBuYW1lIDogdGhpcy5uYW1lKHRyYWl0SWQpLFxuICAgICAgZGVzY3JpcHRpb24gOiB0aGlzLmRlc2NyaXB0aW9uKHRyYWl0SWQpXG4gICAgfTtcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBJQk0gQ29ycC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9wZXJzb25hbGl0eS10cmFpdC1kZXNjcmlwdGlvbnMnKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgSUJNIENvcnAuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAnZW4nIDogcmVxdWlyZSgnLi9lbicpXG59O1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDE1LTIwMTYgSUJNIENvcnAuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4jXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4gJ3VzZSBzdGF0aWMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBiaWc1OiB7XG4gICAgJ09wZW5uZXNzJzogJ09wZW5uZXNzIHRvIGV4cGVyaWVuY2UuIEhpZ2hlcjogSW50ZWxsZWN0dWFsbHkgY3VyaW91cywgZW1vdGlvbmFsbHktYXdhcmUsIHNlbnNpdGl2ZSB0byBiZWF1dHkgYW5kIHdpbGxpbmcgdG8gdHJ5IG5ldyB0aGluZ3MuXFxuTG93ZXI6IFByZWZlcnJpbmcgdGhlIHBsYWluLCBzdHJhaWdodGZvcndhcmQsIGFuZCBvYnZpb3VzIG92ZXIgdGhlIGNvbXBsZXgsIGFtYmlndW91cywgYW5kIHN1YnRsZS4nLFxuICAgICdDb25zY2llbnRpb3VzbmVzcyc6ICdIaWdoZXI6IE1vcmUgc2VsZi1kaXNjaXBsaW5lZCwgZHV0aWZ1bCwgb3IgYWltaW5nIGZvciBhY2hpZXZlbWVudCBhZ2FpbnN0IG1lYXN1cmVzIG9yIG91dHNpZGUgZXhwZWN0YXRpb25zLlxcbkxvd2VyOiBNb3JlIGxpa2VseSB0byBwcmVmZXIgdGhlIHNwb250YW5lb3VzIG92ZXIgdGhlIHBsYW5uZWQuJyxcbiAgICAnRXh0cmF2ZXJzaW9uJzogJ0hpZ2hlcjogTW9yZSBlbmVyZ2V0aWMgYW5kIHByb25vdW5jZWQgZW5nYWdlbWVudCB3aXRoIHRoZSBleHRlcm5hbCB3b3JsZC4gTGlrZXMgaGlnaCBncm91cCB2aXNpYmlsaXR5LCB0YWxraW5nLCBhbmQgYXNzZXJ0aW5nIHRoZW1zZWx2ZXMuXFxuTG93ZXI6IE5lZWRzIGxlc3Mgc3RpbXVsYXRpb24gYW5kIGFyZSBtb3JlIGluZGVwZW5kZW50IG9mIHRoZWlyIHNvY2lhbCB3b3JsZC4gSXQgZG9lcyBub3QgbWVhbiB0aGV5IGFyZSBzaHksIHVuLWZyaWVuZGx5LCBvciBhbnRpc29jaWFsLicsXG4gICAgJ0FncmVlYWJsZW5lc3MnOiAnSGlnaGVyOiBWYWx1ZSBnZXR0aW5nIGFsb25nIHdpdGggb3RoZXJzLiBUaGV5IGhhdmUgYSBtb3JlIG9wdGltaXN0aWMgdmlldyBvZiBodW1hbiBuYXR1cmUuXFxuTG93ZXI6IFZhbHVlIHNlbGYgaW50ZXJlc3RzIG92ZXIgb3RoZXJzLiBUaGV5IGFyZSBtb3JlIHNrZXB0aWNhbCBvZiBvdGhlcnNcXCcgbW90aXZlcy4nLFxuICAgICdOZXVyb3RpY2lzbSc6ICcqKlRoaXMgZGVtbyBjYW5ub3QgZGlhZ25vc2UgYSBtZW50YWwgaWxsbmVzcy4qKiBIaWdoZXI6IE1vcmUgbGlrZWx5IHRvIGhhdmUgbmVnYXRpdmUgZW1vdGlvbnMgb3IgZ2V0IHVwc2V0LiBJdCBjb3VsZCBtZWFuIHRoZXkgYXJlIGdvaW5nIHRocm91Z2ggYSB0b3VnaCB0aW1lLlxcbkxvd2VyOiBNb3JlIGNhbG0gYW5kIGxlc3MgbGlrZWx5IHRvIGdldCB1cHNldC4gSXQgZG9lcyBub3QgbWVhbiB0aGV5IGFyZSBwb3NpdGl2ZSwgb3IgaGFwcHkgcGVvcGxlLicsXG4gICAgJ0FkdmVudHVyb3VzbmVzcyc6ICdFYWdlcm5lc3MgdG8gdHJ5aW5nIG5ldyBhY3Rpdml0aWVzIGFuZCBleHBlcmllbmNpbmcgbmV3IHRoaW5ncy4nLFxuICAgICdBcnRpc3RpYyBpbnRlcmVzdHMnOiAnQXBwcmVjaWF0aW9uIGZvciBhcnQgYW5kIGJlYXV0eSwgYm90aCBtYW4tbWFkZSBhbmQgaW4gbmF0dXJlLicsXG4gICAgJ0Vtb3Rpb25hbGl0eSc6ICdFbW90aW9uYWwgYXZhaWxhYmlsaXR5OyBhd2FyZW5lc3Mgb2Ygb3duIGZlZWxpbmdzLicsXG4gICAgJ0ltYWdpbmF0aW9uJzogJ09wZW5uZXNzIHRvIGNyZWF0aW5nIGFuIGlubmVyIHdvcmxkIG9mIGZhbnRhc3kuJyxcbiAgICAnSW50ZWxsZWN0JzogJ0ludGVsbGVjdHVhbCBjdXJpb3NpdHk7IG9wZW5uZXNzIHRvIG5ldyBpZGVhcy4nLFxuICAgICdMaWJlcmFsaXNtJzogJ09wZW5uZXNzIHRvIHJlLWV4YW1pbmUgb3duIHZhbHVlcyBhbmQgdHJhZGl0aW9uczsgcmVhZGluZXNzIHRvIGNoYWxsZW5nZSBhdXRob3JpdHkuJyxcbiAgICAnQWNoaWV2ZW1lbnQgc3RyaXZpbmcnOiAnVGhlIG5lZWQgZm9yIHBlcnNvbmFsIGFjaGlldmVtZW50IGFuZCBzZW5zZSBvZiBkaXJlY3Rpb24uJyxcbiAgICAnQ2F1dGlvdXNuZXNzJzogJ1RlbmRlbmN5IHRvIHRoaW5rIHRoaW5ncyB0aHJvdWdoIGJlZm9yZSBhY3Rpbmcgb3Igc3BlYWtpbmcuJyxcbiAgICAnRHV0aWZ1bG5lc3MnOiAnU2Vuc2Ugb2YgZHV0eTsgYW1vdW50IG9mIGVtcGhhc2lzIHBsYWNlZCBvbiBmdWxmaWxsaW5nIG9ibGlnYXRpb25zLicsXG4gICAgJ09yZGVybGluZXNzJzogJ1BlcnNvbmFsIG9yZ2FuaXphdGlvbiwgdGlkaW5lc3MsIG5lYXRuZXNzLicsXG4gICAgJ1NlbGYtZGlzY2lwbGluZSc6ICdXaWxsLXBvd2VyOyB0aGUgY2FwYWNpdHkgdG8gYmVnaW4gdGFza3MgYW5kIGZvbGxvdyB0aHJvdWdoIHRvIGNvbXBsZXRpb24gaW4gc3BpdGUgb2YgYm9yZWRvbSBvciBkaXN0cmFjdGlvbnMuJyxcbiAgICAnU2VsZi1lZmZpY2FjeSc6ICdCZWxpZWYgaW4gb25lXFwncyBvd24gY29tcGV0ZW5jZS4nLFxuICAgICdBY3Rpdml0eSBsZXZlbCc6ICdQYWNlIG9mIGxpdmluZzsgbGV2ZWwgb2YgYnVzeW5lc3MuJyxcbiAgICAnQXNzZXJ0aXZlbmVzcyc6ICdGb3JjZWZ1bG5lc3Mgb2YgZXhwcmVzc2lvbjsgcHVyc3VpdCBvZiBsZWFkZXJzaGlwIGFuZCBzb2NpYWwgYXNjZW5kYW5jeTsgZGVzaXJlIHRvIGRpcmVjdCB0aGUgYWN0aXZpdGllcyBvZiBvdGhlcnMuJyxcbiAgICAnQ2hlZXJmdWxuZXNzJzogJ1RlbmRlbmN5IHRvIGV4cGVyaWVuY2Ugb3IgZXhwcmVzcyBwb3NpdGl2ZSBlbW90aW9ucy4nLFxuICAgICdFeGNpdGVtZW50LXNlZWtpbmcnOiAnQSBuZWVkIGZvciBlbnZpcm9ubWVudGFsIHN0aW11bGF0aW9uLicsXG4gICAgJ0ZyaWVuZGxpbmVzcyc6ICdJbnRlcmVzdCBpbiBhbmQgZnJpZW5kbGluZXNzIHRvd2FyZHMgb3RoZXJzOyBzb2NpYWxseSBjb25maWRlbnQuJyxcbiAgICAnR3JlZ2FyaW91c25lc3MnOiAnRm9uZG5lc3MgZm9yIHRoZSBjb21wYW55IG9mIG90aGVyczsgc29jaWFiaWxpdHkuJyxcbiAgICAnQWx0cnVpc20nOiAnQWN0aXZlIGFuZCBnZW51aW5lIGNvbmNlcm4gZm9yIHRoZSB3ZWxmYXJlIG9mIG90aGVycy4nLFxuICAgICdDb29wZXJhdGlvbic6ICdEaXNsaWtlIG9mIGNvbmZyb250YXRpb25zLiBSZXNwb25kaW5nIHRvIGludGVycGVyc29uYWwgY29uZmxpY3Qgd2l0aCBhIHdpbGxpbmduZXNzIHRvIGNvbXByb21pc2UuJyxcbiAgICAnTW9kZXN0eSc6ICdUZW5kZW5jeSB0byBiZSB1bmFzc3VtaW5nIGFuZCBwbGF5IGRvd24gb3duIGFjaGlldmVtZW50czsgaHVtaWxpdHkuJyxcbiAgICAnTW9yYWxpdHknOiAnRnJhbmsgYW5kIGdlbnVpbmUgaW4gZXhwcmVzc2lvbjsgY2FuZGlkLCBibHVudC4nLFxuICAgICdTeW1wYXRoeSc6ICdBdHRpdHVkZSBvZiBjb21wYXNzaW9uIGZvciBvdGhlcnM7IGtpbmRuZXNzLicsXG4gICAgJ1RydXN0JzogJ0xldmVsIG9mIGJlbGllZiBpbiB0aGUgc2luY2VyaXR5IGFuZCBnb29kIGludGVudGlvbnMgb2Ygb3RoZXJzLicsXG4gICAgJ0FuZ2VyJzogJ1RlbmRlbmN5IHRvIGV4cGVyaWVuY2XigJNidXQgbm90IG5lY2Vzc2FyaWx5IGV4cHJlc3PigJNhbmdlciBvciBmcnVzdHJhdGlvbi4nLFxuICAgICdBbnhpZXR5JzogJ1RlbmRlbmN5IHRvIGR3ZWxsIG9uIGRpZmZpY3VsdHkgb3IgdHJvdWJsZXM7IGVhc2lseSBleHBlcmllbmNlIHVuZWFzZSBvciBjb25jZXJuLicsXG4gICAgJ0RlcHJlc3Npb24nOiAnTm9ybWFsIHRlbmRlbmN5IHRvIGV4cGVyaWVuY2UgZmVlbGluZ3Mgb2YgZ3VpbHQsIHNhZG5lc3MsIGhvcGVsZXNzbmVzcywgb3IgbG9uZWxpbmVzcy4gKipUaGlzIGRlbW8gY2Fubm90IGRpYWdub3NlIGEgbWVudGFsIGlsbG5lc3MuKionLFxuICAgICdJbW1vZGVyYXRpb24nOiAnVGVuZGVuY3kgdG8gYWN0IG9uIGNyYXZpbmdzIGFuZCB1cmdlcyByYXRoZXIgb3ZlciByZXNpc3RpbmcgdGhlbSBvciBkZWxheWluZyBncmF0aWZpY2F0aW9uLicsXG4gICAgJ1NlbGYtY29uc2Npb3VzbmVzcyc6ICdDb25jZXJuIHdpdGggcmVqZWN0aW9uLCBlbWJhcnJhc3NtZW50OyBzaHluZXNzLicsXG4gICAgJ1Z1bG5lcmFiaWxpdHknOiAnRGlmZmljdWx0eSBpbiBjb3Bpbmcgd2l0aCBzdHJlc3Mgb3IgcHJlc3N1cmUgaW4gZGlmZmljdWx0IHNpdHVhdGlvbnMuJ1xuICB9LFxuXG4gIG5lZWRzOiB7XG4gICAgJ1N0cnVjdHVyZSc6ICdBIG5lZWQgZm9yIG9yZ2FuaXphdGlvbiwgcGxhbm5pbmcsIGFuZCB0aGluZ3MgdGhhdCBoYXZlIGEgY2xlYXIgcHVycG9zZS4nLFxuICAgICdTdGFiaWxpdHknOiAnQSBuZWVkIGZvciB0aGUgc2Vuc2libGUsIHRyaWVkIGFuZCB0ZXN0ZWQsIHdpdGggYSBnb29kIHRyYWNrIHJlY29yZCBhbmQgYSBrbm93biBoaXN0b3J5LicsXG4gICAgJ1NlbGYtZXhwcmVzc2lvbic6ICdBIGRlc2lyZSB0byBkaXNjb3ZlciBhbmQgYXNzZXJ0IG9uZVxcJ3MgaWRlbnRpdHkuJyxcbiAgICAnUHJhY3RpY2FsaXR5JzogJ0EgZGVzaXJlIGZvciBnZXR0aW5nIHRoZSBqb2IgZG9uZSwgc2tpbGwsIGFuZCBlZmZpY2llbmN5LicsXG4gICAgJ0xvdmUnOiAnU29jaWFsIGNvbnRhY3QsIHdoZXRoZXIgb25lLXRvLW9uZSBvciBvbmUtdG8tbWFueS4nLFxuICAgICdMaWJlcnR5JzogJ0EgbmVlZCB0byBlc2NhcGUsIGEgZGVzaXJlIGZvciBuZXcgZXhwZXJpZW5jZXMsIG5ldyB0aGluZ3MuJyxcbiAgICAnSWRlYWwnOiAnQSBkZXNpcmUgdG8gc2F0aXNmeSBvbmVcXCdzIGlkZWEgb2YgcGVyZmVjdGlvbiBpbiBhIGxpZmVzdHlsZSBvciBleHBlcmllbmNlLCBvZnRlbnRpbWVzIHNlZW4gYXMgcHVyc3VpbmcgYSBzZW5zZSBvZiBjb21tdW5pdHkuJyxcbiAgICAnSGFybW9ueSc6ICdBIG5lZWQgdG8gYXBwcmVjaWF0ZSBvciBwbGVhc2Ugb3RoZXIgcGVvcGxlLCB0aGVpciB2aWV3cG9pbnRzLCBhbmQgZmVlbGluZ3MuJyxcbiAgICAnRXhjaXRlbWVudCc6ICdBIG5lZWQgdG8gcHVyc3VlIGV4cGVyaWVuY2VzIG9yIGxlYWQgYSBsaWZlc3R5bGUgdGhhdCBhcm91c2VzIGVudGh1c2lhc20gYW5kIGVhZ2VybmVzcy4nLFxuICAgICdDdXJpb3NpdHknOiAnQSBuZWVkIHRvIHB1cnN1ZSBleHBlcmllbmNlcyB0aGF0IGZvc3RlciBsZWFybmluZywgZXhwbG9yYXRpb24sIGFuZCBncm93dGguJyxcbiAgICAnQ2xvc2VuZXNzJzogJ0EgbmVlZCB0byBudXJ0dXJlIG9yIGJlIG51cnR1cmVkOyBhIGZlZWxpbmcgb2YgYmVsb25naW5nLicsXG4gICAgJ0NoYWxsZW5nZSc6ICdBIGRlc2lyZSB0byBhY2hpZXZlLCBzdWNjZWVkLCBjb21wZXRlLCBvciBwdXJzdWUgZXhwZXJpZW5jZXMgdGhhdCB0ZXN0IG9uZVxcJ3MgYWJpbGl0aWVzLidcbiAgfSxcblxuICB2YWx1ZXM6IHtcbiAgICAnQ29uc2VydmF0aW9uJzogJ1Jlc3BlY3QsIGNvbW1pdG1lbnQsIGFuZCBhY2NlcHRhbmNlIG9mIHRoZSBjdXN0b21zIGFuZCBpZGVhcyB0aGF0IG9uZVxcJ3MgY3VsdHVyZSBhbmQvb3IgcmVsaWdpb24gcHJvdmlkZXMuJyxcbiAgICAnT3Blbm5lc3MgdG8gY2hhbmdlJzogJ0V4Y2l0ZW1lbnQsIG5vdmVsdHksIGFuZCBjaGFsbGVuZ2UgaW4gbGlmZS4nLFxuICAgICdIZWRvbmlzbSc6ICdQbGVhc3VyZSBvciBzZW5zdW91cyBncmF0aWZpY2F0aW9uIGZvciBvbmVzZWxmLicsXG4gICAgJ1NlbGYtZW5oYW5jZW1lbnQnOiAnUGVyc29uYWwgc3VjY2VzcyB0aHJvdWdoIGRlbW9uc3RyYXRpbmcgY29tcGV0ZW5jZSBhY2NvcmRpbmcgdG8gc29jaWFsIHN0YW5kYXJkcy4nLFxuICAgICdTZWxmLXRyYW5zY2VuZGVuY2UnOiAnUHJlc2VydmluZyBhbmQgZW5oYW5jaW5nIHRoZSB3ZWxmYXJlIG9mIHRob3NlIHdpdGggd2hvbSBvbmUgaXMgaW4gZnJlcXVlbnQgcGVyc29uYWwgY29udGFjdC4nXG4gIH1cbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IElCTSBDb3JwLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpLFxuICBjb250YWlucyA9IF8uY29udGFpbnMsXG4gIGV4dGVuZCA9IF8uZXh0ZW5kLFxuICBrZXlzID0gXy5rZXlzO1xuXG5jb25zdCBkaWN0aW9uYXJpZXMgPSByZXF1aXJlKCcuL2RpY3Rpb25hcmllcycpO1xuXG5cbmNsYXNzIEkxOG5EYXRhIHtcblxuICBjb25zdHJ1Y3Rvcihsb2NhbGUpIHtcbiAgICB0aGlzLl9sb2NhbGUgPSBjb250YWlucyhrZXlzKGRpY3Rpb25hcmllcyksIGxvY2FsZSkgPyBsb2NhbGUgOiAnZW4nO1xuICAgIHRoaXMuX2RpY3Rpb25hcnkgPSBkaWN0aW9uYXJpZXNbdGhpcy5fbG9jYWxlXTtcbiAgfVxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIGtleXModGhpcy5fZGljdGlvbmFyeSkucmVkdWNlKChyZXMsIGspID0+IGV4dGVuZChyZXMsIHRoaXMuX2RpY3Rpb25hcnlba10pLCB7fSk7XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEkxOG5EYXRhO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBJQk0gQ29ycC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgSTE4bkRhdGEgPSByZXF1aXJlKCcuL2kxOG4nKTtcbmNvbnN0IGZvcm1hdCA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2Zvcm1hdC10ZXh0Jyk7XG5jb25zdCBfICA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKSxcbiAgZXh0ZW5kID0gXy5leHRlbmQsXG4gIHBpY2sgICA9IF8ucGljaztcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSBleHRlbmQodGhpcy5kZWZhdWx0T3B0aW9ucygpLCBwaWNrKG9wdGlvbnMsICdsb2NhbGUnLCAnZm9ybWF0JykpO1xuICAgIHRoaXMuX2kxOG4gPSBuZXcgSTE4bkRhdGEodGhpcy5fb3B0aW9ucy5sb2NhbGUpO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9ucyA9IHRoaXMuX2kxOG4uZGF0YSgpO1xuICB9XG5cbiAgZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsZTogJ2VuJyxcbiAgICAgIGZvcm1hdDogJ3BsYWluJ1xuICAgIH07XG4gIH1cblxuICBkZXNjcmlwdGlvbih0cmFpdElkKSB7XG4gICAgcmV0dXJuIGZvcm1hdCh0aGlzLl9kZXNjcmlwdGlvbnNbdHJhaXRJZF0sIHRoaXMuX29wdGlvbnMpO1xuICB9XG5cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgSUJNIENvcnAuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuY29uc3QgbWFya2VkID0gcmVxdWlyZSgnbWFya2VkJyk7XG5jb25zdCB1bm1hcmtlZCA9IHJlcXVpcmUoJ3JlbW92ZS1tYXJrZG93bicpO1xuXG5mdW5jdGlvbiBmb3JtYXRUZXh0KHRleHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZm9ybWF0dGVycyA9IHtcbiAgICBwbGFpbiAgICA6ICh0ZXh0KSA9PiB1bm1hcmtlZCh0ZXh0KS5yZXBsYWNlKCcgSG93IGRpZCB3ZSBnZXQgdGhpcz8nLCAnJyksXG4gICAgaHRtbCAgICAgOiAodGV4dCkgPT4gbWFya2VkKHRleHQpLFxuICAgIG1hcmtkb3duIDogKHRleHQpID0+IHRleHRcbiAgfTtcblxuICBjb25zdCBmb3JtYXQgPSBmb3JtYXR0ZXJzW29wdGlvbnMuZm9ybWF0XTtcbiAgcmV0dXJuIGZvcm1hdCh0ZXh0KTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdFRleHQ7XG4iLCIvKipcbiAqIG1hcmtlZCAtIGEgbWFya2Rvd24gcGFyc2VyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNCwgQ2hyaXN0b3BoZXIgSmVmZnJleS4gKE1JVCBMaWNlbnNlZClcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGpqL21hcmtlZFxuICovXG5cbjsoZnVuY3Rpb24oKSB7XG5cbi8qKlxuICogQmxvY2stTGV2ZWwgR3JhbW1hclxuICovXG5cbnZhciBibG9jayA9IHtcbiAgbmV3bGluZTogL15cXG4rLyxcbiAgY29kZTogL14oIHs0fVteXFxuXStcXG4qKSsvLFxuICBmZW5jZXM6IG5vb3AsXG4gIGhyOiAvXiggKlstKl9dKXszLH0gKig/Olxcbit8JCkvLFxuICBoZWFkaW5nOiAvXiAqKCN7MSw2fSkgKihbXlxcbl0rPykgKiMqICooPzpcXG4rfCQpLyxcbiAgbnB0YWJsZTogbm9vcCxcbiAgbGhlYWRpbmc6IC9eKFteXFxuXSspXFxuICooPXwtKXsyLH0gKig/Olxcbit8JCkvLFxuICBibG9ja3F1b3RlOiAvXiggKj5bXlxcbl0rKFxcbig/IWRlZilbXlxcbl0rKSpcXG4qKSsvLFxuICBsaXN0OiAvXiggKikoYnVsbCkgW1xcc1xcU10rPyg/OmhyfGRlZnxcXG57Mix9KD8hICkoPyFcXDFidWxsIClcXG4qfFxccyokKS8sXG4gIGh0bWw6IC9eICooPzpjb21tZW50ICooPzpcXG58XFxzKiQpfGNsb3NlZCAqKD86XFxuezIsfXxcXHMqJCl8Y2xvc2luZyAqKD86XFxuezIsfXxcXHMqJCkpLyxcbiAgZGVmOiAvXiAqXFxbKFteXFxdXSspXFxdOiAqPD8oW15cXHM+XSspPj8oPzogK1tcIihdKFteXFxuXSspW1wiKV0pPyAqKD86XFxuK3wkKS8sXG4gIHRhYmxlOiBub29wLFxuICBwYXJhZ3JhcGg6IC9eKCg/OlteXFxuXStcXG4/KD8haHJ8aGVhZGluZ3xsaGVhZGluZ3xibG9ja3F1b3RlfHRhZ3xkZWYpKSspXFxuKi8sXG4gIHRleHQ6IC9eW15cXG5dKy9cbn07XG5cbmJsb2NrLmJ1bGxldCA9IC8oPzpbKistXXxcXGQrXFwuKS87XG5ibG9jay5pdGVtID0gL14oICopKGJ1bGwpIFteXFxuXSooPzpcXG4oPyFcXDFidWxsIClbXlxcbl0qKSovO1xuYmxvY2suaXRlbSA9IHJlcGxhY2UoYmxvY2suaXRlbSwgJ2dtJylcbiAgKC9idWxsL2csIGJsb2NrLmJ1bGxldClcbiAgKCk7XG5cbmJsb2NrLmxpc3QgPSByZXBsYWNlKGJsb2NrLmxpc3QpXG4gICgvYnVsbC9nLCBibG9jay5idWxsZXQpXG4gICgnaHInLCAnXFxcXG4rKD89XFxcXDE/KD86Wy0qX10gKil7Myx9KD86XFxcXG4rfCQpKScpXG4gICgnZGVmJywgJ1xcXFxuKyg/PScgKyBibG9jay5kZWYuc291cmNlICsgJyknKVxuICAoKTtcblxuYmxvY2suYmxvY2txdW90ZSA9IHJlcGxhY2UoYmxvY2suYmxvY2txdW90ZSlcbiAgKCdkZWYnLCBibG9jay5kZWYpXG4gICgpO1xuXG5ibG9jay5fdGFnID0gJyg/ISg/OidcbiAgKyAnYXxlbXxzdHJvbmd8c21hbGx8c3xjaXRlfHF8ZGZufGFiYnJ8ZGF0YXx0aW1lfGNvZGUnXG4gICsgJ3x2YXJ8c2FtcHxrYmR8c3VifHN1cHxpfGJ8dXxtYXJrfHJ1Ynl8cnR8cnB8YmRpfGJkbydcbiAgKyAnfHNwYW58YnJ8d2JyfGluc3xkZWx8aW1nKVxcXFxiKVxcXFx3Kyg/ITovfFteXFxcXHdcXFxcc0BdKkApXFxcXGInO1xuXG5ibG9jay5odG1sID0gcmVwbGFjZShibG9jay5odG1sKVxuICAoJ2NvbW1lbnQnLCAvPCEtLVtcXHNcXFNdKj8tLT4vKVxuICAoJ2Nsb3NlZCcsIC88KHRhZylbXFxzXFxTXSs/PFxcL1xcMT4vKVxuICAoJ2Nsb3NpbmcnLCAvPHRhZyg/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXidcIj5dKSo/Pi8pXG4gICgvdGFnL2csIGJsb2NrLl90YWcpXG4gICgpO1xuXG5ibG9jay5wYXJhZ3JhcGggPSByZXBsYWNlKGJsb2NrLnBhcmFncmFwaClcbiAgKCdocicsIGJsb2NrLmhyKVxuICAoJ2hlYWRpbmcnLCBibG9jay5oZWFkaW5nKVxuICAoJ2xoZWFkaW5nJywgYmxvY2subGhlYWRpbmcpXG4gICgnYmxvY2txdW90ZScsIGJsb2NrLmJsb2NrcXVvdGUpXG4gICgndGFnJywgJzwnICsgYmxvY2suX3RhZylcbiAgKCdkZWYnLCBibG9jay5kZWYpXG4gICgpO1xuXG4vKipcbiAqIE5vcm1hbCBCbG9jayBHcmFtbWFyXG4gKi9cblxuYmxvY2subm9ybWFsID0gbWVyZ2Uoe30sIGJsb2NrKTtcblxuLyoqXG4gKiBHRk0gQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLmdmbSA9IG1lcmdlKHt9LCBibG9jay5ub3JtYWwsIHtcbiAgZmVuY2VzOiAvXiAqKGB7Myx9fH57Myx9KVsgXFwuXSooXFxTKyk/ICpcXG4oW1xcc1xcU10qPylcXHMqXFwxICooPzpcXG4rfCQpLyxcbiAgcGFyYWdyYXBoOiAvXi8sXG4gIGhlYWRpbmc6IC9eICooI3sxLDZ9KSArKFteXFxuXSs/KSAqIyogKig/Olxcbit8JCkvXG59KTtcblxuYmxvY2suZ2ZtLnBhcmFncmFwaCA9IHJlcGxhY2UoYmxvY2sucGFyYWdyYXBoKVxuICAoJyg/IScsICcoPyEnXG4gICAgKyBibG9jay5nZm0uZmVuY2VzLnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMicpICsgJ3wnXG4gICAgKyBibG9jay5saXN0LnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMycpICsgJ3wnKVxuICAoKTtcblxuLyoqXG4gKiBHRk0gKyBUYWJsZXMgQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLnRhYmxlcyA9IG1lcmdlKHt9LCBibG9jay5nZm0sIHtcbiAgbnB0YWJsZTogL14gKihcXFMuKlxcfC4qKVxcbiAqKFstOl0rICpcXHxbLXwgOl0qKVxcbigoPzouKlxcfC4qKD86XFxufCQpKSopXFxuKi8sXG4gIHRhYmxlOiAvXiAqXFx8KC4rKVxcbiAqXFx8KCAqWy06XStbLXwgOl0qKVxcbigoPzogKlxcfC4qKD86XFxufCQpKSopXFxuKi9cbn0pO1xuXG4vKipcbiAqIEJsb2NrIExleGVyXG4gKi9cblxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xuICB0aGlzLnRva2VucyA9IFtdO1xuICB0aGlzLnRva2Vucy5saW5rcyA9IHt9O1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5ydWxlcyA9IGJsb2NrLm5vcm1hbDtcblxuICBpZiAodGhpcy5vcHRpb25zLmdmbSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGFibGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2sudGFibGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2suZ2ZtO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBCbG9jayBSdWxlc1xuICovXG5cbkxleGVyLnJ1bGVzID0gYmxvY2s7XG5cbi8qKlxuICogU3RhdGljIExleCBNZXRob2RcbiAqL1xuXG5MZXhlci5sZXggPSBmdW5jdGlvbihzcmMsIG9wdGlvbnMpIHtcbiAgdmFyIGxleGVyID0gbmV3IExleGVyKG9wdGlvbnMpO1xuICByZXR1cm4gbGV4ZXIubGV4KHNyYyk7XG59O1xuXG4vKipcbiAqIFByZXByb2Nlc3NpbmdcbiAqL1xuXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHNyYyA9IHNyY1xuICAgIC5yZXBsYWNlKC9cXHJcXG58XFxyL2csICdcXG4nKVxuICAgIC5yZXBsYWNlKC9cXHQvZywgJyAgICAnKVxuICAgIC5yZXBsYWNlKC9cXHUwMGEwL2csICcgJylcbiAgICAucmVwbGFjZSgvXFx1MjQyNC9nLCAnXFxuJyk7XG5cbiAgcmV0dXJuIHRoaXMudG9rZW4oc3JjLCB0cnVlKTtcbn07XG5cbi8qKlxuICogTGV4aW5nXG4gKi9cblxuTGV4ZXIucHJvdG90eXBlLnRva2VuID0gZnVuY3Rpb24oc3JjLCB0b3AsIGJxKSB7XG4gIHZhciBzcmMgPSBzcmMucmVwbGFjZSgvXiArJC9nbSwgJycpXG4gICAgLCBuZXh0XG4gICAgLCBsb29zZVxuICAgICwgY2FwXG4gICAgLCBidWxsXG4gICAgLCBiXG4gICAgLCBpdGVtXG4gICAgLCBzcGFjZVxuICAgICwgaVxuICAgICwgbDtcblxuICB3aGlsZSAoc3JjKSB7XG4gICAgLy8gbmV3bGluZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLm5ld2xpbmUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFswXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdzcGFjZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29kZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmNvZGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gezR9L2dtLCAnJyk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICB0ZXh0OiAhdGhpcy5vcHRpb25zLnBlZGFudGljXG4gICAgICAgICAgPyBjYXAucmVwbGFjZSgvXFxuKyQvLCAnJylcbiAgICAgICAgICA6IGNhcFxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBmZW5jZXMgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5mZW5jZXMuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgbGFuZzogY2FwWzJdLFxuICAgICAgICB0ZXh0OiBjYXBbM10gfHwgJydcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gaGVhZGluZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmhlYWRpbmcuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICAgICAgZGVwdGg6IGNhcFsxXS5sZW5ndGgsXG4gICAgICAgIHRleHQ6IGNhcFsyXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWJsZSBubyBsZWFkaW5nIHBpcGUgKGdmbSlcbiAgICBpZiAodG9wICYmIChjYXAgPSB0aGlzLnJ1bGVzLm5wdGFibGUuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgaGVhZGVyOiBjYXBbMV0ucmVwbGFjZSgvXiAqfCAqXFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBhbGlnbjogY2FwWzJdLnJlcGxhY2UoL14gKnxcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGNlbGxzOiBjYXBbM10ucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJylcbiAgICAgIH07XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmFsaWduLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdyaWdodCc7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKyAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnbGVmdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbS5jZWxsc1tpXSA9IGl0ZW0uY2VsbHNbaV0uc3BsaXQoLyAqXFx8ICovKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaChpdGVtKTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gbGhlYWRpbmdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saGVhZGluZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICBkZXB0aDogY2FwWzJdID09PSAnPScgPyAxIDogMixcbiAgICAgICAgdGV4dDogY2FwWzFdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGhyXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHIuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdocidcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYmxvY2txdW90ZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrcXVvdGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2Jsb2NrcXVvdGVfc3RhcnQnXG4gICAgICB9KTtcblxuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gKj4gPy9nbSwgJycpO1xuXG4gICAgICAvLyBQYXNzIGB0b3BgIHRvIGtlZXAgdGhlIGN1cnJlbnRcbiAgICAgIC8vIFwidG9wbGV2ZWxcIiBzdGF0ZS4gVGhpcyBpcyBleGFjdGx5XG4gICAgICAvLyBob3cgbWFya2Rvd24ucGwgd29ya3MuXG4gICAgICB0aGlzLnRva2VuKGNhcCwgdG9wLCB0cnVlKTtcblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdibG9ja3F1b3RlX2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBsaXN0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGlzdC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBidWxsID0gY2FwWzJdO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpc3Rfc3RhcnQnLFxuICAgICAgICBvcmRlcmVkOiBidWxsLmxlbmd0aCA+IDFcbiAgICAgIH0pO1xuXG4gICAgICAvLyBHZXQgZWFjaCB0b3AtbGV2ZWwgaXRlbS5cbiAgICAgIGNhcCA9IGNhcFswXS5tYXRjaCh0aGlzLnJ1bGVzLml0ZW0pO1xuXG4gICAgICBuZXh0ID0gZmFsc2U7XG4gICAgICBsID0gY2FwLmxlbmd0aDtcbiAgICAgIGkgPSAwO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpdGVtID0gY2FwW2ldO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbGlzdCBpdGVtJ3MgYnVsbGV0XG4gICAgICAgIC8vIHNvIGl0IGlzIHNlZW4gYXMgdGhlIG5leHQgdG9rZW4uXG4gICAgICAgIHNwYWNlID0gaXRlbS5sZW5ndGg7XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL14gKihbKistXXxcXGQrXFwuKSArLywgJycpO1xuXG4gICAgICAgIC8vIE91dGRlbnQgd2hhdGV2ZXIgdGhlXG4gICAgICAgIC8vIGxpc3QgaXRlbSBjb250YWlucy4gSGFja3kuXG4gICAgICAgIGlmICh+aXRlbS5pbmRleE9mKCdcXG4gJykpIHtcbiAgICAgICAgICBzcGFjZSAtPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgICBpdGVtID0gIXRoaXMub3B0aW9ucy5wZWRhbnRpY1xuICAgICAgICAgICAgPyBpdGVtLnJlcGxhY2UobmV3IFJlZ0V4cCgnXiB7MSwnICsgc3BhY2UgKyAnfScsICdnbScpLCAnJylcbiAgICAgICAgICAgIDogaXRlbS5yZXBsYWNlKC9eIHsxLDR9L2dtLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgbmV4dCBsaXN0IGl0ZW0gYmVsb25ncyBoZXJlLlxuICAgICAgICAvLyBCYWNrcGVkYWwgaWYgaXQgZG9lcyBub3QgYmVsb25nIGluIHRoaXMgbGlzdC5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zbWFydExpc3RzICYmIGkgIT09IGwgLSAxKSB7XG4gICAgICAgICAgYiA9IGJsb2NrLmJ1bGxldC5leGVjKGNhcFtpICsgMV0pWzBdO1xuICAgICAgICAgIGlmIChidWxsICE9PSBiICYmICEoYnVsbC5sZW5ndGggPiAxICYmIGIubGVuZ3RoID4gMSkpIHtcbiAgICAgICAgICAgIHNyYyA9IGNhcC5zbGljZShpICsgMSkuam9pbignXFxuJykgKyBzcmM7XG4gICAgICAgICAgICBpID0gbCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgaXRlbSBpcyBsb29zZSBvciBub3QuXG4gICAgICAgIC8vIFVzZTogLyhefFxcbikoPyEgKVteXFxuXStcXG5cXG4oPyFcXHMqJCkvXG4gICAgICAgIC8vIGZvciBkaXNjb3VudCBiZWhhdmlvci5cbiAgICAgICAgbG9vc2UgPSBuZXh0IHx8IC9cXG5cXG4oPyFcXHMqJCkvLnRlc3QoaXRlbSk7XG4gICAgICAgIGlmIChpICE9PSBsIC0gMSkge1xuICAgICAgICAgIG5leHQgPSBpdGVtLmNoYXJBdChpdGVtLmxlbmd0aCAtIDEpID09PSAnXFxuJztcbiAgICAgICAgICBpZiAoIWxvb3NlKSBsb29zZSA9IG5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiBsb29zZVxuICAgICAgICAgICAgPyAnbG9vc2VfaXRlbV9zdGFydCdcbiAgICAgICAgICAgIDogJ2xpc3RfaXRlbV9zdGFydCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVjdXJzZS5cbiAgICAgICAgdGhpcy50b2tlbihpdGVtLCBmYWxzZSwgYnEpO1xuXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdsaXN0X2l0ZW1fZW5kJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaXN0X2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBodG1sXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHRtbC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgICAgPyAncGFyYWdyYXBoJ1xuICAgICAgICAgIDogJ2h0bWwnLFxuICAgICAgICBwcmU6ICF0aGlzLm9wdGlvbnMuc2FuaXRpemVyXG4gICAgICAgICAgJiYgKGNhcFsxXSA9PT0gJ3ByZScgfHwgY2FwWzFdID09PSAnc2NyaXB0JyB8fCBjYXBbMV0gPT09ICdzdHlsZScpLFxuICAgICAgICB0ZXh0OiBjYXBbMF1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZGVmXG4gICAgaWYgKCghYnEgJiYgdG9wKSAmJiAoY2FwID0gdGhpcy5ydWxlcy5kZWYuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLmxpbmtzW2NhcFsxXS50b0xvd2VyQ2FzZSgpXSA9IHtcbiAgICAgICAgaHJlZjogY2FwWzJdLFxuICAgICAgICB0aXRsZTogY2FwWzNdXG4gICAgICB9O1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGFibGUgKGdmbSlcbiAgICBpZiAodG9wICYmIChjYXAgPSB0aGlzLnJ1bGVzLnRhYmxlLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG5cbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgIGhlYWRlcjogY2FwWzFdLnJlcGxhY2UoL14gKnwgKlxcfCAqJC9nLCAnJykuc3BsaXQoLyAqXFx8ICovKSxcbiAgICAgICAgYWxpZ246IGNhcFsyXS5yZXBsYWNlKC9eICp8XFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBjZWxsczogY2FwWzNdLnJlcGxhY2UoLyg/OiAqXFx8ICopP1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpXG4gICAgICB9O1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5hbGlnbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoL14gKi0rOiAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAncmlnaHQnO1xuICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdjZW50ZXInO1xuICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSsgKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2xlZnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW0uY2VsbHNbaV0gPSBpdGVtLmNlbGxzW2ldXG4gICAgICAgICAgLnJlcGxhY2UoL14gKlxcfCAqfCAqXFx8ICokL2csICcnKVxuICAgICAgICAgIC5zcGxpdCgvICpcXHwgKi8pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKGl0ZW0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0b3AtbGV2ZWwgcGFyYWdyYXBoXG4gICAgaWYgKHRvcCAmJiAoY2FwID0gdGhpcy5ydWxlcy5wYXJhZ3JhcGguZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgdGV4dDogY2FwWzFdLmNoYXJBdChjYXBbMV0ubGVuZ3RoIC0gMSkgPT09ICdcXG4nXG4gICAgICAgICAgPyBjYXBbMV0uc2xpY2UoMCwgLTEpXG4gICAgICAgICAgOiBjYXBbMV1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGV4dFxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnRleHQuZXhlYyhzcmMpKSB7XG4gICAgICAvLyBUb3AtbGV2ZWwgc2hvdWxkIG5ldmVyIHJlYWNoIGhlcmUuXG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgdGV4dDogY2FwWzBdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChzcmMpIHtcbiAgICAgIHRocm93IG5ld1xuICAgICAgICBFcnJvcignSW5maW5pdGUgbG9vcCBvbiBieXRlOiAnICsgc3JjLmNoYXJDb2RlQXQoMCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLnRva2Vucztcbn07XG5cbi8qKlxuICogSW5saW5lLUxldmVsIEdyYW1tYXJcbiAqL1xuXG52YXIgaW5saW5lID0ge1xuICBlc2NhcGU6IC9eXFxcXChbXFxcXGAqe31cXFtcXF0oKSMrXFwtLiFfPl0pLyxcbiAgYXV0b2xpbms6IC9ePChbXiA+XSsoQHw6XFwvKVteID5dKyk+LyxcbiAgdXJsOiBub29wLFxuICB0YWc6IC9ePCEtLVtcXHNcXFNdKj8tLT58XjxcXC8/XFx3Kyg/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXidcIj5dKSo/Pi8sXG4gIGxpbms6IC9eIT9cXFsoaW5zaWRlKVxcXVxcKGhyZWZcXCkvLFxuICByZWZsaW5rOiAvXiE/XFxbKGluc2lkZSlcXF1cXHMqXFxbKFteXFxdXSopXFxdLyxcbiAgbm9saW5rOiAvXiE/XFxbKCg/OlxcW1teXFxdXSpcXF18W15cXFtcXF1dKSopXFxdLyxcbiAgc3Ryb25nOiAvXl9fKFtcXHNcXFNdKz8pX18oPyFfKXxeXFwqXFwqKFtcXHNcXFNdKz8pXFwqXFwqKD8hXFwqKS8sXG4gIGVtOiAvXlxcYl8oKD86W15fXXxfXykrPylfXFxifF5cXCooKD86XFwqXFwqfFtcXHNcXFNdKSs/KVxcKig/IVxcKikvLFxuICBjb2RlOiAvXihgKylcXHMqKFtcXHNcXFNdKj9bXmBdKVxccypcXDEoPyFgKS8sXG4gIGJyOiAvXiB7Mix9XFxuKD8hXFxzKiQpLyxcbiAgZGVsOiBub29wLFxuICB0ZXh0OiAvXltcXHNcXFNdKz8oPz1bXFxcXDwhXFxbXypgXXwgezIsfVxcbnwkKS9cbn07XG5cbmlubGluZS5faW5zaWRlID0gLyg/OlxcW1teXFxdXSpcXF18W15cXFtcXF1dfFxcXSg/PVteXFxbXSpcXF0pKSovO1xuaW5saW5lLl9ocmVmID0gL1xccyo8PyhbXFxzXFxTXSo/KT4/KD86XFxzK1snXCJdKFtcXHNcXFNdKj8pWydcIl0pP1xccyovO1xuXG5pbmxpbmUubGluayA9IHJlcGxhY2UoaW5saW5lLmxpbmspXG4gICgnaW5zaWRlJywgaW5saW5lLl9pbnNpZGUpXG4gICgnaHJlZicsIGlubGluZS5faHJlZilcbiAgKCk7XG5cbmlubGluZS5yZWZsaW5rID0gcmVwbGFjZShpbmxpbmUucmVmbGluaylcbiAgKCdpbnNpZGUnLCBpbmxpbmUuX2luc2lkZSlcbiAgKCk7XG5cbi8qKlxuICogTm9ybWFsIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLm5vcm1hbCA9IG1lcmdlKHt9LCBpbmxpbmUpO1xuXG4vKipcbiAqIFBlZGFudGljIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLnBlZGFudGljID0gbWVyZ2Uoe30sIGlubGluZS5ub3JtYWwsIHtcbiAgc3Ryb25nOiAvXl9fKD89XFxTKShbXFxzXFxTXSo/XFxTKV9fKD8hXyl8XlxcKlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCpcXCooPyFcXCopLyxcbiAgZW06IC9eXyg/PVxcUykoW1xcc1xcU10qP1xcUylfKD8hXyl8XlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCooPyFcXCopL1xufSk7XG5cbi8qKlxuICogR0ZNIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmdmbSA9IG1lcmdlKHt9LCBpbmxpbmUubm9ybWFsLCB7XG4gIGVzY2FwZTogcmVwbGFjZShpbmxpbmUuZXNjYXBlKSgnXSknLCAnfnxdKScpKCksXG4gIHVybDogL14oaHR0cHM/OlxcL1xcL1teXFxzPF0rW148Liw6O1wiJylcXF1cXHNdKS8sXG4gIGRlbDogL15+fig/PVxcUykoW1xcc1xcU10qP1xcUyl+fi8sXG4gIHRleHQ6IHJlcGxhY2UoaW5saW5lLnRleHQpXG4gICAgKCddfCcsICd+XXwnKVxuICAgICgnfCcsICd8aHR0cHM/Oi8vfCcpXG4gICAgKClcbn0pO1xuXG4vKipcbiAqIEdGTSArIExpbmUgQnJlYWtzIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmJyZWFrcyA9IG1lcmdlKHt9LCBpbmxpbmUuZ2ZtLCB7XG4gIGJyOiByZXBsYWNlKGlubGluZS5icikoJ3syLH0nLCAnKicpKCksXG4gIHRleHQ6IHJlcGxhY2UoaW5saW5lLmdmbS50ZXh0KSgnezIsfScsICcqJykoKVxufSk7XG5cbi8qKlxuICogSW5saW5lIExleGVyICYgQ29tcGlsZXJcbiAqL1xuXG5mdW5jdGlvbiBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5saW5rcyA9IGxpbmtzO1xuICB0aGlzLnJ1bGVzID0gaW5saW5lLm5vcm1hbDtcbiAgdGhpcy5yZW5kZXJlciA9IHRoaXMub3B0aW9ucy5yZW5kZXJlciB8fCBuZXcgUmVuZGVyZXI7XG4gIHRoaXMucmVuZGVyZXIub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICBpZiAoIXRoaXMubGlua3MpIHtcbiAgICB0aHJvdyBuZXdcbiAgICAgIEVycm9yKCdUb2tlbnMgYXJyYXkgcmVxdWlyZXMgYSBgbGlua3NgIHByb3BlcnR5LicpO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmJyZWFrcykge1xuICAgICAgdGhpcy5ydWxlcyA9IGlubGluZS5icmVha3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVsZXMgPSBpbmxpbmUuZ2ZtO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICB0aGlzLnJ1bGVzID0gaW5saW5lLnBlZGFudGljO1xuICB9XG59XG5cbi8qKlxuICogRXhwb3NlIElubGluZSBSdWxlc1xuICovXG5cbklubGluZUxleGVyLnJ1bGVzID0gaW5saW5lO1xuXG4vKipcbiAqIFN0YXRpYyBMZXhpbmcvQ29tcGlsaW5nIE1ldGhvZFxuICovXG5cbklubGluZUxleGVyLm91dHB1dCA9IGZ1bmN0aW9uKHNyYywgbGlua3MsIG9wdGlvbnMpIHtcbiAgdmFyIGlubGluZSA9IG5ldyBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucyk7XG4gIHJldHVybiBpbmxpbmUub3V0cHV0KHNyYyk7XG59O1xuXG4vKipcbiAqIExleGluZy9Db21waWxpbmdcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHZhciBvdXQgPSAnJ1xuICAgICwgbGlua1xuICAgICwgdGV4dFxuICAgICwgaHJlZlxuICAgICwgY2FwO1xuXG4gIHdoaWxlIChzcmMpIHtcbiAgICAvLyBlc2NhcGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5lc2NhcGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IGNhcFsxXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGF1dG9saW5rXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuYXV0b2xpbmsuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFsyXSA9PT0gJ0AnKSB7XG4gICAgICAgIHRleHQgPSBjYXBbMV0uY2hhckF0KDYpID09PSAnOidcbiAgICAgICAgICA/IHRoaXMubWFuZ2xlKGNhcFsxXS5zdWJzdHJpbmcoNykpXG4gICAgICAgICAgOiB0aGlzLm1hbmdsZShjYXBbMV0pO1xuICAgICAgICBocmVmID0gdGhpcy5tYW5nbGUoJ21haWx0bzonKSArIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICAgIGhyZWYgPSB0ZXh0O1xuICAgICAgfVxuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIubGluayhocmVmLCBudWxsLCB0ZXh0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHVybCAoZ2ZtKVxuICAgIGlmICghdGhpcy5pbkxpbmsgJiYgKGNhcCA9IHRoaXMucnVsZXMudXJsLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICBocmVmID0gdGV4dDtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgbnVsbCwgdGV4dCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50YWcuZXhlYyhzcmMpKSB7XG4gICAgICBpZiAoIXRoaXMuaW5MaW5rICYmIC9ePGEgL2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbkxpbmsgJiYgL148XFwvYT4vaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnNhbml0aXplclxuICAgICAgICAgID8gdGhpcy5vcHRpb25zLnNhbml0aXplcihjYXBbMF0pXG4gICAgICAgICAgOiBlc2NhcGUoY2FwWzBdKVxuICAgICAgICA6IGNhcFswXVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gbGlua1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmxpbmsuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy5pbkxpbmsgPSB0cnVlO1xuICAgICAgb3V0ICs9IHRoaXMub3V0cHV0TGluayhjYXAsIHtcbiAgICAgICAgaHJlZjogY2FwWzJdLFxuICAgICAgICB0aXRsZTogY2FwWzNdXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5MaW5rID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyByZWZsaW5rLCBub2xpbmtcbiAgICBpZiAoKGNhcCA9IHRoaXMucnVsZXMucmVmbGluay5leGVjKHNyYykpXG4gICAgICAgIHx8IChjYXAgPSB0aGlzLnJ1bGVzLm5vbGluay5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgbGluayA9IChjYXBbMl0gfHwgY2FwWzFdKS5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gICAgICBsaW5rID0gdGhpcy5saW5rc1tsaW5rLnRvTG93ZXJDYXNlKCldO1xuICAgICAgaWYgKCFsaW5rIHx8ICFsaW5rLmhyZWYpIHtcbiAgICAgICAgb3V0ICs9IGNhcFswXS5jaGFyQXQoMCk7XG4gICAgICAgIHNyYyA9IGNhcFswXS5zdWJzdHJpbmcoMSkgKyBzcmM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5pbkxpbmsgPSB0cnVlO1xuICAgICAgb3V0ICs9IHRoaXMub3V0cHV0TGluayhjYXAsIGxpbmspO1xuICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHN0cm9uZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnN0cm9uZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5zdHJvbmcodGhpcy5vdXRwdXQoY2FwWzJdIHx8IGNhcFsxXSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZW1cbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5lbS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5lbSh0aGlzLm91dHB1dChjYXBbMl0gfHwgY2FwWzFdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBjb2RlXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuY29kZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5jb2Rlc3Bhbihlc2NhcGUoY2FwWzJdLCB0cnVlKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBiclxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmJyLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmJyKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBkZWwgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5kZWwuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuZGVsKHRoaXMub3V0cHV0KGNhcFsxXSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGV4dFxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnRleHQuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIudGV4dChlc2NhcGUodGhpcy5zbWFydHlwYW50cyhjYXBbMF0pKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3JjKSB7XG4gICAgICB0aHJvdyBuZXdcbiAgICAgICAgRXJyb3IoJ0luZmluaXRlIGxvb3Agb24gYnl0ZTogJyArIHNyYy5jaGFyQ29kZUF0KDApKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBDb21waWxlIExpbmtcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0TGluayA9IGZ1bmN0aW9uKGNhcCwgbGluaykge1xuICB2YXIgaHJlZiA9IGVzY2FwZShsaW5rLmhyZWYpXG4gICAgLCB0aXRsZSA9IGxpbmsudGl0bGUgPyBlc2NhcGUobGluay50aXRsZSkgOiBudWxsO1xuXG4gIHJldHVybiBjYXBbMF0uY2hhckF0KDApICE9PSAnISdcbiAgICA/IHRoaXMucmVuZGVyZXIubGluayhocmVmLCB0aXRsZSwgdGhpcy5vdXRwdXQoY2FwWzFdKSlcbiAgICA6IHRoaXMucmVuZGVyZXIuaW1hZ2UoaHJlZiwgdGl0bGUsIGVzY2FwZShjYXBbMV0pKTtcbn07XG5cbi8qKlxuICogU21hcnR5cGFudHMgVHJhbnNmb3JtYXRpb25zXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLnNtYXJ0eXBhbnRzID0gZnVuY3Rpb24odGV4dCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5zbWFydHlwYW50cykgcmV0dXJuIHRleHQ7XG4gIHJldHVybiB0ZXh0XG4gICAgLy8gZW0tZGFzaGVzXG4gICAgLnJlcGxhY2UoLy0tLS9nLCAnXFx1MjAxNCcpXG4gICAgLy8gZW4tZGFzaGVzXG4gICAgLnJlcGxhY2UoLy0tL2csICdcXHUyMDEzJylcbiAgICAvLyBvcGVuaW5nIHNpbmdsZXNcbiAgICAucmVwbGFjZSgvKF58Wy1cXHUyMDE0LyhcXFt7XCJcXHNdKScvZywgJyQxXFx1MjAxOCcpXG4gICAgLy8gY2xvc2luZyBzaW5nbGVzICYgYXBvc3Ryb3BoZXNcbiAgICAucmVwbGFjZSgvJy9nLCAnXFx1MjAxOScpXG4gICAgLy8gb3BlbmluZyBkb3VibGVzXG4gICAgLnJlcGxhY2UoLyhefFstXFx1MjAxNC8oXFxbe1xcdTIwMThcXHNdKVwiL2csICckMVxcdTIwMWMnKVxuICAgIC8vIGNsb3NpbmcgZG91Ymxlc1xuICAgIC5yZXBsYWNlKC9cIi9nLCAnXFx1MjAxZCcpXG4gICAgLy8gZWxsaXBzZXNcbiAgICAucmVwbGFjZSgvXFwuezN9L2csICdcXHUyMDI2Jyk7XG59O1xuXG4vKipcbiAqIE1hbmdsZSBMaW5rc1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5tYW5nbGUgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIGlmICghdGhpcy5vcHRpb25zLm1hbmdsZSkgcmV0dXJuIHRleHQ7XG4gIHZhciBvdXQgPSAnJ1xuICAgICwgbCA9IHRleHQubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgY2g7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICBjaCA9IHRleHQuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgY2ggPSAneCcgKyBjaC50b1N0cmluZygxNik7XG4gICAgfVxuICAgIG91dCArPSAnJiMnICsgY2ggKyAnOyc7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBSZW5kZXJlclxuICovXG5cbmZ1bmN0aW9uIFJlbmRlcmVyKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbn1cblxuUmVuZGVyZXIucHJvdG90eXBlLmNvZGUgPSBmdW5jdGlvbihjb2RlLCBsYW5nLCBlc2NhcGVkKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KSB7XG4gICAgdmFyIG91dCA9IHRoaXMub3B0aW9ucy5oaWdobGlnaHQoY29kZSwgbGFuZyk7XG4gICAgaWYgKG91dCAhPSBudWxsICYmIG91dCAhPT0gY29kZSkge1xuICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICBjb2RlID0gb3V0O1xuICAgIH1cbiAgfVxuXG4gIGlmICghbGFuZykge1xuICAgIHJldHVybiAnPHByZT48Y29kZT4nXG4gICAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICAgICsgJ1xcbjwvY29kZT48L3ByZT4nO1xuICB9XG5cbiAgcmV0dXJuICc8cHJlPjxjb2RlIGNsYXNzPVwiJ1xuICAgICsgdGhpcy5vcHRpb25zLmxhbmdQcmVmaXhcbiAgICArIGVzY2FwZShsYW5nLCB0cnVlKVxuICAgICsgJ1wiPidcbiAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICArICdcXG48L2NvZGU+PC9wcmU+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5ibG9ja3F1b3RlID0gZnVuY3Rpb24ocXVvdGUpIHtcbiAgcmV0dXJuICc8YmxvY2txdW90ZT5cXG4nICsgcXVvdGUgKyAnPC9ibG9ja3F1b3RlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWw7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaGVhZGluZyA9IGZ1bmN0aW9uKHRleHQsIGxldmVsLCByYXcpIHtcbiAgcmV0dXJuICc8aCdcbiAgICArIGxldmVsXG4gICAgKyAnIGlkPVwiJ1xuICAgICsgdGhpcy5vcHRpb25zLmhlYWRlclByZWZpeFxuICAgICsgcmF3LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHddKy9nLCAnLScpXG4gICAgKyAnXCI+J1xuICAgICsgdGV4dFxuICAgICsgJzwvaCdcbiAgICArIGxldmVsXG4gICAgKyAnPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8aHIvPlxcbicgOiAnPGhyPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKGJvZHksIG9yZGVyZWQpIHtcbiAgdmFyIHR5cGUgPSBvcmRlcmVkID8gJ29sJyA6ICd1bCc7XG4gIHJldHVybiAnPCcgKyB0eXBlICsgJz5cXG4nICsgYm9keSArICc8LycgKyB0eXBlICsgJz5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmxpc3RpdGVtID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxsaT4nICsgdGV4dCArICc8L2xpPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUucGFyYWdyYXBoID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxwPicgKyB0ZXh0ICsgJzwvcD5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRhYmxlID0gZnVuY3Rpb24oaGVhZGVyLCBib2R5KSB7XG4gIHJldHVybiAnPHRhYmxlPlxcbidcbiAgICArICc8dGhlYWQ+XFxuJ1xuICAgICsgaGVhZGVyXG4gICAgKyAnPC90aGVhZD5cXG4nXG4gICAgKyAnPHRib2R5PlxcbidcbiAgICArIGJvZHlcbiAgICArICc8L3Rib2R5PlxcbidcbiAgICArICc8L3RhYmxlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGFibGVyb3cgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gIHJldHVybiAnPHRyPlxcbicgKyBjb250ZW50ICsgJzwvdHI+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50YWJsZWNlbGwgPSBmdW5jdGlvbihjb250ZW50LCBmbGFncykge1xuICB2YXIgdHlwZSA9IGZsYWdzLmhlYWRlciA/ICd0aCcgOiAndGQnO1xuICB2YXIgdGFnID0gZmxhZ3MuYWxpZ25cbiAgICA/ICc8JyArIHR5cGUgKyAnIHN0eWxlPVwidGV4dC1hbGlnbjonICsgZmxhZ3MuYWxpZ24gKyAnXCI+J1xuICAgIDogJzwnICsgdHlwZSArICc+JztcbiAgcmV0dXJuIHRhZyArIGNvbnRlbnQgKyAnPC8nICsgdHlwZSArICc+XFxuJztcbn07XG5cbi8vIHNwYW4gbGV2ZWwgcmVuZGVyZXJcblJlbmRlcmVyLnByb3RvdHlwZS5zdHJvbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPHN0cm9uZz4nICsgdGV4dCArICc8L3N0cm9uZz4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmVtID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxlbT4nICsgdGV4dCArICc8L2VtPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuY29kZXNwYW4gPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGNvZGU+JyArIHRleHQgKyAnPC9jb2RlPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuYnIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8YnIvPicgOiAnPGJyPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuZGVsID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxkZWw+JyArIHRleHQgKyAnPC9kZWw+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5zYW5pdGl6ZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcHJvdCA9IGRlY29kZVVSSUNvbXBvbmVudCh1bmVzY2FwZShocmVmKSlcbiAgICAgICAgLnJlcGxhY2UoL1teXFx3Ol0vZywgJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKHByb3QuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PT0gMCB8fCBwcm90LmluZGV4T2YoJ3Zic2NyaXB0OicpID09PSAwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG4gIHZhciBvdXQgPSAnPGEgaHJlZj1cIicgKyBocmVmICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSAnPicgKyB0ZXh0ICsgJzwvYT4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmltYWdlID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgdmFyIG91dCA9ICc8aW1nIHNyYz1cIicgKyBocmVmICsgJ1wiIGFsdD1cIicgKyB0ZXh0ICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSB0aGlzLm9wdGlvbnMueGh0bWwgPyAnLz4nIDogJz4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiB0ZXh0O1xufTtcblxuLyoqXG4gKiBQYXJzaW5nICYgQ29tcGlsaW5nXG4gKi9cblxuZnVuY3Rpb24gUGFyc2VyKG9wdGlvbnMpIHtcbiAgdGhpcy50b2tlbnMgPSBbXTtcbiAgdGhpcy50b2tlbiA9IG51bGw7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLm9wdGlvbnMucmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IFJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG59XG5cbi8qKlxuICogU3RhdGljIFBhcnNlIE1ldGhvZFxuICovXG5cblBhcnNlci5wYXJzZSA9IGZ1bmN0aW9uKHNyYywgb3B0aW9ucywgcmVuZGVyZXIpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIob3B0aW9ucywgcmVuZGVyZXIpO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlKHNyYyk7XG59O1xuXG4vKipcbiAqIFBhcnNlIExvb3BcbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oc3JjKSB7XG4gIHRoaXMuaW5saW5lID0gbmV3IElubGluZUxleGVyKHNyYy5saW5rcywgdGhpcy5vcHRpb25zLCB0aGlzLnJlbmRlcmVyKTtcbiAgdGhpcy50b2tlbnMgPSBzcmMucmV2ZXJzZSgpO1xuXG4gIHZhciBvdXQgPSAnJztcbiAgd2hpbGUgKHRoaXMubmV4dCgpKSB7XG4gICAgb3V0ICs9IHRoaXMudG9rKCk7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBOZXh0IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRva2VuID0gdGhpcy50b2tlbnMucG9wKCk7XG59O1xuXG4vKipcbiAqIFByZXZpZXcgTmV4dCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy50b2tlbnMubGVuZ3RoIC0gMV0gfHwgMDtcbn07XG5cbi8qKlxuICogUGFyc2UgVGV4dCBUb2tlbnNcbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYm9keSA9IHRoaXMudG9rZW4udGV4dDtcblxuICB3aGlsZSAodGhpcy5wZWVrKCkudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgYm9keSArPSAnXFxuJyArIHRoaXMubmV4dCgpLnRleHQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5pbmxpbmUub3V0cHV0KGJvZHkpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBDdXJyZW50IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS50b2sgPSBmdW5jdGlvbigpIHtcbiAgc3dpdGNoICh0aGlzLnRva2VuLnR5cGUpIHtcbiAgICBjYXNlICdzcGFjZSc6IHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY2FzZSAnaHInOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5ocigpO1xuICAgIH1cbiAgICBjYXNlICdoZWFkaW5nJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuaGVhZGluZyhcbiAgICAgICAgdGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4udGV4dCksXG4gICAgICAgIHRoaXMudG9rZW4uZGVwdGgsXG4gICAgICAgIHRoaXMudG9rZW4udGV4dCk7XG4gICAgfVxuICAgIGNhc2UgJ2NvZGUnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5jb2RlKHRoaXMudG9rZW4udGV4dCxcbiAgICAgICAgdGhpcy50b2tlbi5sYW5nLFxuICAgICAgICB0aGlzLnRva2VuLmVzY2FwZWQpO1xuICAgIH1cbiAgICBjYXNlICd0YWJsZSc6IHtcbiAgICAgIHZhciBoZWFkZXIgPSAnJ1xuICAgICAgICAsIGJvZHkgPSAnJ1xuICAgICAgICAsIGlcbiAgICAgICAgLCByb3dcbiAgICAgICAgLCBjZWxsXG4gICAgICAgICwgZmxhZ3NcbiAgICAgICAgLCBqO1xuXG4gICAgICAvLyBoZWFkZXJcbiAgICAgIGNlbGwgPSAnJztcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRva2VuLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBmbGFncyA9IHsgaGVhZGVyOiB0cnVlLCBhbGlnbjogdGhpcy50b2tlbi5hbGlnbltpXSB9O1xuICAgICAgICBjZWxsICs9IHRoaXMucmVuZGVyZXIudGFibGVjZWxsKFxuICAgICAgICAgIHRoaXMuaW5saW5lLm91dHB1dCh0aGlzLnRva2VuLmhlYWRlcltpXSksXG4gICAgICAgICAgeyBoZWFkZXI6IHRydWUsIGFsaWduOiB0aGlzLnRva2VuLmFsaWduW2ldIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGhlYWRlciArPSB0aGlzLnJlbmRlcmVyLnRhYmxlcm93KGNlbGwpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50b2tlbi5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSB0aGlzLnRva2VuLmNlbGxzW2ldO1xuXG4gICAgICAgIGNlbGwgPSAnJztcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNlbGwgKz0gdGhpcy5yZW5kZXJlci50YWJsZWNlbGwoXG4gICAgICAgICAgICB0aGlzLmlubGluZS5vdXRwdXQocm93W2pdKSxcbiAgICAgICAgICAgIHsgaGVhZGVyOiBmYWxzZSwgYWxpZ246IHRoaXMudG9rZW4uYWxpZ25bal0gfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5ICs9IHRoaXMucmVuZGVyZXIudGFibGVyb3coY2VsbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci50YWJsZShoZWFkZXIsIGJvZHkpO1xuICAgIH1cbiAgICBjYXNlICdibG9ja3F1b3RlX3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJztcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdibG9ja3F1b3RlX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5ibG9ja3F1b3RlKGJvZHkpO1xuICAgIH1cbiAgICBjYXNlICdsaXN0X3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJ1xuICAgICAgICAsIG9yZGVyZWQgPSB0aGlzLnRva2VuLm9yZGVyZWQ7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdChib2R5LCBvcmRlcmVkKTtcbiAgICB9XG4gICAgY2FzZSAnbGlzdF9pdGVtX3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJztcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdsaXN0X2l0ZW1fZW5kJykge1xuICAgICAgICBib2R5ICs9IHRoaXMudG9rZW4udHlwZSA9PT0gJ3RleHQnXG4gICAgICAgICAgPyB0aGlzLnBhcnNlVGV4dCgpXG4gICAgICAgICAgOiB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0aXRlbShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnbG9vc2VfaXRlbV9zdGFydCc6IHtcbiAgICAgIHZhciBib2R5ID0gJyc7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9pdGVtX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0aXRlbShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnaHRtbCc6IHtcbiAgICAgIHZhciBodG1sID0gIXRoaXMudG9rZW4ucHJlICYmICF0aGlzLm9wdGlvbnMucGVkYW50aWNcbiAgICAgICAgPyB0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KVxuICAgICAgICA6IHRoaXMudG9rZW4udGV4dDtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmh0bWwoaHRtbCk7XG4gICAgfVxuICAgIGNhc2UgJ3BhcmFncmFwaCc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBhcmFncmFwaCh0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KSk7XG4gICAgfVxuICAgIGNhc2UgJ3RleHQnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgodGhpcy5wYXJzZVRleHQoKSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEhlbHBlcnNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoaHRtbCwgZW5jb2RlKSB7XG4gIHJldHVybiBodG1sXG4gICAgLnJlcGxhY2UoIWVuY29kZSA/IC8mKD8hIz9cXHcrOykvZyA6IC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7Jyk7XG59XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJihbI1xcd10rKTsvZywgZnVuY3Rpb24oXywgbikge1xuICAgIG4gPSBuLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG4gPT09ICdjb2xvbicpIHJldHVybiAnOic7XG4gICAgaWYgKG4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIHJldHVybiBuLmNoYXJBdCgxKSA9PT0gJ3gnXG4gICAgICAgID8gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChuLnN1YnN0cmluZygyKSwgMTYpKVxuICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoK24uc3Vic3RyaW5nKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShyZWdleCwgb3B0KSB7XG4gIHJlZ2V4ID0gcmVnZXguc291cmNlO1xuICBvcHQgPSBvcHQgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbiBzZWxmKG5hbWUsIHZhbCkge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgsIG9wdCk7XG4gICAgdmFsID0gdmFsLnNvdXJjZSB8fCB2YWw7XG4gICAgdmFsID0gdmFsLnJlcGxhY2UoLyhefFteXFxbXSlcXF4vZywgJyQxJyk7XG4gICAgcmVnZXggPSByZWdleC5yZXBsYWNlKG5hbWUsIHZhbCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxubm9vcC5leGVjID0gbm9vcDtcblxuZnVuY3Rpb24gbWVyZ2Uob2JqKSB7XG4gIHZhciBpID0gMVxuICAgICwgdGFyZ2V0XG4gICAgLCBrZXk7XG5cbiAgZm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB0YXJnZXQgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yIChrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IHRhcmdldFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cblxuLyoqXG4gKiBNYXJrZWRcbiAqL1xuXG5mdW5jdGlvbiBtYXJrZWQoc3JjLCBvcHQsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayB8fCB0eXBlb2Ygb3B0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBvcHQ7XG4gICAgICBvcHQgPSBudWxsO1xuICAgIH1cblxuICAgIG9wdCA9IG1lcmdlKHt9LCBtYXJrZWQuZGVmYXVsdHMsIG9wdCB8fCB7fSk7XG5cbiAgICB2YXIgaGlnaGxpZ2h0ID0gb3B0LmhpZ2hsaWdodFxuICAgICAgLCB0b2tlbnNcbiAgICAgICwgcGVuZGluZ1xuICAgICAgLCBpID0gMDtcblxuICAgIHRyeSB7XG4gICAgICB0b2tlbnMgPSBMZXhlci5sZXgoc3JjLCBvcHQpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgIH1cblxuICAgIHBlbmRpbmcgPSB0b2tlbnMubGVuZ3RoO1xuXG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgb3B0LmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICB9XG5cbiAgICAgIHZhciBvdXQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIG91dCA9IFBhcnNlci5wYXJzZSh0b2tlbnMsIG9wdCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVyciA9IGU7XG4gICAgICB9XG5cbiAgICAgIG9wdC5oaWdobGlnaHQgPSBoaWdobGlnaHQ7XG5cbiAgICAgIHJldHVybiBlcnJcbiAgICAgICAgPyBjYWxsYmFjayhlcnIpXG4gICAgICAgIDogY2FsbGJhY2sobnVsbCwgb3V0KTtcbiAgICB9O1xuXG4gICAgaWYgKCFoaWdobGlnaHQgfHwgaGlnaGxpZ2h0Lmxlbmd0aCA8IDMpIHtcbiAgICAgIHJldHVybiBkb25lKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIG9wdC5oaWdobGlnaHQ7XG5cbiAgICBpZiAoIXBlbmRpbmcpIHJldHVybiBkb25lKCk7XG5cbiAgICBmb3IgKDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbi50eXBlICE9PSAnY29kZScpIHtcbiAgICAgICAgICByZXR1cm4gLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0KHRva2VuLnRleHQsIHRva2VuLmxhbmcsIGZ1bmN0aW9uKGVyciwgY29kZSkge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgaWYgKGNvZGUgPT0gbnVsbCB8fCBjb2RlID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4udGV4dCA9IGNvZGU7XG4gICAgICAgICAgdG9rZW4uZXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSh0b2tlbnNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHQpIG9wdCA9IG1lcmdlKHt9LCBtYXJrZWQuZGVmYXVsdHMsIG9wdCk7XG4gICAgcmV0dXJuIFBhcnNlci5wYXJzZShMZXhlci5sZXgoc3JjLCBvcHQpLCBvcHQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZS5tZXNzYWdlICs9ICdcXG5QbGVhc2UgcmVwb3J0IHRoaXMgdG8gaHR0cHM6Ly9naXRodWIuY29tL2NoamovbWFya2VkLic7XG4gICAgaWYgKChvcHQgfHwgbWFya2VkLmRlZmF1bHRzKS5zaWxlbnQpIHtcbiAgICAgIHJldHVybiAnPHA+QW4gZXJyb3Igb2NjdXJlZDo8L3A+PHByZT4nXG4gICAgICAgICsgZXNjYXBlKGUubWVzc2FnZSArICcnLCB0cnVlKVxuICAgICAgICArICc8L3ByZT4nO1xuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbi8qKlxuICogT3B0aW9uc1xuICovXG5cbm1hcmtlZC5vcHRpb25zID1cbm1hcmtlZC5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0KSB7XG4gIG1lcmdlKG1hcmtlZC5kZWZhdWx0cywgb3B0KTtcbiAgcmV0dXJuIG1hcmtlZDtcbn07XG5cbm1hcmtlZC5kZWZhdWx0cyA9IHtcbiAgZ2ZtOiB0cnVlLFxuICB0YWJsZXM6IHRydWUsXG4gIGJyZWFrczogZmFsc2UsXG4gIHBlZGFudGljOiBmYWxzZSxcbiAgc2FuaXRpemU6IGZhbHNlLFxuICBzYW5pdGl6ZXI6IG51bGwsXG4gIG1hbmdsZTogdHJ1ZSxcbiAgc21hcnRMaXN0czogZmFsc2UsXG4gIHNpbGVudDogZmFsc2UsXG4gIGhpZ2hsaWdodDogbnVsbCxcbiAgbGFuZ1ByZWZpeDogJ2xhbmctJyxcbiAgc21hcnR5cGFudHM6IGZhbHNlLFxuICBoZWFkZXJQcmVmaXg6ICcnLFxuICByZW5kZXJlcjogbmV3IFJlbmRlcmVyLFxuICB4aHRtbDogZmFsc2Vcbn07XG5cbi8qKlxuICogRXhwb3NlXG4gKi9cblxubWFya2VkLlBhcnNlciA9IFBhcnNlcjtcbm1hcmtlZC5wYXJzZXIgPSBQYXJzZXIucGFyc2U7XG5cbm1hcmtlZC5SZW5kZXJlciA9IFJlbmRlcmVyO1xuXG5tYXJrZWQuTGV4ZXIgPSBMZXhlcjtcbm1hcmtlZC5sZXhlciA9IExleGVyLmxleDtcblxubWFya2VkLklubGluZUxleGVyID0gSW5saW5lTGV4ZXI7XG5tYXJrZWQuaW5saW5lTGV4ZXIgPSBJbmxpbmVMZXhlci5vdXRwdXQ7XG5cbm1hcmtlZC5wYXJzZSA9IG1hcmtlZDtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICBtb2R1bGUuZXhwb3J0cyA9IG1hcmtlZDtcbn0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIG1hcmtlZDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLm1hcmtlZCA9IG1hcmtlZDtcbn1cblxufSkuY2FsbChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKTtcbn0oKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1kLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLnN0cmlwTGlzdExlYWRlcnMgPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdzdHJpcExpc3RMZWFkZXJzJykgPyBvcHRpb25zLnN0cmlwTGlzdExlYWRlcnMgOiB0cnVlO1xuICBvcHRpb25zLmdmbSA9IG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2dmbScpID8gb3B0aW9ucy5nZm0gOiB0cnVlO1xuXG4gIHZhciBvdXRwdXQgPSBtZDtcbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucy5zdHJpcExpc3RMZWFkZXJzKSB7XG4gICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSgvXihbXFxzXFx0XSopKFtcXCpcXC1cXCtdfFxcZFxcLilcXHMrL2dtLCAnJDEnKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZ2ZtKXtcbiAgICAgIG91dHB1dCA9IG91dHB1dFxuICAgICAgICAvLyBIZWFkZXJcbiAgICAgICAgLnJlcGxhY2UoL1xcbj17Mix9L2csICdcXG4nKVxuICAgICAgICAvLyBTdHJpa2V0aHJvdWdoXG4gICAgICAgIC5yZXBsYWNlKC9+fi9nLCAnJylcbiAgICAgICAgLy8gRmVuY2VkIGNvZGVibG9ja3NcbiAgICAgICAgLnJlcGxhY2UoL2B7M30uKlxcbi9nLCAnJyk7XG4gICAgfVxuICAgIG91dHB1dCA9IG91dHB1dFxuICAgICAgLy8gUmVtb3ZlIEhUTUwgdGFnc1xuICAgICAgLnJlcGxhY2UoLzwoLio/KT4vZywgJyQxJylcbiAgICAgIC8vIFJlbW92ZSBzZXRleHQtc3R5bGUgaGVhZGVyc1xuICAgICAgLnJlcGxhY2UoL15bPVxcLV17Mix9XFxzKiQvZywgJycpXG4gICAgICAvLyBSZW1vdmUgZm9vdG5vdGVzP1xuICAgICAgLnJlcGxhY2UoL1xcW1xcXi4rP1xcXShcXDogLio/JCk/L2csICcnKVxuICAgICAgLnJlcGxhY2UoL1xcc3swLDJ9XFxbLio/XFxdOiAuKj8kL2csICcnKVxuICAgICAgLy8gUmVtb3ZlIGltYWdlc1xuICAgICAgLnJlcGxhY2UoL1xcIVxcWy4qP1xcXVtcXFtcXChdLio/W1xcXVxcKV0vZywgJycpXG4gICAgICAvLyBSZW1vdmUgaW5saW5lIGxpbmtzXG4gICAgICAucmVwbGFjZSgvXFxbKC4qPylcXF1bXFxbXFwoXS4qP1tcXF1cXCldL2csICckMScpXG4gICAgICAvLyBSZW1vdmUgQmxvY2txdW90ZXNcbiAgICAgIC5yZXBsYWNlKC8+L2csICcnKVxuICAgICAgLy8gUmVtb3ZlIHJlZmVyZW5jZS1zdHlsZSBsaW5rcz9cbiAgICAgIC5yZXBsYWNlKC9eXFxzezEsMn1cXFsoLio/KVxcXTogKFxcUyspKCBcIi4qP1wiKT9cXHMqJC9nLCAnJylcbiAgICAgIC8vIFJlbW92ZSBhdHgtc3R5bGUgaGVhZGVyc1xuICAgICAgLnJlcGxhY2UoL15cXCN7MSw2fVxccyooW14jXSopXFxzKihcXCN7MSw2fSk/L2dtLCAnJDEnKVxuICAgICAgLnJlcGxhY2UoLyhbXFwqX117MSwzfSkoXFxTLio/XFxTKVxcMS9nLCAnJDInKVxuICAgICAgLnJlcGxhY2UoLyhgezMsfSkoLio/KVxcMS9nbSwgJyQyJylcbiAgICAgIC5yZXBsYWNlKC9eLXszLH1cXHMqJC9nLCAnJylcbiAgICAgIC5yZXBsYWNlKC9gKC4rPylgL2csICckMScpXG4gICAgICAucmVwbGFjZSgvXFxuezIsfS9nLCAnXFxuXFxuJyk7XG4gIH0gY2F0Y2goZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgcmV0dXJuIG1kO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuIiwiLy8gICAgIFVuZGVyc2NvcmUuanMgMS44LjNcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gQmFzZWxpbmUgc2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCBpbiB0aGUgYnJvd3Nlciwgb3IgYGV4cG9ydHNgIG9uIHRoZSBzZXJ2ZXIuXG4gIHZhciByb290ID0gdGhpcztcblxuICAvLyBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgYF9gIHZhcmlhYmxlLlxuICB2YXIgcHJldmlvdXNVbmRlcnNjb3JlID0gcm9vdC5fO1xuXG4gIC8vIFNhdmUgYnl0ZXMgaW4gdGhlIG1pbmlmaWVkIChidXQgbm90IGd6aXBwZWQpIHZlcnNpb246XG4gIHZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLCBPYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGUsIEZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbiAgdmFyXG4gICAgcHVzaCAgICAgICAgICAgICA9IEFycmF5UHJvdG8ucHVzaCxcbiAgICBzbGljZSAgICAgICAgICAgID0gQXJyYXlQcm90by5zbGljZSxcbiAgICB0b1N0cmluZyAgICAgICAgID0gT2JqUHJvdG8udG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgICA9IE9ialByb3RvLmhhc093blByb3BlcnR5O1xuXG4gIC8vIEFsbCAqKkVDTUFTY3JpcHQgNSoqIG5hdGl2ZSBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbnMgdGhhdCB3ZSBob3BlIHRvIHVzZVxuICAvLyBhcmUgZGVjbGFyZWQgaGVyZS5cbiAgdmFyXG4gICAgbmF0aXZlSXNBcnJheSAgICAgID0gQXJyYXkuaXNBcnJheSxcbiAgICBuYXRpdmVLZXlzICAgICAgICAgPSBPYmplY3Qua2V5cyxcbiAgICBuYXRpdmVCaW5kICAgICAgICAgPSBGdW5jUHJvdG8uYmluZCxcbiAgICBuYXRpdmVDcmVhdGUgICAgICAgPSBPYmplY3QuY3JlYXRlO1xuXG4gIC8vIE5ha2VkIGZ1bmN0aW9uIHJlZmVyZW5jZSBmb3Igc3Vycm9nYXRlLXByb3RvdHlwZS1zd2FwcGluZy5cbiAgdmFyIEN0b3IgPSBmdW5jdGlvbigpe307XG5cbiAgLy8gQ3JlYXRlIGEgc2FmZSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciB1c2UgYmVsb3cuXG4gIHZhciBfID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIF8pIHJldHVybiBvYmo7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIF8pKSByZXR1cm4gbmV3IF8ob2JqKTtcbiAgICB0aGlzLl93cmFwcGVkID0gb2JqO1xuICB9O1xuXG4gIC8vIEV4cG9ydCB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yICoqTm9kZS5qcyoqLCB3aXRoXG4gIC8vIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGZvciB0aGUgb2xkIGByZXF1aXJlKClgIEFQSS4gSWYgd2UncmUgaW5cbiAgLy8gdGhlIGJyb3dzZXIsIGFkZCBgX2AgYXMgYSBnbG9iYWwgb2JqZWN0LlxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfO1xuICAgIH1cbiAgICBleHBvcnRzLl8gPSBfO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuXyA9IF87XG4gIH1cblxuICAvLyBDdXJyZW50IHZlcnNpb24uXG4gIF8uVkVSU0lPTiA9ICcxLjguMyc7XG5cbiAgLy8gSW50ZXJuYWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGVmZmljaWVudCAoZm9yIGN1cnJlbnQgZW5naW5lcykgdmVyc2lvblxuICAvLyBvZiB0aGUgcGFzc2VkLWluIGNhbGxiYWNrLCB0byBiZSByZXBlYXRlZGx5IGFwcGxpZWQgaW4gb3RoZXIgVW5kZXJzY29yZVxuICAvLyBmdW5jdGlvbnMuXG4gIHZhciBvcHRpbWl6ZUNiID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSByZXR1cm4gZnVuYztcbiAgICBzd2l0Y2ggKGFyZ0NvdW50ID09IG51bGwgPyAzIDogYXJnQ291bnQpIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUpO1xuICAgICAgfTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvdGhlcikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlLCBvdGhlcik7XG4gICAgICB9O1xuICAgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQSBtb3N0bHktaW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgY2FsbGJhY2tzIHRoYXQgY2FuIGJlIGFwcGxpZWRcbiAgLy8gdG8gZWFjaCBlbGVtZW50IGluIGEgY29sbGVjdGlvbiwgcmV0dXJuaW5nIHRoZSBkZXNpcmVkIHJlc3VsdCDigJQgZWl0aGVyXG4gIC8vIGlkZW50aXR5LCBhbiBhcmJpdHJhcnkgY2FsbGJhY2ssIGEgcHJvcGVydHkgbWF0Y2hlciwgb3IgYSBwcm9wZXJ0eSBhY2Nlc3Nvci5cbiAgdmFyIGNiID0gZnVuY3Rpb24odmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBfLmlkZW50aXR5O1xuICAgIGlmIChfLmlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gb3B0aW1pemVDYih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpO1xuICAgIGlmIChfLmlzT2JqZWN0KHZhbHVlKSkgcmV0dXJuIF8ubWF0Y2hlcih2YWx1ZSk7XG4gICAgcmV0dXJuIF8ucHJvcGVydHkodmFsdWUpO1xuICB9O1xuICBfLml0ZXJhdGVlID0gZnVuY3Rpb24odmFsdWUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY2IodmFsdWUsIGNvbnRleHQsIEluZmluaXR5KTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYXNzaWduZXIgZnVuY3Rpb25zLlxuICB2YXIgY3JlYXRlQXNzaWduZXIgPSBmdW5jdGlvbihrZXlzRnVuYywgdW5kZWZpbmVkT25seSkge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCA8IDIgfHwgb2JqID09IG51bGwpIHJldHVybiBvYmo7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdLFxuICAgICAgICAgICAga2V5cyA9IGtleXNGdW5jKHNvdXJjZSksXG4gICAgICAgICAgICBsID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKCF1bmRlZmluZWRPbmx5IHx8IG9ialtrZXldID09PSB2b2lkIDApIG9ialtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSBhbm90aGVyLlxuICB2YXIgYmFzZUNyZWF0ZSA9IGZ1bmN0aW9uKHByb3RvdHlwZSkge1xuICAgIGlmICghXy5pc09iamVjdChwcm90b3R5cGUpKSByZXR1cm4ge307XG4gICAgaWYgKG5hdGl2ZUNyZWF0ZSkgcmV0dXJuIG5hdGl2ZUNyZWF0ZShwcm90b3R5cGUpO1xuICAgIEN0b3IucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQ3RvcjtcbiAgICBDdG9yLnByb3RvdHlwZSA9IG51bGw7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgcHJvcGVydHkgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqID09IG51bGwgPyB2b2lkIDAgOiBvYmpba2V5XTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEhlbHBlciBmb3IgY29sbGVjdGlvbiBtZXRob2RzIHRvIGRldGVybWluZSB3aGV0aGVyIGEgY29sbGVjdGlvblxuICAvLyBzaG91bGQgYmUgaXRlcmF0ZWQgYXMgYW4gYXJyYXkgb3IgYXMgYW4gb2JqZWN0XG4gIC8vIFJlbGF0ZWQ6IGh0dHA6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoXG4gIC8vIEF2b2lkcyBhIHZlcnkgbmFzdHkgaU9TIDggSklUIGJ1ZyBvbiBBUk0tNjQuICMyMDk0XG4gIHZhciBNQVhfQVJSQVlfSU5ERVggPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuICB2YXIgZ2V0TGVuZ3RoID0gcHJvcGVydHkoJ2xlbmd0aCcpO1xuICB2YXIgaXNBcnJheUxpa2UgPSBmdW5jdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChjb2xsZWN0aW9uKTtcbiAgICByZXR1cm4gdHlwZW9mIGxlbmd0aCA9PSAnbnVtYmVyJyAmJiBsZW5ndGggPj0gMCAmJiBsZW5ndGggPD0gTUFYX0FSUkFZX0lOREVYO1xuICB9O1xuXG4gIC8vIENvbGxlY3Rpb24gRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gVGhlIGNvcm5lcnN0b25lLCBhbiBgZWFjaGAgaW1wbGVtZW50YXRpb24sIGFrYSBgZm9yRWFjaGAuXG4gIC8vIEhhbmRsZXMgcmF3IG9iamVjdHMgaW4gYWRkaXRpb24gdG8gYXJyYXktbGlrZXMuIFRyZWF0cyBhbGxcbiAgLy8gc3BhcnNlIGFycmF5LWxpa2VzIGFzIGlmIHRoZXkgd2VyZSBkZW5zZS5cbiAgXy5lYWNoID0gXy5mb3JFYWNoID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGksIGxlbmd0aDtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdGVlKG9ialtpXSwgaSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0ZWUob2JqW2tleXNbaV1dLCBrZXlzW2ldLCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0ZWUgdG8gZWFjaCBlbGVtZW50LlxuICBfLm1hcCA9IF8uY29sbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aCxcbiAgICAgICAgcmVzdWx0cyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIHJlc3VsdHNbaW5kZXhdID0gaXRlcmF0ZWUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDcmVhdGUgYSByZWR1Y2luZyBmdW5jdGlvbiBpdGVyYXRpbmcgbGVmdCBvciByaWdodC5cbiAgZnVuY3Rpb24gY3JlYXRlUmVkdWNlKGRpcikge1xuICAgIC8vIE9wdGltaXplZCBpdGVyYXRvciBmdW5jdGlvbiBhcyB1c2luZyBhcmd1bWVudHMubGVuZ3RoXG4gICAgLy8gaW4gdGhlIG1haW4gZnVuY3Rpb24gd2lsbCBkZW9wdGltaXplIHRoZSwgc2VlICMxOTkxLlxuICAgIGZ1bmN0aW9uIGl0ZXJhdG9yKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGtleXMsIGluZGV4LCBsZW5ndGgpIHtcbiAgICAgIGZvciAoOyBpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSBkaXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdGVlKG1lbW8sIG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDQpO1xuICAgICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IGRpciA+IDAgPyAwIDogbGVuZ3RoIC0gMTtcbiAgICAgIC8vIERldGVybWluZSB0aGUgaW5pdGlhbCB2YWx1ZSBpZiBub25lIGlzIHByb3ZpZGVkLlxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgICAgIG1lbW8gPSBvYmpba2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXhdO1xuICAgICAgICBpbmRleCArPSBkaXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlcmF0b3Iob2JqLCBpdGVyYXRlZSwgbWVtbywga2V5cywgaW5kZXgsIGxlbmd0aCk7XG4gICAgfTtcbiAgfVxuXG4gIC8vICoqUmVkdWNlKiogYnVpbGRzIHVwIGEgc2luZ2xlIHJlc3VsdCBmcm9tIGEgbGlzdCBvZiB2YWx1ZXMsIGFrYSBgaW5qZWN0YCxcbiAgLy8gb3IgYGZvbGRsYC5cbiAgXy5yZWR1Y2UgPSBfLmZvbGRsID0gXy5pbmplY3QgPSBjcmVhdGVSZWR1Y2UoMSk7XG5cbiAgLy8gVGhlIHJpZ2h0LWFzc29jaWF0aXZlIHZlcnNpb24gb2YgcmVkdWNlLCBhbHNvIGtub3duIGFzIGBmb2xkcmAuXG4gIF8ucmVkdWNlUmlnaHQgPSBfLmZvbGRyID0gY3JlYXRlUmVkdWNlKC0xKTtcblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuIEFsaWFzZWQgYXMgYGRldGVjdGAuXG4gIF8uZmluZCA9IF8uZGV0ZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIga2V5O1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopKSB7XG4gICAgICBrZXkgPSBfLmZpbmRJbmRleChvYmosIHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IF8uZmluZEtleShvYmosIHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgfVxuICAgIGlmIChrZXkgIT09IHZvaWQgMCAmJiBrZXkgIT09IC0xKSByZXR1cm4gb2JqW2tleV07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGZvciB3aGljaCBhIHRydXRoIHRlc3QgZmFpbHMuXG4gIF8ucmVqZWN0ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBfLm5lZ2F0ZShjYihwcmVkaWNhdGUpKSwgY29udGV4dCk7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBtYXRjaCBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYGFsbGAuXG4gIF8uZXZlcnkgPSBfLmFsbCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgaWYgKCFwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICBfLnNvbWUgPSBfLmFueSA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudEtleSA9IGtleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiBpdGVtICh1c2luZyBgPT09YCkuXG4gIC8vIEFsaWFzZWQgYXMgYGluY2x1ZGVzYCBhbmQgYGluY2x1ZGVgLlxuICBfLmNvbnRhaW5zID0gXy5pbmNsdWRlcyA9IF8uaW5jbHVkZSA9IGZ1bmN0aW9uKG9iaiwgaXRlbSwgZnJvbUluZGV4LCBndWFyZCkge1xuICAgIGlmICghaXNBcnJheUxpa2Uob2JqKSkgb2JqID0gXy52YWx1ZXMob2JqKTtcbiAgICBpZiAodHlwZW9mIGZyb21JbmRleCAhPSAnbnVtYmVyJyB8fCBndWFyZCkgZnJvbUluZGV4ID0gMDtcbiAgICByZXR1cm4gXy5pbmRleE9mKG9iaiwgaXRlbSwgZnJvbUluZGV4KSA+PSAwO1xuICB9O1xuXG4gIC8vIEludm9rZSBhIG1ldGhvZCAod2l0aCBhcmd1bWVudHMpIG9uIGV2ZXJ5IGl0ZW0gaW4gYSBjb2xsZWN0aW9uLlxuICBfLmludm9rZSA9IGZ1bmN0aW9uKG9iaiwgbWV0aG9kKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGlzRnVuYyA9IF8uaXNGdW5jdGlvbihtZXRob2QpO1xuICAgIHJldHVybiBfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgZnVuYyA9IGlzRnVuYyA/IG1ldGhvZCA6IHZhbHVlW21ldGhvZF07XG4gICAgICByZXR1cm4gZnVuYyA9PSBudWxsID8gZnVuYyA6IGZ1bmMuYXBwbHkodmFsdWUsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYG1hcGA6IGZldGNoaW5nIGEgcHJvcGVydHkuXG4gIF8ucGx1Y2sgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBfLm1hcChvYmosIF8ucHJvcGVydHkoa2V5KSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmlsdGVyYDogc2VsZWN0aW5nIG9ubHkgb2JqZWN0c1xuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLndoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIF8ubWF0Y2hlcihhdHRycykpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbmRgOiBnZXR0aW5nIHRoZSBmaXJzdCBvYmplY3RcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5maW5kV2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8uZmluZChvYmosIF8ubWF0Y2hlcihhdHRycykpO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWF4aW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5tYXggPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IC1JbmZpbml0eSwgbGFzdENvbXB1dGVkID0gLUluZmluaXR5LFxuICAgICAgICB2YWx1ZSwgY29tcHV0ZWQ7XG4gICAgaWYgKGl0ZXJhdGVlID09IG51bGwgJiYgb2JqICE9IG51bGwpIHtcbiAgICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgICAgaWYgKHZhbHVlID4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgICAgICBpZiAoY29tcHV0ZWQgPiBsYXN0Q29tcHV0ZWQgfHwgY29tcHV0ZWQgPT09IC1JbmZpbml0eSAmJiByZXN1bHQgPT09IC1JbmZpbml0eSkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1pbmltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWluID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSBJbmZpbml0eSwgbGFzdENvbXB1dGVkID0gSW5maW5pdHksXG4gICAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgICBpZiAoaXRlcmF0ZWUgPT0gbnVsbCAmJiBvYmogIT0gbnVsbCkge1xuICAgICAgb2JqID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gb2JqW2ldO1xuICAgICAgICBpZiAodmFsdWUgPCByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgICAgIGlmIChjb21wdXRlZCA8IGxhc3RDb21wdXRlZCB8fCBjb21wdXRlZCA9PT0gSW5maW5pdHkgJiYgcmVzdWx0ID09PSBJbmZpbml0eSkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBTaHVmZmxlIGEgY29sbGVjdGlvbiwgdXNpbmcgdGhlIG1vZGVybiB2ZXJzaW9uIG9mIHRoZVxuICAvLyBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVy4oCTWWF0ZXNfc2h1ZmZsZSkuXG4gIF8uc2h1ZmZsZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBzZXQgPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0gc2V0Lmxlbmd0aDtcbiAgICB2YXIgc2h1ZmZsZWQgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMCwgcmFuZDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJhbmQgPSBfLnJhbmRvbSgwLCBpbmRleCk7XG4gICAgICBpZiAocmFuZCAhPT0gaW5kZXgpIHNodWZmbGVkW2luZGV4XSA9IHNodWZmbGVkW3JhbmRdO1xuICAgICAgc2h1ZmZsZWRbcmFuZF0gPSBzZXRbaW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gIH07XG5cbiAgLy8gU2FtcGxlICoqbioqIHJhbmRvbSB2YWx1ZXMgZnJvbSBhIGNvbGxlY3Rpb24uXG4gIC8vIElmICoqbioqIGlzIG5vdCBzcGVjaWZpZWQsIHJldHVybnMgYSBzaW5nbGUgcmFuZG9tIGVsZW1lbnQuXG4gIC8vIFRoZSBpbnRlcm5hbCBgZ3VhcmRgIGFyZ3VtZW50IGFsbG93cyBpdCB0byB3b3JrIHdpdGggYG1hcGAuXG4gIF8uc2FtcGxlID0gZnVuY3Rpb24ob2JqLCBuLCBndWFyZCkge1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHtcbiAgICAgIGlmICghaXNBcnJheUxpa2Uob2JqKSkgb2JqID0gXy52YWx1ZXMob2JqKTtcbiAgICAgIHJldHVybiBvYmpbXy5yYW5kb20ob2JqLmxlbmd0aCAtIDEpXTtcbiAgICB9XG4gICAgcmV0dXJuIF8uc2h1ZmZsZShvYmopLnNsaWNlKDAsIE1hdGgubWF4KDAsIG4pKTtcbiAgfTtcblxuICAvLyBTb3J0IHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24gcHJvZHVjZWQgYnkgYW4gaXRlcmF0ZWUuXG4gIF8uc29ydEJ5ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHJldHVybiBfLnBsdWNrKF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgY3JpdGVyaWE6IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgbGlzdClcbiAgICAgIH07XG4gICAgfSkuc29ydChmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhO1xuICAgICAgdmFyIGIgPSByaWdodC5jcml0ZXJpYTtcbiAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgIGlmIChhID4gYiB8fCBhID09PSB2b2lkIDApIHJldHVybiAxO1xuICAgICAgICBpZiAoYSA8IGIgfHwgYiA9PT0gdm9pZCAwKSByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGVmdC5pbmRleCAtIHJpZ2h0LmluZGV4O1xuICAgIH0pLCAndmFsdWUnKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB1c2VkIGZvciBhZ2dyZWdhdGUgXCJncm91cCBieVwiIG9wZXJhdGlvbnMuXG4gIHZhciBncm91cCA9IGZ1bmN0aW9uKGJlaGF2aW9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBrZXkgPSBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIG9iaik7XG4gICAgICAgIGJlaGF2aW9yKHJlc3VsdCwgdmFsdWUsIGtleSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBHcm91cHMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbi4gUGFzcyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlXG4gIC8vIHRvIGdyb3VwIGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3JpdGVyaW9uLlxuICBfLmdyb3VwQnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoXy5oYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTsgZWxzZSByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gIH0pO1xuXG4gIC8vIEluZGV4ZXMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiwgc2ltaWxhciB0byBgZ3JvdXBCeWAsIGJ1dCBmb3JcbiAgLy8gd2hlbiB5b3Uga25vdyB0aGF0IHlvdXIgaW5kZXggdmFsdWVzIHdpbGwgYmUgdW5pcXVlLlxuICBfLmluZGV4QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9KTtcblxuICAvLyBDb3VudHMgaW5zdGFuY2VzIG9mIGFuIG9iamVjdCB0aGF0IGdyb3VwIGJ5IGEgY2VydGFpbiBjcml0ZXJpb24uIFBhc3NcbiAgLy8gZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZSB0byBjb3VudCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gIC8vIGNyaXRlcmlvbi5cbiAgXy5jb3VudEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgaWYgKF8uaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0rKzsgZWxzZSByZXN1bHRba2V5XSA9IDE7XG4gIH0pO1xuXG4gIC8vIFNhZmVseSBjcmVhdGUgYSByZWFsLCBsaXZlIGFycmF5IGZyb20gYW55dGhpbmcgaXRlcmFibGUuXG4gIF8udG9BcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gW107XG4gICAgaWYgKF8uaXNBcnJheShvYmopKSByZXR1cm4gc2xpY2UuY2FsbChvYmopO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopKSByZXR1cm4gXy5tYXAob2JqLCBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gXy52YWx1ZXMob2JqKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhbiBvYmplY3QuXG4gIF8uc2l6ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iaikgPyBvYmoubGVuZ3RoIDogXy5rZXlzKG9iaikubGVuZ3RoO1xuICB9O1xuXG4gIC8vIFNwbGl0IGEgY29sbGVjdGlvbiBpbnRvIHR3byBhcnJheXM6IG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgc2F0aXNmeSB0aGUgZ2l2ZW5cbiAgLy8gcHJlZGljYXRlLCBhbmQgb25lIHdob3NlIGVsZW1lbnRzIGFsbCBkbyBub3Qgc2F0aXNmeSB0aGUgcHJlZGljYXRlLlxuICBfLnBhcnRpdGlvbiA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIgcGFzcyA9IFtdLCBmYWlsID0gW107XG4gICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqKSB7XG4gICAgICAocHJlZGljYXRlKHZhbHVlLCBrZXksIG9iaikgPyBwYXNzIDogZmFpbCkucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtwYXNzLCBmYWlsXTtcbiAgfTtcblxuICAvLyBBcnJheSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYGhlYWRgIGFuZCBgdGFrZWAuIFRoZSAqKmd1YXJkKiogY2hlY2tcbiAgLy8gYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmZpcnN0ID0gXy5oZWFkID0gXy50YWtlID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkgcmV0dXJuIGFycmF5WzBdO1xuICAgIHJldHVybiBfLmluaXRpYWwoYXJyYXksIGFycmF5Lmxlbmd0aCAtIG4pO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGxhc3QgZW50cnkgb2YgdGhlIGFycmF5LiBFc3BlY2lhbGx5IHVzZWZ1bCBvblxuICAvLyB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiBhbGwgdGhlIHZhbHVlcyBpblxuICAvLyB0aGUgYXJyYXksIGV4Y2x1ZGluZyB0aGUgbGFzdCBOLlxuICBfLmluaXRpYWwgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgMCwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gKG4gPT0gbnVsbCB8fCBndWFyZCA/IDEgOiBuKSkpO1xuICB9O1xuXG4gIC8vIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBsYXN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS5cbiAgXy5sYXN0ID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBfLnJlc3QoYXJyYXksIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIG4pKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBmaXJzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYHRhaWxgIGFuZCBgZHJvcGAuXG4gIC8vIEVzcGVjaWFsbHkgdXNlZnVsIG9uIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nIGFuICoqbioqIHdpbGwgcmV0dXJuXG4gIC8vIHRoZSByZXN0IE4gdmFsdWVzIGluIHRoZSBhcnJheS5cbiAgXy5yZXN0ID0gXy50YWlsID0gXy5kcm9wID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIG4gPT0gbnVsbCB8fCBndWFyZCA/IDEgOiBuKTtcbiAgfTtcblxuICAvLyBUcmltIG91dCBhbGwgZmFsc3kgdmFsdWVzIGZyb20gYW4gYXJyYXkuXG4gIF8uY29tcGFjdCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBfLmlkZW50aXR5KTtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBvZiBhIHJlY3Vyc2l2ZSBgZmxhdHRlbmAgZnVuY3Rpb24uXG4gIHZhciBmbGF0dGVuID0gZnVuY3Rpb24oaW5wdXQsIHNoYWxsb3csIHN0cmljdCwgc3RhcnRJbmRleCkge1xuICAgIHZhciBvdXRwdXQgPSBbXSwgaWR4ID0gMDtcbiAgICBmb3IgKHZhciBpID0gc3RhcnRJbmRleCB8fCAwLCBsZW5ndGggPSBnZXRMZW5ndGgoaW5wdXQpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IGlucHV0W2ldO1xuICAgICAgaWYgKGlzQXJyYXlMaWtlKHZhbHVlKSAmJiAoXy5pc0FycmF5KHZhbHVlKSB8fCBfLmlzQXJndW1lbnRzKHZhbHVlKSkpIHtcbiAgICAgICAgLy9mbGF0dGVuIGN1cnJlbnQgbGV2ZWwgb2YgYXJyYXkgb3IgYXJndW1lbnRzIG9iamVjdFxuICAgICAgICBpZiAoIXNoYWxsb3cpIHZhbHVlID0gZmxhdHRlbih2YWx1ZSwgc2hhbGxvdywgc3RyaWN0KTtcbiAgICAgICAgdmFyIGogPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIG91dHB1dC5sZW5ndGggKz0gbGVuO1xuICAgICAgICB3aGlsZSAoaiA8IGxlbikge1xuICAgICAgICAgIG91dHB1dFtpZHgrK10gPSB2YWx1ZVtqKytdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgb3V0cHV0W2lkeCsrXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIC8vIEZsYXR0ZW4gb3V0IGFuIGFycmF5LCBlaXRoZXIgcmVjdXJzaXZlbHkgKGJ5IGRlZmF1bHQpLCBvciBqdXN0IG9uZSBsZXZlbC5cbiAgXy5mbGF0dGVuID0gZnVuY3Rpb24oYXJyYXksIHNoYWxsb3cpIHtcbiAgICByZXR1cm4gZmxhdHRlbihhcnJheSwgc2hhbGxvdywgZmFsc2UpO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuICBfLndpdGhvdXQgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmRpZmZlcmVuY2UoYXJyYXksIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgdGhlIGFycmF5LiBJZiB0aGUgYXJyYXkgaGFzIGFscmVhZHlcbiAgLy8gYmVlbiBzb3J0ZWQsIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgdXNpbmcgYSBmYXN0ZXIgYWxnb3JpdGhtLlxuICAvLyBBbGlhc2VkIGFzIGB1bmlxdWVgLlxuICBfLnVuaXEgPSBfLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5LCBpc1NvcnRlZCwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpZiAoIV8uaXNCb29sZWFuKGlzU29ydGVkKSkge1xuICAgICAgY29udGV4dCA9IGl0ZXJhdGVlO1xuICAgICAgaXRlcmF0ZWUgPSBpc1NvcnRlZDtcbiAgICAgIGlzU29ydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpdGVyYXRlZSAhPSBudWxsKSBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIHNlZW4gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcnJheVtpXSxcbiAgICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUsIGksIGFycmF5KSA6IHZhbHVlO1xuICAgICAgaWYgKGlzU29ydGVkKSB7XG4gICAgICAgIGlmICghaSB8fCBzZWVuICE9PSBjb21wdXRlZCkgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICBzZWVuID0gY29tcHV0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhzZWVuLCBjb21wdXRlZCkpIHtcbiAgICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghXy5jb250YWlucyhyZXN1bHQsIHZhbHVlKSkge1xuICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSB1bmlvbjogZWFjaCBkaXN0aW5jdCBlbGVtZW50IGZyb20gYWxsIG9mXG4gIC8vIHRoZSBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLnVuaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF8udW5pcShmbGF0dGVuKGFyZ3VtZW50cywgdHJ1ZSwgdHJ1ZSkpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyBldmVyeSBpdGVtIHNoYXJlZCBiZXR3ZWVuIGFsbCB0aGVcbiAgLy8gcGFzc2VkLWluIGFycmF5cy5cbiAgXy5pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBhcnJheVtpXTtcbiAgICAgIGlmIChfLmNvbnRhaW5zKHJlc3VsdCwgaXRlbSkpIGNvbnRpbnVlO1xuICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBhcmdzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKGFyZ3VtZW50c1tqXSwgaXRlbSkpIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGogPT09IGFyZ3NMZW5ndGgpIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFRha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvbmUgYXJyYXkgYW5kIGEgbnVtYmVyIG9mIG90aGVyIGFycmF5cy5cbiAgLy8gT25seSB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBqdXN0IHRoZSBmaXJzdCBhcnJheSB3aWxsIHJlbWFpbi5cbiAgXy5kaWZmZXJlbmNlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdCA9IGZsYXR0ZW4oYXJndW1lbnRzLCB0cnVlLCB0cnVlLCAxKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHJldHVybiAhXy5jb250YWlucyhyZXN0LCB2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gWmlwIHRvZ2V0aGVyIG11bHRpcGxlIGxpc3RzIGludG8gYSBzaW5nbGUgYXJyYXkgLS0gZWxlbWVudHMgdGhhdCBzaGFyZVxuICAvLyBhbiBpbmRleCBnbyB0b2dldGhlci5cbiAgXy56aXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXy51bnppcChhcmd1bWVudHMpO1xuICB9O1xuXG4gIC8vIENvbXBsZW1lbnQgb2YgXy56aXAuIFVuemlwIGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIGFuZCBncm91cHNcbiAgLy8gZWFjaCBhcnJheSdzIGVsZW1lbnRzIG9uIHNoYXJlZCBpbmRpY2VzXG4gIF8udW56aXAgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciBsZW5ndGggPSBhcnJheSAmJiBfLm1heChhcnJheSwgZ2V0TGVuZ3RoKS5sZW5ndGggfHwgMDtcbiAgICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBfLnBsdWNrKGFycmF5LCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gQ29udmVydHMgbGlzdHMgaW50byBvYmplY3RzLiBQYXNzIGVpdGhlciBhIHNpbmdsZSBhcnJheSBvZiBgW2tleSwgdmFsdWVdYFxuICAvLyBwYWlycywgb3IgdHdvIHBhcmFsbGVsIGFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGggLS0gb25lIG9mIGtleXMsIGFuZCBvbmUgb2ZcbiAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICBfLm9iamVjdCA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGxpc3QpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1bMF1dID0gbGlzdFtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBHZW5lcmF0b3IgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmaW5kSW5kZXggYW5kIGZpbmRMYXN0SW5kZXggZnVuY3Rpb25zXG4gIGZ1bmN0aW9uIGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKGRpcikge1xuICAgIHJldHVybiBmdW5jdGlvbihhcnJheSwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgICB2YXIgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGluZGV4IG9uIGFuIGFycmF5LWxpa2UgdGhhdCBwYXNzZXMgYSBwcmVkaWNhdGUgdGVzdFxuICBfLmZpbmRJbmRleCA9IGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKDEpO1xuICBfLmZpbmRMYXN0SW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigtMSk7XG5cbiAgLy8gVXNlIGEgY29tcGFyYXRvciBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IHRoZSBzbWFsbGVzdCBpbmRleCBhdCB3aGljaFxuICAvLyBhbiBvYmplY3Qgc2hvdWxkIGJlIGluc2VydGVkIHNvIGFzIHRvIG1haW50YWluIG9yZGVyLiBVc2VzIGJpbmFyeSBzZWFyY2guXG4gIF8uc29ydGVkSW5kZXggPSBmdW5jdGlvbihhcnJheSwgb2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICAgIHZhciB2YWx1ZSA9IGl0ZXJhdGVlKG9iaik7XG4gICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICB2YXIgbWlkID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcbiAgICAgIGlmIChpdGVyYXRlZShhcnJheVttaWRdKSA8IHZhbHVlKSBsb3cgPSBtaWQgKyAxOyBlbHNlIGhpZ2ggPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG4gIH07XG5cbiAgLy8gR2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgaW5kZXhPZiBhbmQgbGFzdEluZGV4T2YgZnVuY3Rpb25zXG4gIGZ1bmN0aW9uIGNyZWF0ZUluZGV4RmluZGVyKGRpciwgcHJlZGljYXRlRmluZCwgc29ydGVkSW5kZXgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGlkeCkge1xuICAgICAgdmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgICAgaWYgKHR5cGVvZiBpZHggPT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGRpciA+IDApIHtcbiAgICAgICAgICAgIGkgPSBpZHggPj0gMCA/IGlkeCA6IE1hdGgubWF4KGlkeCArIGxlbmd0aCwgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZW5ndGggPSBpZHggPj0gMCA/IE1hdGgubWluKGlkeCArIDEsIGxlbmd0aCkgOiBpZHggKyBsZW5ndGggKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNvcnRlZEluZGV4ICYmIGlkeCAmJiBsZW5ndGgpIHtcbiAgICAgICAgaWR4ID0gc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyYXlbaWR4XSA9PT0gaXRlbSA/IGlkeCA6IC0xO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgICAgaWR4ID0gcHJlZGljYXRlRmluZChzbGljZS5jYWxsKGFycmF5LCBpLCBsZW5ndGgpLCBfLmlzTmFOKTtcbiAgICAgICAgcmV0dXJuIGlkeCA+PSAwID8gaWR4ICsgaSA6IC0xO1xuICAgICAgfVxuICAgICAgZm9yIChpZHggPSBkaXIgPiAwID8gaSA6IGxlbmd0aCAtIDE7IGlkeCA+PSAwICYmIGlkeCA8IGxlbmd0aDsgaWR4ICs9IGRpcikge1xuICAgICAgICBpZiAoYXJyYXlbaWR4XSA9PT0gaXRlbSkgcmV0dXJuIGlkeDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhbiBpdGVtIGluIGFuIGFycmF5LFxuICAvLyBvciAtMSBpZiB0aGUgaXRlbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5LlxuICAvLyBJZiB0aGUgYXJyYXkgaXMgbGFyZ2UgYW5kIGFscmVhZHkgaW4gc29ydCBvcmRlciwgcGFzcyBgdHJ1ZWBcbiAgLy8gZm9yICoqaXNTb3J0ZWQqKiB0byB1c2UgYmluYXJ5IHNlYXJjaC5cbiAgXy5pbmRleE9mID0gY3JlYXRlSW5kZXhGaW5kZXIoMSwgXy5maW5kSW5kZXgsIF8uc29ydGVkSW5kZXgpO1xuICBfLmxhc3RJbmRleE9mID0gY3JlYXRlSW5kZXhGaW5kZXIoLTEsIF8uZmluZExhc3RJbmRleCk7XG5cbiAgLy8gR2VuZXJhdGUgYW4gaW50ZWdlciBBcnJheSBjb250YWluaW5nIGFuIGFyaXRobWV0aWMgcHJvZ3Jlc3Npb24uIEEgcG9ydCBvZlxuICAvLyB0aGUgbmF0aXZlIFB5dGhvbiBgcmFuZ2UoKWAgZnVuY3Rpb24uIFNlZVxuICAvLyBbdGhlIFB5dGhvbiBkb2N1bWVudGF0aW9uXShodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvZnVuY3Rpb25zLmh0bWwjcmFuZ2UpLlxuICBfLnJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoc3RvcCA9PSBudWxsKSB7XG4gICAgICBzdG9wID0gc3RhcnQgfHwgMDtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG4gICAgc3RlcCA9IHN0ZXAgfHwgMTtcblxuICAgIHZhciBsZW5ndGggPSBNYXRoLm1heChNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSwgMCk7XG4gICAgdmFyIHJhbmdlID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGxlbmd0aDsgaWR4KyssIHN0YXJ0ICs9IHN0ZXApIHtcbiAgICAgIHJhbmdlW2lkeF0gPSBzdGFydDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gKGFoZW0pIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gZXhlY3V0ZSBhIGZ1bmN0aW9uIGFzIGEgY29uc3RydWN0b3JcbiAgLy8gb3IgYSBub3JtYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJvdmlkZWQgYXJndW1lbnRzXG4gIHZhciBleGVjdXRlQm91bmQgPSBmdW5jdGlvbihzb3VyY2VGdW5jLCBib3VuZEZ1bmMsIGNvbnRleHQsIGNhbGxpbmdDb250ZXh0LCBhcmdzKSB7XG4gICAgaWYgKCEoY2FsbGluZ0NvbnRleHQgaW5zdGFuY2VvZiBib3VuZEZ1bmMpKSByZXR1cm4gc291cmNlRnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB2YXIgc2VsZiA9IGJhc2VDcmVhdGUoc291cmNlRnVuYy5wcm90b3R5cGUpO1xuICAgIHZhciByZXN1bHQgPSBzb3VyY2VGdW5jLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIGlmIChfLmlzT2JqZWN0KHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgZnVuY3Rpb24gYm91bmQgdG8gYSBnaXZlbiBvYmplY3QgKGFzc2lnbmluZyBgdGhpc2AsIGFuZCBhcmd1bWVudHMsXG4gIC8vIG9wdGlvbmFsbHkpLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgRnVuY3Rpb24uYmluZGAgaWZcbiAgLy8gYXZhaWxhYmxlLlxuICBfLmJpbmQgPSBmdW5jdGlvbihmdW5jLCBjb250ZXh0KSB7XG4gICAgaWYgKG5hdGl2ZUJpbmQgJiYgZnVuYy5iaW5kID09PSBuYXRpdmVCaW5kKSByZXR1cm4gbmF0aXZlQmluZC5hcHBseShmdW5jLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGlmICghXy5pc0Z1bmN0aW9uKGZ1bmMpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdCaW5kIG11c3QgYmUgY2FsbGVkIG9uIGEgZnVuY3Rpb24nKTtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleGVjdXRlQm91bmQoZnVuYywgYm91bmQsIGNvbnRleHQsIHRoaXMsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIGJvdW5kO1xuICB9O1xuXG4gIC8vIFBhcnRpYWxseSBhcHBseSBhIGZ1bmN0aW9uIGJ5IGNyZWF0aW5nIGEgdmVyc2lvbiB0aGF0IGhhcyBoYWQgc29tZSBvZiBpdHNcbiAgLy8gYXJndW1lbnRzIHByZS1maWxsZWQsIHdpdGhvdXQgY2hhbmdpbmcgaXRzIGR5bmFtaWMgYHRoaXNgIGNvbnRleHQuIF8gYWN0c1xuICAvLyBhcyBhIHBsYWNlaG9sZGVyLCBhbGxvd2luZyBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzIHRvIGJlIHByZS1maWxsZWQuXG4gIF8ucGFydGlhbCA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICB2YXIgYm91bmRBcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBib3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gMCwgbGVuZ3RoID0gYm91bmRBcmdzLmxlbmd0aDtcbiAgICAgIHZhciBhcmdzID0gQXJyYXkobGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJnc1tpXSA9IGJvdW5kQXJnc1tpXSA9PT0gXyA/IGFyZ3VtZW50c1twb3NpdGlvbisrXSA6IGJvdW5kQXJnc1tpXTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGFyZ3VtZW50cy5sZW5ndGgpIGFyZ3MucHVzaChhcmd1bWVudHNbcG9zaXRpb24rK10pO1xuICAgICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgdGhpcywgdGhpcywgYXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gYm91bmQ7XG4gIH07XG5cbiAgLy8gQmluZCBhIG51bWJlciBvZiBhbiBvYmplY3QncyBtZXRob2RzIHRvIHRoYXQgb2JqZWN0LiBSZW1haW5pbmcgYXJndW1lbnRzXG4gIC8vIGFyZSB0aGUgbWV0aG9kIG5hbWVzIHRvIGJlIGJvdW5kLiBVc2VmdWwgZm9yIGVuc3VyaW5nIHRoYXQgYWxsIGNhbGxiYWNrc1xuICAvLyBkZWZpbmVkIG9uIGFuIG9iamVjdCBiZWxvbmcgdG8gaXQuXG4gIF8uYmluZEFsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLCBrZXk7XG4gICAgaWYgKGxlbmd0aCA8PSAxKSB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBbGwgbXVzdCBiZSBwYXNzZWQgZnVuY3Rpb24gbmFtZXMnKTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIG9ialtrZXldID0gXy5iaW5kKG9ialtrZXldLCBvYmopO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG4gIF8ubWVtb2l6ZSA9IGZ1bmN0aW9uKGZ1bmMsIGhhc2hlcikge1xuICAgIHZhciBtZW1vaXplID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgY2FjaGUgPSBtZW1vaXplLmNhY2hlO1xuICAgICAgdmFyIGFkZHJlc3MgPSAnJyArIChoYXNoZXIgPyBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGtleSk7XG4gICAgICBpZiAoIV8uaGFzKGNhY2hlLCBhZGRyZXNzKSkgY2FjaGVbYWRkcmVzc10gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gY2FjaGVbYWRkcmVzc107XG4gICAgfTtcbiAgICBtZW1vaXplLmNhY2hlID0ge307XG4gICAgcmV0dXJuIG1lbW9pemU7XG4gIH07XG5cbiAgLy8gRGVsYXlzIGEgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCBhbmQgdGhlbiBjYWxsc1xuICAvLyBpdCB3aXRoIHRoZSBhcmd1bWVudHMgc3VwcGxpZWQuXG4gIF8uZGVsYXkgPSBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIHdhaXQpO1xuICB9O1xuXG4gIC8vIERlZmVycyBhIGZ1bmN0aW9uLCBzY2hlZHVsaW5nIGl0IHRvIHJ1biBhZnRlciB0aGUgY3VycmVudCBjYWxsIHN0YWNrIGhhc1xuICAvLyBjbGVhcmVkLlxuICBfLmRlZmVyID0gXy5wYXJ0aWFsKF8uZGVsYXksIF8sIDEpO1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICAvLyBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAgLy8gYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICAvLyBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICAvLyBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAgXy50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgICB2YXIgcHJldmlvdXMgPSAwO1xuICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IF8ubm93KCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3cgPSBfLm5vdygpO1xuICAgICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gIC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICBfLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQsIGFyZ3MsIGNvbnRleHQsIHRpbWVzdGFtcCwgcmVzdWx0O1xuXG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGFzdCA9IF8ubm93KCkgLSB0aW1lc3RhbXA7XG5cbiAgICAgIGlmIChsYXN0IDwgd2FpdCAmJiBsYXN0ID49IDApIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdGltZXN0YW1wID0gXy5ub3coKTtcbiAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgaWYgKCF0aW1lb3V0KSB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBmdW5jdGlvbiBwYXNzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIHNlY29uZCxcbiAgLy8gYWxsb3dpbmcgeW91IHRvIGFkanVzdCBhcmd1bWVudHMsIHJ1biBjb2RlIGJlZm9yZSBhbmQgYWZ0ZXIsIGFuZFxuICAvLyBjb25kaXRpb25hbGx5IGV4ZWN1dGUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuICBfLndyYXAgPSBmdW5jdGlvbihmdW5jLCB3cmFwcGVyKSB7XG4gICAgcmV0dXJuIF8ucGFydGlhbCh3cmFwcGVyLCBmdW5jKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgbmVnYXRlZCB2ZXJzaW9uIG9mIHRoZSBwYXNzZWQtaW4gcHJlZGljYXRlLlxuICBfLm5lZ2F0ZSA9IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhcHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgYSBsaXN0IG9mIGZ1bmN0aW9ucywgZWFjaFxuICAvLyBjb25zdW1pbmcgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhhdCBmb2xsb3dzLlxuICBfLmNvbXBvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgc3RhcnQgPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGkgPSBzdGFydDtcbiAgICAgIHZhciByZXN1bHQgPSBhcmdzW3N0YXJ0XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgd2hpbGUgKGktLSkgcmVzdWx0ID0gYXJnc1tpXS5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIG9uIGFuZCBhZnRlciB0aGUgTnRoIGNhbGwuXG4gIF8uYWZ0ZXIgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIHVwIHRvIChidXQgbm90IGluY2x1ZGluZykgdGhlIE50aCBjYWxsLlxuICBfLmJlZm9yZSA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgdmFyIG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPiAwKSB7XG4gICAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXMgPD0gMSkgZnVuYyA9IG51bGw7XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbW9zdCBvbmUgdGltZSwgbm8gbWF0dGVyIGhvd1xuICAvLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuICBfLm9uY2UgPSBfLnBhcnRpYWwoXy5iZWZvcmUsIDIpO1xuXG4gIC8vIE9iamVjdCBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEtleXMgaW4gSUUgPCA5IHRoYXQgd29uJ3QgYmUgaXRlcmF0ZWQgYnkgYGZvciBrZXkgaW4gLi4uYCBhbmQgdGh1cyBtaXNzZWQuXG4gIHZhciBoYXNFbnVtQnVnID0gIXt0b1N0cmluZzogbnVsbH0ucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyk7XG4gIHZhciBub25FbnVtZXJhYmxlUHJvcHMgPSBbJ3ZhbHVlT2YnLCAnaXNQcm90b3R5cGVPZicsICd0b1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJ2hhc093blByb3BlcnR5JywgJ3RvTG9jYWxlU3RyaW5nJ107XG5cbiAgZnVuY3Rpb24gY29sbGVjdE5vbkVudW1Qcm9wcyhvYmosIGtleXMpIHtcbiAgICB2YXIgbm9uRW51bUlkeCA9IG5vbkVudW1lcmFibGVQcm9wcy5sZW5ndGg7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gb2JqLmNvbnN0cnVjdG9yO1xuICAgIHZhciBwcm90byA9IChfLmlzRnVuY3Rpb24oY29uc3RydWN0b3IpICYmIGNvbnN0cnVjdG9yLnByb3RvdHlwZSkgfHwgT2JqUHJvdG87XG5cbiAgICAvLyBDb25zdHJ1Y3RvciBpcyBhIHNwZWNpYWwgY2FzZS5cbiAgICB2YXIgcHJvcCA9ICdjb25zdHJ1Y3Rvcic7XG4gICAgaWYgKF8uaGFzKG9iaiwgcHJvcCkgJiYgIV8uY29udGFpbnMoa2V5cywgcHJvcCkpIGtleXMucHVzaChwcm9wKTtcblxuICAgIHdoaWxlIChub25FbnVtSWR4LS0pIHtcbiAgICAgIHByb3AgPSBub25FbnVtZXJhYmxlUHJvcHNbbm9uRW51bUlkeF07XG4gICAgICBpZiAocHJvcCBpbiBvYmogJiYgb2JqW3Byb3BdICE9PSBwcm90b1twcm9wXSAmJiAhXy5jb250YWlucyhrZXlzLCBwcm9wKSkge1xuICAgICAgICBrZXlzLnB1c2gocHJvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0cmlldmUgdGhlIG5hbWVzIG9mIGFuIG9iamVjdCdzIG93biBwcm9wZXJ0aWVzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgT2JqZWN0LmtleXNgXG4gIF8ua2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgaWYgKG5hdGl2ZUtleXMpIHJldHVybiBuYXRpdmVLZXlzKG9iaik7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgICAvLyBBaGVtLCBJRSA8IDkuXG4gICAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSBhbGwgdGhlIHByb3BlcnR5IG5hbWVzIG9mIGFuIG9iamVjdC5cbiAgXy5hbGxLZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGtleXMucHVzaChrZXkpO1xuICAgIC8vIEFoZW0sIElFIDwgOS5cbiAgICBpZiAoaGFzRW51bUJ1ZykgY29sbGVjdE5vbkVudW1Qcm9wcyhvYmosIGtleXMpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIHRoZSB2YWx1ZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgXy52YWx1ZXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZXNbaV0gPSBvYmpba2V5c1tpXV07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0ZWUgdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBvYmplY3RcbiAgLy8gSW4gY29udHJhc3QgdG8gXy5tYXAgaXQgcmV0dXJucyBhbiBvYmplY3RcbiAgXy5tYXBPYmplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAgXy5rZXlzKG9iaiksXG4gICAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICAgICAgcmVzdWx0cyA9IHt9LFxuICAgICAgICAgIGN1cnJlbnRLZXk7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGN1cnJlbnRLZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgICAgcmVzdWx0c1tjdXJyZW50S2V5XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENvbnZlcnQgYW4gb2JqZWN0IGludG8gYSBsaXN0IG9mIGBba2V5LCB2YWx1ZV1gIHBhaXJzLlxuICBfLnBhaXJzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHBhaXJzID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBwYWlyc1tpXSA9IFtrZXlzW2ldLCBvYmpba2V5c1tpXV1dO1xuICAgIH1cbiAgICByZXR1cm4gcGFpcnM7XG4gIH07XG5cbiAgLy8gSW52ZXJ0IHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGUgdmFsdWVzIG11c3QgYmUgc2VyaWFsaXphYmxlLlxuICBfLmludmVydCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbb2JqW2tleXNbaV1dXSA9IGtleXNbaV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgc29ydGVkIGxpc3Qgb2YgdGhlIGZ1bmN0aW9uIG5hbWVzIGF2YWlsYWJsZSBvbiB0aGUgb2JqZWN0LlxuICAvLyBBbGlhc2VkIGFzIGBtZXRob2RzYFxuICBfLmZ1bmN0aW9ucyA9IF8ubWV0aG9kcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBuYW1lcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24ob2JqW2tleV0pKSBuYW1lcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lcy5zb3J0KCk7XG4gIH07XG5cbiAgLy8gRXh0ZW5kIGEgZ2l2ZW4gb2JqZWN0IHdpdGggYWxsIHRoZSBwcm9wZXJ0aWVzIGluIHBhc3NlZC1pbiBvYmplY3QocykuXG4gIF8uZXh0ZW5kID0gY3JlYXRlQXNzaWduZXIoXy5hbGxLZXlzKTtcblxuICAvLyBBc3NpZ25zIGEgZ2l2ZW4gb2JqZWN0IHdpdGggYWxsIHRoZSBvd24gcHJvcGVydGllcyBpbiB0aGUgcGFzc2VkLWluIG9iamVjdChzKVxuICAvLyAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnbilcbiAgXy5leHRlbmRPd24gPSBfLmFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKF8ua2V5cyk7XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3Qga2V5IG9uIGFuIG9iamVjdCB0aGF0IHBhc3NlcyBhIHByZWRpY2F0ZSB0ZXN0XG4gIF8uZmluZEtleSA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopLCBrZXk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAocHJlZGljYXRlKG9ialtrZXldLCBrZXksIG9iaikpIHJldHVybiBrZXk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIHdoaXRlbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ucGljayA9IGZ1bmN0aW9uKG9iamVjdCwgb2l0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9LCBvYmogPSBvYmplY3QsIGl0ZXJhdGVlLCBrZXlzO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKG9pdGVyYXRlZSkpIHtcbiAgICAgIGtleXMgPSBfLmFsbEtleXMob2JqKTtcbiAgICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihvaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gZmxhdHRlbihhcmd1bWVudHMsIGZhbHNlLCBmYWxzZSwgMSk7XG4gICAgICBpdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBrZXksIG9iaikgeyByZXR1cm4ga2V5IGluIG9iajsgfTtcbiAgICAgIG9iaiA9IE9iamVjdChvYmopO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGlmIChpdGVyYXRlZSh2YWx1ZSwga2V5LCBvYmopKSByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgYmxhY2tsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5vbWl0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGlmIChfLmlzRnVuY3Rpb24oaXRlcmF0ZWUpKSB7XG4gICAgICBpdGVyYXRlZSA9IF8ubmVnYXRlKGl0ZXJhdGVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtleXMgPSBfLm1hcChmbGF0dGVuKGFyZ3VtZW50cywgZmFsc2UsIGZhbHNlLCAxKSwgU3RyaW5nKTtcbiAgICAgIGl0ZXJhdGVlID0gZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICByZXR1cm4gIV8uY29udGFpbnMoa2V5cywga2V5KTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBfLnBpY2sob2JqLCBpdGVyYXRlZSwgY29udGV4dCk7XG4gIH07XG5cbiAgLy8gRmlsbCBpbiBhIGdpdmVuIG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgXy5kZWZhdWx0cyA9IGNyZWF0ZUFzc2lnbmVyKF8uYWxsS2V5cywgdHJ1ZSk7XG5cbiAgLy8gQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoZSBnaXZlbiBwcm90b3R5cGUgb2JqZWN0LlxuICAvLyBJZiBhZGRpdGlvbmFsIHByb3BlcnRpZXMgYXJlIHByb3ZpZGVkIHRoZW4gdGhleSB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuICAvLyBjcmVhdGVkIG9iamVjdC5cbiAgXy5jcmVhdGUgPSBmdW5jdGlvbihwcm90b3R5cGUsIHByb3BzKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VDcmVhdGUocHJvdG90eXBlKTtcbiAgICBpZiAocHJvcHMpIF8uZXh0ZW5kT3duKHJlc3VsdCwgcHJvcHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgKHNoYWxsb3ctY2xvbmVkKSBkdXBsaWNhdGUgb2YgYW4gb2JqZWN0LlxuICBfLmNsb25lID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIF8uaXNBcnJheShvYmopID8gb2JqLnNsaWNlKCkgOiBfLmV4dGVuZCh7fSwgb2JqKTtcbiAgfTtcblxuICAvLyBJbnZva2VzIGludGVyY2VwdG9yIHdpdGggdGhlIG9iaiwgYW5kIHRoZW4gcmV0dXJucyBvYmouXG4gIC8vIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBtZXRob2QgaXMgdG8gXCJ0YXAgaW50b1wiIGEgbWV0aG9kIGNoYWluLCBpblxuICAvLyBvcmRlciB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gaW50ZXJtZWRpYXRlIHJlc3VsdHMgd2l0aGluIHRoZSBjaGFpbi5cbiAgXy50YXAgPSBmdW5jdGlvbihvYmosIGludGVyY2VwdG9yKSB7XG4gICAgaW50ZXJjZXB0b3Iob2JqKTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybnMgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmlzTWF0Y2ggPSBmdW5jdGlvbihvYmplY3QsIGF0dHJzKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMoYXR0cnMpLCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiAhbGVuZ3RoO1xuICAgIHZhciBvYmogPSBPYmplY3Qob2JqZWN0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChhdHRyc1trZXldICE9PSBvYmpba2V5XSB8fCAhKGtleSBpbiBvYmopKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG5cbiAgLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbiAgdmFyIGVxID0gZnVuY3Rpb24oYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXG4gICAgaWYgKGEgPT09IGIpIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcbiAgICAvLyBBIHN0cmljdCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGBudWxsID09IHVuZGVmaW5lZGAuXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBhID09PSBiO1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT09IHRvU3RyaW5nLmNhbGwoYikpIHJldHVybiBmYWxzZTtcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgLy8gU3RyaW5ncywgbnVtYmVycywgcmVndWxhciBleHByZXNzaW9ucywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOlxuICAgICAgLy8gUmVnRXhwcyBhcmUgY29lcmNlZCB0byBzdHJpbmdzIGZvciBjb21wYXJpc29uIChOb3RlOiAnJyArIC9hL2kgPT09ICcvYS9pJylcbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgcmV0dXJuICcnICsgYSA9PT0gJycgKyBiO1xuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICAgICAgLy8gT2JqZWN0KE5hTikgaXMgZXF1aXZhbGVudCB0byBOYU5cbiAgICAgICAgaWYgKCthICE9PSArYSkgcmV0dXJuICtiICE9PSArYjtcbiAgICAgICAgLy8gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuICthID09PSAwID8gMSAvICthID09PSAxIC8gYiA6ICthID09PSArYjtcbiAgICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOlxuICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICAgIHJldHVybiArYSA9PT0gK2I7XG4gICAgfVxuXG4gICAgdmFyIGFyZUFycmF5cyA9IGNsYXNzTmFtZSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICBpZiAoIWFyZUFycmF5cykge1xuICAgICAgaWYgKHR5cGVvZiBhICE9ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3RgcyBvciBgQXJyYXlgc1xuICAgICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICAgIGlmIChhQ3RvciAhPT0gYkN0b3IgJiYgIShfLmlzRnVuY3Rpb24oYUN0b3IpICYmIGFDdG9yIGluc3RhbmNlb2YgYUN0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmlzRnVuY3Rpb24oYkN0b3IpICYmIGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICYmICgnY29uc3RydWN0b3InIGluIGEgJiYgJ2NvbnN0cnVjdG9yJyBpbiBiKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cblxuICAgIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICAvLyBJdCdzIGRvbmUgaGVyZSBzaW5jZSB3ZSBvbmx5IG5lZWQgdGhlbSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzIGNvbXBhcmlzb24uXG4gICAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xuICAgIGJTdGFjayA9IGJTdGFjayB8fCBbXTtcbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wdXNoKGEpO1xuICAgIGJTdGFjay5wdXNoKGIpO1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgaWYgKGFyZUFycmF5cykge1xuICAgICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGlmICghZXEoYVtsZW5ndGhdLCBiW2xlbmd0aF0sIGFTdGFjaywgYlN0YWNrKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKGEpLCBrZXk7XG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cbiAgICAgIGlmIChfLmtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXJcbiAgICAgICAga2V5ID0ga2V5c1tsZW5ndGhdO1xuICAgICAgICBpZiAoIShfLmhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wb3AoKTtcbiAgICBiU3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSBhIGRlZXAgY29tcGFyaXNvbiB0byBjaGVjayBpZiB0d28gb2JqZWN0cyBhcmUgZXF1YWwuXG4gIF8uaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXEoYSwgYik7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiBhcnJheSwgc3RyaW5nLCBvciBvYmplY3QgZW1wdHk/XG4gIC8vIEFuIFwiZW1wdHlcIiBvYmplY3QgaGFzIG5vIGVudW1lcmFibGUgb3duLXByb3BlcnRpZXMuXG4gIF8uaXNFbXB0eSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikgJiYgKF8uaXNBcnJheShvYmopIHx8IF8uaXNTdHJpbmcob2JqKSB8fCBfLmlzQXJndW1lbnRzKG9iaikpKSByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgICByZXR1cm4gXy5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBET00gZWxlbWVudD9cbiAgXy5pc0VsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhbiBhcnJheT9cbiAgLy8gRGVsZWdhdGVzIHRvIEVDTUE1J3MgbmF0aXZlIEFycmF5LmlzQXJyYXlcbiAgXy5pc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgYW4gb2JqZWN0P1xuICBfLmlzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2Ygb2JqO1xuICAgIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhb2JqO1xuICB9O1xuXG4gIC8vIEFkZCBzb21lIGlzVHlwZSBtZXRob2RzOiBpc0FyZ3VtZW50cywgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0RhdGUsIGlzUmVnRXhwLCBpc0Vycm9yLlxuICBfLmVhY2goWydBcmd1bWVudHMnLCAnRnVuY3Rpb24nLCAnU3RyaW5nJywgJ051bWJlcicsICdEYXRlJywgJ1JlZ0V4cCcsICdFcnJvciddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgX1snaXMnICsgbmFtZV0gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIERlZmluZSBhIGZhbGxiYWNrIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBpbiBicm93c2VycyAoYWhlbSwgSUUgPCA5KSwgd2hlcmVcbiAgLy8gdGhlcmUgaXNuJ3QgYW55IGluc3BlY3RhYmxlIFwiQXJndW1lbnRzXCIgdHlwZS5cbiAgaWYgKCFfLmlzQXJndW1lbnRzKGFyZ3VtZW50cykpIHtcbiAgICBfLmlzQXJndW1lbnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gXy5oYXMob2JqLCAnY2FsbGVlJyk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIE9wdGltaXplIGBpc0Z1bmN0aW9uYCBpZiBhcHByb3ByaWF0ZS4gV29yayBhcm91bmQgc29tZSB0eXBlb2YgYnVncyBpbiBvbGQgdjgsXG4gIC8vIElFIDExICgjMTYyMSksIGFuZCBpbiBTYWZhcmkgOCAoIzE5MjkpLlxuICBpZiAodHlwZW9mIC8uLyAhPSAnZnVuY3Rpb24nICYmIHR5cGVvZiBJbnQ4QXJyYXkgIT0gJ29iamVjdCcpIHtcbiAgICBfLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XG4gICAgfTtcbiAgfVxuXG4gIC8vIElzIGEgZ2l2ZW4gb2JqZWN0IGEgZmluaXRlIG51bWJlcj9cbiAgXy5pc0Zpbml0ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBpc0Zpbml0ZShvYmopICYmICFpc05hTihwYXJzZUZsb2F0KG9iaikpO1xuICB9O1xuXG4gIC8vIElzIHRoZSBnaXZlbiB2YWx1ZSBgTmFOYD8gKE5hTiBpcyB0aGUgb25seSBudW1iZXIgd2hpY2ggZG9lcyBub3QgZXF1YWwgaXRzZWxmKS5cbiAgXy5pc05hTiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfLmlzTnVtYmVyKG9iaikgJiYgb2JqICE9PSArb2JqO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBib29sZWFuP1xuICBfLmlzQm9vbGVhbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGVxdWFsIHRvIG51bGw/XG4gIF8uaXNOdWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIHVuZGVmaW5lZD9cbiAgXy5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHZvaWQgMDtcbiAgfTtcblxuICAvLyBTaG9ydGN1dCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5IGRpcmVjdGx5XG4gIC8vIG9uIGl0c2VsZiAoaW4gb3RoZXIgd29yZHMsIG5vdCBvbiBhIHByb3RvdHlwZSkuXG4gIF8uaGFzID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gb2JqICE9IG51bGwgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG4gIH07XG5cbiAgLy8gVXRpbGl0eSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSdW4gVW5kZXJzY29yZS5qcyBpbiAqbm9Db25mbGljdCogbW9kZSwgcmV0dXJuaW5nIHRoZSBgX2AgdmFyaWFibGUgdG8gaXRzXG4gIC8vIHByZXZpb3VzIG93bmVyLiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcm9vdC5fID0gcHJldmlvdXNVbmRlcnNjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEtlZXAgdGhlIGlkZW50aXR5IGZ1bmN0aW9uIGFyb3VuZCBmb3IgZGVmYXVsdCBpdGVyYXRlZXMuXG4gIF8uaWRlbnRpdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvLyBQcmVkaWNhdGUtZ2VuZXJhdGluZyBmdW5jdGlvbnMuIE9mdGVuIHVzZWZ1bCBvdXRzaWRlIG9mIFVuZGVyc2NvcmUuXG4gIF8uY29uc3RhbnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gIF8ubm9vcCA9IGZ1bmN0aW9uKCl7fTtcblxuICBfLnByb3BlcnR5ID0gcHJvcGVydHk7XG5cbiAgLy8gR2VuZXJhdGVzIGEgZnVuY3Rpb24gZm9yIGEgZ2l2ZW4gb2JqZWN0IHRoYXQgcmV0dXJucyBhIGdpdmVuIHByb3BlcnR5LlxuICBfLnByb3BlcnR5T2YgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09IG51bGwgPyBmdW5jdGlvbigpe30gOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBwcmVkaWNhdGUgZm9yIGNoZWNraW5nIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZlxuICAvLyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5tYXRjaGVyID0gXy5tYXRjaGVzID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBhdHRycyA9IF8uZXh0ZW5kT3duKHt9LCBhdHRycyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIF8uaXNNYXRjaChvYmosIGF0dHJzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJ1biBhIGZ1bmN0aW9uICoqbioqIHRpbWVzLlxuICBfLnRpbWVzID0gZnVuY3Rpb24obiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgYWNjdW0gPSBBcnJheShNYXRoLm1heCgwLCBuKSk7XG4gICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykgYWNjdW1baV0gPSBpdGVyYXRlZShpKTtcbiAgICByZXR1cm4gYWNjdW07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoaW5jbHVzaXZlKS5cbiAgXy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIGlmIChtYXggPT0gbnVsbCkge1xuICAgICAgbWF4ID0gbWluO1xuICAgICAgbWluID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG4gIH07XG5cbiAgLy8gQSAocG9zc2libHkgZmFzdGVyKSB3YXkgdG8gZ2V0IHRoZSBjdXJyZW50IHRpbWVzdGFtcCBhcyBhbiBpbnRlZ2VyLlxuICBfLm5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfTtcblxuICAgLy8gTGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cbiAgdmFyIGVzY2FwZU1hcCA9IHtcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmI3gyNzsnLFxuICAgICdgJzogJyYjeDYwOydcbiAgfTtcbiAgdmFyIHVuZXNjYXBlTWFwID0gXy5pbnZlcnQoZXNjYXBlTWFwKTtcblxuICAvLyBGdW5jdGlvbnMgZm9yIGVzY2FwaW5nIGFuZCB1bmVzY2FwaW5nIHN0cmluZ3MgdG8vZnJvbSBIVE1MIGludGVycG9sYXRpb24uXG4gIHZhciBjcmVhdGVFc2NhcGVyID0gZnVuY3Rpb24obWFwKSB7XG4gICAgdmFyIGVzY2FwZXIgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hcFttYXRjaF07XG4gICAgfTtcbiAgICAvLyBSZWdleGVzIGZvciBpZGVudGlmeWluZyBhIGtleSB0aGF0IG5lZWRzIHRvIGJlIGVzY2FwZWRcbiAgICB2YXIgc291cmNlID0gJyg/OicgKyBfLmtleXMobWFwKS5qb2luKCd8JykgKyAnKSc7XG4gICAgdmFyIHRlc3RSZWdleHAgPSBSZWdFeHAoc291cmNlKTtcbiAgICB2YXIgcmVwbGFjZVJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UsICdnJyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgc3RyaW5nID0gc3RyaW5nID09IG51bGwgPyAnJyA6ICcnICsgc3RyaW5nO1xuICAgICAgcmV0dXJuIHRlc3RSZWdleHAudGVzdChzdHJpbmcpID8gc3RyaW5nLnJlcGxhY2UocmVwbGFjZVJlZ2V4cCwgZXNjYXBlcikgOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgXy5lc2NhcGUgPSBjcmVhdGVFc2NhcGVyKGVzY2FwZU1hcCk7XG4gIF8udW5lc2NhcGUgPSBjcmVhdGVFc2NhcGVyKHVuZXNjYXBlTWFwKTtcblxuICAvLyBJZiB0aGUgdmFsdWUgb2YgdGhlIG5hbWVkIGBwcm9wZXJ0eWAgaXMgYSBmdW5jdGlvbiB0aGVuIGludm9rZSBpdCB3aXRoIHRoZVxuICAvLyBgb2JqZWN0YCBhcyBjb250ZXh0OyBvdGhlcndpc2UsIHJldHVybiBpdC5cbiAgXy5yZXN1bHQgPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5LCBmYWxsYmFjaykge1xuICAgIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdm9pZCAwIDogb2JqZWN0W3Byb3BlcnR5XTtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWUgPSBmYWxsYmFjaztcbiAgICB9XG4gICAgcmV0dXJuIF8uaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKG9iamVjdCkgOiB2YWx1ZTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBpbnRlZ2VyIGlkICh1bmlxdWUgd2l0aGluIHRoZSBlbnRpcmUgY2xpZW50IHNlc3Npb24pLlxuICAvLyBVc2VmdWwgZm9yIHRlbXBvcmFyeSBET00gaWRzLlxuICB2YXIgaWRDb3VudGVyID0gMDtcbiAgXy51bmlxdWVJZCA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIHZhciBpZCA9ICsraWRDb3VudGVyICsgJyc7XG4gICAgcmV0dXJuIHByZWZpeCA/IHByZWZpeCArIGlkIDogaWQ7XG4gIH07XG5cbiAgLy8gQnkgZGVmYXVsdCwgVW5kZXJzY29yZSB1c2VzIEVSQi1zdHlsZSB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLCBjaGFuZ2UgdGhlXG4gIC8vIGZvbGxvd2luZyB0ZW1wbGF0ZSBzZXR0aW5ncyB0byB1c2UgYWx0ZXJuYXRpdmUgZGVsaW1pdGVycy5cbiAgXy50ZW1wbGF0ZVNldHRpbmdzID0ge1xuICAgIGV2YWx1YXRlICAgIDogLzwlKFtcXHNcXFNdKz8pJT4vZyxcbiAgICBpbnRlcnBvbGF0ZSA6IC88JT0oW1xcc1xcU10rPyklPi9nLFxuICAgIGVzY2FwZSAgICAgIDogLzwlLShbXFxzXFxTXSs/KSU+L2dcbiAgfTtcblxuICAvLyBXaGVuIGN1c3RvbWl6aW5nIGB0ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4gIC8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbiAgLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG4gIHZhciBub01hdGNoID0gLyguKV4vO1xuXG4gIC8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4gIC8vIHN0cmluZyBsaXRlcmFsLlxuICB2YXIgZXNjYXBlcyA9IHtcbiAgICBcIidcIjogICAgICBcIidcIixcbiAgICAnXFxcXCc6ICAgICAnXFxcXCcsXG4gICAgJ1xccic6ICAgICAncicsXG4gICAgJ1xcbic6ICAgICAnbicsXG4gICAgJ1xcdTIwMjgnOiAndTIwMjgnLFxuICAgICdcXHUyMDI5JzogJ3UyMDI5J1xuICB9O1xuXG4gIHZhciBlc2NhcGVyID0gL1xcXFx8J3xcXHJ8XFxufFxcdTIwMjh8XFx1MjAyOS9nO1xuXG4gIHZhciBlc2NhcGVDaGFyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gJ1xcXFwnICsgZXNjYXBlc1ttYXRjaF07XG4gIH07XG5cbiAgLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbiAgLy8gVW5kZXJzY29yZSB0ZW1wbGF0aW5nIGhhbmRsZXMgYXJiaXRyYXJ5IGRlbGltaXRlcnMsIHByZXNlcnZlcyB3aGl0ZXNwYWNlLFxuICAvLyBhbmQgY29ycmVjdGx5IGVzY2FwZXMgcXVvdGVzIHdpdGhpbiBpbnRlcnBvbGF0ZWQgY29kZS5cbiAgLy8gTkI6IGBvbGRTZXR0aW5nc2Agb25seSBleGlzdHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICBfLnRlbXBsYXRlID0gZnVuY3Rpb24odGV4dCwgc2V0dGluZ3MsIG9sZFNldHRpbmdzKSB7XG4gICAgaWYgKCFzZXR0aW5ncyAmJiBvbGRTZXR0aW5ncykgc2V0dGluZ3MgPSBvbGRTZXR0aW5ncztcbiAgICBzZXR0aW5ncyA9IF8uZGVmYXVsdHMoe30sIHNldHRpbmdzLCBfLnRlbXBsYXRlU2V0dGluZ3MpO1xuXG4gICAgLy8gQ29tYmluZSBkZWxpbWl0ZXJzIGludG8gb25lIHJlZ3VsYXIgZXhwcmVzc2lvbiB2aWEgYWx0ZXJuYXRpb24uXG4gICAgdmFyIG1hdGNoZXIgPSBSZWdFeHAoW1xuICAgICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuaW50ZXJwb2xhdGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICAgIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuICAgIC8vIENvbXBpbGUgdGhlIHRlbXBsYXRlIHNvdXJjZSwgZXNjYXBpbmcgc3RyaW5nIGxpdGVyYWxzIGFwcHJvcHJpYXRlbHkuXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgICB0ZXh0LnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24obWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpLnJlcGxhY2UoZXNjYXBlciwgZXNjYXBlQ2hhcik7XG4gICAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcblxuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGVzY2FwZSArIFwiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiO1xuICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGludGVycG9sYXRlICsgXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjtcbiAgICAgIH0gZWxzZSBpZiAoZXZhbHVhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRvYmUgVk1zIG5lZWQgdGhlIG1hdGNoIHJldHVybmVkIHRvIHByb2R1Y2UgdGhlIGNvcnJlY3Qgb2ZmZXN0LlxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICAgIHNvdXJjZSArPSBcIic7XFxuXCI7XG5cbiAgICAvLyBJZiBhIHZhcmlhYmxlIGlzIG5vdCBzcGVjaWZpZWQsIHBsYWNlIGRhdGEgdmFsdWVzIGluIGxvY2FsIHNjb3BlLlxuICAgIGlmICghc2V0dGluZ3MudmFyaWFibGUpIHNvdXJjZSA9ICd3aXRoKG9ianx8e30pe1xcbicgKyBzb3VyY2UgKyAnfVxcbic7XG5cbiAgICBzb3VyY2UgPSBcInZhciBfX3QsX19wPScnLF9faj1BcnJheS5wcm90b3R5cGUuam9pbixcIiArXG4gICAgICBcInByaW50PWZ1bmN0aW9uKCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpO307XFxuXCIgK1xuICAgICAgc291cmNlICsgJ3JldHVybiBfX3A7XFxuJztcblxuICAgIHRyeSB7XG4gICAgICB2YXIgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonLCAnXycsIHNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiByZW5kZXIuY2FsbCh0aGlzLCBkYXRhLCBfKTtcbiAgICB9O1xuXG4gICAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICAgIHZhciBhcmd1bWVudCA9IHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonO1xuICAgIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgYXJndW1lbnQgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9O1xuXG4gIC8vIEFkZCBhIFwiY2hhaW5cIiBmdW5jdGlvbi4gU3RhcnQgY2hhaW5pbmcgYSB3cmFwcGVkIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLmNoYWluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGluc3RhbmNlID0gXyhvYmopO1xuICAgIGluc3RhbmNlLl9jaGFpbiA9IHRydWU7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIC8vIE9PUFxuICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgLy8gSWYgVW5kZXJzY29yZSBpcyBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgaXQgcmV0dXJucyBhIHdyYXBwZWQgb2JqZWN0IHRoYXRcbiAgLy8gY2FuIGJlIHVzZWQgT08tc3R5bGUuIFRoaXMgd3JhcHBlciBob2xkcyBhbHRlcmVkIHZlcnNpb25zIG9mIGFsbCB0aGVcbiAgLy8gdW5kZXJzY29yZSBmdW5jdGlvbnMuIFdyYXBwZWQgb2JqZWN0cyBtYXkgYmUgY2hhaW5lZC5cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udGludWUgY2hhaW5pbmcgaW50ZXJtZWRpYXRlIHJlc3VsdHMuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbihpbnN0YW5jZSwgb2JqKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLl9jaGFpbiA/IF8ob2JqKS5jaGFpbigpIDogb2JqO1xuICB9O1xuXG4gIC8vIEFkZCB5b3VyIG93biBjdXN0b20gZnVuY3Rpb25zIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5taXhpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIF8uZWFjaChfLmZ1bmN0aW9ucyhvYmopLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgZnVuYyA9IF9bbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFt0aGlzLl93cmFwcGVkXTtcbiAgICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0KHRoaXMsIGZ1bmMuYXBwbHkoXywgYXJncykpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBBZGQgYWxsIG9mIHRoZSBVbmRlcnNjb3JlIGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlciBvYmplY3QuXG4gIF8ubWl4aW4oXyk7XG5cbiAgLy8gQWRkIGFsbCBtdXRhdG9yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgXy5lYWNoKFsncG9wJywgJ3B1c2gnLCAncmV2ZXJzZScsICdzaGlmdCcsICdzb3J0JywgJ3NwbGljZScsICd1bnNoaWZ0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9iaiA9IHRoaXMuX3dyYXBwZWQ7XG4gICAgICBtZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKChuYW1lID09PSAnc2hpZnQnIHx8IG5hbWUgPT09ICdzcGxpY2UnKSAmJiBvYmoubGVuZ3RoID09PSAwKSBkZWxldGUgb2JqWzBdO1xuICAgICAgcmV0dXJuIHJlc3VsdCh0aGlzLCBvYmopO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEFkZCBhbGwgYWNjZXNzb3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBfLmVhY2goWydjb25jYXQnLCAnam9pbicsICdzbGljZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByZXN1bHQodGhpcywgbWV0aG9kLmFwcGx5KHRoaXMuX3dyYXBwZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSBhIHdyYXBwZWQgYW5kIGNoYWluZWQgb2JqZWN0LlxuICBfLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl93cmFwcGVkO1xuICB9O1xuXG4gIC8vIFByb3ZpZGUgdW53cmFwcGluZyBwcm94eSBmb3Igc29tZSBtZXRob2RzIHVzZWQgaW4gZW5naW5lIG9wZXJhdGlvbnNcbiAgLy8gc3VjaCBhcyBhcml0aG1ldGljIGFuZCBKU09OIHN0cmluZ2lmaWNhdGlvbi5cbiAgXy5wcm90b3R5cGUudmFsdWVPZiA9IF8ucHJvdG90eXBlLnRvSlNPTiA9IF8ucHJvdG90eXBlLnZhbHVlO1xuXG4gIF8ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICcnICsgdGhpcy5fd3JhcHBlZDtcbiAgfTtcblxuICAvLyBBTUQgcmVnaXN0cmF0aW9uIGhhcHBlbnMgYXQgdGhlIGVuZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFNRCBsb2FkZXJzXG4gIC8vIHRoYXQgbWF5IG5vdCBlbmZvcmNlIG5leHQtdHVybiBzZW1hbnRpY3Mgb24gbW9kdWxlcy4gRXZlbiB0aG91Z2ggZ2VuZXJhbFxuICAvLyBwcmFjdGljZSBmb3IgQU1EIHJlZ2lzdHJhdGlvbiBpcyB0byBiZSBhbm9ueW1vdXMsIHVuZGVyc2NvcmUgcmVnaXN0ZXJzXG4gIC8vIGFzIGEgbmFtZWQgbW9kdWxlIGJlY2F1c2UsIGxpa2UgalF1ZXJ5LCBpdCBpcyBhIGJhc2UgbGlicmFyeSB0aGF0IGlzXG4gIC8vIHBvcHVsYXIgZW5vdWdoIHRvIGJlIGJ1bmRsZWQgaW4gYSB0aGlyZCBwYXJ0eSBsaWIsIGJ1dCBub3QgYmUgcGFydCBvZlxuICAvLyBhbiBBTUQgbG9hZCByZXF1ZXN0LiBUaG9zZSBjYXNlcyBjb3VsZCBnZW5lcmF0ZSBhbiBlcnJvciB3aGVuIGFuXG4gIC8vIGFub255bW91cyBkZWZpbmUoKSBpcyBjYWxsZWQgb3V0c2lkZSBvZiBhIGxvYWRlciByZXF1ZXN0LlxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKCd1bmRlcnNjb3JlJywgW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF87XG4gICAgfSk7XG4gIH1cbn0uY2FsbCh0aGlzKSk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IElCTSBDb3JwLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAnTGljZW5zZScpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAnQVMgSVMnIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9wZXJzb25hbGl0eS10cmFpdC1uYW1lcycpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBJQk0gQ29ycC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICdlbicgOiByZXF1aXJlKCcuL2VuJyksXG4gICdlcycgOiByZXF1aXJlKCcuL2VzJyksXG59O1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDE1LTIwMTYgSUJNIENvcnAuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4jXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4gJ3VzZSBzdGF0aWMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2xvY2FsZXMvZW4nKTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNS0yMDE2IElCTSBDb3JwLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuI1xuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuICd1c2Ugc3RhdGljJztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9sb2NhbGVzL2VzJyk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IElCTSBDb3JwLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpLFxuICBjb250YWlucyA9IF8uY29udGFpbnMsXG4gIGV4dGVuZCA9IF8uZXh0ZW5kLFxuICBrZXlzID0gXy5rZXlzO1xuXG5jb25zdCBkaWN0aW9uYXJpZXMgPSByZXF1aXJlKCcuL2RpY3Rpb25hcmllcycpO1xuXG5cbmNsYXNzIEkxOG5EYXRhIHtcblxuICBjb25zdHJ1Y3Rvcihsb2NhbGUpIHtcbiAgICB0aGlzLl9sb2NhbGUgPSBjb250YWlucyhrZXlzKGRpY3Rpb25hcmllcyksIGxvY2FsZSkgPyBsb2NhbGUgOiAnZW4nO1xuICAgIHRoaXMuX2RpY3Rpb25hcnkgPSBkaWN0aW9uYXJpZXNbdGhpcy5fbG9jYWxlXTtcbiAgfVxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIGV4dGVuZCh7fSwgdGhpcy5fZGljdGlvbmFyeSk7XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEkxOG5EYXRhO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBJQk0gQ29ycC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5jb25zdCBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpLFxuICBleHRlbmQgPSBfLmV4dGVuZCxcbiAgcGljayAgID0gXy5waWNrLFxuICBwYWlycyAgPSBfLnBhaXJzO1xuXG5jb25zdCBJMThuRGF0YSA9IHJlcXVpcmUoJy4vaTE4bicpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gZXh0ZW5kKHRoaXMuZGVmYXVsdE9wdGlvbnMoKSwgcGljayhvcHRpb25zLCAnbG9jYWxlJykpO1xuICAgIHRoaXMuX2kxOG4gPSBuZXcgSTE4bkRhdGEodGhpcy5fb3B0aW9ucy5sb2NhbGUpO1xuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9pMThuLmRhdGEoKTtcbiAgfVxuXG4gIGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGUgOiAnZW4nXG4gICAgfTtcbiAgfVxuXG4gIG5hbWUodHJhaXRJZCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhW3RyYWl0SWRdO1xuICB9XG5cbiAgbmFtZXMoKSB7XG4gICAgcmV0dXJuIHBhaXJzKHRoaXMuX2RhdGEpLm1hcChwID0+IHBbMV0pO1xuICB9XG5cbn07XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiQWdyZWVhYmxlbmVzc1wiIDogXCJBZ3JlZWFibGVuZXNzXCIsXG4gIFwiQWx0cnVpc21cIiA6IFwiQWx0cnVpc21cIixcbiAgXCJDb29wZXJhdGlvblwiIDogXCJDb29wZXJhdGlvblwiLFxuICBcIk1vZGVzdHlcIiA6IFwiTW9kZXN0eVwiLFxuICBcIk1vcmFsaXR5XCIgOiBcIlVuY29tcHJvbWlzaW5nXCIsXG4gIFwiU3ltcGF0aHlcIiA6IFwiU3ltcGF0aHlcIixcbiAgXCJUcnVzdFwiIDogXCJUcnVzdFwiLFxuICBcIkNvbnNjaWVudGlvdXNuZXNzXCIgOiBcIkNvbnNjaWVudGlvdXNuZXNzXCIsXG4gIFwiQWNoaWV2ZW1lbnQgc3RyaXZpbmdcIiA6IFwiQWNoaWV2ZW1lbnQgc3RyaXZpbmdcIixcbiAgXCJDYXV0aW91c25lc3NcIiA6IFwiQ2F1dGlvdXNuZXNzXCIsXG4gIFwiRHV0aWZ1bG5lc3NcIiA6IFwiRHV0aWZ1bG5lc3NcIixcbiAgXCJPcmRlcmxpbmVzc1wiIDogXCJPcmRlcmxpbmVzc1wiLFxuICBcIlNlbGYtZGlzY2lwbGluZVwiIDogXCJTZWxmLWRpc2NpcGxpbmVcIixcbiAgXCJTZWxmLWVmZmljYWN5XCIgOiBcIlNlbGYtZWZmaWNhY3lcIixcbiAgXCJFeHRyYXZlcnNpb25cIiA6IFwiRXh0cmF2ZXJzaW9uXCIsXG4gIFwiQWN0aXZpdHkgbGV2ZWxcIiA6IFwiQWN0aXZpdHkgbGV2ZWxcIixcbiAgXCJBc3NlcnRpdmVuZXNzXCIgOiBcIkFzc2VydGl2ZW5lc3NcIixcbiAgXCJDaGVlcmZ1bG5lc3NcIiA6IFwiQ2hlZXJmdWxuZXNzXCIsXG4gIFwiRXhjaXRlbWVudC1zZWVraW5nXCIgOiBcIkV4Y2l0ZW1lbnQtc2Vla2luZ1wiLFxuICBcIkZyaWVuZGxpbmVzc1wiIDogXCJPdXRnb2luZ1wiLFxuICBcIkdyZWdhcmlvdXNuZXNzXCIgOiBcIkdyZWdhcmlvdXNuZXNzXCIsXG4gIFwiTmV1cm90aWNpc21cIiA6IFwiRW1vdGlvbmFsIHJhbmdlXCIsXG4gIFwiQW5nZXJcIiA6IFwiRmllcnlcIixcbiAgXCJBbnhpZXR5XCIgOiBcIlByb25lIHRvIHdvcnJ5XCIsXG4gIFwiRGVwcmVzc2lvblwiIDogXCJNZWxhbmNob2x5XCIsXG4gIFwiSW1tb2RlcmF0aW9uXCIgOiBcIkltbW9kZXJhdGlvblwiLFxuICBcIlNlbGYtY29uc2Npb3VzbmVzc1wiIDogXCJTZWxmLWNvbnNjaW91c25lc3NcIixcbiAgXCJWdWxuZXJhYmlsaXR5XCIgOiBcIlN1c2NlcHRpYmxlIHRvIHN0cmVzc1wiLFxuICBcIk9wZW5uZXNzXCIgOiBcIk9wZW5uZXNzXCIsXG4gIFwiQWR2ZW50dXJvdXNuZXNzXCIgOiBcIkFkdmVudHVyb3VzbmVzc1wiLFxuICBcIkFydGlzdGljIGludGVyZXN0c1wiIDogXCJBcnRpc3RpYyBpbnRlcmVzdHNcIixcbiAgXCJFbW90aW9uYWxpdHlcIiA6IFwiRW1vdGlvbmFsaXR5XCIsXG4gIFwiSW1hZ2luYXRpb25cIiA6IFwiSW1hZ2luYXRpb25cIixcbiAgXCJJbnRlbGxlY3RcIiA6IFwiSW50ZWxsZWN0XCIsXG4gIFwiTGliZXJhbGlzbVwiIDogXCJBdXRob3JpdHktY2hhbGxlbmdpbmdcIixcblxuICBcIkxpYmVydHlcIiA6IFwiTGliZXJ0eVwiLFxuICBcIklkZWFsXCIgOiBcIklkZWFsXCIsXG4gIFwiTG92ZVwiIDogXCJMb3ZlXCIsXG4gIFwiUHJhY3RpY2FsaXR5XCIgOiBcIlByYWN0aWNhbGl0eVwiLFxuICBcIlNlbGYtZXhwcmVzc2lvblwiIDogXCJTZWxmLWV4cHJlc3Npb25cIixcbiAgXCJTdGFiaWxpdHlcIiA6IFwiU3RhYmlsaXR5XCIsXG4gIFwiU3RydWN0dXJlXCIgOiBcIlN0cnVjdHVyZVwiLFxuICBcIkNoYWxsZW5nZVwiIDogXCJDaGFsbGVuZ2VcIixcbiAgXCJDbG9zZW5lc3NcIiA6IFwiQ2xvc2VuZXNzXCIsXG4gIFwiQ3VyaW9zaXR5XCIgOiBcIkN1cmlvc2l0eVwiLFxuICBcIkV4Y2l0ZW1lbnRcIiA6IFwiRXhjaXRlbWVudFwiLFxuICBcIkhhcm1vbnlcIiA6IFwiSGFybW9ueVwiLFxuXG4gIFwiQ29uc2VydmF0aW9uXCIgOiBcIkNvbnNlcnZhdGlvblwiLFxuICBcIkhlZG9uaXNtXCIgOiBcIkhlZG9uaXNtXCIsXG4gIFwiT3Blbm5lc3MgdG8gY2hhbmdlXCIgOiBcIk9wZW5uZXNzIHRvIGNoYW5nZVwiLFxuICBcIlNlbGYtZW5oYW5jZW1lbnRcIiA6IFwiU2VsZi1lbmhhbmNlbWVudFwiLFxuICBcIlNlbGYtdHJhbnNjZW5kZW5jZVwiIDogXCJTZWxmLXRyYW5zY2VuZGVuY2VcIlxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIkFncmVlYWJsZW5lc3NcIiA6IFwiQW1hYmlsaWRhZFwiLFxuICBcIkFsdHJ1aXNtXCIgOiBcIkFsdHJ1aXNtb1wiLFxuICBcIkNvb3BlcmF0aW9uXCIgOiBcIkNvb3BlcmFjaVxcdTAwZjNuXCIsXG4gIFwiTW9kZXN0eVwiIDogXCJNb2Rlc3RpYVwiLFxuICBcIk1vcmFsaXR5XCIgOiBcIkludHJhbnNpZ2VuY2lhXCIsXG4gIFwiU3ltcGF0aHlcIiA6IFwiQ29tcGFzaVxcdTAwZjNuXCIsXG4gIFwiVHJ1c3RcIiA6IFwiQ29uZmlhbnphXCIsXG4gIFwiQ29uc2NpZW50aW91c25lc3NcIiA6IFwiUmVzcG9uc2FiaWxpZGFkXCIsXG4gIFwiQWNoaWV2ZW1lbnQgc3RyaXZpbmdcIiA6IFwiTmVjZXNpZGFkIGRlIFxcdTAwZTl4aXRvXCIsXG4gIFwiQ2F1dGlvdXNuZXNzXCIgOiBcIkNhdXRlbGFcIixcbiAgXCJEdXRpZnVsbmVzc1wiIDogXCJPYmVkaWVuY2lhXCIsXG4gIFwiT3JkZXJsaW5lc3NcIiA6IFwiRGlzY2lwbGluYVwiLFxuICBcIlNlbGYtZGlzY2lwbGluZVwiIDogXCJBdXRvZGlzY2lwbGluYVwiLFxuICBcIlNlbGYtZWZmaWNhY3lcIiA6IFwiQXV0b2VmaWNhY2lhXCIsXG4gIFwiRXh0cmF2ZXJzaW9uXCIgOiBcIkV4dHJvdmVyc2lcXHUwMGYzblwiLFxuICBcIkFjdGl2aXR5IGxldmVsXCIgOiBcIk5pdmVsIGRlIGFjdGl2aWRhZFwiLFxuICBcIkFzc2VydGl2ZW5lc3NcIiA6IFwiU2VndXJpZGFkIGVuIHVubyBtaXNtb1wiLFxuICBcIkNoZWVyZnVsbmVzc1wiIDogXCJBbGVnclxcdTAwZWRhXCIsXG4gIFwiRXhjaXRlbWVudC1zZWVraW5nXCIgOiBcIkJcXHUwMGZhc3F1ZWRhIGRlIGVtb2Npb25lc1wiLFxuICBcIkZyaWVuZGxpbmVzc1wiIDogXCJTaW1wYXRcXHUwMGVkYVwiLFxuICBcIkdyZWdhcmlvdXNuZXNzXCIgOiBcIlNvY2lhYmlsaWRhZFwiLFxuICBcIk5ldXJvdGljaXNtXCIgOiBcIlJhbmdvIGVtb2Npb25hbFwiLFxuICBcIkFuZ2VyXCIgOiBcIlZlaGVtZW5jaWFcIixcbiAgXCJBbnhpZXR5XCIgOiBcIlRlbmRlbmNpYSBhIGxhIHByZW9jdXBhY2lcXHUwMGYzblwiLFxuICBcIkRlcHJlc3Npb25cIiA6IFwiTWVsYW5jb2xcXHUwMGVkYVwiLFxuICBcIkltbW9kZXJhdGlvblwiIDogXCJEZXNtZXN1cmFcIixcbiAgXCJTZWxmLWNvbnNjaW91c25lc3NcIiA6IFwiVGltaWRlelwiLFxuICBcIlZ1bG5lcmFiaWxpdHlcIiA6IFwiU3VzY2VwdGliaWxpZGFkIGEgbGEgdGVuc2lcXHUwMGYzblwiLFxuICBcIk9wZW5uZXNzXCIgOiBcIkFwZXJ0dXJhIGEgZXhwZXJpZW5jaWFzXCIsXG4gIFwiQWR2ZW50dXJvdXNuZXNzXCIgOiBcIkF1ZGFjaWFcIixcbiAgXCJBcnRpc3RpYyBpbnRlcmVzdHNcIiA6IFwiSW50ZXJlc2VzIGFydFxcdTAwZWRzdGljb3NcIixcbiAgXCJFbW90aW9uYWxpdHlcIiA6IFwiRW1vY2lvbmFsaWRhZFwiLFxuICBcIkltYWdpbmF0aW9uXCIgOiBcIkltYWdpbmFjaVxcdTAwZjNuXCIsXG4gIFwiSW50ZWxsZWN0XCIgOiBcIkludGVsZWN0b1wiLFxuICBcIkxpYmVyYWxpc21cIiA6IFwiRGVzYWZcXHUwMGVkbyBhIGxhIGF1dG9yaWRhZFwiLFxuXG4gIFwiTGliZXJ0eVwiIDogXCJMaWJlcnRhZFwiLFxuICBcIklkZWFsXCIgOiBcIklkZWFsXCIsXG4gIFwiTG92ZVwiIDogXCJBbW9yXCIsXG4gIFwiUHJhY3RpY2FsaXR5XCIgOiBcIlByYWN0aWNpZGFkXCIsXG4gIFwiU2VsZi1leHByZXNzaW9uXCIgOiBcIkF1dG9leHByZXNpXFx1MDBmM25cIixcbiAgXCJTdGFiaWxpdHlcIiA6IFwiRXN0YWJpbGlkYWRcIixcbiAgXCJTdHJ1Y3R1cmVcIiA6IFwiRXN0cnVjdHVyYVwiLFxuICBcIkNoYWxsZW5nZVwiIDogXCJEZXNhZlxcdTAwZWRvXCIsXG4gIFwiQ2xvc2VuZXNzXCIgOiBcIkZhbWlsaWFyaWRhZFwiLFxuICBcIkN1cmlvc2l0eVwiIDogXCJDdXJpb3NpZGFkXCIsXG4gIFwiRXhjaXRlbWVudFwiIDogXCJFbnR1c2lhc21vXCIsXG4gIFwiSGFybW9ueVwiIDogXCJBcm1vblxcdTAwZWRhXCIsXG5cbiAgXCJDb25zZXJ2YXRpb25cIiA6IFwiQ29uc2VydmFjaVxcdTAwZjNuXCIsXG4gIFwiSGVkb25pc21cIiA6IFwiSGVkb25pc21vXCIsXG4gIFwiT3Blbm5lc3MgdG8gY2hhbmdlXCIgOiBcIkFwZXJ0dXJhIGFsIGNhbWJpb1wiLFxuICBcIlNlbGYtZW5oYW5jZW1lbnRcIiA6IFwiU3VwZXJhY2lcXHUwMGYzbiBwZXJzb25hbFwiLFxuICBcIlNlbGYtdHJhbnNjZW5kZW5jZVwiIDogXCJBdXRvdHJhbnNjZW5kZW5jaWFcIlxufVxuIl19
