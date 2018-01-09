import React, { Component } from 'react';
import CounterTest from './CounterTest';
import Counter from './counter'
/**
 * 最外层的控件是
 */
class counterPanel extends Component{
    
    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.onGet=this.onGet.bind(this);
        this.initValue=[0,10,20];
        const initSum=this.initValue.reduce((a,b)=>a+b,0);


        this.state={
            id:this.props.id,
            sum:initSum,
            mes:'I am counterPanel\'n value '
        }
    }
    
    onCounterUpdate(newValue,previousValue){
        const valueChange=newValue-previousValue;
        this.setState({
            sum:this.state.sum+valueChange
            //sum:newValue
        })
    }

    onGet(value){
        this.setState({
            mes:value
        })
    }


    render() {
        return (
            <div>
                <CounterTest />
                <Counter onUpdate={this.onCounterUpdate} id={this.state.id} initValue={10} caption={123} onGet={this.onGet}/>
                <Counter onUpdate={this.onCounterUpdate} id={this.state.id} initValue={20} caption={123} onGet={this.onGet}/>
                <button onClick={()=>this.forceUpdate()}>Click me to repaint!</button>
                <button>test</button>
                <div>{this.state.sum}</div>
                <h3>{this.state.mes}</h3>
              
            </div>
        )
    }
    

}
export default counterPanel;