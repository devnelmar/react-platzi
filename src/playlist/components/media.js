import React from 'react';
import './media.css';

class Media extends React.Component {
	render() {
		const styles = {
			container: {
				color: '#44546b',
				width: 260,
				cursor: 'pointer',
				border: '1px solid red',
			}
		};
		return (
			<div className="Media">
				<div className='Media-cover'>
					<img src={this.props.image} alt="" width={260} height={160} className='Media-image'/>
				</div>
				<h3 className='Media-title'>{this.props.title}</h3>
				<p className='Media-author'>{this.props.author}</p>
			</div>
		)
	}
}



export default Media