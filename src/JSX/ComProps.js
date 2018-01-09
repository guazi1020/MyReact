import React, { Component } from 'react';

class ComProps extends Component{
    constructor(props) {
        super(props)
        
    }

     Welcome(props){
        return <h1>hello,{props.name}</h1>
    } 
    render() {
        const wec=<this.Welcome name='dd'/>;
        return (     
            <div>
               {wec}
            </div>
        )
    }
         
}
export default ComProps