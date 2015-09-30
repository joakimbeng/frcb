'use strict';
import {size, alternateClass} from './vars';

exports.fatResponsiveCheckbox = {
	'opacity': 0,
	'position': 'absolute',
	'display': 'inline-block',
	'verticalAlign': 'middle',
	'zIndex': 100,
	'& + label': {
		'paddingLeft': vmin(size * 1.5),
		'display': 'block',
		'position': 'relative',
		'height': vmin(size),
		'lineHeight': vmin(size),
		'fontSize': vmin(size / 2),
		'cursor': 'pointer',
		'overflow': 'hidden',
		'::before': {
			content: '""',
			display: 'inline-block',
			width: vmin(size),
			height: vmin(size),
			position: 'absolute',
			left: 0,
			top: '50%',
			marginTop: vmin(-size / 2),
			border: prop([
				vmin(0.75),
				'solid',
				'#666'
			]),
			borderRadius: vmin(1),
			boxShadow: prop([
				'inset',
				vmin(0.5),
				vmin(0.5),
				vmin(0.5),
				'0',
				'rgba(153, 153, 153, 0.75)'
			]),
			cursor: 'pointer'
		},
		'::after': {
			content: '"✔"',
			cursor: 'pointer',
			transition: 'color .5s, opacity .5s',
			textShadow: prop([
				vmin(0.3),
				vmin(0.3),
				vmin(0.3),
				'rgba(153, 153, 153, 0.75)'
			]),
			display: 'inline-block',
			textAlign: 'center',
			position: 'absolute',
			left: 0,
			top: 0,
			width: vmin(size),
			height: vmin(size),
			zIndex: 2,
			fontSize: vmin(size * 0.65),
			opacity: 0
		}
	},
	':checked + label': {
		'::after': {
			opacity: 1
		}
	},
	[`&.${alternateClass}`]: {
		'& + label': {
			'transition': 'color .5s, text-decoration .5s',
			'::after': {
				transition: 'opacity .5s'
			}
		},
		':checked + label': {
			'textDecoration': 'line-through',
			'color': '#999',
			'::before': {
				borderColor: '#999'
			}
		}
	},
	':focus + label': {
		outline: [
			'rgba(33, 33, 33, .2) solid 5px',
			'-moz-outline-color auto 5px',
			'-webkit-focus-ring-color auto 5px'
		]
	}
};

function vmin(val) {
	return `${val}vmin`;
}

function prop(val) {
	return val.join(' ');
}
