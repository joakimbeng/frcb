import React from 'react';
import cn from 'classnames';
import cngen from 'cngen';
import {alternateClass} from './vars';
import {fatResponsiveCheckbox} from './style';

const className = cngen(fatResponsiveCheckbox);
let boxes = 0;

export default class FatResponsiveCheckbox extends React.Component {
	static propTypes = {
		striked: React.PropTypes.bool,
		id: React.PropTypes.string,
		caption: React.PropTypes.string,
		children: React.PropTypes.node
	};

	componentWillMount() {
		if (this.props.id) {
			this._id = this.props.id;
		} else {
			this._id = `fat-responsive-checkbox-${++boxes}`;
		}
	}

	render() {
		const {striked, caption, children, ...props} = this.props;
		return (
			<div>
				<input
					{...props}
					type="checkbox"
					id={this._id}
					className={cn(className, {[alternateClass]: striked})}
					/>
				<label htmlFor={this._id}>{children || caption}</label>
			</div>
		);
	}
}
