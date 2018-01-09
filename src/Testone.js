import React, { Component } from 'react';
import { render } from 'react-dom';

class Testone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            liked:true,
            text:'frist'
        };
        // propesType:{
        //     title: React.PropTypes.String.isRequired
        // };  
    }
    componentDidMount() {    //定时任务 组件加载完毕后立即执行
        this.timeID = setInterval(() => this.tick(), 1000);
       // this.tick()

    }

    componentWillUnmount() { //控件销毁时触发
        clearInterval(this.timerID);
       
    }

    componentWillUpdate(){  // 当component change时触发
        console.log("this is componentWillUpdate");
        
    }
    componentDidUpdate(){
        console.log("this is componentDidUpdate");
    }
    shouldComponentUpdate(){
        console.log("this is shouldComponentUpdate"+this.state.time.toLocaleTimeString());
        return this.state.liked;
        //return true
    
    }
    tick() {
        this.setState({
            time: new Date()
        });
    }
    handleClick(e){ //点击事件设置state.liked为反
        this.setState({
          liked:!this.state.liked
        });
       // alert("this is button\'t onClick"+this.state.liked);
      }
    inputChange(e){
        this.setState({
            text:e.target.value
        });
       console.log(e.target.value);
    }

   
  
       
    render() {
        const text = this.state.liked ? 'like' : 'haven\'t liked';  //根据点击事件选择不同
        const cbutton=<button onClick={this.handleClick.bind(this)}>this is button</button> //构建控件
        const cinput =<input type="text" onChange={this.inputChange.bind(this)}></input>
        
        return (
            <div>
                {/* <h1>{this.props.title}</h1> */}
               {cinput}
               {cbutton}
                <h1>Hello, world!</h1>
                <h2>It is {this.state.time.toLocaleTimeString()}.....</h2>
            </div>
        )

    }
}
export default Testone