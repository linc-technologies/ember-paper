/* eslint-disable ember/no-classic-components, ember/no-mixins, ember/require-tagless-components */
/**
 * @module ember-paper
 */
import Component from '@ember/component';

import ColorMixin from 'ember-paper/mixins/color-mixin';

/**
 * @class PaperToolbar
 * @extends Ember.Component
 * @uses ColorMixin
 */
export default Component.extend(ColorMixin, {
  tagName: 'md-toolbar',
  classNames: ['md-default-theme'],
  tall: false,
  classNameBindings: ['tall:md-tall'],
});
