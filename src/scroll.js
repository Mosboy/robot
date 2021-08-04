import React from "react"
const Scroll=(props)=>{
return (
      <div style={{padding:'5px',overflowY:'scroll',border:'5px solid rgba(0,128,128,1)',height:'200px',margin:'10px',boxShadow:'-5px -3px 1px rgba(0,0,0,0.5)'}}>
       {props.children}
      </div>
	)
}
export default Scroll;