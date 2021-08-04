import React from "react"
import Card from "./card"
import img_url from "./image"
const Cardlist=({robots})=>{
	const cardcomponent=robots.map((user,i)=>{
		//we use map to return all the robots id,names and email
		//note2: the second argument in the map is the iteration counter starting from 0 
		return (
			<Card 
				key={robots[i].id} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
			img_url={img_url[i]/*getting all the images from img_url and displaying all of them */}
			  />
			)
	}
	  )
	return(
	   <div className="oga">
	       {cardcomponent}
	   </div>
		)
}
export default Cardlist