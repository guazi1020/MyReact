import React, { Component } from 'react';

class constrest extends Component{

    constructor(props) {
        super(props)
        this.state={
            liked:false
        }
    }

    handleClick(e){
        this.setState({
            liked:!this.state.liked
        })
    }
    Welcome(props){
        return <h1>hello,{props.name}</h1>
    }
    
    render() {
        
        const text = this.state.liked ? 'like' : 'haven\'t liked';  //根据点击事件选择不同


        return (
            <div onClick={this.handleClick.bind(this)}>qw
               {/* {text} */}
               <this.Welcome name="ccc" />
            </div>
        );
    }
    
}

  

export default constrest;