import React ,{Component} from 'react';

class ItemTodo extends Component{
    constructor(props) {
        super(props)
        this.handleRemove=this.handleRemove.bind(this)
        
    }
    handleRemove() {
        console.log(this)
        const {deleteInput,index} = this.props
        deleteInput(index)
    }
    render() {
        return (
        //    <h1 onClick={this.props.delete}> {this.props.content}</h1>
           <h1 onClick={this.handleRemove}> {this.props.content}</h1>
        )
    }
}

export default ItemTodo;