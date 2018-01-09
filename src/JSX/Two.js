import React, { Component } from 'react';

class Two extends Component{
    constructor(props) {
        super(props)
        
    }
 Fcolud(){
     return new Date().toLocaleTimeString();
 }


    render() {
  
        return (
            <div>
                {this.Fcolud()}
          
            </div>
        );
    }
    
}
export default Two