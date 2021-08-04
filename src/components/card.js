import React from "react";

class Card extends React.Component{
	render(){
		return(
			<div>
			<img className="emma" alt="emma" src={this.props.img_url}/>
			{/*<GET_ALL_IMAGE/>*/}
			<div>
			   <h2>{this.props.name}</h2>
			   <p>{this.props.email}</p>
			</div>
			</div>
		)
	}
}
export default Card;