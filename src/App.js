import React,{Component} from "react";
import Cardlist from "./components/cardlist";
import SearchBox from "./components/SearchBox"
import  robots  from "./path/robots";
import Scroll from "./containers/scroll"
class App extends Component{
	constructor(){
		super()
	    this.state={
	    	robots,
	    	searchfield:""
	    }	
	    console.log("constructor")
	}
    onSearchChange=(e)=>{
    	this.setState({searchfield:e.target.value})//we are updating the searchfield object with value passed in our input tag which is available in our SearchBox component
    }
	render(){
        const filteredRobots=this.state.robots.filter(robot=>{
    		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())//getting the search images of the item that was inputed in the search bar
    	})
	    if(this.state.robots.length===0){
	    	//if there is no return robots,it should return the below html
	    	return <h1>Loading</h1>
	    }
	    else{
	    	console.log("render")
			return(
			    <main>
					<h1>RoboFriends</h1>
				{/*we are passing the function onSearchChange to the searchBox componenent */}
					<SearchBox  searchChange={this.onSearchChange}/>
					<Scroll>
				{/*the cardlist here is receiving the filtered Array robots that the name includes the item that was inputed in the search bar*/}
					<Cardlist robots={filteredRobots}/>
					</Scroll>
				</main>
				)
		   }
		}
}
export default App