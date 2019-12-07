import React from 'react';
export default class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {isOn:true}
        //cách 1 khi không dùng arow function nếu dùng arrow function thì thôi không dùng cái này
        this.buttonClick = this.buttonClick.bind(this)
    }
    buttonClick(){
        this.setState(prevState =>(
            {
                isOn: !prevState.isOn
            }
        ))
    }
    
    render(){
        return(
            <button className="ToggleButton" onClick={this.buttonClick}>
                This is my toggle
                 {this.state.isOn? 'ON': 'OFF'}
            </button>
        )
    }
}