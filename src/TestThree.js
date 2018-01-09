import React, { Component } from 'react';
import {render} from 'react-dom';
class TestThree extends Component{

    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        console.log("a");
    }
    
    render() {
        return (
            <div>
                hello TestThree
            </div>
        )
    }
    
}

export default TestThree