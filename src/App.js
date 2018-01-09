import React,{Component} from 'react';
import {render} from 'react-dom';


/**
 * state practice
 * 点击替换
 */
class App extends Component{ 
  constructor(props){ //在初始时将state.liked设置为false
    super(props);
    this.state={liked:false};
  }

  handleClick(e){ //点击事件设置state.liked为反
    this.setState({
      liked:!this.state.liked
    })
  }

  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';  //根据点击事件选择不同
    return (  //绑定事件
      <p onClick={this.handleClick.bind(this)}> 
        You {text} this.Click to toggle.
      </p>
    )
  }
}
 export default App