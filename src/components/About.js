// import React from 'react'
// import ReactClass from './ReactClass'

// const About = () => {
//   return (
//     <div>About
//         <ReactClass lastName={"Prajapati"}/>
//     </div>
//   )
// }

// export default About

import React, {Component} from 'react';
import ReactClass from './ReactClass'

class About extends Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");
    
  }

  componentDidMount(){
  console.log("parent DidMount");
}

  render(){
    console.log("Parent render")
    return(
      <>
        <h1>About Class component</h1>
        <ReactClass lastName={"Prajapati"}/>
        <ReactClass lastName={"Not Prajapati"}/>
        
      </>
    )
  }
}

export default About;