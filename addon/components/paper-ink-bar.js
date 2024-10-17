/* eslint-disable ember/no-classic-components, ember/require-tagless-components, prettier/prettier */
import { computed } from '@ember/object';
import Component from '@ember/component';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  tagName: 'md-ink-bar',

  attributeBindings: ['style'],
  classNameBindings: ['movingRight:md-right:md-left'],

  style: computed('left', 'right', function() {
    return htmlSafe(`left: ${this.left}px; right: ${this.right}px;`);
  })
});
