import React, { Component } from 'react';
import {render} from 'react-dom'
import PropTypes from 'prop-types';
/**
 * 单元控件
 */

const buttonStyle = {
    margin: '10px'
  };

class counter extends Component{
    
    constructor(props) {
        super(props);
     
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        
        this.state={
            count:props.initValue || 0
        }
    }
   
    updateValue(value){
        this.props
    }

    updateCount(isIncrement){
        const previousValue=this.state.count;
        const newValue=isIncrement?previousValue+1:previousValue-1;
        this.setState({
            count:newValue
        });
        this.props.onUpdate(newValue,previousValue);
        this.props.onGet('this is counter\'n value');
    }

    onClickIncrementButton(){
        // this.setState({
        //     count:this.state.count+1
        // });
    this.updateCount(true);
    }

    onClickDecrementButton(){
        // this.setState({
        //     count:this.state.count-1
        // })
        this.updateCount(false);
    }

    componentWillReceiveProps(nextProps){   // 父控件render后再刷新
        console.log('enter componentWillReceiveProps '+nextProps.initValue);
        // this.setState({
        //     count:0
        // });
    }
    shouldComponentUpdate(nextProps,nextState){
        // console.log('shouldComponentUpdate :'+nextProps.id);
        // return true;
        return (nextProps.caption!==this.props.caption)||(nextState.count!==this.state.count)
    }

    render() {
        const test=this.props.id;
        const {s_style}=this.props;
       // console.log(this.props);
        return (
            <div>
                <button id={this.state.count} style={s_style} onClick={this.onClickDecrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>-</button>
                <span> {s_style}count:{this.state.count}</span>
            </div>
        );
    }
    
}
counter.defaultProps={
    initValue:0,
    onUpdate:f=>f,
    onGet:f=>f
}
counter.propTypes={
    initValue:PropTypes.number,
   // initValue:PropTypes.string.isRequired
   onUpdate:PropTypes.func
   };
export default counter;