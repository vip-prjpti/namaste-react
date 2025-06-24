import React from 'react';

class ReactClass extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props.lastName)
        this.state = { count: 0 };
        console.log("Child Constructor");
        

    }

   
    componentDidMount(){
        console.log("Child DidMount");
        
      }

    render() {
        const { lastName } = this.props;
        const {count} = this.state;

        return (
            <div><h2>
                Vipul {lastName}
            </h2>
                <h2>Count: {count}</h2>
                <button onClick={() => {
                    // this.setState is a function which will take an object and we will update our state inside this.
                    // NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({count: this.state.count+1});
                }}>Button</button>
                {console.log("Child render")}
            </div>
        )
    }
}
export default ReactClass;