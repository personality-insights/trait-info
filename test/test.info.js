/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
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

const assert = require('chai').assert;
const PersonalityTraitInfo  = require('../lib/index');

describe('info', () => {

  it('get English trait information (no locale)', () => {
    const traitInfo = new PersonalityTraitInfo();
    const trait = traitInfo.info('Agreeableness');
    assert.equal(trait.id, 'Agreeableness');
    assert.equal(trait.name, 'Agreeableness');
    assert.equal(trait.description, 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
    assert.equal(traitInfo.descriptions().length, 52);
    assert.equal(traitInfo.info('Agreeableness').id, 'Agreeableness');
    assert.equal(traitInfo.info('Agreeableness').name, 'Agreeableness');
    assert.equal(traitInfo.info('Agreeableness').description, 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
  });

  it('get English trait info: Openness (no locale)', () => {
    const traitInfo = new PersonalityTraitInfo();
    assert.equal(traitInfo.name('Openness'), 'Openness');
    assert.equal(traitInfo.names().length, 52);
    assert.equal(traitInfo.description('Openness'), 'Openness to experience. Higher: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.\nLower: Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.');
    assert.equal(traitInfo.descriptions().length, 52);
    assert.equal(traitInfo.info('Openness').id, 'Openness');
    assert.equal(traitInfo.info('Openness').name, 'Openness');
    assert.equal(traitInfo.info('Openness').description, 'Openness to experience. Higher: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.\nLower: Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.');
  });

  it('get English trait info: Gregariousness (version = \'v2\')', () => {
    const traitInfo = new PersonalityTraitInfo({ version : 'v2' });
    assert.equal(traitInfo.name('Gregariousness'), 'Gregariousness');
    assert.equal(traitInfo.names().length, 52);
    assert.equal(traitInfo.description('Gregariousness'), 'Fondness for the company of others; sociability.');
    assert.equal(traitInfo.descriptions().length, 52);
    assert.equal(traitInfo.info('Gregariousness').id, 'Gregariousness');
    assert.equal(traitInfo.info('Gregariousness').name, 'Gregariousness');
    assert.equal(traitInfo.info('Gregariousness').description, 'Fondness for the company of others; sociability.');
  });

  it('get English trait info: facet_liberalism (version = \'v3\')', () => {
    const traitInfo = new PersonalityTraitInfo({ version : 'v3' });
    assert.equal(traitInfo.name('facet_liberalism'), 'Authority-challenging');
    assert.equal(traitInfo.names().length, 52);
    assert.equal(traitInfo.description('facet_liberalism'), 'Openness to re-examine own values and traditions; readiness to challenge authority.');
    assert.equal(traitInfo.descriptions().length, 52);
    assert.equal(traitInfo.info('facet_liberalism').id, 'facet_liberalism');
    assert.equal(traitInfo.info('facet_liberalism').name, 'Authority-challenging');
    assert.equal(traitInfo.info('facet_liberalism').description, 'Openness to re-examine own values and traditions; readiness to challenge authority.');
  });

  it('get English trait info: Anger (locale = \'en\')', () => {
    const traitInfo = new PersonalityTraitInfo({ locale : 'en' });
    assert.equal(traitInfo.name('Anger'), 'Fiery');
    assert.equal(traitInfo.names().length, 52);
    assert.equal(traitInfo.description('Anger'), 'Tendency to experience–but not necessarily express–anger or frustration.');
    assert.equal(traitInfo.descriptions().length, 52);
    assert.equal(traitInfo.info('Anger').id, 'Anger');
    assert.equal(traitInfo.info('Anger').name, 'Fiery');
    assert.equal(traitInfo.info('Anger').description, 'Tendency to experience–but not necessarily express–anger or frustration.');
  });

  it('get Spanish trait info: Agreeableness (locale = \'es\')', () => {
    const traitInfo = new PersonalityTraitInfo({ locale : 'es' });
    assert.equal(traitInfo.name('Agreeableness'), 'Amabilidad');
    assert.equal(traitInfo.names().length, 52);
    assert.equal(traitInfo.description('Agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
    assert.equal(traitInfo.descriptions().length, 52);
    assert.equal(traitInfo.info('Agreeableness').id, 'Agreeableness');
    assert.equal(traitInfo.info('Agreeableness').name, 'Amabilidad');
    assert.equal(traitInfo.info('Agreeableness').description, 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
  });

  it('get English trait info: facet_liberalism (locale = \'en\', version = \'v3\')', () => {
    const traitInfo = new PersonalityTraitInfo({ locale : 'en', version : 'v3' });
    assert.equal(traitInfo.name('facet_liberalism'), 'Authority-challenging');
    assert.equal(traitInfo.names().length, 52);
    assert.equal(traitInfo.description('facet_liberalism'), 'Openness to re-examine own values and traditions; readiness to challenge authority.');
    assert.equal(traitInfo.descriptions().length, 52);
    assert.equal(traitInfo.info('facet_liberalism').id, 'facet_liberalism');
    assert.equal(traitInfo.info('facet_liberalism').name, 'Authority-challenging');
    assert.equal(traitInfo.info('facet_liberalism').description, 'Openness to re-examine own values and traditions; readiness to challenge authority.');
  });

  it('get Spanish trait info: facet_trust (locale = \'es\', version = \'v3\')', () => {
    const traitInfo = new PersonalityTraitInfo({ locale : 'es', version : 'v3' });
    assert.equal(traitInfo.name('facet_trust'), 'Confianza');
    assert.equal(traitInfo.names().length, 52);
    assert.equal(traitInfo.description('facet_trust'), 'Nivel de creencia en la sinceridad y buenas intenciones de los demás.');
    assert.equal(traitInfo.descriptions().length, 52);
    assert.equal(traitInfo.info('facet_trust').id, 'facet_trust');
    assert.equal(traitInfo.info('facet_trust').name, 'Confianza');
    assert.equal(traitInfo.info('facet_trust').description, 'Nivel de creencia en la sinceridad y buenas intenciones de los demás.');
  });

  it('get English trait info: Liberalism (locale : \'en\', version = \'v2\')', () => {
    const traitInfo = new PersonalityTraitInfo({ locale : 'en', version : 'v2' });
    assert.equal(traitInfo.name('Liberalism'), 'Authority-challenging');
    assert.equal(traitInfo.names().length, 52);
    assert.equal(traitInfo.description('Liberalism'), 'Openness to re-examine own values and traditions; readiness to challenge authority.');
    assert.equal(traitInfo.descriptions().length, 52);
    assert.equal(traitInfo.info('Liberalism').id, 'Liberalism');
    assert.equal(traitInfo.info('Liberalism').name, 'Authority-challenging');
    assert.equal(traitInfo.info('Liberalism').description, 'Openness to re-examine own values and traditions; readiness to challenge authority.');
  });

  it('get Spanish trait info: Trust (locale = \'es\', version = \'v2\')', () => {
    const traitInfo = new PersonalityTraitInfo({ locale : 'es', version : 'v2' });
    assert.equal(traitInfo.name('Trust'), 'Confianza');
    assert.equal(traitInfo.names().length, 52);
    assert.equal(traitInfo.description('Trust'), 'Nivel de creencia en la sinceridad y buenas intenciones de los demás.');
    assert.equal(traitInfo.descriptions().length, 52);
    assert.equal(traitInfo.info('Trust').id, 'Trust');
    assert.equal(traitInfo.info('Trust').name, 'Confianza');
    assert.equal(traitInfo.info('Trust').description, 'Nivel de creencia en la sinceridad y buenas intenciones de los demás.');
  });





});
