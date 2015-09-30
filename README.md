# frcb

![frcb logo](https://cdn.rawgit.com/joakimbeng/frcb/v0.1.2/media/frcb.png)

[![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Fat Responsive Checkbox

## Installation

Install `frcb` using [npm](https://www.npmjs.com/):

```bash
npm install --save frcb
```

## Demo

See a [demo of the component here](https://joakimbeng.github.io/frcb).


## Usage

### Module usage

**In your React app:**

```javascript
import React from 'react';
import FatResponsiveCheckbox from 'frcb';

class App extends React.Component {
	render() {
		return <FatResponsiveCheckbox>Check me</FatResponsiveCheckbox>;
	}
}
```

**In your Unistyle code:**

```javascript
import fatResponsiveCheckbox from 'frcb/style';

export default [
	fatResponsiveCheckbox,
	// your other styles here...
];
```

## API

### `<FatResponsiveCheckbox {...props} />`

| Prop | Type | Description |
|------|------|-------------|
| striked | `Boolean` | Toggle the alternate style (strike through text when checked) |
| caption | `String` | Checkbox label text. Can also be specified as [`children`](https://facebook.github.io/react/docs/multiple-components.html#children) |
| ... | `Mixed` | All other props are passed on to the internal `<input>` see [Forms](https://facebook.github.io/react/docs/forms.html) for examples |


## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/frcb
[npm-image]: https://badge.fury.io/js/frcb.svg
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
