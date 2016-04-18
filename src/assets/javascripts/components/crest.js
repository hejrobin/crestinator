import DOM from 'react-dom';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import openType from 'opentype.js';

// Components
import Pattern from './pattern';
import Sigil from './sigil';

export default class Crest extends Component {

	displayName = 'crest';

	state = {
		font: null,
		textHeadPaths: [],
		textFootPaths: []
	};

	static propTypes = {
		fill: PropTypes.string,
		borderFill: PropTypes.string,
		pattern: PropTypes.oneOf(Pattern.availablePatterns),
		patternFill: PropTypes.string,
		sigilFill: PropTypes.string,
		sigilBorderFill: PropTypes.string
	};

	static defaultProps = {
		fill: '#fff',
		borderFill: '#000',
		pattern: 'blank',
		patternFill: '#ccc',
		sigilFill: '#000',
		sigilBorderFill: '#fff'
	};

	constructor(newProps) {
		super(newProps);
		this.componentClassNames = this.componentClassNames.bind(this);
		this.componentProperties = this.componentProperties.bind(this);
	}

	componentClassNames() {
		return classNames(this.props.classNames);
	}

	componentProperties() {
		return {
			id: 'crest__root',
			viewBox: '0 0 184.25 226.77',
			xlinkHref: 'http://www.w3.org/1999/xlink'
		}
	}

	componentDidMount() {}

	renderBackground() {
		return (
			<g id="crest__background">
				<path fill={this.props.fill} d="M138.3,18C108.4,18,92.24,6.75,92.24,6.75S76,18,46.12,18C18.58,18,0,0,0,0V117.45C0.84,194.8,92.13,226.77,92.13,226.77s92.13-32,92.13-109.32V0S165.83,18,138.3,18Z" />
			</g>
		);
	}

	renderBorder() {
		return (
			<g id="crest__border">
				<path fill={this.props.borderFill} d="M5.57,11.57C14.22,17.14,28.41,24,46.12,24,70.22,24,86,17,92.23,13.6,98.47,17,114.21,24,138.3,24c17.66,0,31.77-6.78,40.38-12.35V117.45a86.58,86.58,0,0,1-13.37,46.24c-7.23,11.65-17.36,22.54-30.13,32.37a183.29,183.29,0,0,1-43.05,24.36,182.07,182.07,0,0,1-42.51-24.18c-12.77-9.84-22.95-20.75-30.25-32.43a88.29,88.29,0,0,1-13.8-46.4V11.57M184.25,0s-18.42,18-46,18C108.4,18,92.24,6.75,92.24,6.75S76,18,46.12,18C18.58,18,0,0,0,0V117.45C0.84,194.8,92.13,226.77,92.13,226.77s92.13-32,92.13-109.32V0h0Z" />
			</g>
		);
	}

	render() {
		return (
			<svg {...this.componentProperties()} className={this.componentClassNames()}>
				{this.renderBackground()}
				<Pattern pattern={this.props.pattern} fill={this.props.patternFill} />
				<Sigil fill={this.props.sigilFill} borderFill={this.props.sigilBorderFill} />
				{this.renderBorder()}
			</svg>
		);
	}

}
