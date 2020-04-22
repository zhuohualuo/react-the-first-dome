import React,{Component} from 'react'
 
class Counter extends Component{
    render() {
        return(
        <span>{this.props.count}</span>
        )
    }
}
export default Counter