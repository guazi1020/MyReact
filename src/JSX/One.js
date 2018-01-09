import React, { Component } from 'react';
import { render } from "react-dom";

class One extends Component {

    constructor(props) {
        super(props);
        this.state = {    //定义state
            count: 0
        };
        this.user = { //定义普通变量
            firstName: 'Harper',
            lastName: 'Perez'
        };
       // title=response.potentiallyMaliciousInput;
    }

    onClickButton(e) {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        function forName(user) {
            if(user){            return user.firstName + ' ' + user.lastName;}
            return "hello,Stranger";
        };
        const Bt = <button onClick={this.onClickButton.bind(this)}>{this.state.count}</button>
    
        return (
            <div>
                {Bt}
                {forName(this.user)}
            </div>
        )
    }

}

export default One