import React from 'react';
import Checkbox from './';

class App extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<Checkbox defaultChecked>
						Fat
					</Checkbox>
				</li>
				<li>
					<Checkbox caption="Responsive" />
				</li>
				<li>
					<Checkbox striked defaultChecked>
						Checkbox
					</Checkbox>
				</li>
			</ul>
		);
	}
}

React.render(
	<App />,
	document.body
);
