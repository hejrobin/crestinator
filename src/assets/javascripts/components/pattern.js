import DOM from 'react-dom';
import React, {Component, PropTypes} from 'react';

import PatternDivided from './patterns/divided';
import PatternLeopard from './patterns/leopard';

const availablePatterns = [
	'blank', 'divided', 'leopard'
];

export default class Pattern extends Component {

	displayName = 'crest__pattern';

	static propTypes = {
		fill: PropTypes.string,
		pattern: PropTypes.oneOf(availablePatterns),
	};

	static defaultProps = {
		fill: '#ccc',
		pattern: 'blank'
	};

	static availablePatterns = availablePatterns;

	constructor(newProps) {
		super(newProps);
		this.componentProperties = this.componentProperties.bind(this);
	}

	componentProperties() {
		return {
			id: 'crest__patterns',
			"data-selected-pattern": this.props.pattern
		}
	}

	renderPattern() {
		switch(this.props.pattern) {
			case 'divided' :
				return (<PatternDivided fill={this.props.fill} />);
				break;
			case 'leopard' :
				return (<PatternLeopard fill={this.props.fill} />);
			case 'zebra' :
				return (<PatternZebra fill={this.props.fill} />);
			break;
				default :
				return null;
			break;
		}
	}

	render() {
		return (
			<g {...this.componentProperties()}>
				{this.renderPattern()}
			</g>
		);
	}

}
