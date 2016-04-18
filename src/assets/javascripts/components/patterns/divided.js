import DOM from 'react-dom';
import React, {Component, PropTypes} from 'react';

export default class Divided extends Component {

	displayName = 'pattern__divided';

	static propTypes = {
		fill: PropTypes.string
	};

	static defaultProps = {
		fill: '#ccc'
	};

	constructor(newProps) {
		super(newProps);
		this.componentProperties = this.componentProperties.bind(this);
	}

	componentProperties() {
		return {
			id: this.displayName,
			fill: this.props.fill
		}
	}

	render() {
		return (
			<g {...this.componentProperties()}>
				<path d="M184.25,117.45V2.67h-3.13c-6.36,5-22,15.29-42.82,15.29C108.4,18,92.24,6.75,92.24,6.75h0v220C95.37,225.62,184.25,193.43,184.25,117.45Z" />
			</g>
		);
	}

}
