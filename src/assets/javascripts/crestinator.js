// Libraries
import React from 'react';
import DOM from 'react-dom';
import collectAttributes from './shared/collect-attributes';

// Components
import Crest from './components/crest';

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
	let targetNode = document.querySelector('#crestinator');
	if(targetNode) {
		let componentProperties = collectAttributes(targetNode);
		DOM.render(<Crest {...componentProperties} />, targetNode);
	}
});
