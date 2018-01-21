'use strict';

const Thing = require('../thing');
const State = require('../common/state');
const CleaningState = require('./cleaning-state');

module.exports = Thing.mixin(Parent => class extends Parent.with(State, CleaningState) {

	static get capability() {
		return 'spot-cleaning';
	}

	static availableAPI(builder) {
		builder.action('spotClean')
			.description('Request that the thing performs spot cleaning')
			.done();
	}

	spotClean() {
		return Promise.resolve(this.activateSpotClean())
			.then(() => null);
	}

	activateSpotClean() {
		throw new Error('activateSpotClean not implemented');
	}

});