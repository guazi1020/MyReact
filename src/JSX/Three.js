import React, { Component } from 'react';
/**
 * serInterval()来定时改变state
 */
class Three extends Component{
    constructor(props) {
        super(props)
        this.state={
            time: new Date()
        }
    }

    changeTime(){
        this.setState({
            time:new Date()
        })
      //  console.log(new Date());
    }
    componentDidMount(){
        setInterval(()=>this.changeTime(),1000);
      
    }


  

    render() {
        return (
            <div>
                this is Three {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
    
}
export default Three